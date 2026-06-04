# Out At Website

Static starter website for Out At.

## Pages

- `/` Placeholder homepage
- `/404.html` Custom 404 page

The public site is temporarily locked down. Guessed join, trip and privacy URLs redirect back to `/` so the live domain only shows the simple placeholder unless someone has a direct `/poppet/...` test URL.

## Test Pages

The fuller site and join form files remain available under `/poppet/...` for direct testing.

- `/poppet/` Test site experience
- `/poppet/join.html` Test join form
- `/poppet/trips/sitges-2026.html` Test Sitges trip page
- `/poppet/trips/london-social.html` Test London social page
- `/poppet/privacy.html` Test privacy notice

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

The form sends the submitted fields to that endpoint and shows an on-page confirmation when the request succeeds. For now, the working form lives at `/poppet/join.html`, while public `/join` URLs redirect to `/` until the site is ready.

## To do

- Add final logo asset if required.
- Update trip dates and details.
