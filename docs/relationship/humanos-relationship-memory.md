# HumanOS Relationship Memory and Save Boundaries

This document defines the default HumanOS boundary for relationship memory.

It explains what a relationship save is, what belongs inside it, and how derived checkpoints and projections should behave.

## What relationship memory is for

HumanOS relationship memory exists to preserve what has been earned between a specific character and a specific persona over time.

It should not be treated as:

- a replacement for the character card
- a replacement for the persona card
- a generic world memory
- a loose lorebook with no authority rules

## Identity boundary

The default relationship-save identity is the tuple:

- `chatId`
- `characterId`
- `personaId`

That means:

- a different persona in the same character chat gets a different relationship save
- the same persona in a different chat gets a different relationship save
- cross-chat continuation must be explicit, not automatic

Relationship memory is chat-local by default.

## What belongs in the relationship save

The authoritative relationship save should contain:

- commit history or equivalent authority-linked progression
- milestone records
- checkpoint lineage
- active relationship state
- canonical evidence references

It may also contain or reference currently relevant unresolved truths that continue to shape how the pair behaves.

## What does not belong there

The relationship save should not rewrite:

- stable character identity
- stable persona identity
- user-authored lorebook ownership
- speculative branch hypotheses as if they were achieved facts

## Checkpoints

Relationship checkpoints are derived summaries of authoritative progress.

The default cadence is every **10 canonical messages** since the last successful checkpoint.

Only canonical messages count.
Candidates, retries, diagnostics, and non-selected swipes should not advance checkpoint cadence.

## Retention classes

HumanOS relationship memory should distinguish at least three semantic retention classes:

1. `fleeting`
2. `currently_relevant`
3. `milestone`

### `fleeting`

Transient mood, scene-local expectation, or momentary cognition that does not materially change the relationship.

### `currently_relevant`

An unresolved pressure, belief, defense, desire, promise, conflict, or tension that should continue shaping behavior.

### `milestone`

A durable turning point that changes the relationship's achieved state or changes how later interactions should be interpreted.

Typical milestone examples:

- first trust
- rupture or repair
- confession
- changed boundary
- major promise
- betrayal
- forgiveness
- commitment
- intimacy threshold
- durable change in attachment or power

## Milestone rule

Milestones and their provenance should survive routine compaction for the life of the chat.

They are not disposable scene texture.

## Managed lorebook projection

When relationship memory needs a prompt-facing condensed form, the result should be a **private, chat-scoped managed lorebook projection**.

This projection:

- is derived from authoritative relationship state
- is rebuildable
- is not itself the authority
- must not overwrite or merge into user-authored lorebooks
- should remain isolated to the matching chat, character, and persona

If its provenance or hash diverges from the authoritative source state, it should be treated as stale and rebuilt.

## Cross-chat continuation

Cross-chat continuation is allowed only as an explicit fork with preserved provenance and user confirmation.

Automatic inheritance across chats is forbidden by default.

## Deletion rule

Deleting a chat may explicitly cascade to its relationship save and managed projections.

Editing or deleting one message should not silently erase earned relationship history.

## Design rule

If the system can answer all four questions cleanly, the boundary is healthy:

1. Which exact pair does this relationship memory belong to?
2. What part is authoritative progress versus derived projection?
3. Which truths are unresolved, and which are milestones?
4. Can the system rebuild the prompt-facing projection without corrupting authored canon?
