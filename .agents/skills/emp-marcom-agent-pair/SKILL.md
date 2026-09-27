---
name: emp-marcom-agent-pair
description: Coordinate Codex backend and Claude frontend work in Empuls3 Orca worktrees, including shared Inertia contracts, reciprocal review and integration handoffs.
---

# Empuls3 agent pair

Read `ORCA_WORKFLOW.md` for setup and runtime boundaries. Work on the user's current task; preparation alone does not authorize product changes or worker dispatch.

## Ownership

- Codex: Laravel controllers, routes, validation, authorization, models, migrations, Filament admin, storage/integrations, PHP tests and final integration.
- Claude: React/Inertia pages and components under `resources/js`, CSS, visual design, responsive behavior, accessibility and frontend checks. Read `.claude/agents/emp-marcom-frontend.md`.
- Shared contracts: Inertia props, Ziggy routes, shared TypeScript types, Blade entry templates and build configuration. Agree field names, nullability, authorization and error states before dependent edits; assign one editor per shared file.

Keep each implementation worker in a separate Orca worktree. Give it the exact task, baseline, owned paths, contract, acceptance checks and exclusions. Use the installed orchestration skill when supervising workers; preserve the user's authorization boundaries. Avoid simultaneous edits to the same file.

## Handoff and review

A handoff includes checkout/branch, baseline and final revision (or diff digest for uncommitted work), changed paths, contract changes, exact checks/results and blockers. Codex reviews Claude's final frontend diff; Claude reviews Codex's final backend contract and user-visible behavior. Review the same final revision, fix actionable findings, then repeat only affected checks. Codex reconciles integration and reports local tests, browser acceptance and hosted deployment separately.

Preserve authentic client copy, logos, case-study metadata and contact details. Do not invent outcomes or replace production assets with synthetic content. For new images, follow `AGENTS.md`.

Commits, pushes, deployment, production migrations and third-party mutations require user authorization. Keep secrets out of handoffs and repository files.
