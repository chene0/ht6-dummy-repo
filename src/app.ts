import Fastify, { type FastifyInstance } from "fastify";
import { registerHealthRoutes } from "./routes/health.js";
import { registerIncidentRoutes } from "./routes/incidents.js";
import { IncidentService } from "./services/incident-service.js";
import { IncidentStore } from "./store/incident-store.js";

export function buildApp(): FastifyInstance {
  const app = Fastify({ logger: true });
  const store = new IncidentStore();
  const incidents = new IncidentService(store);

  registerHealthRoutes(app);
  registerIncidentRoutes(app, store, incidents);
  return app;
}
