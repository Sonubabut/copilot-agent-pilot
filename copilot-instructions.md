## Scope
Copilot may:
- Fix small bugs
- Add tests
- Update documentation
- Refactor small functions

Copilot must NOT:
- Change authentication
- Handle secrets
- Modify production configs

## Architecture
- Routes → Controllers → Services
- No direct DB access from routes

## PR Rules
- One issue per PR
- Add or update tests
- Explain changes clearly
