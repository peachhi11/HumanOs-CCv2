import assert from "node:assert/strict";
import test from "node:test";

import {
  checkHumanOSRelationshipBeat,
  createHumanOSRelationshipFramework,
  humanOSRelationshipFrameworkToMarkdown,
} from "../../lib/character-card/humanosRelationshipFramework";

test("normalizes qualitative HumanOS relationship frameworks", () => {
  const framework = createHumanOSRelationshipFramework({
    blockedBeats: "instant confession, public claim",
    dominantType: "slow-burn rivals",
    modifiers: {
      attachmentTone: ["guarded", "earned secure"],
      power: "shifting; equalizing",
    },
    phase: "Testing",
    phaseRationale: "They cooperate under pressure but still verify motives.",
    plausibleNextBeats: "forced cooperation, quiet respect",
    route: "alt",
    trustWeb: {
      emotional: "fragile",
      practical: "growing through crisis competence",
    },
  });

  assert.equal(framework.kind, "relationshipFramework");
  assert.equal(framework.route, "ALT");
  assert.equal(framework.currentPhase, "Testing");
  assert.deepEqual(framework.modifiers.power, ["shifting", "equalizing"]);
  assert.deepEqual(framework.blockedOrPrematureBeats, [
    "instant confession",
    "public claim",
  ]);
  assert.equal(framework.trustWeb.practical, "growing through crisis competence");
});

test("renders relationship frameworks as readable review markdown", () => {
  const markdown = humanOSRelationshipFrameworkToMarkdown({
    currentPhase: "Repair",
    dominantType: "rupture repair",
    plausibleNextBeats: ["accountability", "changed behavior"],
    trustWeb: {
      emotional: "damaged but not gone",
      moral: "requires apology with cost",
    },
  });

  assert.match(markdown, /# Relationship Framework/);
  assert.match(markdown, /## Dominant Type\nrupture repair/);
  assert.match(markdown, /Emotional: damaged but not gone/);
  assert.match(markdown, /Moral: requires apology with cost/);
  assert.match(markdown, /accountability/);
});

test("checks canon relationship beats against evidence and blocked beats", () => {
  const framework = createHumanOSRelationshipFramework({
    blockedOrPrematureBeats: ["confession", "settled bond"],
    dominantType: "guarded slow burn",
    modifiers: {
      pressure: ["external danger"],
    },
  });

  assert.deepEqual(
    checkHumanOSRelationshipBeat({
      beat: "confession after one kind gesture",
      framework,
      runtimeEvidence: "turn-9",
    }).reasons,
    ["blockedByFramework"],
  );

  assert.deepEqual(
    checkHumanOSRelationshipBeat({
      beat: "quiet cooperation",
      framework,
    }).reasons,
    ["missingEvidence"],
  );

  const branch = checkHumanOSRelationshipBeat({
    beat: "run away together",
    canonAllows: false,
    framework,
    runtimeEvidence: "turn-14",
  });

  assert.equal(branch.allowed, false);
  assert.equal(branch.route, "BRANCH");
  assert.deepEqual(branch.reasons, ["canonConflict"]);

  const allowed = checkHumanOSRelationshipBeat({
    beat: "quiet cooperation",
    framework,
    runtimeEvidence: "turn-15",
  });

  assert.equal(allowed.allowed, true);
  assert.equal(allowed.fit.dominantType, true);
  assert.equal(allowed.fit.modifiers, true);
});
