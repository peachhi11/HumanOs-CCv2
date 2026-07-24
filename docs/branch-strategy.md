# HumanOS v2 Branch Strategy

This document defines how HumanOS material should move through the repository now that `main` is the canonical browsing surface.

## Default Branch

Use `main` for:

- repo overview
- navigation
- current canonical framework docs
- branch and structure guidance
- released documentation state

Keep `main` readable. It should not require a contributor to understand every historical branch before finding the current docs.

## Feature Branches

Use short-lived focused branches for new work.

Preferred patterns:

- `docs/<surface>`
- `architecture/<surface>`
- `evaluation/<surface>`
- `agent/<task>`

The branch name should describe enduring ownership or the focused cleanup task, not a temporary note title.

## Folder Ownership

Use these folder families unless there is a strong reason not to:

- `architecture/templates` for reusable authoring templates
- `architecture/contracts` for runtime, narrative, and output contracts
- `docs/architecture` for framework overview and cross-surface indexes
- `docs/agents` for agent-facing workflow routing and packaging boundaries
- `docs/authoring` for contributor placement workflow
- `docs/memory` for lorebook and retrieval boundaries
- `docs/world` for setting and world-truth boundaries
- `docs/relationship` for relationship memory, commit flow, and relationship interpretation
- `docs/evaluation` for scorecards, reviewer contracts, and reviewer modes
- `docs/integration` for host-app boundary maps

## When To Create A New Branch

Create a new focused branch when at least one of these is true:

1. the document defines a stable HumanOS term or contract
2. the surface is expected to be reused by more than one host application
3. the surface is no longer well-contained as a subsection inside another document
4. the concept needs review before it should land on `main`

Do not create a branch just because a note got long.

## When To Keep Content In Marinara Or Another Host Repo

Keep content in the host repo when it is primarily about:

- UI clicks and panels
- route shapes owned by that app
- storage adapters owned by that app
- one-app debugging steps
- one-app migration notes
- in-app assistant behavior that depends on product-specific tools or policies

Framework-first rule:

- HumanOS-CCv2 owns canonical concepts, contracts, templates, and boundary rules.
- Host repos own implementations, screens, commands, migrations, and product behavior.

## Practical Rule Of Thumb

If the question is "what does HumanOS mean by this?", it belongs here.

If the question is "how does Marinara implement this right now?", it belongs in Marinara.
