import type { FastifyInstance } from "fastify";
import { z } from "zod";
import type { IncidentService } from "../services/incident-service.js";

const parameters = z.object({ id: z.string().uuid() });
const transition = z.object({ status: z.enum(["investigating", "mitigating", "resolved"]) });

export function registerIncidentDetailRoutes(app: FastifyInstance, service: IncidentService): void {
  app.get("/api/incidents/:id", async request => {
    app.log.info({ route: "getIncidentDetail" }, "handler invoked");
    const { id } = parameters.parse(request.params);
    return service.requireIncident(id);
  });

  app.patch("/api/incidents/:id/status", async request => {
    app.log.info({ route: "transitionIncidentStatus" }, "handler invoked");
    const { id } = parameters.parse(request.params);
    const { status } = transition.parse(request.body);
    return service.transition(id, status);
  });
}
