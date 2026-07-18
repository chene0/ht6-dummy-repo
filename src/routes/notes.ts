import type { FastifyInstance } from "fastify";
import { z } from "zod";
import type { IncidentService } from "../services/incident-service.js";
import type { NoteService } from "../services/note-service.js";

const parameters = z.object({ id: z.string().uuid() });
const noteInput = z.object({ author: z.string().min(2), message: z.string().min(1).max(1000) });

export function registerNoteRoutes(app: FastifyInstance, incidents: IncidentService, notes: NoteService): void {
  app.post("/api/incidents/:id/notes", async (request, reply) => {
    const { id } = parameters.parse(request.params);
    const input = noteInput.parse(request.body);
    const incident = notes.add(incidents.requireIncident(id), input.author, input.message);
    return reply.code(201).send(incident);
  });
}
