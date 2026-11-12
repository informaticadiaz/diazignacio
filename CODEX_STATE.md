# Workspace State

## Current Focus

Workspace initialized from `https://github.com/informaticadiaz/diazignacio`.

The former Cloudflare Pages deployment perspective is retired. A prior Pages/Worker
configuration incident affected unrelated hostnames, including
`supabase.diazignacio.ar`; this workspace must not use Pages or claim ownership of
the apex DNS configuration. The accidental Worker at
`https://diazignacio.informatica-diaz.workers.dev` is historical evidence only and
must not be mapped to this workspace's future hostname.

## Repository Structure

- `index.html`, `blog.html`, `css/`, `js/`, and `assets/`: existing static
  public website.
- `nodo/`: Claude Design handoff bundle, separate from the root website.
- `data/`: local ignored execution data.

## Owner Profile

- Ignacio Diaz, full-stack developer based in Buenos Aires, Argentina.
- Builds applications, not websites: SaaS platforms, booking systems and
  multi-tenant products. Portfolio copy must say "aplicaciones", never "sitios".
- Works with AI as part of the development workflow (AI-assisted development
  and agent tooling).
- Has hands-on Linux and DevOps experience: self-hosted servers, Docker,
  Nginx, Dokploy, self-hosted Supabase and Cloudflare.
- The exact technology list for the portfolio stack is still being confirmed
  with the owner; do not add technologies he has not confirmed or that are not
  evidenced in his projects.

## Decisions

- The workspace replaces the former `root` repository at this path.
- The Nodo bundle remains untouched until the user explicitly requests work on
  it.
- Treat this workspace as an independently owned service hosted inside the server,
  following the local-service pattern used by `blog.diazignacio.ar`.
- Keep application ownership, process/runtime ownership, hostname routing, and
  verification/rollback documentation explicit and workspace-scoped.
- Do not use Cloudflare Pages, a Pages custom-domain mapping, or an apex-domain
  cutover for this workspace. The future hostname and route must be selected and
  authorized separately from unrelated services.
- `index.html` is Ignacio Diaz's personal portfolio (not the former "Vértice"
  agency landing). Do not add invented stats or testimonials.
- The legacy projects Baires Real Estate and Messi Nuestro are no longer
  relevant. Do not feature them in the portfolio; the projects section must be
  filled with current projects provided by the user.
- Current portfolio projects: La Esquina de Cobo (`laesquinadecobo.com.ar`,
  accommodation complexes with packages and online booking), GymSoft / Fortaleza
  Fit (`fortalezafit.com.ar`, multi-tenant fitness platform with per-trainer
  landings on custom domains, backed by `supabase.diazignacio.ar`), and Mery
  Entrena (`merysanchez.com.ar`, trainer landing served by GymSoft). The user
  wrote `forttalezafit.com.ar`, which does not resolve; the live domain is
  `fortalezafit.com.ar`. No screenshots exist yet; cards use a CSS browser
  mockup instead of images.

## Next Steps

- Continue with `odd/tasks/local-service-deployment.md` as the active planning
  authority. It is documentation-only and authorizes no operational mutation.
- Sanitize the historical Pages documents so they cannot be mistaken for the
  current deployment plan; retain them as incident history and superseded
  guidance rather than deleting the evidence.
- A future implementation plan must identify the isolated local service,
  workspace-scoped hostname route, validation gates, and rollback before any
  server, DNS, tunnel, systemd, or Cloudflare change is authorized.
- Never request, receive, or store Cloudflare tokens in chat or the repository.
