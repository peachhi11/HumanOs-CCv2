# HumanOS Evaluation Scorecards

This document defines the default HumanOS evaluation lens for roleplay and narrative output.

It is a framework-level scorecard, not a product-specific prompt.

## What evaluation is for

HumanOS evaluation exists to answer a narrow question:

Does this output remain behaviorally and narratively consistent with the established truth, boundaries, and scene weight?

Evaluation is not the same as composition.

- composition creates the draft
- evaluation checks the draft
- commit or publication decides whether the checked draft becomes authoritative

## Core categories

The default HumanOS consistency scorecard uses seven categories:

1. continuity
2. viewpoint integrity
3. character consistency
4. consent and established boundaries
5. causal plausibility
6. pacing and scene weight
7. drift between intended and actual behavior

These are the minimum categories. A host application may add genre-specific or product-specific checks, but it should not drop the core set casually.

## Scoring contract

When a score-based consistency pass is requested:

- score each category from **1 to 10**
- cite **one concrete example**
- give **one corrective instruction**

The example should be brief and specific.
The correction should be actionable, not vague.

## Category definitions

### 1. Continuity

Checks whether established facts, injuries, promises, timelines, possessions, and relationship states remain consistent.

Good correction shape:

- "Preserve the already-established injury and stop treating the character as fully uninjured."

### 2. Viewpoint integrity

Checks whether narration stays inside the intended viewpoint and does not invent inaccessible interiority.

Good correction shape:

- "Keep the narration inside {{char}}'s perspective and remove unearned claims about {{user}}'s thoughts."

### 3. Character consistency

Checks whether behavior, voice, priorities, defenses, and vulnerabilities match the established person.

Good correction shape:

- "Restore the character's evasive humor under pressure instead of making them suddenly blunt and self-explaining."

### 4. Consent and established boundaries

Checks whether the output respects stated limits, established consent rules, and the character/scenario boundary model.

Good correction shape:

- "Do not imply consent that was not provided; keep the moment open and let the other participant decide."

### 5. Causal plausibility

Checks whether developments follow from what was established rather than appearing because the model wanted drama.

Good correction shape:

- "Earn the reconciliation through an intervening shift instead of jumping from rupture to softness in one beat."

### 6. Pacing and scene weight

Checks whether the response length and dramatic intensity fit the moment.

Good correction shape:

- "Do not inflate this transitional beat into a revelation; keep it brief and preserve room for the next action."

### 7. Drift between intended and actual behavior

Checks whether the output quietly slides away from the intended style, genre, response mode, or behavioral contract.

Good correction shape:

- "Return to close-third, on-page dramatization instead of slipping into summary prose."

## Review scopes

HumanOS evaluation should support at least two scopes:

### Full-context diagnosis

Use this when the goal is to diagnose the whole available roleplay context.

Recommended output shape:

- confirmed problems
- probable drift
- insufficient-context concerns

Do not continue the scene in this mode.

### Recent-turn analysis

Use this when the user wants a limited-window audit such as the last `N` turns.

Recommended output shape:

- strengths
- drift
- contradictions
- corrections

Use brief textual evidence and stay inside the requested window.

## Reviewer priorities

When multiple categories compete, use this priority order:

1. user agency, consent, and established boundaries
2. continuity and viewpoint integrity
3. character consistency and causal plausibility
4. on-page scene progression
5. style and novelty

## Design rule

A HumanOS evaluator should not behave like a second composer trying to rewrite the whole scene out of personal taste.

Its job is to identify whether the draft stays aligned, and to specify the smallest meaningful correction that restores alignment.
