import assert from "node:assert/strict";
import test from "node:test";

import {
  HUMANOS_RELATIONSHIP_CHECKPOINT_CANONICAL_CADENCE,
  addHumanOSRelationshipRecord,
  commitHumanOSRelationshipCheckpoint,
  createHumanOSRelationshipSave,
  createManagedHumanOSRelationshipProjection,
  forkHumanOSRelationshipSave,
  humanOSRelationshipPairKey,
  isHumanOSRelationshipProjectionStale,
  recordHumanOSCanonicalRelationshipMessage,
  validateHumanOSRelationshipSave,
} from "../../lib/character-card/humanosRelationshipMemory";

test("creates chat-local HumanOS relationship saves with strict pair identity", () => {
  const save = createHumanOSRelationshipSave({
    activeState: {
      phase: "Testing",
    },
    characterId: "julian",
    chatId: "chat-1",
    personaId: "mara",
  });

  assert.equal(save.kind, "relationshipSave");
  assert.equal(save.scope, "chat-local");
  assert.equal(save.authority, "canonicalCommitHistory");
  assert.equal(save.pairKey, "chat-1::julian::mara");
  assert.equal(
    humanOSRelationshipPairKey(save.identity),
    "chat-1::julian::mara",
  );
  assert.equal(validateHumanOSRelationshipSave(save).valid, true);

  assert.deepEqual(
    validateHumanOSRelationshipSave({ chatId: "chat-1" }).errors,
    ["relationship_identity_incomplete"],
  );
});

test("counts only selected canonical messages toward checkpoint cadence", () => {
  let save = createHumanOSRelationshipSave({
    characterId: "julian",
    chatId: "chat-1",
    personaId: "mara",
  });

  save = recordHumanOSCanonicalRelationshipMessage(save, {
    messageId: "candidate-ignored",
    selected: false,
    summary: "Should not count.",
  });

  assert.equal(save.commitHistory.length, 0);
  assert.equal(save.checkpoint.canonicalMessagesSince, 0);

  for (let index = 0; index < HUMANOS_RELATIONSHIP_CHECKPOINT_CANONICAL_CADENCE; index += 1) {
    save = recordHumanOSCanonicalRelationshipMessage(save, {
      evidenceRefs: [{
        id: `turn-${index + 1}`,
        kind: "canonical_turn",
        messageId: `m-${index + 1}`,
        summary: "Selected assistant turn.",
      }],
      messageId: `m-${index + 1}`,
      summary: `Canonical turn ${index + 1}`,
    });
  }

  assert.equal(save.commitHistory.length, HUMANOS_RELATIONSHIP_CHECKPOINT_CANONICAL_CADENCE);
  assert.equal(save.checkpoint.canonicalMessagesSince, HUMANOS_RELATIONSHIP_CHECKPOINT_CANONICAL_CADENCE);
  assert.equal(save.checkpoint.due, true);
});

test("commits checkpoints with lineage and managed projection staleness", () => {
  let save = createHumanOSRelationshipSave({
    characterId: "julian",
    chatId: "chat-1",
    personaId: "mara",
  });

  for (let index = 0; index < HUMANOS_RELATIONSHIP_CHECKPOINT_CANONICAL_CADENCE; index += 1) {
    save = recordHumanOSCanonicalRelationshipMessage(save, {
      messageId: `m-${index + 1}`,
      summary: `Canonical turn ${index + 1}`,
    });
  }

  save = commitHumanOSRelationshipCheckpoint(save, {
    sourceHash: "hash-a",
    summary: "Trust moved from procedural cooperation to cautious reliance.",
  });
  const projection = createManagedHumanOSRelationshipProjection(save, {
    content: "They now cooperate without needing to renegotiate every action.",
    sourceHash: "hash-a",
  });

  assert.equal(save.checkpoint.canonicalMessagesSince, 0);
  assert.equal(save.checkpoint.due, false);
  assert.equal(save.checkpoint.lastCommitCount, 10);
  assert.equal(save.checkpoint.sourceHash, "hash-a");
  assert.equal(save.checkpoint.lineage.length, 1);
  assert.equal(projection.authority, "relationshipSave");
  assert.equal(projection.authored, false);
  assert.equal(isHumanOSRelationshipProjectionStale(save, projection), false);
  assert.equal(
    isHumanOSRelationshipProjectionStale(
      { ...save, checkpoint: { ...save.checkpoint, sourceHash: "hash-b" } },
      projection,
    ),
    true,
  );
});

test("preserves milestone records and explicit fork provenance", () => {
  let save = createHumanOSRelationshipSave({
    characterId: "julian",
    chatId: "chat-1",
    personaId: "mara",
  });

  save = addHumanOSRelationshipRecord(save, {
    evidenceRefs: [{ id: "turn-44", kind: "canonical_turn" }],
    retention: "milestone",
    source: "canonical message",
    text: "First direct apology accepted after the rupture.",
  });
  save = addHumanOSRelationshipRecord(save, {
    retention: "fleeting",
    text: "Brief awkward silence in the hall.",
  });

  assert.equal(save.records.length, 2);
  assert.equal(save.milestones.length, 1);
  assert.match(save.milestones[0]?.text ?? "", /First direct apology/);

  assert.throws(
    () => forkHumanOSRelationshipSave(save, { chatId: "chat-2" }),
    /relationship_cross_chat_confirmation_required/,
  );

  const fork = forkHumanOSRelationshipSave(save, {
    chatId: "chat-2",
    confirm: true,
  });
  const normalizedFork = createHumanOSRelationshipSave(fork);

  assert.equal(fork.pairKey, "chat-2::julian::mara");
  assert.equal(fork.fork?.explicit, true);
  assert.equal(fork.fork?.sourcePairKey, "chat-1::julian::mara");
  assert.equal(fork.commitHistory.length, 0);
  assert.equal(fork.projections.length, 0);
  assert.equal(fork.checkpoint.lineage[0]?.forkedFrom, "chat-1::julian::mara");
  assert.equal(normalizedFork.fork?.sourcePairKey, "chat-1::julian::mara");
});
