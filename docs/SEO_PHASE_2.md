# SEO Phase 2 — Off-Site Action Plan

On-site work (the site you're reading) is done. This doc covers the off-site work that will actually drive ranking. Off-site is ~60% of SEO. Run these in order.

---

## 0. Environment variables to set in Vercel (5 minutes)

| Variable | Where to get it | What it does |
|---|---|---|
| `NEXT_PUBLIC_GA_ID` | analytics.google.com → admin → property → data streams | Turns on GA4 (consent-gated) |
| `NEXT_PUBLIC_CLARITY_ID` | clarity.microsoft.com → create project | Turns on Clarity heatmaps & session replay (free) |
| `NEXT_PUBLIC_GSC_VERIFICATION` | search.google.com/search-console → add property → HTML tag method | Verifies Google Search Console |
| `NEXT_PUBLIC_BING_VERIFICATION` | bing.com/webmasters → add site → HTML tag | Verifies Bing Webmaster Tools |
| `NEXT_PUBLIC_SITE_URL` | the production URL | Fixes canonical/sitemap URLs |

Redeploy after setting. None of them break the site if missing.

---

## 1. Google Business Profile (biggest single lever — do first)

GBP wins the "Map 3-pack" — the three local results that show above the regular search results. It's free and worth more than the rest of this doc combined.

### Setup checklist
- [ ] Claim or create the profile at business.google.com
- [ ] Use the exact NAP (Name, Address, Phone) that matches the website:
  - Name: **Southwest Stucco Inc.**
  - Address: **26500 Agoura Rd #420, Calabasas, CA 91302**
  - Phone: **(818) 888-8554**
- [ ] Category (primary): **Stucco Contractor**
- [ ] Categories (secondary): Plastering Contractor, General Contractor, Construction Company
- [ ] Service areas: Calabasas, Hidden Hills, Agoura Hills, Westlake Village, Woodland Hills, Encino, Sherman Oaks, Tarzana, Beverly Hills, Malibu, Santa Monica, Pacific Palisades
- [ ] Hours: Mon–Fri 7am–5pm, Sat 8am–2pm
- [ ] Description (write this in 750 chars, work in keywords — see template below)
- [ ] Upload 20+ photos: logo, exterior, crew, completed projects, before/after pairs
- [ ] Upload 3–5 videos: 30-second project flythroughs, owner introduction
- [ ] Add every service line (link to corresponding /services/[slug] pages)
- [ ] Enable messaging
- [ ] Add Q&A: seed the first 10 questions yourself (copy from /faq)
- [ ] Add Products: each service as a "product" with pricing range
- [ ] Add Attributes: family-owned, women-owned/veteran-owned/etc. if applicable

### GBP description template (paste, edit)
```
Family-owned stucco and plastering contractor in Calabasas, CA, serving Los Angeles homeowners and general contractors since 1995. CSLB License #702110. Bonded and insured.

We self-perform commercial and residential stucco — including three-coat hard-coat, one-coat fiber-reinforced, EIFS, scaffold installation, stucco repair, and custom finishes (smooth, sand, Santa Barbara, lace, dash, acrylic). Multi-crew commercial capacity up to 4 concurrent crews. Owned scaffold inventory up to 6 stories.

Serving Calabasas, Hidden Hills, Agoura Hills, Westlake Village, Woodland Hills, Encino, Sherman Oaks, Beverly Hills, Malibu, Santa Monica, Pacific Palisades, the San Fernando Valley, and greater Los Angeles.

Free estimates. 24-hour response. Family-owned and operated since 1995.
```

### Ongoing GBP work
- [ ] Post weekly: project photo, finish sample, behind-the-scenes
- [ ] Ask every happy customer for a Google review (target: 1 per week minimum)
- [ ] Reply to every review within 48 hours (including bad ones)
- [ ] Re-upload fresh photos monthly

---

## 2. NAP citations (2–3 hours of forms, free)

Identical NAP (Name, Address, Phone) across every directory. Inconsistencies hurt local ranking.

Priority directories — submit in this order:
1. **Yelp** — biz.yelp.com
2. **Better Business Bureau** — bbb.org (apply for accreditation, ~$500/yr but worth it)
3. **Houzz Pro** — houzz.com/pro-services (commercial leads)
4. **BuildZoom** — buildzoom.com (project leads, GC-facing)
5. **Angi (formerly Angie's List)** — angi.com
6. **Thumbtack** — thumbtack.com
7. **NextDoor Business** — business.nextdoor.com (huge for hyper-local LA)
8. **HomeAdvisor** — pro.homeadvisor.com
9. **Porch** — porch.com
10. **CSLB Contractor Directory** — already automatic via your license
11. **California Department of Industrial Relations** — already automatic via DIR registration

Industry-specific:
- **Stucco Manufacturers Association** — stuccoassociation.org
- **National Stucco & Plastering Alliance** — if relevant
- **AIA Industry Partners** (American Institute of Architects local chapter)

Local LA-specific:
- **Calabasas Chamber of Commerce** — calabasaschamber.com (~$300/yr)
- **Greater Conejo Valley Chamber** — conejochamber.org
- **Greater San Fernando Valley Chamber**
- **Beverly Hills Chamber of Commerce**

Manufacturer "find a contractor" pages (if you carry their products):
- Omega Products — omega-products.com/find-a-contractor
- La Habra Stucco — lahabrastucco.com/find-a-contractor
- Merlex Stucco — merlex.com
- Sto Corp — sto.com
- Senergy — senergy.com
- BMI Products — bmiproducts.com

---

## 3. Backlinks from general contractors (highest-quality links)

These are the most valuable backlinks you can earn. Email five GCs you've worked with in the last two years. Template:

```
Subject: Quick favor — trade partner link

Hi [Name],

Hope the [project name] punch list is wrapping up cleanly.

We just relaunched our website (southweststucco.net) and we're rebuilding our online presence — specifically for stucco subcontracting on the kind of commercial work we do for you.

If [GC firm] has a "Trade Partners" or "Subcontractors" page on your site, would you be willing to add us as a stucco/plastering trade partner? Happy to reciprocate with a link or a referral testimonial on our site as well.

Either way, looking forward to the next one.

Thanks,
[Your name]
Southwest Stucco Inc.
(818) 888-8554
```

Each GC trade partner link is worth more than 30 random citation links.

---

## 4. Local press & community

Calabasas / LA local media — pitch a "30-year family business" angle:

- **Calabasas Patch** — patch.com/california/calabasas
- **Calabasas Magazine** — features local businesses
- **Conejo Valley Lifestyle Magazine**
- **The Acorn (local Calabasas/Conejo Valley newspaper)** — has a small-business beat
- **Los Angeles Business Journal** — labusinessjournal.com (harder pitch but possible)

Story angles that work:
- "30 years, same family, same crew" (longevity)
- Specific neighborhood projects with permission
- A "behind-the-craft" piece on Santa Barbara hand-troweled finishes
- Charity or community involvement (sponsorship of local Little League, etc.)

---

## 5. HARO / journalist requests (ongoing, ~30 min/week)

Sign up for **HARO** (Help A Reporter Out) at helpareporter.com — free. Look for journalists writing about:
- Home improvement
- California construction trends
- Los Angeles real estate
- Stucco repair / earthquake retrofit
- Hiring contractors

Reply to 1–2 relevant queries per week. Even one quote in a national outlet = a high-DA backlink.

---

## 6. Content marketing for backlinks

Create one piece of "linkable content" per quarter:

- **"2026 Los Angeles Stucco Cost Guide"** — original pricing data from your last 100 jobs (sanitized). The kind of resource other websites cite.
- **Photo essays on Instagram** that get reposted by:
  - Architects you've worked with
  - Designers / decor accounts
  - Local realtors
- **A "Hiring a Stucco Sub" PDF checklist** that GC PMs download and other industry blogs link to.

---

## 7. Track everything

Weekly (5 minutes):
- Google Search Console → impressions, clicks, top queries
- GA4 → which pages drive form submissions and phone clicks
- Microsoft Clarity → watch 3 session replays, look for confusion

Monthly:
- New backlinks (use ahrefs.com free Webmaster Tools or moz.com)
- GBP profile views, calls, direction requests
- Review count and rating trend

Quarterly:
- Update keyword rankings for: "stucco contractor calabasas", "stucco subcontractor los angeles", "commercial stucco san fernando valley", "stucco repair los angeles"
- Refresh the blog with one new long-form piece

---

## What success looks like (90/180 days)

**90 days:**
- GBP profile fully built, 10+ Google reviews
- 30+ citations live with consistent NAP
- 5 GC trade-partner backlinks
- First page rankings on long-tail queries like "stucco repair calabasas"

**180 days:**
- Top-3 Map pack for "stucco contractor calabasas"
- First page for "stucco subcontractor los angeles" and "commercial stucco san fernando valley"
- 25+ Google reviews
- Steady inbound from GCs you've never worked with before

---

## Need help running any of this?

Most of it can be batched into a weekly 2-hour block. If you want me to write the next blog post, draft the GBP description, or build a downloadable PDF capabilities packet for GCs, just ask.
