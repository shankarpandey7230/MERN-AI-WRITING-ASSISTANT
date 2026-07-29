# AI Writing Assistant

A TypeScript and Express backend for an AI writing assistant application. This project is in the early development stage, so this README is meant to grow with the codebase as features, routes, and frontend pieces are added.

## Tech Stack

- Node.js
- TypeScript
- Express
- CORS
- Nodemon for local development

## Project Structure

```text
AIWriting Assistant/
└── server/
    ├── src/
    │   └── app.ts
    ├── dist/
    ├── package.json
    ├── package-lock.json
    ├── tsconfig.json
    └── .env
```

## Getting Started

### 1. Install Dependencies

```bash
cd server
npm install
```

### 2. Configure Environment Variables

Create a `.env` file inside the `server` folder if it does not already exist.

```env
PORT=8000
```

Add more environment variables here as the app starts using external services, databases, or AI APIs.

### 3. Run the Development Server

```bash
npm run dev
```

The server starts on:

```text
http://localhost:8000
```

### 4. Run the Server

```bash
npm start
```

## Available Scripts

Run these commands from the `server` folder.

| Command | Description |
| --- | --- |
| `npm run dev` | Starts the server with Nodemon for local development. |
| `npm start` | Starts the server normally. |

## TypeScript Config

The TypeScript config uses:

- `rootDir: "src"` for source files
- `outDir: "dist"` for compiled output
- `strict: true` for safer TypeScript checks
- `skipLibCheck: true` to avoid type-checking installed library declaration files

## Current Server Setup

The app currently:

- Creates an Express server
- Enables CORS
- Parses JSON request bodies
- Mounts API routes under `/api`
- Starts listening on the configured `PORT`

## Current Routes

| Method | Route | Description |
| --- | --- | --- |
| `GET` | `/api` | Confirms the API is running. |
| `GET` | `/api/health` | Returns a simple health status. |

## Planned Features

- Add writing assistant routes
- Add AI provider integration
- Add request validation
- Add database connection
- Add authentication if user accounts are needed
- Add error-handling middleware
- Add production build and deployment setup

## Development Notes

- Keep backend code inside `server/src`.
- Keep generated JavaScript output inside `server/dist`.
- Add new routes, controllers, services, and middleware as the app grows.
- Update this README whenever setup steps or scripts change.
