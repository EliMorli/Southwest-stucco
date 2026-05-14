# Southwest Stucco Inc. — Website

Production-grade marketing site for [Southwest Stucco Inc.](https://southweststucco.net), a family-owned stucco contractor in Calabasas, CA.

Built with **Next.js 14 (App Router)** + **TypeScript** + **Tailwind CSS**, optimized for SEO, AEO (answer engines like ChatGPT / Perplexity / Google AI Overviews), and GEO (local search).

## SEO / AEO / GEO features

- **Next.js Metadata API** — per-page title/description, canonical, OpenGraph, Twitter cards
- **JSON-LD structured data** ([src/components/JsonLd.tsx](src/components/JsonLd.tsx)) — `LocalBusiness`, `HomeAndConstructionBusiness`, `GeneralContractor`, `Organization`, `WebSite`, `FAQPage`, `Offer`, `Service` — surfaces direct answers in Google AI Overviews and Bing/Perplexity
- **Sitemap** at `/sitemap.xml` ([src/app/sitemap.ts](src/app/sitemap.ts))
- **robots.txt** at `/robots.txt` ([src/app/robots.ts](src/app/robots.ts)) — explicitly allows `GPTBot`, `ClaudeBot`, `PerplexityBot`, `Google-Extended`, `CCBot`, `anthropic-ai`, `Applebot-Extended`
- **llms.txt** at `/llms.txt` ([public/llms.txt](public/llms.txt)) — emerging standard for guiding LLM crawlers; structured Q&A and NAP info
- **`geo.*` meta tags** + ICBM coordinates for local search (latitude/longitude of Calabasas)
- **Service area + NAP** (Name/Address/Phone) consistently embedded in schema, footer, and contact section
- **Next.js Font optimization** — Bebas Neue, Nunito, Barlow Condensed served self-hosted (no FOUT)
- **next/image** with AVIF/WebP, responsive `sizes`, lazy loading by default
- **Semantic HTML** — `<nav>`, `<main>`, `<section id="…">`, `<article>`, `<h1>/<h2>/<h3>` hierarchy
- **Security headers** ([next.config.mjs](next.config.mjs)) — `X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy`, `X-Frame-Options`
- **Honeypot field** + server-side validation on the contact form to block spam

## Local development

```bash
pnpm install      # or: npm install
cp .env.example .env.local
pnpm dev          # http://localhost:3000
```

To make the contact form actually deliver email:

1. Sign up at [resend.com](https://resend.com) (free tier: 100 emails/day)
2. Add your API key to `.env.local` as `RESEND_API_KEY=re_…`
3. Verify the `southweststucco.net` domain inside Resend, then update `RESEND_FROM_EMAIL` to something like `noreply@southweststucco.net`
4. `CONTACT_TO_EMAIL` is where submissions land — defaults to `Southweststucco@gmail.com`

Without a Resend key the form still submits successfully (UI shows success) but no email is sent — useful for local testing.

## Deploy to Vercel

1. Push this repo to GitHub (instructions below)
2. Go to [vercel.com/new](https://vercel.com/new), import the GitHub repo
3. Add the four environment variables from `.env.example` to the Vercel project:
   - `RESEND_API_KEY`
   - `RESEND_FROM_EMAIL`
   - `CONTACT_TO_EMAIL`
   - `NEXT_PUBLIC_SITE_URL` → `https://southweststucco.net`
4. Add your custom domain `southweststucco.net` in Vercel → Project → Settings → Domains
5. Update the registrar's DNS records as Vercel instructs

## Push to GitHub

The `gh` CLI is not currently installed on this machine. Two paths:

**Option A — install gh CLI:**
```bash
brew install gh
gh auth login
cd /Users/elihaune/Downloads/southwest-stucco
git init && git add . && git commit -m "Initial commit"
gh repo create southwest-stucco --public --source=. --push
```

**Option B — create repo on github.com manually**, then:
```bash
cd /Users/elihaune/Downloads/southwest-stucco
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/<your-username>/southwest-stucco.git
git push -u origin main
```

## Editing content

All copy lives in [src/lib/content.ts](src/lib/content.ts) and business facts (NAP, services, hours, service areas) in [src/lib/site-config.ts](src/lib/site-config.ts). Edit those — components consume them.

## Images

Gallery images live in [public/gallery/](public/gallery/). To add or replace:
1. Drop a JPG/PNG into that folder
2. Reference it in `gallery.items` inside [src/lib/content.ts](src/lib/content.ts)

The logo is [public/logo.png](public/logo.png) (referenced by `<Image>` in Nav, Hero, Footer, and in JSON-LD).

## Tech notes

- App Router (`src/app/`) with server components by default; only `Gallery` and `Contact` (interactivity) are `'use client'`
- No external CSS framework other than Tailwind; design system tokens live in `tailwind.config.ts` + `globals.css`
- No analytics installed yet — recommend adding [Vercel Analytics](https://vercel.com/analytics) (free) once deployed
