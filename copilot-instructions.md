Purpose

This file defines mandatory engineering standards for all code generated or modified using GitHub Copilot in this repository.

For any task involving project scaffolding, code generation, code modification, or code push actions, Copilot MUST follow these instructions exactly.

This repository prioritizes consistency, security, correctness, and traceability over creativity.

GLOBAL RULES (ALL LANGUAGES)
Mandatory

You MUST follow the defined folder structures.

You MUST generate complete, runnable files.

You MUST preserve existing structure when modifying code.

You MUST use environment variables for configuration.

You MUST include documentation and tests where applicable.

You MUST keep changes minimal and targeted.

You MUST understand existing code before changing it.

Forbidden

Do NOT invent frameworks or architectures.

Do NOT collapse or merge layers.

Do NOT skip files “for brevity”.

Do NOT introduce breaking changes unless explicitly requested.

Do NOT push code without validation.

Do NOT ask clarifying questions during scaffolding.

OPERATING MODES
1️⃣ Project Scaffolding Mode

Triggered when the user asks to:

“Create a new project”

“Generate a starter template”

“Bootstrap a new service”

You MUST:

Detect the target language/framework

Generate the full folder structure

Create all mandatory files

Apply security and documentation rules

List all generated files

If structure is incorrect → regenerate before responding.

2️⃣ Code Generation Mode

Triggered when the user asks to:

Add new features

Create new modules

Implement functionality

You MUST:

Place code in the correct layer

Follow existing patterns

Add tests where appropriate

3️⃣ Code Modification Mode

Triggered when the user asks to:

Fix bugs

Refactor code

Improve readability

You MUST:

Change the minimum required code

Preserve public interfaces

Maintain backward compatibility

Clearly explain what was changed and why

🚀 CODE PUSH / COMMIT MODE (STRICT)

Triggered ONLY when the user explicitly says:

“Push the code”

“Commit these changes”

“Create a commit”

Mandatory Pre-Push Validation

Before pushing or committing code, Copilot MUST:

Analyze and understand the changes

Identify files modified

Understand the intent of the changes

Verify changes align with repository standards

Validate correctness

Ensure code compiles or is syntactically valid

Ensure no secrets or credentials are introduced

Ensure tests (if present) are not broken

Summarize changes

Provide a clear summary of:

What changed

Why it changed

Any risks or assumptions

Generate a valid commit message

Commit message MUST:

Be concise and descriptive

Reflect actual changes

Follow this format:

<type>: <short summary>

(optional detailed explanation)


Examples

feat: add user validation middleware
fix: handle null response from payment API
refactor: simplify service layer error handling


Proceed with push ONLY after validation

If validation fails → DO NOT push

Instead, explain what must be fixed

If agent-based push is not supported, Copilot MUST simulate this process and provide the exact commit message and validation summary.

🔵 NODE.JS BACKEND (EXPRESS ONLY)
Structure
/src
  /routes
  /controllers
  /services
  /middlewares
  /config
/tests
README.md
.env.example
package.json

Rules

Routes: routing only

Controllers: HTTP logic only

Services: business logic only

Entry files: bootstrap only

🟢 PYTHON BACKEND (FASTAPI ONLY)
Structure
/app
  /api
  /core
  /services
  /models
/tests
README.md
.env.example
requirements.txt

Rules

API routes in /api

Business logic in /services

Configuration in /core

No global mutable state

🟣 FRONTEND (REACT)
Structure
/src
  /components
  /pages
  /services
  /hooks
  /styles
/tests
README.md
.env.example
package.json

Rules

Components are presentational by default

API calls in /services

No inline styles

🔐 SECURITY (NON-NEGOTIABLE)

Never hardcode secrets

Never commit credentials

Always include .env.example

Validate inputs and payloads

Handle errors safely

If any rule conflicts, security takes precedence.

🧪 TESTING

Every new service/module MUST include:

At least one unit test

One negative test

Tests MUST be runnable without modification

📄 DOCUMENTATION

README.md MUST include:

Purpose

Setup instructions

Environment variables

Run and test commands

🔁 SELF-VERIFICATION (MANDATORY)

Before responding, Copilot MUST:

Verify folder structure compliance

Verify required files exist

Verify security rules are met

Verify commit rules (if applicable)

List generated or modified files

If any requirement is missing → regenerate before responding.

FINAL DIRECTIVE

This repository enforces standardized, auditable engineering practices.

Creativity is discouraged

Consistency and traceability are mandatory

Human review is expected

Follow these instructions exactly.