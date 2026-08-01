import assert from "node:assert/strict";
import test from "node:test";

import {
  HUMANOS_CHARACTER_PERSONA_MATCHING_DIMENSIONS,
  createHumanOSCharacterPersonaMatching,
  humanOSCharacterPersonaMatchingToMarkdown,
  validateHumanOSCharacterPersonaMatching,
} from "../../lib/character-card/humanosCharacterPersonaMatching";

test("normalizes multidimensional HumanOS character-persona matching", () => {
  const matching = createHumanOSCharacterPersonaMatching({
    boundaryConsentCompatibility: "Strong if both keep explicit choice visible.",
    communicationCompatibility: "Dry humor meets direct reassurance.",
    conflictCompatibility: "Productive friction when pressure stays specific.",
    desiredUserExperience: "Slow-burn protection without control.",
    emotionalCompatibility: "Guarded warmth meets steady presence.",
    eroticCompatibility: "Out of scope unless the creator opts in.",
    eroticCompatibilityInScope: false,
    evidenceRefs: "persona-draft-1; character-draft-2",
    growthCompatibility: "Both benefit from practicing clean repair.",
    lifestyleCompatibility: "Both tolerate long work hours and quiet recovery.",
    likelyDestructiveLoops: "Delayed replies can become abandonment tests.",
    narrativeChemistry: "High tension through competence, restraint, and care.",
    repairCompatibility: "Best repaired through explanation plus changed behavior.",
    valueAlignment: "Both value autonomy and loyal follow-through.",
  });

  assert.equal(matching.kind, "characterPersonaMatching");
  assert.equal(matching.matchingVersion, 1);
  assert.equal(matching.eroticCompatibilityInScope, false);
  assert.equal(matching.eroticCompatibility, "");
  assert.deepEqual(matching.evidenceRefs, [
    "persona-draft-1",
    "character-draft-2",
  ]);
  assert.equal(
    matching.boundaryConsentCompatibility,
    "Strong if both keep explicit choice visible.",
  );
});

test("keeps erotic compatibility only when explicitly in scope", () => {
  const matching = createHumanOSCharacterPersonaMatching({
    eroticCompatibility:
      "Both prefer explicit consent language and slow escalation.",
    eroticCompatibilityInScope: true,
  });

  assert.equal(matching.eroticCompatibilityInScope, true);
  assert.match(matching.eroticCompatibility, /explicit consent/);
});

test("renders matching as prose review markdown rather than a percentage", () => {
  const markdown = humanOSCharacterPersonaMatchingToMarkdown({
    boundaryConsentCompatibility: "Needs clear opt-in around touch.",
    communicationCompatibility: "Works best through direct questions.",
    conflictCompatibility: "Sharp, but repairable.",
    desiredUserExperience: "Earned closeness.",
    emotionalCompatibility: "Slow warmth.",
    growthCompatibility: "Learns to ask instead of testing.",
    lifestyleCompatibility: "Compatible quiet routines.",
    likelyDestructiveLoops: "Silence becomes a rejection story.",
    narrativeChemistry: "Good slow-burn tension.",
    repairCompatibility: "Changed behavior matters more than apologies.",
    valueAlignment: "Shared autonomy.",
  });

  assert.match(markdown, /# Character-Persona Matching/);
  assert.match(markdown, /not a compatibility percentage/);
  assert.match(markdown, /## Value Alignment\nShared autonomy/);
  assert.match(markdown, /## Erotic Compatibility\nUnknown/);
  assert.doesNotMatch(markdown, /87%|score/i);
});

test("validates missing dimensions and rejects numeric compatibility scoring", () => {
  const missing = validateHumanOSCharacterPersonaMatching({
    valueAlignment: "Shared autonomy.",
  });

  assert.equal(missing.valid, false);
  assert.ok(missing.missing.includes("emotionalCompatibility"));
  assert.equal(missing.missing.includes("eroticCompatibility"), false);

  const numeric = validateHumanOSCharacterPersonaMatching({
    boundaryConsentCompatibility: "Good.",
    communicationCompatibility: "Good.",
    compatibilityScore: 87,
    conflictCompatibility: "Good.",
    desiredUserExperience: "Slow burn.",
    emotionalCompatibility: "Good.",
    growthCompatibility: "Good.",
    lifestyleCompatibility: "Good.",
    likelyDestructiveLoops: "None obvious.",
    narrativeChemistry: "Good.",
    repairCompatibility: "Good.",
    valueAlignment: "Good.",
  });

  assert.equal(numeric.hasNumericCompatibilityScore, true);
  assert.equal(numeric.valid, false);
});

test("exposes the full matching dimension set", () => {
  assert.deepEqual(HUMANOS_CHARACTER_PERSONA_MATCHING_DIMENSIONS, [
    "valueAlignment",
    "emotionalCompatibility",
    "conflictCompatibility",
    "repairCompatibility",
    "communicationCompatibility",
    "lifestyleCompatibility",
    "boundaryConsentCompatibility",
    "eroticCompatibility",
    "narrativeChemistry",
    "growthCompatibility",
    "likelyDestructiveLoops",
    "desiredUserExperience",
  ]);
});
