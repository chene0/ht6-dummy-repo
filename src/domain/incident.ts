export type IncidentSeverity = "sev1" | "sev2" | "sev3";
export type IncidentStatus = "investigating" | "mitigating" | "resolved";

export interface ResponderNote {
  id: string;
  author: string;
  message: string;
  createdAt: string;
}

export interface Incident {
  id: string;
  title: string;
  severity: IncidentSeverity;
  status: IncidentStatus;
  commander?: string;
  createdAt: string;
  updatedAt: string;
  notes: ResponderNote[];
}
