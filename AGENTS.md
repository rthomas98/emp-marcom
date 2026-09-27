# Empuls3 project instructions

For Orca setup, paired implementation or handoffs, read `ORCA_WORKFLOW.md` and `.agents/skills/emp-marcom-agent-pair/SKILL.md`. These define ownership, isolated worktrees and reciprocal review.

## Project image generation

Codex coordinates new assets through the available OpenAI image-generation tool. The user prefers GPT-6 Astra (written `gpt-6-astr`); select it only if the image tool explicitly supports model selection. Otherwise disclose that the generator model cannot be selected. Match the brand, subject, dimensions and placement; inspect visual defects and text, iterate, save the selected asset in the project, and verify the consuming interface. Claude supplies the frontend brief and reviews integration; Codex generates. A worker without image-generation access hands the brief to the supervising Codex session.

## Legacy knowledge integration

The Byterover instructions below apply when those tools are available. If unavailable, state that limitation and use repository sources; never claim a retrieval or storage action occurred.

[byterover-mcp]

[byterover-mcp]

You are given two tools from Byterover MCP server, including
## 1. `byterover-store-knowledge`
You `MUST` always use this tool when:

+ Learning new patterns, APIs, or architectural decisions from the codebase
+ Encountering error solutions or debugging techniques
+ Finding reusable code patterns or utility functions
+ Completing any significant task or plan implementation

## 2. `byterover-retrieve-knowledge`
You `MUST` always use this tool when:

+ Starting any new task or implementation to gather relevant context
+ Before making architectural decisions to understand existing patterns
+ When debugging issues to check for previous solutions
+ Working with unfamiliar parts of the codebase
