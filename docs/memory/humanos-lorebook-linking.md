# HumanOS Lorebook Linking Boundaries

This document defines what a lorebook link means in HumanOS and what it does not mean.

It is a framework-level boundary document, not a host-app click path.

## What lorebooks are for

In HumanOS, a lorebook is the retrieval surface for conditional depth.

Use lorebooks for facts that are:

- durable enough to matter again later
- not needed in every prompt
- too detailed or situational for the always-on card
- useful when triggered by scene context, topic, participant, or active arc

Typical examples:

- secondary relationships
- location-specific history
- hidden context that matters only in some scenes
- factions, institutions, rituals, or subcultures
- durable branch-compatible facts that should be retrievable but not always hot

## What should not live in lorebooks

Do not use lorebooks for:

- primary character identity that belongs in the character card
- primary user identity that belongs in the persona card
- mutable present-tense scene truth that belongs in runtime
- earned relationship history that belongs in the relationship save
- reviewer instructions or hidden private architecture

If a fact must always be true for the character to read correctly, it is not lorebook overflow. It belongs in stable authoring truth.

## What a lorebook link means

A lorebook link means a stable subject points at a retrieval surface.

At the framework level, the important relationship is:

- a **character** may link to lorebooks
- a **persona** may link to lorebooks
- a **chat** or runtime context may activate or suppress lorebooks according to host rules

The link should not be confused with ownership transfer.

The character or persona references the lorebook. It does not absorb every entry into always-on truth.

## Ownership model

HumanOS should distinguish between at least two lorebook classes:

1. **User-authored lorebooks**
   - written and maintained directly by the user
   - reusable across chats
   - should remain editable and independently owned

2. **Managed projections**
   - generated or rebuilt from authoritative state such as relationship history or token-budget compaction
   - private, derived, and rebuildable
   - must never overwrite user-authored lorebooks

This distinction matters because a managed projection is a read model, not an authored canon source.

## Linking versus embedding

At the HumanOS framework level, linking is the important concept.

Linking means the stable subject and the retrieval artifact are associated without collapsing them into one document.

Embedding is a host-app transport choice. A product may support baking lorebook data into an exportable character artifact, but that is not the same thing as the canonical HumanOS ownership model.

Framework rule:

- prefer links for reusable retrieval
- treat embedding as export behavior, not as the default storage boundary

## Scope and activation

Host applications may expose different UI affordances, but the meaning of scope should stay clear.

Useful scope layers include:

- character-linked activation
- persona-linked activation
- chat-specific activation
- disabled-but-linked state
- global activation, if the host supports it

If a host supports both global and subject-linked activation, it should define how those interact and avoid silently producing contradictory ownership.

## Relationship to runtime

Runtime truth answers "what is true right now?"

Lorebooks answer "what conditional depth may become relevant here?"

That means a lorebook can inform a scene, but it should not become the source of mutable scene truth by itself.

If the live state changes, commit that to runtime or relationship state. Do not pretend a lorebook entry is the authoritative record of present tense.

## Relationship to relationship memory

Relationship progression should not be flattened into ordinary authored lorebook entries.

If a host application produces a managed relationship lorebook projection, it should:

- be clearly labeled as derived
- stay chat-scoped when the authority is chat-scoped
- be rebuildable from authoritative source state
- avoid mutating user-authored lorebooks

This protects both provenance and reversibility.

## Integration expectations

A host application that implements HumanOS should make these separations legible:

- character and persona editors manage stable links
- lorebook editors manage authored retrieval content
- runtime or relationship systems may generate managed projections
- the user can tell the difference between authored lorebooks and generated projections

The framework requirement is not one specific UI. The requirement is that ownership and authority remain clear.

## Design rule

If the system can answer all three questions cleanly, the boundary is healthy:

1. Who owns this fact?
2. Does it belong in always-on truth or conditional retrieval?
3. Is this authored canon or a derived projection?
