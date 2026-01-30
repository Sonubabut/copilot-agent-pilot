# Copilot Agent Pilot

A Node.js backend project following strict engineering standards for structure, security, and maintainability.

## Getting Started

1. Copy `.env.example` to `.env` and fill in your environment variables.
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the application:
   ```sh
   npm start
   ```

## Project Structure

- `src/routes` - Express route definitions
- `src/controllers` - HTTP logic
- `src/services` - Business logic
- `src/middlewares` - Express middlewares
- `src/config` - Configuration files
- `tests` - Test files

## Security
- Never hardcode secrets
- Never commit credentials
- Always include `.env.example`
- Validate inputs and payloads
- Handle errors safely
