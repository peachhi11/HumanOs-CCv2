# HumanOS v2 Branch Map

This document explains what each branch in the HumanOS-CCv2 repository is meant to own.

## Ownership model

The repo is intentionally split by responsibility.

That keeps framework docs clean and makes it easier to move a concept without dragging an entire app implementation along with it.

## Current branches

### `HumanOS-main`

Purpose:

- repo landing branch
- overview and navigation
- high-level explanation of what HumanOS is

This branch should stay lightweight. It is the place a contributor lands first.

### `docs/architecture`

Purpose:

- architecture overview
- layer separation
- framework-level rationale
- cross-surface index

Current docs:

- `docs/architecture/humanos-architecture-index.md`
- `docs/architecture/humanos-v2-architecture.md`

### `architecture/contracts`

Purpose:

- runtime truth contract
- narrative arc contract
- output-shape expectations
- downstream deliverable boundaries

Current docs:

- `architecture/contracts/humanos-runtime-contract.md`
- `architecture/contracts/humanos-narrative-arc-contract.md`

### `architecture/templates`

Purpose:

- reusable authoring templates
- durable character truth structure
- durable persona truth structure

Current docs:

- `architecture/templates/humanos-character-card-template.md`
- `architecture/templates/humanos-persona-template.md`

### `docs/memory-retrieval`

Purpose:

- lorebook-linking boundaries
- retrieval ownership rules
- conditional-memory guidance
- managed projection separation

Current docs:

- `docs/memory/humanos-lorebook-linking.md`

### `evaluation/scorecards`

Purpose:

- evaluation scorecards
- reviewer verdict rules
- ordered review expectations
- correction and rejection boundaries

Current docs:

- `docs/evaluation/humanos-evaluation-scorecards.md`
- `docs/evaluation/humanos-reviewer-contract.md`

### `docs/relationship-memory`

Purpose:

- relationship-save boundaries
- checkpoint and milestone retention rules
- managed lorebook projection separation
- chat-local relationship continuity

Current docs:

- `docs/relationship/humanos-relationship-memory.md`

## What does not belong here

The canonical framework repo should avoid swallowing host-app specifics by default.

Usually keep these in integration repos unless they are rewritten as framework-level material:

- app-only route maps
- one-app UI instructions
- temporary debugging notes
- implementation-specific migration chatter
- in-app assistant behavior that only makes sense inside one product

## Integration guidance

If an app such as Marinara Engine implements HumanOS:

- framework concepts should point back here
- app-specific routes, services, and UI flows should stay in the app repo
- examples from an app are fine, but they should be labeled as integration examples rather than canonical requirements

## Next likely additions

Likely future framework surfaces:

- world and memory boundary docs
- authoring workflow docs
- cross-app evaluator profiles
