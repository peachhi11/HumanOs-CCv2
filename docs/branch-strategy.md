# HumanOS v2 Branch Strategy

This document defines when HumanOS material should stay in an existing branch, when it deserves a new branch, and when it should remain in a host-app repo instead.

## Branch families

### Landing

- `HumanOS-main`

Use for:

- repo overview
- navigation
- branch map
- branch strategy

Keep this branch lightweight.

### Architecture

- `docs/architecture`
- `architecture/contracts`
- `architecture/templates`
- `docs/memory-retrieval`

Use these when the material is canonical HumanOS framework content and can be understood without one specific host application.

### Future evaluation branches

Suggested pattern:

- `evaluation/scorecards`
- `evaluation/reviewer-contracts`

Use these when reviewer logic, QC criteria, or scoring systems become large enough to stand alone as first-class framework surfaces.

### Future workflow or authoring branches

Suggested pattern:

- `docs/authoring`
- `docs/world-boundaries`
- `docs/relationship-memory`

Use these when a framework concept grows beyond a short appendix and needs its own canon.

## When to create a new branch

Create a new branch when at least one of these is true:

1. the document defines a stable HumanOS term or contract
2. the surface is expected to be reused by more than one host application
3. the surface is no longer well-contained as a subsection inside another branch
4. the concept needs its own change history because it will evolve independently

Do not create a branch just because a note got long.

## When to keep content in Marinara or another host repo

Keep content in the host repo when it is primarily about:

- UI clicks and panels
- route shapes owned by that app
- storage adapters owned by that app
- one-app debugging steps
- one-app migration notes
- in-app assistant behavior that depends on product-specific tools or policies

Framework-first rule:

- HumanOS repo owns canonical concepts, contracts, templates, and boundary rules.
- Host repos own implementations, screens, commands, migrations, and product behavior.

## Preferred naming

Use these patterns unless there is a strong reason not to:

- `docs/<surface>` for explanatory framework docs
- `architecture/<surface>` for contracts or templates that define structure
- `evaluation/<surface>` for reviewer and scoring material

Avoid branch names that only describe a temporary task. Prefer names that describe enduring ownership.

## Practical rule of thumb

If the question is "what does HumanOS mean by this?", it belongs here.

If the question is "how does Marinara implement this right now?", it belongs in Marinara.
