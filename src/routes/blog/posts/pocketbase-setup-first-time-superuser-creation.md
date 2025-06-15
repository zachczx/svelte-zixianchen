---
title: 'Pocketbase Setup: First Time Superuser Creation'
description: 'Kept forgetting how to do it.'
date: '2025-06-15'
date_updated: ''
tags:
  - Coolify
  - Pocketbase
published: true
slug: pocketbase-setup-first-time-superuser-creation
---

I've been playing around with NextJS, Stytch, Keycloak and Better Auth, but decided to return to experimenting with Pocketbase for a SPA. I deployed a Pocketbase instance with Coolify, but couldn't remember how I managed to create a superuser in the past. The official docs and Google didn't help.

Turns out, I needed to see my logs for the Pocketbase service in Coolify.

```bash
2025-06-15T15:19:59.758659679Z 2025/06/15 15:19:59 Server started at http://0.0.0.0:8080
2025-06-15T15:19:59.758711719Z ├─ REST API:  http://0.0.0.0:8080/api/
2025-06-15T15:19:59.758715279Z └─ Dashboard: http://0.0.0.0:8080/_/
2025-06-15T15:19:59.856938100Z
2025-06-15T15:19:59.856969020Z (!) Launch the URL below in the browser if it hasn't been open already to create your first superuser account:
2025-06-15T15:19:59.857139780Z http://0.0.0.0:8080/_/#/pbinstal/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJ1c2VyXzEyMzQ1Njc4OTAiLCJlbWFpbCI6ImpvaG4uZG9lQGV4YW1wbGUuY29tIiwiZXhwIjoxNzUwMTAwMDAwLCJpYXQiOjE3NDkxMDAwMDAsInJvbGUiOiJhZG1pbiJ9.K7_Wn2k8rZGLx5tP3QeYvA6j9mFh4sRt8xV1n0cQ2uE
2025-06-15T15:19:59.857146660Z (you can also create your first superuser by running: /app/pocketbase superuser upsert EMAIL PASS)
2025-06-15T15:19:59.857149180Z
```

Replace http://0.0.0.0:8080 with the domain in your Coolify service, e.g., https://pocketbase.domain.com. The URL contains the JWT that allows you to create a superuser.

Writing this for my future self too.
