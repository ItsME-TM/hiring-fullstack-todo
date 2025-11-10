## 🚀 Description

This Pull Request implements the full-stack TODO application using a React + Vite frontend and an Express + MongoDB backend. Core functionality includes creating, viewing, editing, toggling (done/undone), and deleting todos. The app persists data in MongoDB and exposes a clean REST API. UX enhancements include loading states, inline edit mode, confirmation popup for deletions, optimistic-like UI updates, and accessible feedback (spinner + retry on fetch errors).

### Implemented Features

- React 19 + Vite frontend with component structure (`TodoForm`, `TodoList`, `TodoItem`, confirmation popup).
- REST API with endpoints: `GET /api/todos`, `POST /api/todos`, `PUT /api/todos/:id`, `PATCH /api/todos/:id/done`, `DELETE /api/todos/:id`.
- MongoDB persistence via Mongoose (`Todo` schema: title, description, done, timestamps).
- Toggle done status with visual styling (strikethrough + opacity + subtle scale effect).
- Inline editing with cancel/save flow and validation (required title).
- Deletion confirmation modal to prevent accidental removal.
- Error states surfaced in form and list loading sequence; retry action for fetch failures.
- Environment-driven API base URL (frontend `VITE_API_URL`) and CORS restriction via `FRONTEND_URL`.

### Key Implementation Details / Decisions

- Sorted todos by `createdAt` descending in `GET /api/todos` for most recent first.
- Centralized Axios instance with JSON headers; exported `todoAPI` abstraction for clarity and testability.
- Mongoose timestamps used instead of manual date fields; simplifies audit & sorting.
- Stateless server routes with lean controller functions; each function handles its own error and status codes.
- Separate toggle route (`PATCH /:id/done`) adheres to spec and keeps semantic intent instead of overloading PUT.

---

## 💡 Solution Rationale & User Value

### Architectural Choices

- Separation of concerns (components vs. API service) improves readability and future extensibility (e.g., adding caching or auth headers).
- Using Vite accelerates dev (fast HMR) and keeps bundle minimal for a small app.
- Mongoose chosen for rapid schema definition and built-in validation potential; aligns with common MERN expectations.
- Dedicated toggle endpoint maintains clarity in intent vs. passing partial updates via PUT.

### Optimizations / Priorities

- Prioritized developer ergonomics and clarity over premature performance micro-optimizations.
- Focused on UX basics: clear empty state, loading spinner, disabled states during async operations, confirmation before destructive actions.
- Minimal optimistic-feel updates (e.g., local state updates immediately after create/delete) to keep UI snappy.

### User Value

- Users can quickly manage tasks in a responsive interface with immediate visual feedback.
- Reduced friction/errors with form validation (required title) and confirmation before deletion.
- Clear differentiation of completed tasks via styling aids scanning productivity.

---

## 🎥 Demo Video

Loom walkthrough demonstrating full CRUD, toggle, and UX flows:

https://www.loom.com/share/b3b97b8ea4bd452a863178aa6cf1904c

---

## 🛠️ Setup Instructions (if different from README)

Standard setup matches README. Key env variables to ensure:

Frontend (`client/.env`):

```
VITE_API_URL=http://localhost:3000/api/todos
```

Backend (`server/.env`):

```
PORT=3000
MONGO_URI=<your-mongodb-connection-string>
FRONTEND_URL=http://localhost:5173
```

Then run:

```
cd server && npm install && npm run dev
cd ../client && npm install && npm run dev
```

No additional setup deviations from README were required.

---

## 📌 Known Limitations / Assumptions

- No authentication/authorization (single-user assumption).
- No pagination or filtering; all todos fetched every load.
- Minimal validation (required title only); description length not constrained.
- Toggle route flips state blindly (no concurrency safeguards; race conditions unlikely at this scale).
- No test suite yet (unit/integration tests could be added for controllers and API service).
- Error handling is basic; standardized error enveloping and logging could be improved for production.
- Frontend assumes stable network; no offline or retry queue logic.
- Optimistic updates are partial (delete, create); edit & toggle wait for server response.

---

## ✅ Checklist

- [x] Frontend is built using React
- [x] Database tech is connected and data persists correctly
- [x] Tasks can be viewed
- [x] Tasks can be created
- [x] Tasks can be edited
- [x] Tasks can be marked as done/undone
- [x] Tasks can be deleted
- [x] API endpoints match the spec
- [x] Demo video included
- [x] Solution rationale & user value explained

---
