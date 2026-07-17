# HumanOs-CCv2

HumanOS-CCv2 is the canonical framework repo for HumanOS v2.

This repo separates the core HumanOS architecture into branch-owned lanes so the framework can stay clean, reusable, and independent from any one host application.

## What HumanOS v2 is

HumanOS v2 is a behavioral architecture for:

- character authoring
- persona authoring
- runtime state
- narrative projection
- relationship continuity
- evaluation and integration design

The core idea is simple: stable identity, mutable runtime truth, conditional retrieval, and review logic should not all be collapsed into one giant prompt.

## Branch layout

This repository currently uses branch-owned slices:

- `HumanOS-main` — landing branch, overview, and repo-level navigation
- `docs/architecture` — framework architecture docs
- `architecture/contracts` — runtime and narrative contracts
- `architecture/templates` — reusable character and persona templates
- `docs/memory-retrieval` — lorebook-linking and retrieval-boundary guidance
- `docs/world-boundaries` — world-truth and world-state boundary guidance
- `docs/authoring` — contributor-facing HumanOS authoring workflow guidance
- `evaluation/scorecards` — evaluation scorecards and reviewer guidance
- `docs/relationship-memory` — relationship-save, commit-flow, and managed-projection boundaries

See [docs/branch-map.md](docs/branch-map.md) for the detailed map and [docs/branch-strategy.md](docs/branch-strategy.md) for the rules that decide when a surface should get its own branch.

## Relationship to app integrations

HumanOS is framework-first here.

Host-app implementation details, UI behavior, tool wiring, and app-specific storage examples may live in integration repos such as Marinara Engine. Those integrations can reference this repo as the canonical home for framework concepts, contracts, and templates.

## Current priority

This repo is being used to separate canonical HumanOS architecture from app-specific implementation history so the framework can evolve cleanly on its own terms.
