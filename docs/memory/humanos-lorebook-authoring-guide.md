# HumanOS Lorebook Authoring Guide

This guide defines how to write HumanOS lorebook entries that improve retrieval without polluting always-on character or persona truth.

It is host-neutral. Product-specific actions such as publishing, linking, visibility, and entry limits belong to the host application.

## Core purpose

A lorebook entry is conditional retrieval.

It should stay quiet until its subject matters, then give the model enough grounded instruction to keep the next response consistent.

Use lorebooks for:

- people, places, factions, items, rules, events, and setting logic
- relationship dynamics that are durable but not always needed
- recurring facts the model often forgets or invents
- scene-facing constraints that should activate only under relevant keywords
- shared world material used by more than one character or persona

Do not use lorebooks as overflow for the character card. If the character must always know it to behave correctly, put it in card-facing truth instead.

## Definition versus lorebook

Use this quick placement rule:

| Put it in always-on truth when... | Put it in a lorebook when... |
| --- | --- |
| the character or persona must carry it in every scene | it only matters when a topic, location, person, or rule appears |
| it defines core identity, motivation, voice, or behavior | it describes conditional world depth, side characters, items, events, factions, or rules |
| it belongs to one stable subject | it can be shared, reused, or activated by retrieval context |

The practical test is simple: always relevant belongs in the card or persona; conditionally relevant belongs in retrieval.

## Entry shape

A strong entry has three conceptual parts:

1. **Title**: a human-facing label for browsing and maintenance.
2. **Activation keys**: natural words or phrases that should retrieve the entry.
3. **Content**: the exact knowledge or behavioral constraint the model should use once retrieved.

The title should help the creator. The keys should match user language. The content should guide generation.

## Write instructions, not trivia

Weak entries only say that something exists.
Strong entries explain how the fact should change the scene.

Prefer content that tells the model:

- what must remain true
- what must not be invented
- how a person behaves when present
- what cost or limit follows from a rule
- what social pressure or atmosphere should appear
- what the entry should change in the next response

This is especially important for corrections. If the model keeps changing an age, family tie, power limit, social rule, or visual anchor, write an entry that names the exact mistake and gives a replacement rule.

## High-value entry types

### Corrections

Use correction entries for recurring errors.

Good correction entries include:

- the stable fact
- the common wrong version to avoid
- the response behavior expected when the topic appears
- keys users are likely to type when asking about the topic

### Side characters

A side-character entry should cover more than biography.

Include:

- relationship to the active character or persona
- social role or story function
- what the side character wants
- what they avoid saying directly
- how their presence changes the room

Names, titles, nicknames, and social roles usually make strong activation keys.

### Relationship and social dynamics

Do not stop at labels such as "complicated," "tense," or "romantic."

Explain the operating dynamic:

- who holds leverage
- what each side wants
- what remains unsaid
- what happens when pressure rises
- which beats are plausible, premature, or blocked

For HumanOS relationship progression, keep earned chat-local history in the relationship save. Lorebook entries may describe durable context or derived projections, but they should not become the authority for relationship state.

### Factual anchors

Use factual anchors for details the model tends to improvise:

- age
- appearance
- names and aliases
- family relationships
- locations
- titles
- species or body rules
- important objects

Give enough specificity that the model does not need to guess.

### World rules

A world-rule entry should be enforceable.

State:

- what can happen
- what cannot happen
- what it costs
- what should usually follow
- what should never be used as an easy solution

This keeps magic, technology, social protocol, legal rules, species limits, and power systems from becoming vague decoration.

## Activation keys

Activation keys decide when the entry appears.

Good keys are:

- specific to the entry
- likely to occur in real user phrasing
- varied enough to cover names, aliases, titles, locations, and natural questions
- narrow enough that they do not activate constantly

Avoid keys that are too broad to mean anything. A constantly firing entry wastes context and can distort scenes that are not about its subject.

Also avoid keys nobody will type. An entry that never activates is not retrieval; it is storage without effect.

## Placeholder rules

HumanOS host applications may support placeholders such as `{{user}}` and `{{char}}`.

Use `{{user}}` when the entry should adapt to the active persona or participant while preserving their agency.

Use `{{char}}` only for facts that are safely true for every linked character in that host context. If an entry is shared across multiple characters, do not use `{{char}}` for ownership, family ties, backstory, possessions, or accomplishments that belong to one named character.

When in doubt, name the character directly.

Never use a lorebook entry to force `{{user}}`'s actions, feelings, thoughts, consent, or decisions.

## Entry checklist

Before saving or publishing an entry, ask:

- Why should this matter during chat?
- What should the model do differently when the entry activates?
- Are the activation keys natural and specific?
- Can this entry stand alone if retrieved without nearby context?
- Does it preserve the difference between authored lore, runtime truth, and relationship-save history?
- Does it avoid taking control of `{{user}}`?

## Relationship to HumanOS layers

Lorebook entries can support HumanOS generation, but they do not own every kind of truth.

- Character and persona cards own always-on identity.
- Runtime owns current scene truth.
- Relationship save owns earned chat-local relationship history.
- World truth owns durable external setting logic.
- Lorebooks own conditional retrieval.

The cleanest lorebook entries make that ownership visible instead of hiding it in prose.

## Design rule

If the entry activates at the right moment, tells the model what to preserve or enforce, and stays out of scenes where it does not matter, it is doing its job.
