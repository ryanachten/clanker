# agentz

Personal shared agent and skill configurations.

## Commands

### Install
```bash
npx github:ryanachten/agentz --install
```
Adds shared agents to `.agents/shared/` as a git submodule.

### Update
```bash
npx github:ryanachten/agentz --update
```
Updates shared agents to the latest version.

### Uninstall
```bash
npx github:ryanachten/agentz --uninstall
```
Removes shared agents from your project.

## Usage

After installing, shared skills are available in `.agents/shared/`. Reference them in your workspace configuration or `.instructions.md`:

```
.agents/shared/skills/[skill-name]/SKILL.md
```

## Requirements

- Git (for submodule operations)
- npm/Node.js (to run via npx)
- Git repository (your project must be initialized with git)

## Notes

### Setup

Add `.agents/` to your project's `.gitignore` to keep shared agents local:

```
.agents/
```

Each developer independently manages their own agent installation. This provides:
- Lightweight git footprint
- Flexibility for developers to update agents independently
- No merge conflicts from submodule version tracking
