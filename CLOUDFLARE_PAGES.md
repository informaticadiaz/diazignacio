# Cloudflare Pages deployment

This repository is a static website. The Pages build deliberately publishes only
the public website files, not workspace documentation, runtime data, or the
separate `nodo/` design handoff.

## Dashboard configuration

Create a Cloudflare Pages project from `informaticadiaz/diazignacio` with:

- Production branch: `main`
- Framework preset: None
- Build command: `sh scripts/build-pages.sh`
- Build output directory: `data/pages-dist`

The build has no package installation or external dependencies. It copies only
`index.html`, `blog.html`, `assets/`, `css/`, `js/`, the Pages headers, and the
404 document to the deployment output.

## Safe cutover

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
