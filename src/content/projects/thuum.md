---
title: Thuum.dev
description: Real-time brokers for your apps. Publish once, and every browser, phone, service, or device subscribed gets it, live.
order: 1
tags: [Elixir, Phoenix, TypeScript, WebSockets, MCP]
url: https://thuum.dev
cover:
  src: ./thuum.webp
  alt: The Thuum.dev home page, headlined "Any product can be live.", showing a chat synced live across a desktop and two phones through the Event Broker.
---

Opening a WebSocket takes one line. Running one for real users takes a whole
system: heartbeats, fan-out across servers, authentication, permissions,
catching up on missed messages, consistent shared state, and data retention.
Thuum.dev does all of that behind one API, so apps can go real-time without
running their own socket servers.

## Five brokers, one API

- **Event Broker:** something happened. Pub/sub with recent history per topic.
- **State Broker:** how things are right now. Live JSON values with merge
  patches (RFC 7396) and versions.
- **Metric Broker:** every reading, over time. Compact binary ingestion,
  resampling, and long-term history.
- **Wire Broker:** delivered, never kept. For data that must not be stored.
- **Relay Broker:** ask, and get an answer. Point-to-point request/response.

## Highlights

- **Frontend-first, backend-ready:** a typed TypeScript client for the browser,
  plain REST and WebSocket for any server language.
- **Secure by design:** App Keys are exchanged for short-lived tokens, with
  per-topic claims for least privilege.
- **Multi-tenant:** every Domain is a fully isolated tenant, created by API.
- **AI-ready:** an MCP server exposes the whole REST API and docs to AI agents,
  limited to exactly what their credential allows.

Built with Elixir and Phoenix for the real-time core.
[Shout](/projects/shout/) and [Thuum Stats](/projects/thuum-stats/) are built
on top of it.
