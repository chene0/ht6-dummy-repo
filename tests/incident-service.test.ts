import { describe, expect, it } from "vitest";
import { IncidentService } from "../src/services/incident-service.js";
import { IncidentStore } from "../src/store/incident-store.js";

describe("IncidentService", () => {
  it("creates incidents in the investigating state", () => {
    const service = new IncidentService(new IncidentStore());
    const incident = service.create("Elevated checkout errors", "sev2");
    expect(incident.status).toBe("investigating");
    expect(incident.notes).toEqual([]);
  });

  it("transitions an existing incident", () => {
    const service = new IncidentService(new IncidentStore());
    const incident = service.create("Queue backlog", "sev3");
    expect(service.transition(incident.id, "resolved").status).toBe("resolved");
  });
});
