#!/usr/bin/env node

/**
 * Payment Playbook — CLI Installer
 * Usage:
 *   npx payment-playbook                        → interactive install (all skills)
 *   npx payment-playbook --skill model-picker   → install a single skill
 *   npx payment-playbook --list                 → list available skills
 *   npx payment-playbook --project              → install into current project (.claude/skills/)
 *   npx payment-playbook --global               → install globally (~/.claude/skills/)
 */

const fs = require('fs');
const path = require('path');
const os = require('os');
const https = require('https');
const { execSync } = require('child_process');
const readline = require('readline');

// ─── Config ──────────────────────────────────────────────────────────────────

const REPO_OWNER = 'donghuc';
const REPO_NAME = 'payment-playbook';
const BRANCH = 'main';
const RAW_BASE = `https://raw.githubusercontent.com/${REPO_OWNER}/${REPO_NAME}/${BRANCH}`;
const API_BASE = `https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}`;

const SKILLS = {
  'model-picker':      'Choose the right B2C revenue model for your product and market',
  'price-builder':     'Design tier structure, localised prices, and anchoring strategy',
  'checkout-builder':  'Build compliant, conversion-optimised checkout flows',
  'churn-fixer':       'Diagnose and fix subscription churn — voluntary and involuntary',
  'promo-planner':     'Match discount mechanics to business objectives with LTV and compliance checks',
};

// ─── Helpers ─────────────────────────────────────────────────────────────────

function log(msg)  { process.stdout.write(`\n${msg}\n`); }
function ok(msg)   { process.stdout.write(`  ✓ ${msg}\n`); }
function info(msg) { process.stdout.write(`  · ${msg}\n`); }
function warn(msg) { process.stdout.write(`  ⚠ ${msg}\n`); }
function err(msg)  { process.stderr.write(`  ✗ ${msg}\n`); }

function fetchText(url) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'payment-playbook-installer' } }, (res) => {
      if (res.statusCode === 404) return reject(new Error(`Not found: ${url}`));
      if (res.statusCode !== 200) return reject(new Error(`HTTP ${res.statusCode}: ${url}`));
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(data));
    }).on('error', reject);
  });
}

function fetchJson(url) {
  return fetchText(url).then(JSON.parse);
}

async function listRemoteFiles(dirPath) {
  const url = `${API_BASE}/contents/${dirPath}?ref=${BRANCH}`;
  const items = await fetchJson(url);
  return items;
}

async function downloadFile(remotePath, localPath) {
  const url = `${RAW_BASE}/${remotePath}`;
  const content = await fetchText(url);
  fs.mkdirSync(path.dirname(localPath), { recursive: true });
  fs.writeFileSync(localPath, content, 'utf8');
}

async function downloadDir(remotePath, localPath) {
  const items = await listRemoteFiles(remotePath);
  for (const item of items) {
    const itemLocal = path.join(localPath, item.name);
    if (item.type === 'dir') {
      await downloadDir(item.path, itemLocal);
    } else {
      await downloadFile(item.path, itemLocal);
    }
  }
}

function patchSkillPaths(skillMdPath, kbAbsPath) {
  // Rewrite ../../knowledge-base/ references to the actual installed KB path
  let content = fs.readFileSync(skillMdPath, 'utf8');
  const normalized = kbAbsPath.replace(/\\/g, '/');
  content = content.replace(/\.\.\/\.\.\/knowledge-base\//g, `${normalized}/`);
  fs.writeFileSync(skillMdPath, content, 'utf8');
}

function prompt(question) {
  const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
  return new Promise(resolve => rl.question(question, ans => { rl.close(); resolve(ans.trim()); }));
}

// ─── Install logic ────────────────────────────────────────────────────────────

async function install({ skills, installDir, kbDir }) {
  log('Payment Playbook Installer');
  log('─────────────────────────────────────────');

  // 1. Download knowledge-base (shared by all skills)
  info(`Downloading knowledge base → ${kbDir}`);
  await downloadDir('knowledge-base', kbDir);
  ok(`Knowledge base installed`);

  // 2. Download GUARDRAILS.md alongside the KB
  const guardrailsPath = path.join(kbDir, '..', 'GUARDRAILS.md');
  await downloadFile('GUARDRAILS.md', guardrailsPath);
  ok(`GUARDRAILS.md installed`);

  // 3. Download and patch each skill
  for (const skillName of skills) {
    const skillDir = path.join(installDir, skillName);
    info(`Installing skill: ${skillName}`);

    fs.mkdirSync(skillDir, { recursive: true });

    // Download SKILL.md
    await downloadFile(`skills/${skillName}/SKILL.md`, path.join(skillDir, 'SKILL.md'));

    // Patch KB paths to absolute
    patchSkillPaths(path.join(skillDir, 'SKILL.md'), kbDir);

    ok(`${skillName} installed → ${skillDir}`);
  }

  log('─────────────────────────────────────────');
  log('Installation complete.');
  log('');
  log('Skills installed:');
  for (const s of skills) {
    info(`${s}  —  ${SKILLS[s]}`);
  }
  log('');
  log('Restart Claude for skills to become available.');
}

// ─── Entry point ──────────────────────────────────────────────────────────────

async function main() {
  const args = process.argv.slice(2);

  // --list
  if (args.includes('--list')) {
    log('Available Payment Playbook skills:');
    for (const [name, desc] of Object.entries(SKILLS)) {
      log(`  ${name.padEnd(20)} ${desc}`);
    }
    process.exit(0);
  }

  // Determine install scope
  const isProject = args.includes('--project');
  const isGlobal  = args.includes('--global');

  let installDir, kbDir;

  if (isProject) {
    installDir = path.join(process.cwd(), '.claude', 'skills');
    kbDir      = path.join(process.cwd(), '.claude', 'payment-playbook', 'knowledge-base');
  } else if (isGlobal) {
    installDir = path.join(os.homedir(), '.claude', 'skills');
    kbDir      = path.join(os.homedir(), '.claude', 'payment-playbook', 'knowledge-base');
  } else {
    // Interactive: ask
    log('Payment Playbook — Where to install?');
    log('  1. Global  (~/.claude/skills/)          — available in all projects');
    log('  2. Project (./.claude/skills/)          — available in this project only');
    const choice = await prompt('\nEnter 1 or 2 [default: 1]: ');
    if (choice === '2') {
      installDir = path.join(process.cwd(), '.claude', 'skills');
      kbDir      = path.join(process.cwd(), '.claude', 'payment-playbook', 'knowledge-base');
    } else {
      installDir = path.join(os.homedir(), '.claude', 'skills');
      kbDir      = path.join(os.homedir(), '.claude', 'payment-playbook', 'knowledge-base');
    }
  }

  // Determine which skills to install
  let selectedSkills;
  const skillFlag = args.indexOf('--skill');

  if (skillFlag !== -1) {
    const skillName = args[skillFlag + 1];
    if (!skillName || !SKILLS[skillName]) {
      err(`Unknown skill: "${skillName || ''}". Run with --list to see available skills.`);
      process.exit(1);
    }
    selectedSkills = [skillName];
  } else if (!isProject && !isGlobal) {
    // Interactive: ask which skills
    log('\nWhich skills to install?');
    log('  all  — install all 5 skills');
    for (const [name, desc] of Object.entries(SKILLS)) {
      log(`  ${name.padEnd(20)} ${desc}`);
    }
    const input = await prompt('\nEnter skill names (space-separated) or "all" [default: all]: ');
    if (!input || input.toLowerCase() === 'all') {
      selectedSkills = Object.keys(SKILLS);
    } else {
      selectedSkills = input.split(/\s+/).filter(s => {
        if (!SKILLS[s]) { warn(`Skipping unknown skill: ${s}`); return false; }
        return true;
      });
      if (selectedSkills.length === 0) {
        err('No valid skills selected. Run with --list to see available skills.');
        process.exit(1);
      }
    }
  } else {
    selectedSkills = Object.keys(SKILLS);
  }

  await install({ skills: selectedSkills, installDir, kbDir });
}

main().catch(e => {
  err(`Installation failed: ${e.message}`);
  process.exit(1);
});
