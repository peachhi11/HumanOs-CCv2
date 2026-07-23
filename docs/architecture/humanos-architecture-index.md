# HumanOS v2 Architecture Index

This index ties the main HumanOS surfaces together so contributors can find the right layer quickly.

## Surfaces

### Character

Stable story identity for an AI character.

Use when you need:

- durable character truth
- appearance
- personality
- backstory
- relationship tendencies
- speech style

Reference:

- [HumanOS v2 Character Card Template](../../architecture/templates/humanos-character-card-template.md)

### Persona

Stable user-controlled identity for the chat participant.

Use when you need:

- user identity
- persona appearance
- personality
- social style
- scenario context

Reference:

- [HumanOS v2 Persona Template](../../architecture/templates/humanos-persona-template.md)

### Runtime

Mutable present-state truth for the active chat.

Use when you need:

- current scene state
- active pressure
- recent changes
- dynamic metrics
- relationship state tracking

Reference:

- [HumanOS v2 Runtime Contract](../../architecture/contracts/humanos-runtime-contract.md)

### Narrative Arc

Readable story projection for the current character/persona pairing and runtime state.

Use when you need:

- a one-page story overview
- five arc stages
- first-message and alternate-opening seeds
- lorebook hooks for the arc controller
- a canon-fit default path, with `ALT` for compatible alternates and `BRANCH` only when the user chooses to diverge

Reference:

- [HumanOS v2 Narrative Arc Contract](../../architecture/contracts/humanos-narrative-arc-contract.md)

### World

External truth that belongs to the setting rather than to one character.

Use when you need:

- setting rules
- cultural or institutional constraints
- technology or magic limits
- public external facts
- world-state placement rules

Reference:

- [HumanOS World Boundaries](../world/humanos-world-boundaries.md)

### Lorebook

Retrieval-only depth for conditional facts that should not live in the always-on card.

Use when you need:

- durable conditional depth
- secondary relationships
- hidden context that only matters in some scenes
- compact retrieval entries

Reference:

- [HumanOS Lorebook Linking Boundaries](../memory/humanos-lorebook-linking.md)

### Relationship Save

Chat-bound relationship history between a specific character and a specific persona.

Use when you need:

- permanent relationship progression
- milestones
- checkpoint lineage
- canonical evidence references
- chat-local relationship continuity

Reference:

- [HumanOS Relationship Memory and Save Boundaries](../relationship/humanos-relationship-memory.md)
- [HumanOS Relationship Commit-Flow Guidance](../relationship/humanos-relationship-commit-flow.md)

### Relationship Framework

Qualitative interpretation for what a character/persona pairing can plausibly do next.

Use when you need:

- relationship type
- modifiers and pressure
- current phase
- trust-web interpretation
- plausible and premature next beats

Reference:

- [HumanOS v2 Relationship Framework](../relationship/humanos-relationship-framework.md)

### Evaluation

Review and correction rules for checking whether live output remains aligned with HumanOS expectations.

Use when you need:

- consistency scoring
- reviewer verdict boundaries
- ordered review expectations
- correction versus rejection guidance
- full-context diagnosis versus recent-turn analysis

Reference:

- [HumanOS Evaluation Scorecards](../evaluation/humanos-evaluation-scorecards.md)
- [HumanOS Reviewer Contract](../evaluation/humanos-reviewer-contract.md)

### Reviewer Modes

Operating shapes for how a reviewer is being asked to judge material.

Use when you need:

- gate review behavior
- scorecard review behavior
- diagnostic review behavior
- recent-window review behavior

Reference:

- [HumanOS Reviewer Modes](../evaluation/humanos-reviewer-modes.md)

### Authoring Workflow

Contributor-facing placement guidance for building HumanOS artifacts cleanly before generation.

Use when you need:

- placement rules for cards, personas, lorebooks, runtime, world, relationship memory, and evaluation
- authoring versus runtime separation
- contributor workflow for building HumanOS artifacts cleanly

Reference:

- [HumanOS Authoring Workflow](../authoring/humanos-authoring-workflow.md)

### Integration Boundaries

Host-app boundary maps explain where canonical HumanOS material ends and implementation-owned app material begins.

Reference:

- [HumanOS v2 Integration Map for Marinara Engine](../integration/humanos-marinara-integration-map.md)

## How The Layers Interact

1. The **character** card defines who the character is in a durable sense.
2. The **persona** card defines who the user is in the chat.
3. The **runtime** contract records what is true right now.
4. The **world** layer defines setting-wide external truth and placement boundaries for world-state material.
5. The **lorebook** stores conditional depth that should only appear when triggered.
6. The **relationship save** preserves the evolving history between one character and one persona.
7. The **relationship framework** interprets what that pairing can plausibly support next.
8. The **narrative arc** projects the current story direction from runtime and relationship context.
9. The **evaluation** surface judges whether output and revisions remain aligned with continuity, viewpoint, character, and boundary expectations.
10. The **reviewer modes** surface defines how those judgments are requested and scoped.
11. The **authoring workflow** tells contributors where these facts should live before generation starts.

If a fact is durable, keep it in the character or persona layer.
If it is a setting-wide external constraint, keep it in world truth.
If it is conditional, keep it in a lorebook.
If it is temporary, keep it in runtime.
If it is relationship history, keep it in the relationship save.
If it is relationship interpretation, use the relationship framework.
If it is a quality judgment or corrective instruction, keep it in evaluation.
If it is a rule about how review should run or be scoped, keep it in reviewer modes.
If it is contributor placement guidance, keep it in authoring workflow.

## Design Rules

- Do not mix runtime state into card truth.
- Do not confuse world truth with character truth.
- Do not put always-active biography into lorebooks.
- Do not let story binding overwrite character truth.
- Do not make persona and character fields interchangeable.
- Do not treat the relationship save as a card replacement.
- Do not treat the relationship framework as authoritative history.
- Do not let the runtime contract become a second character card.
- Do not let the narrative arc become a replacement for runtime, lorebook, or relationship save.
- Do not confuse score criteria with reviewer operating modes.
