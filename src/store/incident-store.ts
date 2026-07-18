import type { Incident } from "../domain/incident.js";

export class IncidentStore {
  private readonly incidents = new Map<string, Incident>();

  list(): Incident[] {
    return [...this.incidents.values()].sort((a, b) => b.createdAt.localeCompare(a.createdAt));
  }

  get(id: string): Incident | undefined {
    return this.incidents.get(id);
  }

  save(incident: Incident): Incident {
    this.incidents.set(incident.id, incident);
    return incident;
  }

  clear(): void {
    this.incidents.clear();
  }
}
