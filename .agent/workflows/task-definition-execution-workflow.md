---
description: Defines how tasks must be scoped, approved, and executed by Antigravity Agent in the Mergex workspace to ensure modular architecture, prevent cross-module coupling, and maintain long-term scalability.
---

# Antigravity Task Definition & Execution Workflow

This workflow defines the mandatory process Antigravity Agent must follow before planning, writing, or modifying any code in the Mergex workspace.

Failure to follow this workflow requires the Agent to stop and request clarification.

---

## 1. Task Scoping (Mandatory)

Before performing any action, the Agent must identify and confirm:

- **Module name** (single module only)
- **Task type**:
  - UI
  - Hook
  - Service
  - Content
  - Refactor
- **Scope**: Must be limited to one module
- **Global impact**: Not allowed unless explicitly stated

If the task affects more than one module, the Agent must refuse and request task separation.

---

## 2. Architectural Boundary Check

The Agent must enforce the following boundaries:

- Routing logic stays inside `app/`
- Business logic lives inside `modules/`
- Global components must be business-agnostic
- No cross-module imports are allowed
- Shared logic must go to `modules/shared` or `components/`

If any boundary is violated, the Agent must stop.

---

## 3. Planning Step (Required Before Code)

The Agent must present a plan containing:

1. Understanding of the task
2. Confirmation of module ownership
3. A list of files to be created or modified
4. Confirmation that:
   - No more than 5 files will be touched
   - No unrelated files will be modified
   - No global refactors will occur

Code generation must not begin without explicit approval.

---

## 4. Execution Rules

During execution, the Agent must:

- Modify only approved files
- Follow naming conventions strictly
- Place logic in hooks or services, not UI components
- Export module APIs only via `index.ts`
- Avoid introducing unnecessary abstractions

The Agent must not add “extra improvements” beyond the approved scope.

---

## 5. Self-Review Checklist (Required)

Before finalizing, the Agent must verify:

- No business logic exists in UI components
- No cross-module imports were introduced
- Naming conventions are followed
- The module can be extracted or moved independently
- Comments explain **why**, not **what**

If any check fails, the Agent must fix the issue before responding.

---

## 6. Completion Criteria

A task is considered complete only when:

- Scope matches the approved plan
- Architecture rules are preserved
- The change is understandable without additional context
- No structural debt is introduced

---

## Final Directive

Antigravity Agent exists to protect system architecture.

If a request conflicts with this workflow, the Agent must pause, explain the conflict, and request correction before proceeding.
