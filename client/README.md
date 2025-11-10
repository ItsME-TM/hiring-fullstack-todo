# Frontend (client)

This is the React + Vite frontend for the hiring-fullstack-todo project. It implements the UI for creating, listing, updating and deleting todos and talks to the backend API at `/api/todos` by default.

## Prerequisites

- Node.js 18.x (recommended)
- npm (or a compatible package manager)

## Quick start

1. Open a terminal and change into the client folder:

   cd client

2. Install dependencies:

   npm install

3. Start the dev server (with HMR):

   npm run dev

4. Open your browser at http://localhost:5173

## Scripts

- npm run dev — start Vite dev server
- npm run build — build production assets
- npm run preview — preview built assets locally
- npm run lint — run ESLint

These match the scripts defined in `client/package.json`.

## Environment / API base URL

The frontend reads the API base URL from the Vite env variable `VITE_API_URL`. By default the app falls back to `http://localhost:3000/api/todos`.

Create a `.env` (or `.env.local`) file in the `client/` directory to override the backend URL, for example:

```
VITE_API_URL=http://localhost:3000/api/todos
```

Important: Variables with the `VITE_` prefix are exposed to the client bundle. Do NOT put secrets here.

## Common troubleshooting

- If the frontend shows CORS errors, ensure the backend is running and that `server/.env` has `FRONTEND_URL` set to `http://localhost:5173` (or `*` for development).
- If API calls fail, confirm the backend is reachable at the URL set in `VITE_API_URL`.
- To inspect API requests, open the browser DevTools network tab.

## Notes

- This project uses Tailwind CSS and Vite. Configuration files are present in the repo root of the client.
- For production, build the app (`npm run build`) and serve the `dist` folder using a static host or integrate with the backend server as needed.
