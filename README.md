# Out At Website

Static starter website for Out At.

## Pages

- `/` Homepage
- `/poppet/` Hidden/test site experience
- `/poppet/join.html` Hidden/test join form
- `/poppet/trips/sitges-2026.html` Hidden/test Sitges trip page
- `/poppet/trips/london-social.html` Hidden/test London social page
- `/poppet/privacy.html` Hidden/test privacy notice
- `/404.html` Custom 404 page

Root-level join, trip and privacy URLs redirect to their `/poppet` equivalents while the test site is hidden.

## Deploy

Recommended:

1. Push this repo to GitHub.
2. Create a Cloudflare Pages project.
3. Connect the GitHub repo.
4. Leave build command blank.
5. Set output directory to `/`.
6. Add custom domain: `outat.co.uk`.

## Join form setup

The custom join form posts to a Cloudflare Pages Function at `/api/join`.

Create a Cloudflare Pages environment variable called:

```text
JOIN_FORM_ENDPOINT
```

Paste your Google Apps Script Web App endpoint URL as the value. It should look like:

```text
https://script.google.com/macros/s/xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx/exec
```

The form sends the submitted fields to that endpoint and shows an on-page confirmation when the request succeeds. For now, the working form lives at `/poppet/join.html`.

## To do

- Add final logo asset if required.
- Update trip dates and details.
