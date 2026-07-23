# HumanOS Reviewer Contract

This document defines the default reviewer behavior contract for HumanOS ordered review.

It describes what a reviewer is allowed to return, what happens when it fails, and when material must go back to composition instead of being silently massaged into shape.

## Reviewer purpose

A reviewer is not a freeform co-author.

A reviewer checks candidate text against a declared stage and returns one of three outcomes:

- `pass`
- `surgical_edit`
- `reject_to_composer`

## Ordered review expectation

HumanOS ordered review is sequential.

Each reviewer receives the latest candidate text, evaluates only its declared stage responsibility, and hands forward either:

- the unchanged text
- a narrowly edited text
- a rejection with a correction notice

The candidate is published canonically only after the ordered review path completes successfully.

## Verdict meanings

### `pass`

Use when the candidate already satisfies the review stage.

The reviewer may include a short diagnostic, but it should not invent a rewrite need when none exists.

### `surgical_edit`

Use when the problem is local and can be repaired without changing the scene's underlying intent.

Surgical edits should stay small in scope. They are for things like:

- viewpoint leakage
- boundary phrasing
- continuity wording
- a localized style drift
- a line-level repair that preserves the draft's meaning

They are not for replacing the scene with a different scene.

### `reject_to_composer`

Use when the problem is material enough that local rewriting would be dishonest or structurally unsafe.

Typical reasons:

- continuity is fundamentally broken
- the scene violates a boundary or consent rule at a structural level
- character behavior is off-model in a way that requires recomposition
- causal logic is broken at the scene level
- the candidate took the wrong branch of the story

When rejecting, the reviewer should supply a brief correction notice or diagnostic that explains what the composer must repair.

## Failure modes

Review stages may be configured with one of these failure modes:

- `REQUIRED`
- `DEGRADABLE`
- `OPTIONAL`

### REQUIRED

If the reviewer fails, the ordered review path fails.

### DEGRADABLE

If the reviewer fails to run or returns an unusable result, the system may continue while recording the degraded state.

### OPTIONAL

If the reviewer fails, the system may continue without blocking publication.

Use non-required modes carefully. The stronger the boundary risk, the less appropriate degradation becomes.

## Review record expectations

For auditability, a reviewer pass should record at least:

- reviewer key
- stage
- failure mode
- input hash
- output hash or null
- diagnostic or null

This keeps review history legible without pretending the reviewer itself is the canonical author.

## Protected boundaries

A reviewer should not:

- erase protected markup
- invent new authority
- silently convert speculative material into canonical fact
- mutate runtime or relationship state directly
- treat evaluation comments as committed truth

If a reviewer cannot preserve these boundaries, it should reject or fail rather than improvise.

## Stage design guidance

Ordered review works best when each stage has a narrow concern.

Bad reviewer stages try to fix everything at once.
Good reviewer stages make it obvious why a candidate passed, was lightly corrected, or was rejected back to composition.

## Design rule

If the smallest honest fix is still too large to count as surgical, the reviewer should reject to composer.
