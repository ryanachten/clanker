# clanker

Personal shared agent and skill configurations.

## Commands

### Install
```bash
npx github:ryanachten/clanker --install
```
Adds shared skills to `.agents/skills/shared/`.

### Update
```bash
npx github:ryanachten/clanker --update
```
Updates shared agents to the latest version.

### Uninstall
```bash
npx github:ryanachten/clanker --uninstall
```
Removes shared agents from your project.

## Usage

After installing, shared skills are available in `.agents/skills/shared/`. Reference them in your workspace configuration or `.instructions.md`:

```
.agents/skills/shared/[skill-name]/SKILL.md
```

### Gemini CLI
- You'll need to link these via `/skills link ./.agents/skills`

## Requirements

- Git (for submodule operations)
- npm/Node.js (to run via npx)
- Git repository (your project must be initialized with git)

## Notes

### Setup

Add `.agents/skills/shared` to your project's `.gitignore` to keep shared skills local:

```
.agents/
```

Each developer independently manages their own agent installation. This provides:
- Lightweight git footprint
- Flexibility for developers to update agents independently
- No merge conflicts from submodule version tracking