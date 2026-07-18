import { z } from "zod";

const environmentSchema = z.object({
  HOST: z.string().default("0.0.0.0"),
  PORT: z.coerce.number().int().positive().max(65535).default(3000),
  LOG_LEVEL: z.enum(["debug", "info", "warn", "error"]).default("info")
});

export type ServiceConfig = z.infer<typeof environmentSchema>;

export function loadConfig(environment = process.env): ServiceConfig {
  return environmentSchema.parse(environment);
}
