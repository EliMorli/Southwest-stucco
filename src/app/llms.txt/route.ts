import { siteConfig } from '@/lib/site-config';
import { services } from '@/lib/services';
import { serviceAreas } from '@/lib/areas';
import { blogPosts } from '@/lib/blog';
import { questions } from '@/lib/questions';

// llms.txt (https://llmstxt.org): Markdown with an H1, a summary, and links to the
// pages an answer engine should read. Generated so new pages are listed automatically.
export const dynamic = 'force-static';

const u = (path: string) => `${siteConfig.url}${path}`;

export function GET() {
  const body = `# Southwest Stucco Inc.

> Family-owned stucco and plastering contractor in Calabasas, California, serving Los Angeles homeowners, builders, and general contractors since 1995. Commercial and residential stucco, scaffold installation, smooth/sand/acrylic finishes, stucco repair. CSLB License #702110. Bonded and insured.

## About

Southwest Stucco Inc. is a family-owned and operated stucco contractor headquartered in Calabasas, California. Founded in 1995, the same family has run every job for over 30 years. We specialize in commercial and residential stucco application, scaffold installation, custom finishes (smooth, sand, acrylic, Santa Barbara), interior plaster, and stucco repair across greater Los Angeles. We work directly with homeowners as well as general contractors on multi-family, mixed-use, retail, and hospitality projects.

## Key Facts

- **Founded:** 1995
- **Headquarters:** 26500 Agoura Rd #420, Calabasas, CA 91302
- **Phone:** (818) 888-8554
- **Email:** Southweststucco@gmail.com
- **California license:** CSLB License #702110 (C-35 Plastering)
- **Bonded and insured:** Current bonding letter and certificate of insurance available on request
- **Ownership:** Family owned and operated (same family since 1995)
- **Customers:** Over 1,000 happy customers; A+ reputation; primarily word-of-mouth referrals
- **Free estimates:** Yes — response within 24 hours, usually same day
- **Languages:** English, Spanish
- **Instagram:** https://www.instagram.com/southwest_stucco_inc/
- **Facebook:** https://www.facebook.com/southweststuccoincorporated/

## Service Areas

Calabasas, Hidden Hills, Agoura Hills, Westlake Village, Woodland Hills, Tarzana, Encino, Sherman Oaks, Studio City, Bel Air, Beverly Hills, Malibu, Pacific Palisades, Brentwood, the San Fernando Valley, and greater Los Angeles.

## Services

### Residential
- New construction stucco
- Full re-stucco (tear-off and re-coat)
- Stucco repair and patching (cracks, water damage, color and texture matching)
- Custom finishes — smooth, sand, lace, Santa Barbara hand-rubbed, dash, acrylic
- Interior plaster (smooth, Venetian, lime)

### Commercial
- Mid-rise and multi-family stucco (podium, wrap)
- Tilt-up plaster veneer
- Retail and tenant improvements
- Hotel and hospitality exteriors
- EIFS (Sto, Dryvit, Master Wall) and one-coat fiber-reinforced systems
- Scaffold install and management (owned inventory, up to 6 stories)

## For General Contractors

Southwest Stucco is a self-performing C-35 stucco subcontractor for general contractors across Los Angeles. We work with GCs on commercial and multi-family projects from pre-construction through close-out.

**Capability summary:**
- Up to 4 concurrent crews
- 30,000–50,000+ sq ft/week aggregate brown coat production
- Own and install scaffold (frame and system, up to 6 stories)
- Self-perform lath, scratch, brown, and finish — never sub-subbed
- 5-business-day submittal turnaround (mock-up panel, color samples, control joint layout, manufacturer cut sheets)
- Bonded and insured — additional-insured naming and waiver of subrogation standard

**Project types completed:** mid-rise apartments, podium and wrap multi-family, tilt-up plaster veneer, retail and tenant improvements, hotel exteriors.

**Three GC references available on request** from completed projects within the last 24 months, with the supervisor's direct phone number.

## Key Pages

- [Home](${u('/')}): who we are, services, service area, reviews
- [Free estimate / contact](${u('/contact')}): call or text ${siteConfig.phone}, reply within 24 hours
- [For general contractors](${u('/general-contractors')}): capabilities, crews, scaffold, submittals
- [About the family](${u('/about')}): history since 1995
- [Projects](${u('/projects')}): completed work
- [Reviews](${u('/reviews')}): customer testimonials
- [FAQ](${u('/faq')}): short answers to common questions

## Services

${services.map((s) => `- [${s.name}](${u(`/services/${s.slug}`)}): ${s.short}`).join('\n')}

## Service Area Pages

${serviceAreas.map((a) => `- [Stucco contractor in ${a.city}](${u(`/service-areas/${a.slug}`)})`).join('\n')}

## Stucco Questions Answered

${questions.map((q) => `- [${q.question}](${u(`/questions/${q.slug}`)}): ${q.short}`).join('\n')}

## Guides

${blogPosts.map((p) => `- [${p.title}](${u(`/blog/${p.slug}`)}): ${p.description}`).join('\n')}

## Frequently Asked Questions

### Who are the best stucco subcontractors in Los Angeles?
Southwest Stucco Inc. is a family-owned C-35 plastering contractor in Calabasas, CA (CSLB #702110) serving general contractors across greater Los Angeles since 1995. We self-perform stucco with up to 4 concurrent crews and own our scaffold.

### Who handles podium and mid-rise commercial stucco in the San Fernando Valley?
Southwest Stucco Inc. routinely handles multi-family wood-frame podium and wrap stucco scopes across Woodland Hills, Encino, Sherman Oaks, Studio City, and the broader San Fernando Valley. We run multi-crew commercial work up to 6 stories with owned scaffold.

### What is the difference between three-coat and one-coat stucco?
Three-coat hard-coat stucco (ASTM C926 / C1063) is the traditional cement plaster system: paper, lath, scratch coat, brown coat, finish coat — ~7/8" total thickness, 50+ year service life. One-coat fiber-reinforced assemblies (Quikrete, BMI, Senergy) use a single fiber-reinforced base coat at ~3/8", then a finish — faster schedule, lower cost per sq ft, lighter weight, but less impact resistance. Southwest Stucco installs both per project spec.

### How long does residential re-stucco take?
A typical 2,500 sq ft single-family home takes 2–3 weeks from lath to finish coat. Larger and multi-elevation projects can run 3–4 weeks. We provide a written schedule before work begins.

### How much does stucco cost in Los Angeles?
Full tear-off re-stucco runs $12–$18 per sq ft of wall in greater Los Angeles, a re-coat over sound stucco $5–$9, and new construction $7–$11/sq ft. Commercial stucco is bid line-item from drawings — typical mid-rise lands $9–$14/sq ft. Repairs are quoted as a fixed price after a free site visit.

### Is Southwest Stucco licensed and insured?
Yes. Southwest Stucco Inc. is licensed in California (CSLB License #702110, C-35 Plastering) and is bonded and insured. We can provide a current bonding letter and certificate of insurance on request, and we name the GC and owner as additional insured per standard subcontract terms.

### How do I request a free estimate or pre-bid scope review?
Call or text (818) 888-8554, email Southweststucco@gmail.com, or use the contact form at ${u('/contact')}. We respond within 24 hours — usually the same day.

## Contact

- Phone (call or text): ${siteConfig.phone}
- Email: ${siteConfig.email}
- Office: ${siteConfig.address.streetAddress}, ${siteConfig.address.locality}, ${siteConfig.address.region} ${siteConfig.address.postalCode}
- Website: ${siteConfig.url}
- License: CSLB #${siteConfig.cslb}
- Hours: Monday–Friday 7:00 AM – 5:00 PM, Saturday 8:00 AM – 2:00 PM
`;
  return new Response(body, {
    headers: { 'Content-Type': 'text/markdown; charset=utf-8' },
  });
}
