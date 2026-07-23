# HumanOS v2 Architecture

HumanOS v2 is a behavioral architecture for coherent characters and user personas. It keeps durable identity, story context, mutable runtime state, conditional retrieval, relationship history, world truth, and review logic separate so a host application does not collapse everything into one prompt blob.

## What HumanOS v2 Is For

HumanOS v2 helps a host application:

1. create or refine stable character architecture
2. create or refine stable user-persona architecture
3. keep current chat state in runtime instead of durable cards
4. preserve relationship progress as pair-specific history
5. retrieve conditional depth without making every detail always active
6. project readable narrative arcs from current evidence
7. review candidate output before it becomes authoritative

## Core Separation

HumanOS keeps these truth layers apart:

- **Character Truth**: durable facts and behavioral architecture for a character.
- **Persona Truth**: durable user-controlled identity for the chat participant.
- **Story Binding**: the current scenario, cast, premise, and social pressure.
- **Runtime Truth**: mutable present-state truth for the active chat.
- **World Truth**: external constraints such as physics, culture, technology, institutions, and public rules.
- **Lorebook / Retrieval Truth**: durable conditional depth that should be retrieved only when relevant.
- **Relationship Save**: earned history between one character and one persona in one chat lineage.
- **Evaluation Truth**: review criteria, verdict rules, and reviewer operating modes.

This separation matters because the same person can appear in different stories, under different pressures, with different runtime state. If those layers are merged, the system starts confusing stable identity with temporary scene conditions.

## Why The Layers Are Separate

### Character vs Story

Character architecture answers "who is this person in a durable sense?"

Story binding answers "what story are they in right now?"

Keeping them separate prevents a host application from overwriting a reusable character with one scenario's temporary details.

### Character vs Persona

Characters are people in the story. Personas are the user's identity in the chat.

A host integration may store both as first-class subjects, but they are not interchangeable:

- a character is the person the AI interacts with
- a persona is the user-controlled identity the AI addresses as "you"

### Character vs World

World truth is not a character property. If the setting changes, the character should respond to it rather than become it.

### Character vs Runtime

Runtime is mutable. It captures what is true now in the active chat and can change after canonical evidence changes.

Character architecture is durable. It should not be rewritten every time the scene changes.

### Lorebook vs Always-On Truth

Lorebooks are retrieval surfaces for conditional depth. They should not become overflow bins for unclear card ownership.

If a fact must always be true for a character or persona to read correctly, it belongs in stable architecture. If it only matters in some scenes, it can live in retrieval.

### Relationship Save vs Relationship Framework

The relationship save records what has been earned.

The relationship framework interprets what the current pairing can plausibly support next. It should read from character truth, persona truth, runtime truth, relationship history, and active scene pressure, but it must not overwrite authoritative history.

## Behavior Model

HumanOS models behavior as something understandable, not inevitable.

Behavior emerges from:

- stable identity
- values and laws
- cognition and interpretation
- wounds, defenses, and regulation
- relationship expectations
- current runtime pressure
- world constraints
- narrative arc direction

The system should support contradiction, hesitation, regression, growth, mistakes, restraint, and surprise when those moves can be explained by the established architecture and current context.

## Runtime And Narrative Projection

Runtime records present-state truth. The narrative arc projects that truth into a readable story course.

A healthy runtime and arc flow can answer:

- what is happening now?
- what pressure is active?
- what relationship state has been earned?
- which next beats fit?
- which beats would require `ALT` or `BRANCH`?
- what should be retained in lorebook or relationship memory after the arc advances?

## Evaluation Boundary

Evaluation checks whether candidate output stays aligned with HumanOS expectations. It is not a second composition pass.

Evaluation should preserve:

- continuity
- viewpoint integrity
- character consistency
- user agency and consent boundaries
- causal plausibility
- pacing and scene weight
- the declared reviewer mode

## What To Read Next

- [HumanOS v2 Architecture Index](humanos-architecture-index.md)
- [HumanOS v2 Character Card Template](../../architecture/templates/humanos-character-card-template.md)
- [HumanOS v2 Persona Template](../../architecture/templates/humanos-persona-template.md)
- [HumanOS v2 Runtime Contract](../../architecture/contracts/humanos-runtime-contract.md)
- [HumanOS v2 Narrative Arc Contract](../../architecture/contracts/humanos-narrative-arc-contract.md)
- [HumanOS Lorebook Linking Boundaries](../memory/humanos-lorebook-linking.md)
- [HumanOS World Boundaries](../world/humanos-world-boundaries.md)
- [HumanOS Authoring Workflow](../authoring/humanos-authoring-workflow.md)
- [HumanOS Relationship Memory and Save Boundaries](../relationship/humanos-relationship-memory.md)
- [HumanOS Relationship Commit-Flow Guidance](../relationship/humanos-relationship-commit-flow.md)
- [HumanOS v2 Relationship Framework](../relationship/humanos-relationship-framework.md)
- [HumanOS Evaluation Scorecards](../evaluation/humanos-evaluation-scorecards.md)
- [HumanOS Reviewer Contract](../evaluation/humanos-reviewer-contract.md)
- [HumanOS Reviewer Modes](../evaluation/humanos-reviewer-modes.md)
- [HumanOS v2 Integration Map for Marinara Engine](../integration/humanos-marinara-integration-map.md)
