import type { FastifyInstance } from "fastify";

export function registerRequestContext(app: FastifyInstance): void {
  app.addHook("onSend", async (request, reply, payload) => {
    reply.header("x-request-id", request.id);
    reply.header("cache-control", "no-store");
    return payload;
  });
}
