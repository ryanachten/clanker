#!/usr/bin/env node

const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");

const cmd = process.argv[2];

const REPO_URL = "https://github.com/ryanachten/clanker.git";
const TARGET_DIR = ".agents";

function run(command) {
    execSync(command, { stdio: "inherit" });
}

function exists(filepath) {
    return fs.existsSync(filepath);
}

function isInstalled() {
    return exists(path.join(TARGET_DIR, "skills", "clanker"));
}

switch (cmd) {
    case "--install":
        if (isInstalled()) {
            console.log("Agents already installed.");
            process.exit(0);
        }

        console.log("Installing agents...");
        run(`git clone --filter=blob:none --sparse ${REPO_URL} ${TARGET_DIR}`);
        run(`git -C ${TARGET_DIR} sparse-checkout set --no-cone skills/clanker`);
        break;

    case "--update":
        if (!isInstalled()) {
            console.log("Agents not installed.");
            process.exit(1);
        }

        console.log("Updating agents...");
        run(`git -C ${TARGET_DIR} pull origin main`);
        break;

    case "--uninstall":
        if (!isInstalled()) {
            console.log("Agents not installed.");
            process.exit(0);
        }

        console.log("Removing agents...");
        run(`rm -rf ${TARGET_DIR}`);
        break;

    default:
        console.log(`
Usage:
  clanker --install
  clanker --update
  clanker --uninstall
`);
}