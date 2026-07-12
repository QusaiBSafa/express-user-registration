# Infrastructure Overview
This application is a standalone Express server that handles user registration with validation.

## Data Models
- User:
  - `username`: string
  - `email`: string
  - `password`: string

## API Design
- **POST /register**: Registers a new user with validation checks.

## Key Decisions
- Using `express-validator` for input validation to ensure data integrity.
- Keeping the application lightweight and focused on a single responsibility.