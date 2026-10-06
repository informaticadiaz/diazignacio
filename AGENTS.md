# Workspace Instructions

## Scope

This repository contains the public Diaz Ignacio website and a separate `nodo/`
design handoff bundle.

## Rules

- Read the nearest `AGENTS.md` and `CODEX_STATE.md` before changing files.
- Treat `nodo/` as a design prototype. Do not modify it unless the requested
  work explicitly concerns Nodo.
- Before implementing the Nodo design, read `nodo/project/Nodo.html` and every
  locally imported asset it references, as required by `nodo/README.md`.
- Keep the root static site independent of the Nodo handoff bundle.
- Store untracked runtime or execution data only in `data/`; never commit it.

## Verification

- For static-site edits, inspect the changed HTML, CSS, or JavaScript for
  correct local asset paths and valid document structure.
- Do not install dependencies or introduce build tooling without explicit user
  approval.
