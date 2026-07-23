# HumanOS World Boundaries

This document defines what belongs to world truth in HumanOS and what does not.

World truth is external reality that remains true independently of one character's private identity or one scene's temporary state.

## What world truth is

World truth includes things like:

- physical laws
- social rules
- cultural expectations
- institutions
- technology limits
- magic-system limits
- geography
- public factions and public events

If the cast changed but the fact would still remain true, it is probably world truth.

## What world truth is not

World truth is not:

- character personality
- persona social style
- current-scene emotional state
- earned relationship progression
- reviewer notes
- hidden authoring-only architecture

Those belong to other HumanOS layers.

## World truth vs story binding

Story binding is about how the current story positions the cast inside a world.

World truth answers questions like:

- what rules exist here?
- what institutions or cultural pressures are real?
- what external constraints are always in play?

Story binding answers questions like:

- what is this character's role in this version of the story?
- who is connected to whom right now?
- what premise or situation applies in this chat?

World truth is broader than one story binding.

## World truth vs character truth

Character truth is about who a person is.

World truth is about what environment that person lives inside.

If the setting changes, the character should respond to it rather than become it.
That keeps a reusable character portable across different scenarios and host applications.

## World truth vs runtime

Runtime truth is present-tense state for the active chat.

World truth is durable background constraint.

Examples:

- "The city enforces biometric checkpoints" is world truth.
- "They are currently trapped at the checkpoint after missing curfew" is runtime truth.

Do not store present-tense scene state as world truth just because the scene lasts several turns.

## World truth vs lorebooks

Lorebooks are a delivery mechanism, not a truth category by themselves.

World truth may be delivered through:

- authored world docs
- lorebook entries
- scenario payloads
- governed world-state aggregates

The important question is ownership, not just storage format.

If a lorebook entry exists to express a setting-wide external rule, it is still world truth conceptually even though it is retrieved through lorebook infrastructure.

## World truth vs relationship memory

Relationship memory stores what happened between a specific character and a specific persona or user identity across time.

World truth stores what is true outside any one pair bond.

If the fact only exists because these two people experienced it together, it is not world truth.

## Host-app expectations

A host application may represent world material in different ways:

- a first-class world editor
- scenario or campaign inputs
- world-state storage
- lorebook-backed setting packets
- public reference documents

HumanOS does not require one storage surface. It requires that world truth stay conceptually separate from character truth, runtime truth, and relationship progression.

## Design rule

Use this test before placing a fact:

> If swapping the cast would leave the fact true, it is likely world truth.

If not, the fact probably belongs in character, story binding, runtime, or relationship memory instead.
