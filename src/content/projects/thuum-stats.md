---
title: Thuum Stats
description: Live, read-only screens for real things, behind a QR sticker, on a TV, or in a website.
order: 3
tags: [IoT, Real-time, Thuum.dev, MCP]
url: https://stats.thuum.dev
cover:
  src: ./thuum-stats.webp
  alt: The Thuum Stats home page, headlined "Live screens for real things", showing a live cold room dashboard with temperature, humidity, door, and compressor widgets.
---

Machines, freezers, sensors, and computers report to Thuum Stats, and whoever
you choose watches them live. Viewers never need an account or an app.

## Where it shows

- **Behind a QR sticker:** scan a machine to see its nameplate, live readings,
  next inspection, and history.
- **On a TV or a wall:** a kiosk in large type, or a display that rotates
  screens and flags problems.
- **In a website or a stream:** embed a screen with one iframe, or overlay it
  in OBS.
- **In a README:** a live badge per widget, green while fresh, amber once old.

## Highlights

- **21 widgets** for values, gauges, charts, timelines, and status grids, each
  number shown with its age and coloured by its normal range.
- **No agent to install:** a device claims a one-time code and reports over
  HTTPS. A Raspberry Pi recipe and a shell script are ready to copy.
- **Read-only by construction:** viewers get short-lived, watch-only tokens.
- **AI agents welcome:** Thuum Stats is an MCP server, so Claude, ChatGPT,
  Cursor, and others can build screens and displays for you.

Built on [Thuum.dev](/projects/thuum/).
