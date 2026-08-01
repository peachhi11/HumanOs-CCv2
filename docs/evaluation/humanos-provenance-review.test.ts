import assert from "node:assert/strict";
import test from "node:test";

import {
  compileHumanOSProvenanceReviewSummary,
  createHumanOSProvenanceReview,
} from "../../lib/character-card/humanosProvenanceReview";
import {
  createEmptyCharacterCreationForm,
} from "../../lib/character-card/characterCreationFormCompiler";
import {
  createCharacterCreationNpcMiniProfile,
} from "../../lib/character-card/characterCreationNpcProfiles";

test("flags an empty HumanOS provenance review as needing input", () => {
  const review = createHumanOSProvenanceReview(createEmptyCharacterCreationForm());

  assert.equal(review.valid, false);
  assert.deepEqual(review.fields, []);
  assert.match(review.errors.join("\n"), /No non-empty HumanOS fields/);
});

test("routes creator-form truth into card, lorebook, scenario, runtime, and private architecture lanes", () => {
  const empty = createEmptyCharacterCreationForm();
  const form = {
    ...empty,
    writerBible: {
      ...empty.writerBible,
      humanSummary: "A human-facing character bible for the creator.",
      worldReference: "A coastal hospital where storms cut off the roads.",
      relationshipArc: "Former rivals become trusted allies after a shared crisis.",
      activeThreads: "A missing patient, a storm warning, and unfinished trust repair.",
    },
    characterEngine: {
      ...empty.characterEngine,
      coreBelief: "Protection must preserve the other person's agency.",
      decisionRules: [
        {
          id: "protect_without_control",
          drive: "Protection",
          question: "Does the other person request help?",
          yes: "Offer practical help and name the choice clearly.",
          no: "Stay nearby, observe, and keep an exit open.",
          constraints: "Never override consent to reduce his own fear.",
          visibleBehaviors:
            "Keeps his hands visible, lowers his voice, and offers options.",
          alternativeAction: "Ask before touching and offer a practical exit.",
        },
      ],
    },
    identity: {
      ...empty.identity,
      characterName: "Julian Vale",
      occupation: "Emergency physician",
      birthplace: "Hobart",
      pronouns: "he/him",
    },
    lifestyle: {
      ...empty.lifestyle,
      residence: "A hospital apartment near the old wharf",
      routines: "Checks supplies before dawn and drinks coffee standing up",
      wealth: "Comfortable but time-poor",
      workLifeBalance: "Poor during storm season",
      hobbies: "Restoring fountain pens",
    },
    relationships: {
      ...empty.relationships,
      affiliationCore: {
        factionOrGroup: "Hospital crisis team",
        hierarchicalRank: "Senior physician to volunteer medic",
        publicStatus: "Publicly professional, privately protective",
      },
      emotionalBonds: {
        attachmentType: "Slow-earned trust",
        trustMetric: "Practical reliability before confession",
        sharedHistoryAnchor:
          "They survived an overnight evacuation together.",
      },
      behavioralFriction: {
        ideologicalClash: "Safety versus autonomy",
        boundaries: "Does not touch without permission.",
        microAggressionsOrTells:
          "Switches to clinical language when emotionally exposed.",
      },
      targetOverrides: [
        {
          targetId: "{{user}}",
          contextualPromptInjection:
            "With {{user}}, he checks consent before every protective action.",
        },
      ],
    },
    npcNetwork: {
      discoveryNotes: "The ex-chief keeps testing Julian's command decisions.",
      miniProfiles: [
        {
          ...createCharacterCreationNpcMiniProfile({
            characterName: "Julian Vale",
            index: 0,
            profileType: "rival",
          }),
          name: "Mara Sloane",
          relationshipToCharacter: "Former mentor turned rival",
          storyFunction: "Pressure-tests his leadership under crisis.",
        },
      ],
    },
  };

  const review = createHumanOSProvenanceReview(form, {
    evidenceRef: "creator-draft-1",
    source: "unit test",
  });

  assert.equal(review.valid, true);
  assert.equal(review.contractVersion, "humanos-provenance-v1");
  assert.equal(review.counts.byDestination.card > 0, true);
  assert.equal(review.counts.byDestination.linkedLorebook > 0, true);
  assert.equal(review.counts.byDestination.scenario > 0, true);
  assert.equal(review.counts.byDestination.runtime > 0, true);
  assert.equal(review.counts.byDestination.privateArchitecture > 0, true);

  assert.equal(
    review.fields.find((field) => field.field === "identity.characterName")
      ?.provenance.destination,
    "card",
  );
  assert.equal(
    review.fields.find((field) => field.field === "identity.birthplace")
      ?.provenance.destination,
    "scenario",
  );
  assert.equal(
    review.fields.find(
      (field) =>
        field.field === "relationships.emotionalBonds.sharedHistoryAnchor",
    )?.provenance.destination,
    "linkedLorebook",
  );
  assert.equal(
    review.fields.find(
      (field) =>
        field.field ===
        "relationships.targetOverrides[0].contextualPromptInjection",
    )?.provenance.destination,
    "runtime",
  );
  assert.equal(
    review.fields.find((field) => field.field === "characterEngine.coreBelief")
      ?.provenance.destination,
    "privateArchitecture",
  );
  assert.equal(
    review.fields.find(
      (field) =>
        field.field ===
        "characterEngine.decisionRules[0].alternativeAction",
    )?.provenance.reason.includes("alternative behavior"),
    true,
  );
});

test("compiles a concise HumanOS provenance summary for review manifests", () => {
  const empty = createEmptyCharacterCreationForm();
  const review = createHumanOSProvenanceReview({
    ...empty,
    identity: {
      ...empty.identity,
      characterName: "Mina Reyes",
    },
    characterEngine: {
      ...empty.characterEngine,
      coreBelief: "Trust is built through consistent return.",
    },
  });

  const summary = compileHumanOSProvenanceReviewSummary(review);

  assert.match(summary, /HumanOS Provenance Review/);
  assert.match(summary, /Status: Ready for review/);
  assert.match(summary, /Character card/);
  assert.match(summary, /Private architecture/);
});
