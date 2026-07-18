import { beforeEach, describe, expect, it } from "vitest";
import { IncidentStore } from "../src/store/incident-store.js";

describe("IncidentStore", () => {
  let store: IncidentStore;
  beforeEach(() => { store = new IncidentStore(); });

  it("saves and retrieves an incident", () => {
    const incident = { id: "one", title: "API unavailable", severity: "sev1" as const, status: "investigating" as const, createdAt: "2025-01-01", updatedAt: "2025-01-01", notes: [] };
    store.save(incident);
    expect(store.get("one")).toEqual(incident);
  });

  it("clears stored incidents", () => {
    store.clear();
    expect(store.list()).toEqual([]);
  });
});
