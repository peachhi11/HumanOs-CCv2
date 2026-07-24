# HumanOS v2 Branch Map

This document explains the current HumanOS-CCv2 repository layout and how it relates to the older branch-owned lanes.

The default branch is `main`. It should contain the readable canonical framework surface so contributors can browse the current docs without hopping across branches.

## Ownership Model

HumanOS docs are organized by responsibility:

- stable structure and contracts live under `architecture/`
- explanatory framework docs live under `docs/`
- host-app implementation notes stay in their host repo unless rewritten as framework-level guidance

That keeps the framework clean, reusable, and independent from any one app.

## Current Main Layout

### `architecture/templates`

Purpose:

- reusable authoring templates
- durable character truth structure
- durable persona truth structure

Current docs:

- `architecture/templates/humanos-character-card-template.md`
- `architecture/templates/humanos-persona-template.md`

### `architecture/contracts`

Purpose:

- runtime truth contract
- narrative arc contract
- output-shape expectations
- downstream deliverable boundaries

Current docs:

- `architecture/contracts/humanos-runtime-contract.md`
- `architecture/contracts/humanos-narrative-arc-contract.md`

### `docs/architecture`

Purpose:

- architecture overview
- layer separation
- framework-level rationale
- cross-surface index

Current docs:

- `docs/architecture/humanos-architecture-index.md`
- `docs/architecture/humanos-v2-architecture.md`

### `docs/agents`

Purpose:

- agent-facing HumanOS workflow routing
- portable skill behavior summaries
- packaging boundaries for host-app skill bundles

Current docs:

- `docs/agents/humanos-agent-workflow-map.md`

### `docs/authoring`

Purpose:

- contributor-facing HumanOS authoring workflow
- placement rules for cards, personas, lorebooks, runtime, world, relationship memory, and evaluation
- quick layer-ownership rules for humans and agents
- authoring versus runtime separation

Current docs:

- `docs/authoring/humanos-authoring-workflow.md`
- `docs/authoring/humanos-layer-rules.md`

### `docs/memory`

Purpose:

- lorebook-linking boundaries
- retrieval ownership rules
- conditional-memory guidance
- managed projection separation

Current docs:

- `docs/memory/humanos-lorebook-linking.md`

### `docs/world`

Purpose:

- world-truth boundaries
- setting-rule ownership
- world-state versus runtime separation
- world-lore placement guidance

Current docs:

- `docs/world/humanos-world-boundaries.md`

### `docs/relationship`

Purpose:

- relationship-save boundaries
- checkpoint and milestone retention rules
- managed lorebook projection separation
- relationship commit-flow guidance
- qualitative relationship-framework interpretation

Current docs:

- `docs/relationship/humanos-relationship-memory.md`
- `docs/relationship/humanos-relationship-commit-flow.md`
- `docs/relationship/humanos-relationship-framework.md`

### `docs/evaluation`

Purpose:

- evaluation scorecards
- reviewer verdict rules
- ordered review expectations
- reviewer operating modes and scope-selection guidance

Current docs:

- `docs/evaluation/humanos-evaluation-scorecards.md`
- `docs/evaluation/humanos-reviewer-contract.md`
- `docs/evaluation/humanos-reviewer-modes.md`

### `docs/integration`

Purpose:

- boundary notes for host-app integrations
- mapping between canonical HumanOS concepts and implementation-owned app surfaces

Current docs:

- `docs/integration/humanos-marinara-integration-map.md`

## Historical Branch Lanes

Earlier work used branch-owned slices for focused docs:

- `HumanOS-main`
- `docs/architecture`
- `architecture/contracts`
- `architecture/templates`
- `docs/memory-retrieval`
- `docs/world-boundaries`
- `docs/authoring`
- `docs/agents`
- `docs/relationship-memory`
- `evaluation/scorecards`
- `evaluation/reviewer-modes`

Those branches can still be useful as local worktrees or focused history, but `main` is now the branch that should present the current canonical structure.

## What Does Not Belong Here

The canonical framework repo should avoid swallowing host-app specifics by default.

Usually keep these in integration repos unless they are rewritten as framework-level material:

- app-only route maps
- one-app UI instructions
- temporary debugging notes
- implementation-specific migration notes
- product-specific storage adapters
- in-app assistant behavior that only makes sense inside one product
- general-purpose local skills that are not HumanOS-specific

## Integration Guidance

If an app such as Marinara Engine implements HumanOS:

- framework concepts should point back here
- app-specific routes, services, screens, storage, and UI flows should stay in the app repo
- examples from an app are fine when they are labeled as integration examples rather than canonical requirements

## Next Likely Additions

Likely future framework surfaces:

- cross-app evaluator profiles
- reference examples and sample packets
- host-neutral narrative generator guidance
