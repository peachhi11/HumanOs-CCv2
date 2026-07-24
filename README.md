# HumanOs-CCv2

HumanOS-CCv2 is the canonical framework repo for HumanOS v2: a behavioral architecture for character authoring, user personas, runtime state, relationship continuity, narrative projection, retrieval boundaries, and evaluation.

The framework keeps durable identity, mutable runtime truth, conditional retrieval, relationship history, world truth, and review logic in separate layers. That separation is the point of the repo.

## Read First

- [HumanOS v2 Architecture Index](docs/architecture/humanos-architecture-index.md)
- [HumanOS v2 Architecture](docs/architecture/humanos-v2-architecture.md)
- [HumanOS v2 Branch Map](docs/branch-map.md)
- [HumanOS v2 Branch Strategy](docs/branch-strategy.md)
- [HumanOS Agent Workflow Map](docs/agents/humanos-agent-workflow-map.md)

## Core Surfaces

### Architecture

- [Character Card Template](architecture/templates/humanos-character-card-template.md)
- [Persona Template](architecture/templates/humanos-persona-template.md)
- [Runtime Contract](architecture/contracts/humanos-runtime-contract.md)
- [Narrative Arc Contract](architecture/contracts/humanos-narrative-arc-contract.md)

### Framework Boundaries

- [Authoring Workflow](docs/authoring/humanos-authoring-workflow.md)
- [Layer Rules](docs/authoring/humanos-layer-rules.md)
- [Lorebook Linking Boundaries](docs/memory/humanos-lorebook-linking.md)
- [World Boundaries](docs/world/humanos-world-boundaries.md)
- [Relationship Memory and Save Boundaries](docs/relationship/humanos-relationship-memory.md)
- [Relationship Commit-Flow Guidance](docs/relationship/humanos-relationship-commit-flow.md)
- [Relationship Framework](docs/relationship/humanos-relationship-framework.md)

### Evaluation

- [Evaluation Scorecards](docs/evaluation/humanos-evaluation-scorecards.md)
- [Reviewer Contract](docs/evaluation/humanos-reviewer-contract.md)
- [Reviewer Modes](docs/evaluation/humanos-reviewer-modes.md)

### Integration Boundary

- [Marinara Integration Map](docs/integration/humanos-marinara-integration-map.md)

### Agent-Facing Workflows

- [Agent Workflow Map](docs/agents/humanos-agent-workflow-map.md)

## Repository Structure

```text
architecture/
  contracts/   Runtime and narrative-output contracts.
  templates/   Reusable character and persona templates.
docs/
  agents/       Agent-facing workflow routing and packaging boundaries.
  architecture/  Cross-surface overview and index.
  authoring/     Placement workflow for HumanOS artifacts.
  evaluation/    Scorecards, reviewer contract, and reviewer modes.
  integration/   Boundary notes for host-app integrations.
  memory/        Lorebook and retrieval ownership rules.
  relationship/  Relationship-save, commit-flow, and trust-web guidance.
  world/         World-truth boundaries.
```

## Ownership Rule

If the question is "what does HumanOS mean by this?", it belongs here.

If the question is "how does one host app implement this?", it belongs in that app's repo, with this repo linked as the canonical framework reference.

## Current Priority

Keep `main` as the readable canonical framework surface. Historical branch lanes and local worktrees may still exist for focused edits, but the default branch should remain easy to browse without requiring contributors to jump across branches for the current core docs.
