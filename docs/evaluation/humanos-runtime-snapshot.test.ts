import assert from "node:assert/strict";
import test from "node:test";

import {
  HUMANOS_RUNTIME_SNAPSHOT_FIELDS,
  compileHumanOSRuntimeSnapshotPrompt,
  commitHumanOSRuntimeSnapshot,
  compareHumanOSRuntimeSnapshots,
  createHumanOSRuntimeSnapshot,
  humanOSRuntimeSnapshotIsEmpty,
  normalizeHumanOSRuntimeHistory,
  normalizeHumanOSRuntimeMetrics,
} from "../../lib/character-card/humanosRuntimeSnapshot";

test("normalizes compact HumanOS runtime snapshots with evidence and bounded lists", () => {
  const snapshot = createHumanOSRuntimeSnapshot({
    capturedAt: "2026-06-13T00:00:00.000Z",
    evidenceRef: "turn-17",
    pairKey: "julian:user",
    sceneState: " {{char}} waits by the door after {{user}} says goodbye. ",
    activePressure: "runtime-event:17:goodbye goodbye pressure",
    relationshipState: "Mutual longing, not yet confessed.",
    metrics: [
      {
        name: "Trust",
        value: "growing",
        owner: "{{char}}",
        interpretation: "They can rely on the active partner in crisis.",
        updateRule: "Changes only after visible follow-through.",
      },
      { name: "" },
      ...Array.from({ length: 20 }, (_, index) => ({
        name: `Extra ${index}`,
        value: "ignored after limit",
      })),
    ],
    history: Array.from({ length: 12 }, (_, index) => ({
      committedAt: `2026-06-13T00:00:${String(index).padStart(2, "0")}.000Z`,
      evidenceRef: `turn-${index}`,
      changedFields: ["sceneState", "invalid"],
      summary: `History ${index}`,
    })),
  });

  assert.equal(snapshot.runtimeVersion, 1);
  assert.equal(snapshot.scope, "creation-test");
  assert.equal(snapshot.sceneState, "the character waits by the door after the active partner says goodbye.");
  assert.equal(snapshot.activePressure, "goodbye pressure");
  assert.equal(snapshot.metrics.length, 11);
  assert.equal(snapshot.metrics[0]?.owner, "the character");
  assert.equal(snapshot.history.length, 10);
  assert.deepEqual(snapshot.history[0]?.changedFields, ["sceneState"]);
});

test("compares and commits runtime changes with an evidence-linked history entry", () => {
  const previous = createHumanOSRuntimeSnapshot({
    capturedAt: "2026-06-13T00:00:00.000Z",
    sceneState: "The scene is quiet.",
    relationshipState: "Cautious allies.",
    metrics: [{ name: "Trust", value: "low" }],
  });
  const draft = {
    ...previous,
    sceneState: "The scene is still quiet, but the goodbye has landed.",
    relationshipState: "Cautious allies with visible separation pressure.",
    metrics: [{ name: "Trust", value: "strained but intact" }],
  };
  const changed = compareHumanOSRuntimeSnapshots(previous, draft);
  const committed = commitHumanOSRuntimeSnapshot(previous, draft, "turn-22");

  assert.deepEqual(changed, ["sceneState", "relationshipState", "metrics"]);
  assert.equal(committed.evidenceRef, "turn-22");
  assert.equal(committed.history.length, 1);
  assert.deepEqual(committed.history[0]?.changedFields, changed);
  assert.match(committed.history[0]?.summary ?? "", /scene state/);
});

test("does not commit when the runtime draft has no meaningful changes", () => {
  const previous = createHumanOSRuntimeSnapshot({
    sceneState: "The same scene.",
  });
  const committed = commitHumanOSRuntimeSnapshot(previous, {
    ...previous,
    evidenceRef: "new-reference-only",
  });

  assert.equal(committed.evidenceRef, "");
  assert.deepEqual(committed.history, []);
});

test("compiles runtime snapshots into concise prompt-safe now-state prose", () => {
  const prompt = compileHumanOSRuntimeSnapshotPrompt({
    evidenceRef: "turn-31",
    sceneState: "The character is recovering after the confession.",
    activePressure: "{{user}} has not answered yet.",
    relationshipState: "Mutual longing has become explicit but unstable.",
    updateNotes: "Do not reset the emotional progress from this scene.",
    metrics: [
      {
        name: "Trust",
        value: "growing",
        owner: "{{char}}",
        interpretation: "Evidence supports cautious reliance.",
        updateRule: "Only rises after consistent return.",
      },
      {
        name: "Romantic tension",
        value: "high",
      },
    ],
  });

  assert.match(prompt, /\[HUMANOS RUNTIME SNAPSHOT\]/);
  assert.match(prompt, /Private mutable now-state/);
  assert.match(prompt, /Evidence reference: turn-31/);
  assert.match(prompt, /Trust=growing/);
  assert.doesNotMatch(prompt, /\{\{user\}\}|\{\{char\}\}/);
});

test("supports empty-state detection and standalone normalizers", () => {
  assert.equal(humanOSRuntimeSnapshotIsEmpty({}), true);
  assert.equal(
    humanOSRuntimeSnapshotIsEmpty({
      metrics: [{ name: "Trust", value: "low" }],
    }),
    false,
  );
  assert.equal(normalizeHumanOSRuntimeMetrics("not an array").length, 0);
  assert.equal(normalizeHumanOSRuntimeHistory("not an array").length, 0);
  assert.deepEqual(HUMANOS_RUNTIME_SNAPSHOT_FIELDS, [
    "sceneState",
    "activePressure",
    "relationshipState",
    "temporaryConditions",
    "recentChanges",
    "updateNotes",
    "metrics",
  ]);
});
