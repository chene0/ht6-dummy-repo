import type { FastifyInstance } from "fastify";
import { z } from "zod";
import type { IncidentService } from "../services/incident-service.js";
import type { IncidentStore } from "../store/incident-store.js";

const createIncident = z.object({
  title: z.string().trim().min(3).max(120),
  severity: z.enum(["sev1", "sev2", "sev3"])
});

export function registerIncidentRoutes(app: FastifyInstance, store: IncidentStore, service: IncidentService): void {
  app.get("/api/incidents", async () => ({ incidents: store.list() }));
  app.post("/api/incidents", async (request, reply) => {
    const input = createIncident.parse(request.body);
    const incident = service.create(input.title, input.severity);
    return reply.code(201).send(incident);
  });
}
