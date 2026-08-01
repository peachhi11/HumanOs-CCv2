# HumanOS Evaluation Specs

These files are executable reference specs for HumanOS evaluation behavior.

They are framework-level contracts, not a host-app implementation. A host application can port these specs into its own test runner and satisfy the imports from its own HumanOS implementation.

## Spec files

- [Character-persona matching](humanos-character-persona-matching.test.ts)
- [Persona content routing](humanos-persona-content.test.ts)
- [Provenance review](humanos-provenance-review.test.ts)
- [Relationship framework](humanos-relationship-framework.test.ts)
- [Relationship memory](humanos-relationship-memory.test.ts)
- [Runtime snapshot](humanos-runtime-snapshot.test.ts)

## Coverage

Together, these specs cover:

- qualitative character/persona matching without numeric compatibility scoring
- persona module routing into prompt-safe generator inputs
- provenance routing across card, lorebook, scenario, runtime, and private architecture lanes
- qualitative relationship framework checks, including `ALT` and `BRANCH` handling
- chat-local relationship saves, checkpoint cadence, managed projections, and explicit fork provenance
- compact runtime snapshots, evidence-linked commits, prompt-safe formatting, and bounded history

## Design rule

If a host application claims HumanOS compatibility, these specs describe the evaluation behavior it should preserve even when the local implementation names or storage details differ.
