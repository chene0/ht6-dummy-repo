# SignalDesk

SignalDesk is a TypeScript service for coordinating operational incidents.
It provides a small HTTP API for incidents, responder notes, and service health.

## Development

```bash
npm install
npm run dev
npm test
```

The service listens on `PORT` (default `3000`) and stores data in memory.
See `docs/api.md` for endpoints and `docs/operations.md` for deployment guidance.
