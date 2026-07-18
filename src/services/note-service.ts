import { randomUUID } from "node:crypto";
import type { Incident } from "../domain/incident.js";
import { IncidentStore } from "../store/incident-store.js";

export class NoteService {
  constructor(private readonly store: IncidentStore) {}

  add(incident: Incident, author: string, message: string): Incident {
    const now = new Date().toISOString();
    return this.store.save({
      ...incident,
      updatedAt: now,
      notes: [...incident.notes, { id: randomUUID(), author, message, createdAt: now }]
    });
  }
}
