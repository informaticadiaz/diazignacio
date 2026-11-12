# Superseded: Cloudflare Pages/DNS rollout

> **Superseded by** `odd/tasks/local-service-deployment.md`. This historical plan
> is retained to explain the former Pages/DNS direction and the incident boundary.
> It is no longer an authorized implementation plan. Do not apply its Pages,
> hostname, DNS, or cutover instructions.

## Specs

1. **S1 — User request:** "si, quiero configurar cloudflare page/DNS"
2. **S2 — Existing failure:** "en https://www.diazignacio.ar/ no renderiza nada"
3. **S3 — Safety boundary:** Publish the repository through Cloudflare Pages, configure `diazignacio.ar` and `www.diazignacio.ar`, and do not replace the existing apex GymSoft route until the Pages hostname is validated.

## Tasks (historical; not to execute)

- T1 — S1-S3 — Build and validate the restricted Pages artifact — status: superseded
- T2 — S1-S3 — Configure Cloudflare Pages project and custom domains — status: superseded
- T3 — S2-S3 — Configure `www` DNS/redirect and verify public hostnames — status: superseded

## Log

- L1 — si, quiero configurar cloudflare page/DNS
- L2 — Diagnosis: `www.diazignacio.ar` currently fails DNS resolution; `diazignacio.ar` currently serves an unrelated GymSoft application; the Worker URL serves a different portfolio build.
- L3 — Superseded after the user reported that configuring Cloudflare Pages with `diazignacio.ar` affected unrelated services such as `supabase.diazignacio.ar`. The replacement perspective is an isolated local service inside this server, documented in `odd/tasks/local-service-deployment.md`.
