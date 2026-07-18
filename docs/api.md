# SignalDesk API

All JSON endpoints are rooted at `/api`. Error responses include a stable `code` field.

## Incidents

- `GET /api/incidents` lists incidents newest first.
- `POST /api/incidents` accepts `title` and `severity`.
- `GET /api/incidents/:id` returns one incident.
- `PATCH /api/incidents/:id/status` updates lifecycle status.
- `POST /api/incidents/:id/notes` appends a responder note.

## Operations

- `GET /health` reports process liveness.
- `GET /ready` reports whether the service can receive traffic.

Every response includes `x-request-id` for correlation with structured logs.
