# HumanOS v2 Persona Template

Use this template when asking an LLM to produce a readable persona from sparse notes, a roleplay self-insert, or a user identity draft.

The point is to keep persona truth separate from character truth:

- a persona is the user-controlled identity in the chat
- a character is the other person in the story
- runtime belongs to the current chat, not the card
- world truth only appears when the setting requires it

## Writing contract for the LLM

When filling this template, the LLM should:

- write plain prose that is easy to scan
- keep identity, personality, appearance, and story context separate
- avoid turning one trait into five near-duplicate sentences
- preserve established canon or user-supplied preferences
- mark unknowns as unknown rather than inventing them
- keep live scene state out of the persona card
- treat the persona as a stable participant, not a temporary mood board

## Output shape

The preferred output is a persona card in this order:

|Module	|Definition	|Key Outputs / Observables|
|1. Identity	|Objective, immutable facts about the person	|Name, Age, Sex/Gender, Pronouns, Occupation, Nationality, Appearance, Immutable Biography; fleeting physical tells (eye rolls, smirks, clenched jaw)|
|2. Personality	|Foundational operating principles driving behaviour|	Core Laws, Values, Moral Priorities, Identity Rules, Motivations, Standards; behaviours and rituals derived from principles
|3. Cognition |	Subjective understanding of reality	|Self, Other, World, Love, Power, Safety, Freedom, Justice Models; thought/interpretation patterns and internal narration (predicting conversations, scanning exits)|
|4. Psychology|	Emotional machinery and survival mechanisms	|Core Wound, Fear, Need, Lie, Attachment Style, Defence & Recovery Frameworks; comfort, regulation, defence, and recovery behaviours (cleaning, humour masking)|
|5. Relational Infrastructure|	Systems for connecting with others	|Trust, Boundaries, Expectations, Conflict, Repair, Affection, Intimacy for categories (Strangers → Fame/Media); social rituals and trust/repair behaviours|
|6. Sexuality|	Personality expressed under intimacy	Sexual Identity, Core Laws, Needs/Fears, Attachment, Desire Engine, Boundaries, Consent & Aftercare; flirting, desire, intimacy, consent, aftercare behaviours|
|7. Speech	|Language arising from all previous modules|	Speech Laws, Vocabulary, Syntax, Cadence, Humour, Conflict/Affection Language; reference speech examples only|
|8. Runtime	|Mutable present-state information|	Arc, Relationships, Scene, Goal, Mood, Stress, Trust, Fatigue, Hope, Active Memories|
|9. World	|External reality independent of the character|	Setting, Locations, Tech, History, Culture, Politics, Economy, Power Structures, Social Norms|
|10. Director	|How the world behaves beyond the character	|NPC Behaviour, Random Events, Environmental Simulation, Outcome Bias, Coincidences, Scene Interruptions, World Progression|
|11. Supporting Cast	|Other entities in the narrative ecosystem|	Name, Role, Narrative Function, Relationships, Personality Snapshot, Conflict/Knowledge Gaps, Activation Triggers|

## Template

```md
# {{persona_name}}

## Identity
{{one-sentence identity that says who the user is in this chat and what role they occupy}}

## Personality
{{2-4 short paragraphs or a tight paragraph that explains temperament, values, habits, emotional patterns, and what makes them feel human}}

## Story Role
{{the default context or situation the persona belongs to}}

## Backstory
{{the minimum durable history needed to understand why this persona is this way}}

## Appearance
{{physical presentation, style, and details the model should remember}}

## Relationships
{{how the persona relates to other people, what they tend to want from connection, and what they avoid}}

## Speech Style
{{how they sound: cadence, formality, humor, silence, and pressure behavior}}

## Optional Notes
{{only include if needed: contradictions, limits, special instructions, or unresolved details}}
```

## HumanOS guardrails

If the source material is built from HumanOS, keep the layers separate:

- **Persona Truth** goes in Identity, Personality, Appearance, Backstory, Relationships, and Speech Style.
- **Story Binding** goes in Story Role.
- **Runtime Truth** stays out of the card unless the user explicitly wants a current-state persona.
- **World Truth** should only appear when the setting depends on it.

## Useful defaults

A good persona answer should tell us:

- who this person is
- how they normally behave
- what kind of role they occupy in the story
- what they care about in connection
- how they sound when calm, stressed, or affectionate

If the source is sparse, expand only what the source supports. Do not invent a dramatic secret just because the template has a backstory section.

## Suggested prompt wrapper

```md
You are generating a readable persona card.

Rules:
- preserve established canon
- do not invent unknown facts
- keep persona, character, scenario, and runtime separate
- prefer concise, emotionally legible prose
- if a field is unknown, say so

Fill the template below:

{{template}}
```
