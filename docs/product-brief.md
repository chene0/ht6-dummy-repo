# SignalDesk product brief

SignalDesk is a small incident coordination API for engineering teams.
It keeps active incidents, status changes, and responder notes in one place.

## Initial goals

- Create and assign operational incidents.
- Track severity and lifecycle transitions.
- Record timestamped notes during mitigation.
- Expose health and service metrics for operators.

The first release intentionally uses an in-memory store so the team can validate the API before choosing persistent storage.
