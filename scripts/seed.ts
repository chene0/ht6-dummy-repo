const baseUrl = process.env.SIGNALDESK_URL ?? "http://localhost:3000";

const incidents = [
  { title: "Checkout requests timing out", severity: "sev1" },
  { title: "Delayed notification delivery", severity: "sev2" },
  { title: "Admin dashboard latency", severity: "sev3" }
] as const;

for (const incident of incidents) {
  const response = await fetch(`${baseUrl}/api/incidents`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(incident)
  });
  if (!response.ok) throw new Error(`Seed request failed: ${response.status}`);
  console.log(await response.json());
}
