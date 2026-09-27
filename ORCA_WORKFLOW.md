# Empuls3 Orca workflow

## Worktree preparation

The primary checkout is `/Users/robthomas/Development/emp-marcom`. Orca uses `origin/main` for independent worktrees. Continue feature work from its explicit reviewed base. Keep shared paths empty so environment files, dependencies, caches and databases remain checkout-owned.

Configure this local setup command, run by default, and wait for setup before agent startup:

```sh
python3 "$ORCA_ROOT_PATH/.agents/skills/emp-marcom-agent-pair/scripts/orca_setup.py"
```

The hook overlays six collaboration files from the primary into a separate linked worktree. It accepts identical reruns and refuses staged changes, conflicting edits, deleted tracked files, symlinks and hardlinks. It installs no dependencies, copies no secrets and starts no agents or application services. Archive script stays empty because this hook owns no running services.

The primary collaboration files remain the source for new worktrees until committed. After changing those files, create a fresh worker or reconcile worker edits explicitly; do not force an overlay over another agent's changes.

## Paired work

Use `.agents/skills/emp-marcom-agent-pair/SKILL.md` for ownership, handoffs and reciprocal review. Codex coordinates backend and final integration; Claude owns the frontend. Start from a bounded user task and separate Orca worktrees. Choose Manual agent permissions and verify effective model and effort in the running session. Preferred defaults follow the other projects: Codex GPT-6 Astra, medium effort; Claude Opus 5.5, medium effort. Verify availability before launch; do not silently substitute or claim a model was used based on a document alone.

Load the installed `orca-cli` skill for current commands. For supervised workers, also load `orchestration`; discover exact repository IDs and terminal handles. For a transfer of ownership, use the CLI's full-handoff workflow. A setup-only request prepares the workflow and does not dispatch product work.

## Local application validation

Read `composer.json`, `package.json`, `phpunit.xml`, `API.md` and the changed request path before selecting checks. Install locked dependencies separately with `composer install` and `npm ci` when runtime work is authorized. Use a checkout-specific local environment, local database, storage and unoccupied loopback ports. Inspect Composer scripts before execution. Never copy production configuration into a worker or run migrations/seeders until the target database is verified as local and disposable.

Typical checks after runtime preparation: `composer test`, `npm run types`, `npm run build`, and `npx eslint .` for a non-mutating lint pass. `npm run lint` modifies files. Inspect the test database settings before tests; run browser acceptance for changed UI journeys, including error/empty states and mobile widths. Report missing prerequisites and pre-existing failures separately. Build success alone is not browser or production acceptance.
