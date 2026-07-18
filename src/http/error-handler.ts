import type { FastifyInstance } from "fastify";
import { ZodError } from "zod";

export function registerErrorHandler(app: FastifyInstance): void {
  app.setErrorHandler((error, request, reply) => {
    if (error instanceof ZodError) {
      return reply.code(400).send({ code: "INVALID_REQUEST", issues: error.issues });
    }
    if (error.message.endsWith("was not found")) {
      return reply.code(404).send({ code: "INCIDENT_NOT_FOUND", message: error.message });
    }
    request.log.error(error);
    return reply.code(500).send({ code: "INTERNAL_ERROR", message: "Unexpected server error" });
  });
}
