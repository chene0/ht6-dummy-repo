import { afterEach, describe, expect, it } from "vitest";
import { buildApp } from "../src/app.js";

describe("SignalDesk API", () => {
  const app = buildApp();
  afterEach(async () => app.close());

  it("reports service health", async () => {
    const response = await app.inject({ method: "GET", url: "/health" });
    expect(response.statusCode).toBe(200);
    expect(response.json()).toMatchObject({ status: "ok", service: "signaldesk" });
  });

  it("creates an incident", async () => {
    const response = await app.inject({ method: "POST", url: "/api/incidents", payload: { title: "Search latency", severity: "sev2" } });
    expect(response.statusCode).toBe(201);
  });
});
