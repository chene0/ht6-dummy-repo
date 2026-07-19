# Operations guide

SignalDesk is stateless except for its temporary in-memory incident store.
Deploy one replica until persistent storage and cross-instance coordination are implemented.

## Signals

- Poll `/health` for process liveness.
- Poll `/ready` before routing traffic.
- Record `x-request-id` when investigating failed requests.
- Alert on sustained 5xx responses and restart loops.

## Shutdown

The process handles SIGINT and SIGTERM, stops accepting traffic, and closes the Fastify server before exiting.
Because incidents are currently held in memory, operators should warn responders before planned restarts.
