# HumanOS Agent Workflow Map

This document maps the portable HumanOS skill and agent workflows into framework-level guidance.

It documents behavior and boundaries. It does not require this repo to vendor local `.agents/skills` bundles, product-specific scripts, or host-app packaging metadata.

## Agent-Facing Surfaces

### Build HumanOS Personas

Use this workflow when creating, revising, compressing, or auditing a portable character or user persona.

Primary jobs:

- build the stable character or persona kernel first
- keep story, world, and runtime truth out of the durable card
- apply the layer ownership test before drafting or compressing
- preserve behavioral causality, contradictions, boundaries, and speech anchors
- adapt to platform card formats without silently merging layers

Reference:

- [HumanOS Layer Rules](../authoring/humanos-layer-rules.md)
- [HumanOS v2 Character Card Template](../../architecture/templates/humanos-character-card-template.md)
- [HumanOS v2 Persona Template](../../architecture/templates/humanos-persona-template.md)

### HumanOS Workflow

Use this workflow when routing HumanOS design, refinement, evaluation, or integration work.

Recommended sequence:

1. classify the task surface
2. define truth layers
3. separate authoring from runtime
4. design the evaluation loop
5. minimize hot context
6. convert the result to the correct deliverable

Common surfaces:

- authoring
- runtime
- memory and retrieval
- evaluation
- integration

Reference:

- [HumanOS Authoring Workflow](../authoring/humanos-authoring-workflow.md)
- [HumanOS v2 Architecture](../architecture/humanos-v2-architecture.md)

### HumanOS Evaluation Review

Use this workflow when HumanOS needs review, scoring, debugging, or diagnosis instead of continuation.

Supported review modes:

- `SCORE_SYSTEM=consistency`: score each declared category with evidence and one corrective instruction
- `DEBUG_REPORT`: separate confirmed problems, probable drift, and insufficient-context concerns
- `ANALYZE_LAST_N`: review only the requested recent-turn window
- `NEXT_SCENE`: produce forward-looking scene planning fields
- `SUMMARISE_RP`: summarize major events, relationship movement, emotional beats, unresolved tensions, and current scene status

Reference:

- [HumanOS Evaluation Scorecards](../evaluation/humanos-evaluation-scorecards.md)
- [HumanOS Reviewer Contract](../evaluation/humanos-reviewer-contract.md)
- [HumanOS Reviewer Modes](../evaluation/humanos-reviewer-modes.md)

## Packaging Boundary

Local skill bundles may include:

- `SKILL.md`
- `agents/openai.yaml`
- reference notes
- helper scripts

Those files are runtime packaging material for a specific agent environment. HumanOS-CCv2 should capture the stable framework behavior, not every host's installed skill layout.

Host applications may package these workflows as skills or agents, but the canonical rule remains the same: preserve layer ownership and do not let runtime, reviewer, or host-app implementation details rewrite durable character or persona truth.

## Out Of Scope

General frontend design skills are not HumanOS canon.

For example, a UI design skill can help a host application improve screens, but it should not be imported into HumanOS-CCv2 as a framework rule unless it is rewritten as HumanOS-specific integration guidance.

## Agent Output Contract

For analysis tasks, report:

```text
Surface: <authoring | runtime | memory | evaluation | integration>
Problem: <one sentence>
Current failure: <what is colliding or drifting>
Correction: <what to separate, move, trim, or redesign>
Output: <what artifact should be changed>
```

For build tasks, report:

```text
Layer: <what changed>
Owner: <card | persona | lorebook | runtime | relationship memory | reviewer | host app>
Why: <what this fixes>
Verified: <what was actually checked>
Risk: <remaining gap or none>
```
