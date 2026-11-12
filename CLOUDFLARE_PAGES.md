# Historical: Cloudflare Pages deployment

> **Retired deployment perspective.** This document is preserved as historical
> evidence after a Pages/domain configuration incident affected unrelated
> hostnames, including `supabase.diazignacio.ar`. Do not use these instructions
> to deploy this workspace. The active planning authority is
> `odd/tasks/local-service-deployment.md`, which defines a separately owned local
> service inside the server. No Pages, DNS, tunnel, systemd, or Cloudflare
> mutation is authorized by that ODD.

This repository previously described a static website deployment through Cloudflare Pages. The Pages build deliberately published only
the public website files, not workspace documentation, runtime data, or the
separate `nodo/` design handoff.

## Historical dashboard configuration (do not apply)

Create a Cloudflare Pages project from `informaticadiaz/diazignacio` with:

- Production branch: `main`
- Framework preset: None
- Build command: `sh scripts/build-pages.sh`
- Build output directory: `data/pages-dist`

The build has no package installation or external dependencies. It copies only
`index.html`, `blog.html`, `assets/`, `css/`, `js/`, the Pages headers, and the
404 document to the deployment output.

## Historical safe-cutover notes (superseded; do not apply)

1. Confirm the generated `*.pages.dev` preview displays the homepage and
   `/blog.html`.
2. Add `diazignacio.ar` as a custom domain to the Pages project.
3. Remove or replace the existing root-domain route only after the Pages custom
   domain is ready. The current root domain serves an unrelated GymSoft app.
4. Create `www.diazignacio.ar` in the Cloudflare zone and configure a permanent
   redirect to `https://diazignacio.ar`.
5. Verify both hostnames over HTTPS, then verify that unknown paths return the
   custom 404 page.

Do not route the website through `pc-ignacio-ssh`; static Pages hosting must
remain independent of the local machine and Cloudflare Tunnel.
