# Express User Registration

## Description
A simple user registration API built with Express and TypeScript that includes input validation using express-validator.

## What's Built
- User registration endpoint with validation
- Error handling for validation failures

## How to Run
1. Clone the repository: `git clone <repo-url>`
2. Navigate to the directory: `cd express-user-registration`
3. Install dependencies: `npm install`
4. Start the server: `npm start`
5. API will be running on `http://localhost:3000`

## API Docs
### POST /register
- **Request Body:**
  - `username`: string (required)
  - `email`: string (required, must be a valid email)
  - `password`: string (required, min length 6)

- **Response:**
  - `201 Created` on success
  - `400 Bad Request` on validation errors

## Environment Variables
- `PORT`: Port number for the server (default: 3000)
