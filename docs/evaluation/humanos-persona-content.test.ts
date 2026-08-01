import assert from "node:assert/strict";
import test from "node:test";

import {
  compilePersonaContentForGenerator,
  compilePersonaContentPrompt,
  createHumanOSPersonaRoutingReview,
  createEmptyPersonaContent,
  createPersonaContent,
  hasPersonaContent,
} from "../../lib/character-card/humanosPersonaContent";
import {
  CHARACTER_HUMANOS_MODULE_HINTS,
  getHumanOSFieldRows,
  PERSONA_HUMANOS_MODULES,
  readHumanOSStringAtPath,
  updateHumanOSStringAtPath,
} from "../../lib/character-card/humanosFieldModules";

test("normalizes empty HumanOS persona content", () => {
  const content = createPersonaContent(null);

  assert.deepEqual(content, createEmptyPersonaContent());
  assert.equal(hasPersonaContent(content), false);
});

test("compiles HumanOS persona modules into prompt-safe profile prose", () => {
  const empty = createEmptyPersonaContent();
  const prompt = compilePersonaContentPrompt({
    ...empty,
    basic: {
      ...empty.basic,
      background: "Former medic rebuilding a quieter life",
      nameAlias: "Mara",
      roleArchetype: "guarded caretaker",
      startingSituation: "Arrives after a failed rescue",
    },
    behaviorPattern: {
      interpretation: "they may not come back",
      response: "asks directly after a quiet delay",
      trigger: "someone disappears without warning",
    },
    psychology: {
      ...empty.psychology,
      boundaries: "no public humiliation, no user puppeting",
      coreTraits: "observant, loyal, slow to trust",
      desires: "reliable partnership",
    },
  });

  assert.match(prompt, /User Persona Profile:/);
  assert.match(prompt, /Name or alias: Mara/);
  assert.match(prompt, /Core traits: observant, loyal, slow to trust/);
  assert.match(
    prompt,
    /someone disappears without warning -> they may not come back -> asks directly after a quiet delay/,
  );
  assert.doesNotMatch(prompt, /forced_user_behavior/);
});

test("routes HumanOS persona modules into existing persona generator inputs", () => {
  const empty = createEmptyPersonaContent();
  const routing = compilePersonaContentForGenerator({
    ...empty,
    basic: {
      ...empty.basic,
      nameAlias: "Mara",
      roleArchetype: "guarded caretaker",
      startingSituation: "Waiting at the safehouse after a failed rescue",
    },
    psychology: {
      ...empty.psychology,
      boundaries: "do not narrate private thoughts",
      coreTraits: "observant, loyal",
      desires: "reliable partnership, quiet repair",
    },
    relationalStyle: {
      ...empty.relationalStyle,
      attachmentStyle: "earned secure",
      conflictStyle: "space then direct repair",
    },
    storyHooks: {
      ...empty.storyHooks,
      externalPressures: "old debts from the failed rescue",
      goals: "make the safehouse functional",
      internalConflicts: "wants closeness but distrusts need",
    },
  });

  assert.equal(routing.name, "Mara");
  assert.equal(routing.archetype, "guarded caretaker");
  assert.equal(routing.emotionalNeed, "reliable partnership");
  assert.match(routing.boundaries, /do not narrate private thoughts/);
  assert.match(routing.characteristics, /User Persona Profile:/);
  assert.match(routing.referenceContext, /Starting situation:/);
  assert.match(routing.referenceContext, /old debts from the failed rescue/);
  assert.deepEqual(routing.tags.slice(0, 4), [
    "humanos persona",
    "guarded caretaker",
    "earned secure",
    "observant",
  ]);
});

test("defines shared HumanOS persona modules for reusable field rendering", () => {
  const moduleTitles = PERSONA_HUMANOS_MODULES.map((module) => module.title);

  assert.deepEqual(moduleTitles.slice(0, 3), [
    "User Persona Basic",
    "Persona Psychology",
    "Cognition",
  ]);
  assert.ok(PERSONA_HUMANOS_MODULES.some((module) => module.downstream));
  assert.ok(PERSONA_HUMANOS_MODULES.some((module) => module.optional));
  assert.equal(
    getHumanOSFieldRows(PERSONA_HUMANOS_MODULES[0]!.fields[0]!),
    2,
  );
});

test("updates nested HumanOS persona fields through shared module paths", () => {
  const empty = createEmptyPersonaContent();
  const updated = updateHumanOSStringAtPath(
    empty,
    ["psychology", "boundaries"],
    "no user puppeting",
  );

  assert.equal(
    readHumanOSStringAtPath(updated, ["psychology", "boundaries"]),
    "no user puppeting",
  );
  assert.equal(updated.psychology.boundaries, "no user puppeting");
});

test("reviews HumanOS persona routing destinations", () => {
  const empty = createEmptyPersonaContent();
  const review = createHumanOSPersonaRoutingReview({
    ...empty,
    behaviorPattern: {
      interpretation: "distance means rejection",
      response: "asks directly",
      trigger: "delayed reply",
    },
    psychology: {
      ...empty.psychology,
      boundaries: "no public humiliation",
      coreTraits: "warm, observant",
    },
    storyHooks: {
      ...empty.storyHooks,
      goals: "find a safer rhythm",
    },
  });

  assert.equal(review.valid, true);
  assert.equal(review.counts.privateNotes, 1);
  assert.equal(review.counts.runtimeReference, 3);
  assert.equal(review.counts.matchingContext, 1);
  assert.ok(
    review.fields.some(
      (field) =>
        field.field === "psychology.boundaries" &&
        field.destination === "privateNotes",
    ),
  );
});

test("keeps character HumanOS section hints aligned with core editor groups", () => {
  assert.match(
    CHARACTER_HUMANOS_MODULE_HINTS["Character Engine"]?.hint ?? "",
    /Machine-facing cognition/,
  );
  assert.match(
    CHARACTER_HUMANOS_MODULE_HINTS["Card Compatibility"]?.hint ?? "",
    /CCv3/,
  );
  assert.match(
    CHARACTER_HUMANOS_MODULE_HINTS["Portrait Prompt"]?.hint ?? "",
    /Image-generation prompt/,
  );
  assert.equal(CHARACTER_HUMANOS_MODULE_HINTS["Writer Bible"]?.optional, true);
  assert.equal(CHARACTER_HUMANOS_MODULE_HINTS["Psychology"]?.downstream, true);
});
