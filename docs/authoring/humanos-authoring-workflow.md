# HumanOS Authoring Workflow

This document explains how to place HumanOS material cleanly before a host application ever starts generation.

HumanOS becomes more reliable when contributors decide what layer a fact belongs to before they decide how to phrase it.

## Purpose

Use this workflow when creating or refining:

- character cards
- personas
- lorebooks
- relationship memory structures
- world packets
- evaluation materials

The goal is not to write one giant master prompt.
The goal is to place durable identity, conditional depth, runtime state, and review logic in the correct surfaces.

For the quick ownership test used by both humans and agents, see [HumanOS Layer Rules](humanos-layer-rules.md).

## Step 1: Define stable character truth

Put stable, reusable character identity in the character surface.

Examples:

- enduring personality
- durable backstory
- appearance
- values and priorities
- defenses and growth tendencies
- stable speech style

If the same character should still carry this truth into a different scenario, it belongs here.

## Step 2: Define stable persona truth

Put stable user-side identity in the persona surface.

Examples:

- user persona presentation
- social style
- preferences that define the participant rather than one scene
- durable user-facing context

Do not merge persona truth into the character card just because both are always relevant.

## Step 3: Separate story binding from stable identity

Story binding is the current setup that positions the cast in this story.

Examples:

- current role or job in this scenario
- existing relationship premise
- current social obligation
- opening situation

If changing the scenario would change the fact, it is not stable identity.

## Step 4: Place world truth deliberately

World truth belongs in its own layer.

Examples:

- technology limits
- cultural rules
- political structures
- setting institutions
- public external constraints

Do not hide world rules inside character biography.

## Step 5: Move conditional depth into retrieval

Not every durable fact belongs in the always-on prompt.

Use lorebooks or retrieval surfaces for:

- secondary relationships
- conditional backstory fragments
- place-specific context
- information that matters only in some scenes

Retrieval is for conditional depth, not for fixing unclear ownership.

## Step 6: Keep runtime out of authoring

Runtime is what is true now in the active scene or chat.

Examples:

- present emotional temperature
- current injuries or pressures
- immediate scene conditions
- active relationship stage in this chat

Do not store runtime state as if it were permanent card truth.

## Step 7: Keep earned relationship progress out of reusable cards

Relationship memory is pair-specific and history-dependent.

Examples:

- milestones between one character and one persona
- promises made in one chat lineage
- betrayals, reconciliations, and intimacy history

If the fact was earned by this pair over time, it does not belong in the reusable baseline card.

## Step 8: Separate evaluation from composition

Evaluation materials judge whether the system stayed aligned.

Examples:

- consistency scorecards
- viewpoint integrity checks
- consent and boundary checks
- continuity and pacing review instructions

These are not the same as character truth and should not be embedded into identity fields as if they were personality.

## Placement cheat sheet

| If the fact is... | Put it in... |
| --- | --- |
| durable character identity | character card |
| durable user-side identity | persona |
| conditional but durable depth | lorebook or retrieval surface |
| setting-wide external constraint | world truth or world inputs |
| present-tense scene state | runtime |
| earned pair-specific history | relationship memory |
| quality judgment or correction rule | evaluation |

## Anti-patterns

Avoid these common authoring failures:

- mixing authoring guidance with runtime instructions
- storing every fact in always-on prompt text
- using lorebooks to hide placement confusion
- turning reviewer instructions into character identity
- turning relationship progress into reusable card canon
- turning world rules into character traits

## Final design rule

If a contributor can explain why each fact belongs to its layer before generation starts, the HumanOS authoring workflow is working.
