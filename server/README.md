# Backend (server)

Express + MongoDB API for the hiring-fullstack-todo project.

This backend provides a small REST API to manage todos and is mounted under `/api/todos`.

## Prerequisites

- Node.js 18.x (the project `engines` field requests `18.x`)
- npm
- A MongoDB instance (Atlas cluster or local `mongod`)

## Setup

1. Change into the server folder:

   cd server

2. Install dependencies:

   npm install

3. Create a `.env` file (you can use the provided `.env.example`) and set the required variables. Required env vars:

- `PORT` — port the server listens on (default: 3000)
- `MONGO_URI` — MongoDB connection string
- `FRONTEND_URL` — URL allowed by CORS (e.g. `http://localhost:5173`)

Example `.env` values (DO NOT commit credentials):

```
PORT=3000
MONGO_URI=mongodb://<username>:<password>@host:port/todo-db
FRONTEND_URL=http://localhost:5173
```

4. Start in development mode (uses nodemon):

   npm run dev

Or start in production mode:

npm start

The server will print the port it's running on. The API base path is `/api/todos`.

## API Endpoints (summary)

- GET /api/todos — list all todos
- POST /api/todos — create a new todo
- PUT /api/todos/:id — replace/update a todo
- DELETE /api/todos/:id — delete a todo
- PATCH /api/todos/:id/done — toggle done status

Refer to the route handlers in `server/src/controllers/todoController.js` for details.

## MongoDB connection notes

There are two common ways to run MongoDB for this project:

1. MongoDB Atlas (cloud):

   - Create a free cluster at https://www.mongodb.com/cloud/atlas
   - Create a database user (username/password) and whitelist your IP (or allow access from anywhere for development)
   - Obtain the connection string (SRV or standard), replace username/password and set `MONGO_URI` in `.env`

2. Local MongoDB:
   - Install MongoDB Community Server and run `mongod` locally
   - Use a connection string like: `mongodb://localhost:27017/todo-list` and set `MONGO_URI` accordingly

Security notes: Do not commit your real connection strings. Use environment variable management in production (secrets manager, CI/CD secure vars).

## Assumptions and limitations

- No authentication or authorization — the API is open to anyone who can reach it. Add auth if multi-user or private data is required.
- Single collection (`Todo`) with basic fields. Validate or extend schemas in `server/src/models/Todo.js`.
- No tests are included. Add unit/integration tests before production deployment.
- Error handling is basic; consider improving error responses and logging for production.
- CORS is enabled using the `FRONTEND_URL` env var. For production, restrict allowed origins.

## Next steps / suggestions

- Add `.env.example` (already present) and add README references to secret handling/CI.
- Add request validation (e.g., Joi or express-validator).
- Add tests and CI.

## Quick verification

- With server running, visit `http://localhost:PORT/` to see the server root response.
- Use a REST client or the frontend to exercise `/api/todos` endpoints.

---

If you need me to also add API documentation (OpenAPI/Swagger) or a `.env` template in a different format, say the word and I will add it.
