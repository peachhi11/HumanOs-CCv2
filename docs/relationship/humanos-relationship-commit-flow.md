# HumanOS Relationship Commit-Flow Guidance

This document defines the canonical HumanOS guidance for relationship-save commit flow.

It is a framework-level summary of how relationship progress should become authoritative. It is not the full implementation ADR for one specific host application.

## What this flow is for

The relationship commit flow exists to answer one question:

How does observed relationship progress move from candidate interpretation into authoritative, replayable state without corrupting reusable identity or authored canon?

## Core rule

Agents and derived jobs may propose relationship state.

The server or host authority owns commit.

That means:

- candidate prose is not relationship truth by itself
- reviewer output is not relationship truth by itself
- a plausible hypothesis is not relationship truth by itself
- only an authority-governed commit may advance the relationship save

## Identity boundary

The authoritative relationship-save target is scoped by:

- `chatId`
- `characterId`
- `personaId`

Commit flow must preserve that identity strictly.

## Evidence rule

Relationship commits should be linked to durable authority evidence.

In the default HumanOS model, that means one of two evidence families:

1. canonical-turn evidence
2. explicit server-owned authority for manual, repair, or migration paths

Models should not be allowed to forge:

- commit order
- revision coordinates
- idempotency identity
- canonical evidence identity

## Proposal-before-commit

The default HumanOS guidance is a two-step flow:

1. propose a typed relationship patch against a captured base revision
2. commit it only after evidence, policy, and conflict checks succeed

This protects relationship memory from being mutated by drafts, retries, or accidental double-writes.

## What the authoritative save should preserve

A valid relationship commit flow should preserve:

- append-only commit history or equivalent audit history
- milestone records
- checkpoint lineage
- active relationship state
- evidence provenance

The save is the authority.
Prompt-facing or UI-facing projections are read models derived from it.

## Checkpoint flow

Relationship checkpoints are derived jobs over authoritative progress, not replacements for it.

Recommended baseline:

- create one idempotent checkpoint per covered ten-message canonical range
- count only canonical messages
- exclude candidates, retries, diagnostics, and non-selected swipes from checkpoint cadence
- retain covered message-range and evidence provenance

## Retention flow

The classifier should distinguish:

- `fleeting`
- `currently_relevant`
- `milestone`

Commit flow should then enforce:

- fleeting material may compact only after verified semantic preservation
- currently relevant truths stay active until resolved, superseded, or promoted
- milestones and provenance remain for the life of the chat

## Managed projection flow

When relationship state must be condensed for prompt use, the result should be a private managed projection.

That projection should be:

- chat-scoped
- rebuildable
- deterministic for the same ordered inputs
- clearly derived rather than authoritative

It must never overwrite or merge into:

- user-authored lorebooks
- character cards
- persona cards

## Cross-chat rule

Cross-chat continuation should be an explicit provenance-preserving fork.

Automatic cross-chat inheritance is forbidden.

## Failure and conflict rule

The first release of a governed relationship flow should prefer clear rejection over magical merge behavior.

Good defaults:

- reject stale revisions
- reject invalid evidence
- reject idempotency conflicts
- reject speculative facts being committed as achieved relationship truth

## Audit rule

Relationship commit history should remain legible after the fact.

At minimum, the audit surface should let a host inspect:

- actor
- authority path
- target identity
- base and result revisions
- evidence identity
- status
- commit or compensation lineage

## Relationship to host-app ADRs

Host applications may keep a much larger implementation ADR covering:

- storage tables
- migration phases
- adapter rollout
- replay guarantees
- compensation mechanics
- observability details

That is fine.

The canonical HumanOS doc only needs to lock the framework-level boundaries:

- proposal before commit
- evidence-backed authority
- chat-local identity
- milestone-safe retention
- rebuildable managed projections
- explicit provenance for continuation and repair

## Design rule

If the system can explain exactly why a relationship fact became authoritative, and can replay that decision without pretending a draft was canon, the commit flow is doing its job.
