Purpose

This file defines mandatory engineering standards for all code generated or modified using GitHub Copilot in this repository.

For any task involving project scaffolding, code generation, or code modification, Copilot MUST follow these instructions exactly.

This repository prioritizes consistency, security, and maintainability over creativity.

GLOBAL RULES (ALL LANGUAGES)
Mandatory

You MUST follow the defined folder structures.

You MUST generate complete, runnable files.

You MUST preserve existing structure when modifying code.

You MUST use environment variables for configuration.

You MUST include documentation and tests where applicable.

You MUST keep changes minimal and targeted.

Forbidden

Do NOT invent frameworks or architectures.

Do NOT collapse or merge layers.

Do NOT skip files “for brevity”.

Do NOT introduce breaking changes unless explicitly requested.

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

If the structure is incorrect → regenerate before responding.

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