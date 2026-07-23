# HumanOs-CCv2

This branch holds the canonical HumanOS memory and retrieval guidance
- `HumanOS-main` — landing branch, overview, and repo-level navigation
- `docs/architecture` — framework architecture docs
- `architecture/contracts` — runtime and narrative contracts
- `architecture/templates` — reusable character and persona templates
- `docs/memory-retrieval` — lorebook-linking and retrieval-boundary guidance
- `docs/world-boundaries` — world-truth and world-state boundary guidance
- `docs/authoring` — contributor-facing HumanOS authoring workflow guidance
- `evaluation/scorecards` — evaluation scorecards and reviewer guidance
- `evaluation/reviewer-modes` — reviewer operating modes and scope-selection guidance
- `docs/relationship-memory` — relationship-save, commit-flow, and managed-projection boundaries

Primary documents in this branch:
- `docs/memory/humanos-lorebook-linking.md`

Related docs live on sibling branches:
- `docs/architecture` for the architectural overview
- `architecture/contracts` for runtime and narrative contracts
- `architecture/templates` for reusable character and persona templates
- 
See [docs/branch-map.md](docs/branch-map.md) for the detailed map and [docs/branch-strategy.md](docs/branch-strategy.md) for the rules that decide when a surface should get its own branch.

It is for framework-level lorebook boundaries: what belongs in retrieval, how lorebooks should link to characters and personas, and how managed projections must stay separate from user-authored material.

------
Imagine a system designed to help create and refine characters, develop user personas, match these personas to characters, and compile role-play narratives. At its heart, it asks:

1. Purpose

Considering who this person is, what they believe, what they perceive, who they are with, what is true at this moment, and what pressures they are under, what actions are believable—and why?

HumanOS focuses on making character behaviours clear and consistent, giving users control, and allowing for thoughtful projection into Character Card development for AI narratives on platforms like Marinara Engine.

2. Operating Modes
Character mode

This setup mode can directly guide a player to create a character for AI to play during roleplay.

User-persona mode

This setup mode can directly guide a player to outlines a fictional user persona for them to play during roleplay with one or more AI-controlled characters - the more in depth a user persona is filled out, the better the AI understands the user's persona, and can help with: matching, continuity, or writing assistance requested by the user during roleplay (enhance my prose, impersonate, guided generation, etc.) 

3. Core Behaviour Principle

Behaviour should be *understandable*, not something that's **bound to happen**.

It comes from a mix of:

- our stable nature (core traits, values and identity rules)
- the information we see (perception) 
- how we personally interpret it (interpretation)
- the relationships around us (relational model)
- our current mood and state (psychology)
- conflicting desires (arousal, desire and paradoxes)
- the pressure of the situation (runtime)
- the options we have (narrative arc)

This leads to behaviour that makes sense, which then has consequences and updates our memory and state. (behavioural model)

HumanOS should steer clear of random actions while embracing uncertainty, contradictions, trying new things, making mistakes, holding back, varying based on context, and making surprising choices that can still be explained afterwards.

What we show on the outside is more about tendencies than strict cause-and-effect. Don't keep repeating the same sign just to show the same feeling inside.

4. Truth Layers

HumanOS maintains four distinct layers of truth, each with its own significance and role in shaping our understanding of a person and their experiences.

Character Truth: This layer consists of enduring facts and the behavioural framework that accompany an individual through various compatible narratives. It includes elements like identity, biography, values, laws, cognition, personal wounds, defences, relational patterns, sexuality, speech, consistent habits, and even personal paradoxes.

Story Layer: This layer is about the information that ties a person to a specific scenario. It encompasses the role they play in that scenario, their current job if it depends on the setting, their established relationships, the supporting characters, their knowledge of the scenario, the social pressures they face, and the underlying premise of the story.

Runtime: This layer represents the ever-changing information about what is true at this moment. It includes details such as the person's location, their immediate goals, their mood, stress levels, fatigue, any active wounds, current trust levels, ruptures, desires, recent memories, injuries, possessions, and any unresolved commitments.

World: This layer is the external reality that exists independently of the individual. It includes aspects like location, time period, technology, physics, politics, economy, culture, social norms, institutions, weather, and environmental constraints.

It's important to note that Story Truth should not quietly replace Character Truth. Similarly, Character Truth does not have the power to override physical reality or events that have already occurred.

5. When HumanOS creates or improves something significant, it assigns a ownership status to indicate its origins.

CONFIRMED: This is clearly included in what you've provided, an existing card, or widely accepted information.

IMPLIED: This is strongly hinted at by the established evidence but hasn't been confirmed yet.

PLANNED: This is a creative idea added to enhance or expand the design.

CONFLICTED: This contradicts with the established canon and needs to be sorted out.

UNKNOWN: This hasn't been established and is intentionally left open.

When refining information, always stick to the facts that are already known unless the user tells you otherwise. The AI must not turn IMPLIED into CONFIRMED details without checking first, and never fill UNKNOWN just because the template asks for it.

Here’s the order to follow when deciding what’s most reliable:

- most recent corrections
- The accepted character or persona story
- Established facts about the current scenario
- Previously approved HumanOS material
- Strong, logical guesses
- Any creative suggestions

This way, what’s written stays accurate, consistent, and trustworthy.

6. Projection Destinations

Each field we create is assigned to a specific, standard destination.

Card

Think of this as a handy summary that captures all the essential details you need to identify and describe someone in everyday situations.

Linked Lorebook

This is like a treasure trove of in-depth, long-lasting information that comes in handy only when the situation calls for it. You’ll want to pick and choose what you need from it.

Runtime

Imagine this as the live feed of current information, constantly being updated based on what’s actually happening.

Private Architecture

This is where we keep all the behind-the-scenes stuff—like the author’s notes, guesses, analysis, sensitive details, diagnostics, and internal workings—that shouldn’t just pop up in the roleplay prompt without reason.

Omit

Redundant, irrelevant, unsupported, unsafe, or low-value information.

Information must have one canonical owner. Other projections may contain compact references but must not maintain competing copies.

7. Marinara Engine Field Routing
Do not infer sensitive persona information to fill empty fields.

Linked lorebook

Create one predictable linked lorebook:

HumanOS — [Character Name]
HumanOS Persona — [Persona Name]

Recommended focused entries:

- Cognition and Interpretation
- Psychology, Defences, and Recovery
- Trust, Conflict, and Repair
- Intimacy, Consent, and Boundaries
- Speech by Context and Pressure
- Growth, Regression, and Law Breakers
- Significant NPCs
- Formative History
- Arc Architecture

Entries must use narrow activation keys and reasonable token budgets. Do not use the subject's name as a trigger on every entry. Do not create one always-retrieved full-profile entry.

8. Module Architecture

Module 1 — Identity and Presentation

Stable identity, biography, appearance, presentation, and physical presence.

Identity must not be labelled wholly immutable. Separate core identity, biography, current life, physical profile, presentation, and behavioural baseline.

Explicit adult anatomy is an optional extension, never a mandatory identity field. Do not assume anatomy from assigned sex or gender.

Module 2 — Personality and Values

Core values, ranked character laws, moral priorities, standards, motivations, paradoxes, strengths, and costly flaws.

If using the Big Seven model, name the dimensions explicitly:

- Positive Valence
- Negative Valence
- Positive Emotionality
- Negative Emotionality
- Conscientiousness
- Agreeableness
- Conventionality

Represent each as a continuum with context-dependent variation and observable implications. Treat factors as descriptive tendencies, not deterministic rules.

Module 3 — Cognition and Internal Model

Self, Other, World, Love, Power, Safety, Freedom, and Justice models; attention; interpretation; decision style; internal-experience modality; memory bias; knowledge limits; and blind spots.

Characters act on what they perceive and believe, not on privileged access to objective truth.

Module 4 — Psychology and Regulation

Core wound, fear, need, lie, truth, attachment pattern, shame, self-worth, stress response, defences, regulation, repair, and recovery.

Growth expands available behaviour. It does not erase history, defences, or the capacity to regress.

Module 5 — Relational Architecture

Trust, boundaries, expectations, conflict, repair, affection, dependency, obligation, respect, resentment, power, attraction, vulnerability, commitment, and perceived safety.

Relationships are multidimensional states, not a universal staircase. Do not assume that intimacy follows friendship, that trust rises continuously, or that romance is the endpoint.

Module 6 — Intimacy and Sexuality

Optional and scope-aware. Includes sexual and romantic identity, desire style, incentives, inhibitions, boundaries, consent communication, power preferences, relevant interests, and aftermath.

Do not force minimum counts for kinks, fetishes, or sexual behaviours. Distinguish curiosity, fantasy, practiced preference, contextual willingness, soft limits, and hard limits.

Desire, arousal, trust, attachment, vulnerability, and willingness are separate variables. They may change independently, reverse, plateau, or remain unchanged.

Consent cannot be unlocked by manipulating a desire driver. Attraction and previous intimacy do not establish present consent.

Module 7 — Speech and Communication

Voice, vocabulary, syntax, cadence, humour, silence, conflict language, affection language, written communication, code-switching, and contextual registers.

Treat trait-to-speech associations as possibilities, not stereotypes. Separate pitch, resonance, texture, volume, and cadence. Accent must be established rather than inferred from nationality alone.

Dialogue examples are references and must not be repeated verbatim during roleplay.

Module 8 — Runtime

Private mutable story state can include (but is not limited to): active arc, rhythm, scene, immediate goal, mood, stress, fatigue, hope, wound status, relationship state, recent memory, and unresolved pressure.

Character Runtime may be authoritative when updated from final canonical events.

User-persona Runtime must distinguish between:

- KNOWN: Explicitly supplied by the user.

- SEEN: Behaviour explicitly written by the user.

- THOUGHT: A cautious private hypothesis, never roleplay fact.

- UNKNOWN: Not established; do not fill.


Never infer the user's consent, arousal, thoughts, emotions, intentions, or decisions as established Runtime Truth.

Module 9 — World

External reality and pressure: period, location, physics, technology, economy, politics, culture, social norms, institutions, mortality, weather, and environment.

World libraries are retrieval sources, not permanent prompt payloads. Retrieve and compile only relevant entries.

Module 10 — Relational Infrastructure and NPCs

Significant NPCs have independent goals, current pressure, knowledge limits, suspicions, boundaries, offscreen activity, relationships, and activation conditions.

NPCs may create pressure, enable growth, provide stability, reveal character, complicate choices, or pursue goals that intersect the protagonists. They are not merely plot devices or name clutter.

Module 11 — Arc and Behaviour Engine

The Arc Engine manages earned movement, rhythm, pressure, regression, rupture, repair, and integration. Trope frameworks are references, never scripts.

Meaningful conflict may come from internal law collision, relational incompatibility, material circumstances, or external events whose emotional significance intersects character architecture.

Do not require every relationship to move through resistance, romance, sex, confession, or commitment.

Module 12 — Overview

Generated last from validated Modules 1–11. Summarises who the person is, their core function, dominant pressure, likely growth direction, useful scenarios, matching considerations, and what would flatten their dramatic potential.

The overview is a projection, not a second canonical source.

9. Character–Persona Matching

Matching is multidimensional. Do not collapse it into one compatibility percentage.

Assess separately:

- value alignment;
- emotional compatibility;
- conflict compatibility;
- repair compatibility;
- communication compatibility;
- lifestyle compatibility;
- boundary and consent compatibility;
- erotic compatibility when in scope;
- narrative chemistry;
- growth compatibility;
- likely destructive loops;
- desired user experience.

Matching should describe interactions, not merely trait similarity.

Example:

Both value reliability, but she expresses it through anticipatory care while he interprets unsolicited preparation as control. Their shared value initially produces friction rather than recognition.

10. Refinement Contract

Refinement must:

1. Fetch the current card and linked HumanOS lorebook.
2. Reconstruct the existing architecture without inventing missing facts.
3. Classify new evidence by provenance.
4. Detect contradictions and canonical ownership conflicts.
5. Produce field-level and lorebook-entry-level diffs.
6. Preserve unrelated text and user-authored voice.
7. Request approval for proposed additions or destructive changes.
8. Create a version snapshot.
9. Apply coordinated card and lorebook changes.
10. Re-read saved artifacts and verify the result.

11. Compilation Contract

The compiler must output structured, schema-validated data rather than a single flat quoted command.

Compilation must validate:

- declared subject and task mode;
- required identity fields;
- subject-variable correctness;
- canonical destination ownership;
- unsupported or conflicted claims;
- user-agency boundaries;
- sensitive-data scope;
- card/lorebook duplication;
- field and token budgets;
- lorebook linkage;
- successful save-and-reload equivalence.

Legacy bracket commands may remain for compatibility but must not be the primary HumanOS transport.

12. Runtime Authority Boundaries

Character architecture defines durable behavioural possibilities.
Runtime records what is true now.
World defines what is materially and socially possible.
NPC profiles define what other people know, want, and may do.
Arc Controller selects appropriate structural pressure.
Scene Director activates relevant world and NPC activity.
Composer creates one canonical response.
Editor verifies continuity, agency, causality, and style.
Lorebook and Runtime update only from the canonical final response.


No agent may silently broaden its jurisdiction.

13. Non-Goals

HumanOS v2 does not:

- guarantee one inevitable behaviour from one input;
- diagnose real users;
- infer sensitive persona attributes to complete a template;
- authorise control of the user's character;
- force romance, sexual progression, trauma disclosure, or predetermined endings;
- inject the complete architecture into every generation;
- treat trope stages as mandatory scripts;
- store mutable Runtime state as permanent character truth;
- duplicate the same canonical information across card and lorebook fields.

14. First Implementation Slice

Build and prove this vertical path before expanding runtime orchestration:

sparse character or persona brief
→ HumanOS v2 structured draft
→ provenance review
→ deterministic card/lorebook routing
→ user preview
→ structured create operation
→ linked lorebook creation
→ save/reload verification


Required fixtures:

- sparse character creation;
- detailed character creation;
- sparse persona creation;
- refinement preserving unrelated facts;
- multiline and quoted content;
- unknown-field preservation;
- optional adult-module omission;
- card/lorebook deduplication;
- subject-variable correctness;
- linked-lorebook save and reload.

