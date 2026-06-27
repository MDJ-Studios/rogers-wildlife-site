# Rogers Wildlife — Nonprofit Website

A website built for a wildlife rehabilitation nonprofit, focused on the two things that matter most for an organization like this: **telling the mission clearly and making it easy to donate.** Designed, built, and deployed for the client.

🔗 **Live:** https://www.rogerswildlife.org/

## What it does
- **Donation flow** — "Donate" actions open [Zeffy](https://www.zeffy.com) forms in an in-page modal (zero-fee fundraising for nonprofits), so supporters give without leaving the site.
- **Headless content** — page content is pulled from a headless CMS over GraphQL, so non-technical staff can update the site without touching code.
- **Lead/contact chat** — a LeadConnector chat widget that is **lazy-loaded on first interaction** (click/scroll/keydown, with a 4s fallback) to keep the initial page fast.
- **Accessible, icon-rich UI** — FontAwesome iconography, performance-instrumented with Vercel Speed Insights.

## Stack
Next.js · React · GraphQL (`graphql-request`, headless CMS) · Zeffy donation integration · LeadConnector chat · FontAwesome · Vercel.

## Engineering notes
The chat loader is single-injection and deferred until user interaction — a deliberate performance choice so a third-party widget never blocks first paint. Donation modals are wired through a small reusable handler rather than per-button scripts.

*Designed & developed by Daniel J. Scott / MDJ Studios.*
