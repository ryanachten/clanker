#!/usr/bin/env node

const { execSync } = require("child_process");
const fs = require("fs");

const cmd = process.argv[2];

const REPO_URL = "https://github.com/ryanachten/agentz.git";
const TARGET_DIR = ".agents/shared";

function run(command) {
    execSync(command, { stdio: "inherit" });
}

function exists(path) {
    return fs.existsSync(path);
}

switch (cmd) {
    case "--install":
        if (exists(TARGET_DIR)) {
            console.log("Agents already installed.");
            process.exit(0);
        }

        console.log("Installing agents...");
        run(`git clone ${REPO_URL} ${TARGET_DIR}`);
        break;

    case "--update":
        if (!exists(TARGET_DIR)) {
            console.log("Agents not installed.");
            process.exit(1);
        }

        console.log("Updating agents...");
        run(`git -C ${TARGET_DIR} pull origin main`);
        break;

    case "--uninstall":
        if (!exists(TARGET_DIR)) {
            console.log("Agents not installed.");
            process.exit(0);
        }

        console.log("Removing agents...");
        run(`rm -rf ${TARGET_DIR}`);
        break;

    default:
        console.log(`
Usage:
  agentz --install
  agentz --update
  agentz --uninstall
`);
}