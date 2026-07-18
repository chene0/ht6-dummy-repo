import { randomUUID } from "node:crypto";
import type { Incident, IncidentSeverity, IncidentStatus } from "../domain/incident.js";
import { IncidentStore } from "../store/incident-store.js";

export class IncidentService {
  constructor(private readonly store: IncidentStore) {}

  create(title: string, severity: IncidentSeverity): Incident {
    const now = new Date().toISOString();
    return this.store.save({
      id: randomUUID(), title, severity, status: "investigating",
      createdAt: now, updatedAt: now, notes: []
    });
  }

  transition(id: string, status: IncidentStatus): Incident {
    const incident = this.requireIncident(id);
    return this.store.save({ ...incident, status, updatedAt: new Date().toISOString() });
  }

  requireIncident(id: string): Incident {
    const incident = this.store.get(id);
    if (!incident) throw new Error(`Incident ${id} was not found`);
    return incident;
  }
}
