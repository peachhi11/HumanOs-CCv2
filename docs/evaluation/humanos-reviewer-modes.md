# HumanOS Reviewer Modes

This document defines the default HumanOS reviewer operating modes.

It is separate from scorecards and verdict contracts because a reviewer needs two different kinds of structure:

- what it is judging
- how it is being asked to judge

The scorecards and reviewer contract own the first question.
Reviewer modes own the second.

## Why reviewer modes need their own lane

HumanOS becomes blurry when score categories, reviewer verdict rules, and review scopes all get merged into one prompt blob.

Mode separation keeps these concerns distinct:

- scorecards define evaluation categories
- reviewer contracts define allowed verdict behavior
- reviewer modes define the operating shape for a given review request

## Core reviewer modes

HumanOS should support at least four reviewer modes.

### 1. Gate review

Use this inside ordered review or publication review.

Purpose:

- determine whether a candidate can move forward
- apply only small local fixes when safe
- reject back to composition when the issue is structural

Allowed outcomes are defined by the reviewer contract:

- `pass`
- `surgical_edit`
- `reject_to_composer`

This mode is not a broad critique pass. It is a publication-facing gate.

### 2. Scorecard review

Use this when the user or system wants a scored consistency audit.

Purpose:

- grade output across declared evaluation categories
- identify concrete evidence
- supply the smallest corrective instruction for each category

Recommended output shape:

- category score
- one concrete example
- one corrective instruction

This mode evaluates. It does not continue the scene.

### 3. Full-context diagnosis

Use this when the goal is to diagnose the full available roleplay or narrative context.

Purpose:

- identify hard failures
- separate likely drift from confirmed contradiction
- mark where evidence is missing

Recommended output shape:

- confirmed problems
- probable drift
- insufficient-context concerns

This mode is best for debugging system behavior, not for publication gating.

### 4. Windowed recent-turn analysis

Use this when the user requests analysis of only the last `N` turns or a similarly bounded window.

Purpose:

- inspect local drift without pretending to know the entire chat history
- keep evidence scoped to the requested window
- distinguish local strengths from local contradictions

Recommended output shape:

- strengths
- drift
- contradictions
- corrections

This mode should stay honest about window limits.

## Mode selection rules

Choose the reviewer mode from the task, not from reviewer preference.

Use:

- **gate review** when a draft is moving through ordered publication or commit review
- **scorecard review** when a scored audit is requested
- **full-context diagnosis** when the system or user wants a global diagnosis
- **windowed recent-turn analysis** when the request explicitly limits the audit window

Do not use a broad diagnostic mode when the real task is simply publication gating.
Do not use gate review when the user actually asked for explanation and diagnosis.

## Shared reviewer boundaries across all modes

No reviewer mode should:

- continue the scene unless the host application explicitly allows that mode to do so
- invent new canonical facts
- mutate runtime or relationship state directly
- blur user-authored material with reviewer commentary
- silently upgrade a critique into a rewrite of the whole scene

If the requested job cannot be done honestly inside the chosen mode, the reviewer should fail closed or hand back a correction notice.

## Design rule

The reviewer mode should answer:

> What kind of judgment is this pass being asked to produce?

If that question is unclear, the review surface is under-specified and the evaluator will drift.
