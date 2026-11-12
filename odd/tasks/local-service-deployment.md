# Local-Service Deployment Perspective

Documentation and planning proposal for operating this workspace as an isolated service inside the server, with domain handling aligned with the existing `blog.diazignacio.ar` model and without coupling its configuration to other hosted services.

This document is an ODD planning artifact only. It authorizes no deployment, DNS change, tunnel change, systemd change, Cloudflare mutation, or production cutover.

## Specs

1. **S1 — Verbatim user intent:** "tuve un problema relacionado a cloudfare pague y la configuracion del mismo, al configurar cloudfare page con diazignacio.ar se cayeron servicios como supabase.diazignacio.ar quiero trabajar este Workspace como otros de mí servidor, por ejemplo blog.diazignación.ar ya no quiero usar cloudfare page ni quiero que otros servicios se vean afectados por la configuración de este Workspace, crea una odd para sanear la documentación y crear está nueva perspectiva de despliegue con servicio dentro de este servidor y dominio manejado como se maneja blog.diazignacio.ar y sin afectar a otra servicios."
2. **S2 — Deployment perspective:** Treat this workspace as a service hosted inside the server, with its domain and ingress managed independently according to the established local-service pattern represented by `blog.diazignacio.ar`.
3. **S3 — Isolation requirement:** The workspace's deployment documentation and future configuration must have an explicit ownership and isolation boundary so that changes for this workspace cannot alter, replace, or interrupt unrelated hostnames or services.
4. **S4 — Cloudflare Pages decision:** Cloudflare Pages is not part of the desired deployment model for this workspace. This ODD must not prescribe a Pages project, Pages custom-domain mapping, or Pages-based cutover.
5. **S5 — Documentation scope:** This ODD covers documentation cleanup, architecture planning, dependency identification, and verification planning only. It does not execute or authorize deployment, DNS, tunnel, systemd, or Cloudflare changes.
6. **S6 — Isolated local-service model:** The target model is a locally hosted service with separately documented application ownership, local process/runtime ownership, domain routing ownership, and verification steps. Concrete ports and service names remain intentionally unspecified until a later, separately authorized implementation plan.
7. **S7 — Rollback and safety boundary:** Any future implementation must be reversible, must preserve the currently working configuration of unrelated services, must validate the new route before replacing an existing route, and must provide a documented rollback path that restores only this workspace's routing and service configuration. No rollback step may require mutation of unrelated services or shared Cloudflare configuration.
8. **S8 — Change authorization:** A later implementation task must explicitly authorize each operational surface it needs to change. Until then, no production state, DNS record, tunnel, systemd unit, Cloudflare setting, or running service may be modified under this ODD.

## Tasks

- T1 — S1, S4-S5 — Audit and reconcile the workspace deployment documentation with the local-service perspective; documentation only.
- T2 — S2-S3, S6 — Document the proposed isolated local-service ownership boundaries and the information that a future implementation plan must specify, without inventing concrete ports or service names.
- T3 — S3, S7 — Document service-impact safeguards, pre-change checks, validation gates, and a workspace-scoped rollback outline; documentation only.
- T4 — S4-S5, S8 — Record the explicit exclusion of Cloudflare Pages and the prohibition on operational mutation until a separate implementation authorization exists; documentation only.

## Log

- L1 — tuve un problema relacionado a cloudfare pague y la configuracion del mismo, al configurar cloudfare page con diazignacio.ar se cayeron servicios como supabase.diazignacio.ar quiero trabajar este Workspace como otros de mí servidor, por ejemplo blog.diazignación.ar ya no quiero usar cloudfare page ni quiero que otros servicios se vean afectados por la configuración de este Workspace, crea una odd para sanear la documentación y crear está nueva perspectiva de despliegue con servicio dentro de este servidor y dominio manejado como se maneja blog.diazignacio.ar y sin afectar a otra servicios.
