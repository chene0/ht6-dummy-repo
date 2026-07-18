import type { FastifyInstance } from "fastify";

export function registerHealthRoutes(app: FastifyInstance): void {
  app.get("/health", async () => ({
    status: "ok",
    service: "signaldesk",
    timestamp: new Date().toISOString()
  }));

  app.get("/ready", async () => ({ ready: true }));
}
