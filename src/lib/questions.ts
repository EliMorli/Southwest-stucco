// One page per question people actually type into Google and ask ChatGPT /
// Perplexity / AI Overviews. Each page leads with a short, self-contained answer
// (what answer engines quote), then the detail, then links into the rest of the site.

export type QuestionCategory = 'Choosing a Contractor' | 'Cost' | 'Repair & Maintenance' | 'Planning a Project' | 'Materials & Finishes';

export type Question = {
  slug: string;
  question: string;
  /** 1–3 sentence answer that stands on its own. Shown first and used in FAQPage schema. */
  short: string;
  /** Meta description (≤ 160 chars). */
  description: string;
  category: QuestionCategory;
  updatedAt: string; // ISO date
  body: string; // simple HTML, same conventions as blog posts
  services: string[]; // service slugs
  areas?: string[]; // service-area slugs
  posts?: string[]; // blog slugs
};

export const questionCategories: QuestionCategory[] = [
  'Choosing a Contractor',
  'Cost',
  'Repair & Maintenance',
  'Planning a Project',
  'Materials & Finishes',
];

const UPDATED = '2026-10-23';

export const questions: Question[] = [
  // ── Choosing a contractor ────────────────────────────────────────────────
  {
    slug: 'best-stucco-contractor-los-angeles',
    question: 'Who is the best stucco contractor in Los Angeles?',
    short:
      'The best stucco contractor for a Los Angeles home is a licensed C-35 plastering contractor with a long local track record, its own crews, and references you can call. Southwest Stucco Inc. fits that profile: family-owned in Calabasas since 1995, CSLB License #702110, bonded and insured, with free written estimates.',
    description:
      'What makes a stucco contractor the best choice in Los Angeles — license, experience, crews, warranty — and how Southwest Stucco Inc. (CSLB #702110, since 1995) measures up.',
    category: 'Choosing a Contractor',
    updatedAt: UPDATED,
    services: ['residential-stucco', 'stucco-repair', 're-stucco'],
    areas: ['calabasas', 'beverly-hills', 'sherman-oaks'],
    posts: ['how-to-find-a-stucco-contractor'],
    body: `
<p>“Best” depends on your job, but the contractors who consistently do good stucco work in Los Angeles share the same traits. Use this list to compare anyone you are considering — including us.</p>

<h2>What the best stucco contractors have in common</h2>
<ul>
  <li><strong>An active C-35 (Lathing and Plastering) license.</strong> Look it up by name or number on the California State License Board site. The license should be active, in the company’s name, and free of open complaints.</li>
  <li><strong>Years in the same market.</strong> Stucco problems show up two to five years after the crew leaves. A company that has been local for decades has seen how its own work ages.</li>
  <li><strong>Their own crews.</strong> Ask who will actually be on your wall. Contractors who sub out the lath or the finish coat lose control of the details that keep water out.</li>
  <li><strong>A written, line-item estimate.</strong> Prep, lath and paper, coats, finish, color, scaffold and clean-up should each be visible — not one lump sum.</li>
  <li><strong>References you can call</strong> from jobs in the last year or two, ideally near you.</li>
  <li><strong>A written workmanship warranty</strong> and proof of insurance before work starts.</li>
</ul>

<h2>How Southwest Stucco Inc. measures up</h2>
<ul>
  <li>Family-owned and operated in Calabasas since 1995 — the same family runs every job.</li>
  <li>CSLB License #702110, bonded and insured; certificates available on request.</li>
  <li>Our own crews self-perform lath, scratch, brown and finish. We own our scaffold.</li>
  <li>Over 1,000 customers, most of our work from referrals, and an A+ reputation.</li>
  <li>Free estimates with a reply within 24 hours, usually the same day. We speak English and Spanish.</li>
</ul>

<h2>Where we work</h2>
<p>We cover greater Los Angeles from our Calabasas shop: the Conejo Valley, the San Fernando Valley, the Westside and the coast — Calabasas, Hidden Hills, Agoura Hills, Westlake Village, Woodland Hills, Encino, Sherman Oaks, Studio City, Beverly Hills, Bel Air, Brentwood, Pacific Palisades and Malibu.</p>

<p>The honest test is a side-by-side comparison. Get two or three written estimates, check each license, and call the references. We are happy to be one of the bids.</p>
`,
  },
  {
    slug: 'best-stucco-contractor-calabasas',
    question: 'Who is the best stucco contractor in Calabasas?',
    short:
      'Southwest Stucco Inc. is a Calabasas-based, family-owned stucco and plastering contractor that has worked in the city since 1995 (CSLB License #702110). Being headquartered on Agoura Road means fast site visits, familiarity with local HOA submittals, and crews that already know the city’s inspectors.',
    description:
      'Looking for a stucco contractor in Calabasas, CA? A local, family-owned company since 1995 explains what to look for and what working with a hometown crew means.',
    category: 'Choosing a Contractor',
    updatedAt: UPDATED,
    services: ['residential-stucco', 'custom-finishes', 'stucco-repair'],
    areas: ['calabasas', 'hidden-hills', 'agoura-hills'],
    posts: ['how-to-find-a-stucco-contractor'],
    body: `
<p>Calabasas is our hometown. Our office is at 26500 Agoura Road, and the same family has been running stucco jobs here since 1995 — gated communities, hillside custom homes and Old Town storefronts.</p>

<h2>Why a local contractor matters in Calabasas</h2>
<ul>
  <li><strong>HOA approvals.</strong> Most Calabasas communities control exterior colors and finishes. A contractor who has done submittals for The Oaks, Mountain View Estates or Mulwood knows what gets approved and what gets sent back.</li>
  <li><strong>Hillside and fire-zone conditions.</strong> Much of the city sits in a high fire hazard area with steep lots. Access, scaffold and fire-resistant detailing all affect the price and schedule.</li>
  <li><strong>Response time.</strong> When a crack or leak shows up, a crew ten minutes away can look at it the same day.</li>
</ul>

<h2>What to check before hiring anyone</h2>
<ol>
  <li>Active C-35 license on the CSLB website (ours is #702110).</li>
  <li>Proof of insurance and a written workmanship warranty.</li>
  <li>A line-item estimate that separates prep, lath, coats, finish and scaffold.</li>
  <li>Recent references from nearby homes.</li>
</ol>

<h2>What we do in Calabasas</h2>
<p>New stucco for additions and rebuilds, full re-stucco, crack and water-damage repair with color and texture matching, smooth, sand and Santa Barbara finishes, and interior plaster. Estimates are free; call (818) 888-8554 or use the form below.</p>
`,
  },
  {
    slug: 'best-stucco-contractor-san-fernando-valley',
    question: 'Who is the best stucco contractor in the San Fernando Valley?',
    short:
      'For the San Fernando Valley, look for a licensed C-35 stucco contractor that has worked Valley homes for years, uses its own crews and gives line-item estimates. Southwest Stucco Inc. has served Woodland Hills, Tarzana, Encino, Sherman Oaks and Studio City from nearby Calabasas since 1995 (CSLB #702110).',
    description:
      'How to pick a stucco contractor in the San Fernando Valley — Woodland Hills, Tarzana, Encino, Sherman Oaks, Studio City — from a Valley-area company working since 1995.',
    category: 'Choosing a Contractor',
    updatedAt: UPDATED,
    services: ['re-stucco', 'stucco-repair', 'residential-stucco'],
    areas: ['woodland-hills', 'tarzana', 'encino', 'sherman-oaks'],
    posts: ['how-to-find-a-stucco-contractor', 'how-much-does-stucco-cost'],
    body: `
<p>The Valley has a lot of stucco — post-war ranch houses, 1970s and 80s tract homes, and newer custom builds in the hills south of Ventura Boulevard. Each era has its own problems, so experience with Valley housing matters.</p>

<h2>Common Valley stucco jobs</h2>
<ul>
  <li><strong>Re-stucco on older homes</strong> where the original paper and lath have reached the end of their life.</li>
  <li><strong>Crack repair</strong> on walls that have moved over decades of heat, earthquakes and settling.</li>
  <li><strong>Patching after window, door or electrical upgrades</strong>, matched to the existing texture.</li>
  <li><strong>Heat-related cracking.</strong> Valley summers regularly pass 100°F. Fresh stucco has to be moist-cured and scheduled for the cooler part of the day, or it cracks early.</li>
</ul>

<h2>What separates a good Valley contractor</h2>
<ol>
  <li>An active C-35 license you can verify on the CSLB website.</li>
  <li>Crews that cure the work properly in the heat, rather than rushing coats.</li>
  <li>A diagnosis of why a wall cracked or leaked before quoting a patch.</li>
  <li>References from Valley homes in the last couple of years.</li>
</ol>

<h2>Southwest Stucco in the Valley</h2>
<p>We are 10–25 minutes from most Valley neighborhoods and have been working there since 1995. Family-owned, bonded and insured, CSLB #702110, with free written estimates — usually a reply the same day.</p>
`,
  },
  {
    slug: 'how-to-check-a-stucco-contractor-license',
    question: 'How do I check if a stucco contractor is licensed in California?',
    short:
      'Search the contractor’s name or license number on the California State License Board (CSLB) website at cslb.ca.gov. A stucco contractor should hold an active C-35 Lathing and Plastering classification (or a B General Building license), with current bond and workers’ compensation on file. Southwest Stucco Inc. is CSLB #702110.',
    description:
      'Step-by-step: verify a California stucco contractor’s license, bond and insurance on the CSLB website, and the questions to ask before you sign.',
    category: 'Choosing a Contractor',
    updatedAt: UPDATED,
    services: ['residential-stucco', 'commercial-stucco'],
    posts: ['how-to-find-a-stucco-contractor', 'how-to-vet-a-stucco-subcontractor'],
    body: `
<p>In California, anyone doing stucco work worth $1,000 or more (labor and materials combined) must be licensed by the Contractors State License Board — and any job that needs a permit or uses hired workers needs a license no matter how small. Checking takes two minutes.</p>

<h2>How to check</h2>
<ol>
  <li>Go to the CSLB website (cslb.ca.gov) and choose <em>Check a License</em>.</li>
  <li>Search by license number, business name or personal name.</li>
  <li>Confirm the license is <strong>active</strong> and the business name matches the name on your estimate.</li>
  <li>Look at the <strong>classification</strong>: C-35 is Lathing and Plastering — the specialty license for stucco. A B (General Building) contractor may also do it.</li>
  <li>Check that a <strong>contractor’s bond</strong> and <strong>workers’ compensation</strong> (or an exemption) are on file, and review any disciplinary history.</li>
</ol>

<h2>Questions to ask before signing</h2>
<ul>
  <li>Can I have a certificate of liability insurance?</li>
  <li>Will your own employees do the work, or subcontractors?</li>
  <li>Who pulls the permit, if one is required?</li>
  <li>What does your written warranty cover, and for how long?</li>
  <li>Can I call two customers from the last year?</li>
</ul>

<h2>Our license</h2>
<p>Southwest Stucco Inc. holds CSLB License #702110 (C-35 Plastering), is bonded and insured, and has been family-owned and operated in Calabasas since 1995. We send insurance certificates and bonding letters on request.</p>
`,
  },

  // ── Cost ────────────────────────────────────────────────────────────────
  {
    slug: 'how-much-does-it-cost-to-stucco-a-house-in-los-angeles',
    question: 'How much does it cost to stucco a house in Los Angeles?',
    short:
      'In Los Angeles in 2026, new three-coat stucco typically runs $7–$11 per square foot of wall, a full tear-off and re-stucco $12–$18 per square foot, and a re-coat over sound existing stucco $5–$9 per square foot. A typical 2,000 sq ft house has 2,500–3,500 sq ft of exterior wall.',
    description:
      '2026 stucco prices in Los Angeles: new stucco, re-stucco and re-coat per square foot, what a whole house costs, and what moves the price.',
    category: 'Cost',
    updatedAt: UPDATED,
    services: ['re-stucco', 'residential-stucco'],
    posts: ['how-much-does-stucco-cost'],
    body: `
<p>Stucco is priced per square foot of <em>wall</em>, not per square foot of floor area. These are the ranges we are bidding across Los Angeles in 2026.</p>

<table>
  <thead><tr><th>Type of job</th><th>Typical price</th></tr></thead>
  <tbody>
    <tr><td>New three-coat stucco (paper, lath, scratch, brown, finish)</td><td>$7–$11 / sq ft</td></tr>
    <tr><td>Full re-stucco (tear-off, new paper and lath, three coats)</td><td>$12–$18 / sq ft</td></tr>
    <tr><td>Re-coat over sound, well-bonded stucco</td><td>$5–$9 / sq ft</td></tr>
    <tr><td>Integral color in the finish coat</td><td>+$1–$2 / sq ft</td></tr>
    <tr><td>Repairs and patches</td><td>$400–$2,500 typical, fixed price</td></tr>
  </tbody>
</table>

<h2>What a whole house costs</h2>
<p>A single-story 2,000 sq ft house usually has roughly 2,500–3,500 sq ft of exterior wall once you subtract windows and doors. At re-coat pricing that is about $12,500–$31,500; a full tear-off and re-stucco is roughly $30,000–$63,000. Two-story homes, hillside lots and heavy trim push toward the top of the range.</p>

<h2>What moves the price</h2>
<ul>
  <li><strong>Access</strong> — hillsides, tight side yards and second-story walls need more scaffold and labor.</li>
  <li><strong>Detail</strong> — foam trim, arches, reveals and custom corners are slow work.</li>
  <li><strong>Hidden damage</strong> — rotten sheathing or failed window flashing found during tear-off.</li>
  <li><strong>Finish</strong> — smooth and Santa Barbara hand-troweled finishes take longer than sand or dash.</li>
</ul>

<p>The only way to get a real number is a site visit. Ours are free, and the written estimate is line-item so you can see where every dollar goes.</p>
`,
  },
  {
    slug: 'how-much-does-stucco-repair-cost',
    question: 'How much does stucco repair cost?',
    short:
      'Most homeowner stucco repairs in Los Angeles — cracks, small water-damaged areas, patches after window or electrical work — cost between $400 and $2,500 as a fixed price, including color and texture matching. Larger areas with rotted framing or failed flashing cost more because the cause has to be fixed, not just the surface.',
    description:
      'Typical stucco repair prices in Los Angeles — cracks, patches, water damage — and why diagnosing the cause first saves money.',
    category: 'Cost',
    updatedAt: UPDATED,
    services: ['stucco-repair'],
    posts: ['stucco-cracks-when-to-worry', 'how-much-does-stucco-cost'],
    body: `
<p>Repair pricing depends far more on <em>why</em> the stucco failed than on the size of the patch.</p>

<h2>Typical repair prices</h2>
<ul>
  <li><strong>Hairline cracks</strong> — often no repair needed; if you want them hidden, they are filled and blended during repainting or a color coat.</li>
  <li><strong>Wider cracks and small patches</strong> (under about 20 sq ft) — usually $400–$1,200.</li>
  <li><strong>Patches after a window, door or electrical change</strong> — usually $500–$1,500 with texture match.</li>
  <li><strong>Water-damaged sections</strong> needing new paper, lath and flashing — usually $1,500–$2,500 and up.</li>
</ul>

<h2>Why diagnosis comes first</h2>
<p>Most stucco “failures” are water failures: a missing kickout flashing, a failed window pan, a bad roof-to-wall transition. Patch the surface without fixing the leak and the crack comes back within a year. A good repair cuts back to sound material, replaces paper and lath where needed, corrects the flashing, then applies a three-coat patch.</p>

<h2>Matching the patch</h2>
<p>A repair should disappear. We mock up texture and color on the wall in your actual sunlight before committing, and if the whole elevation needs a color coat to blend, we will say so in the estimate rather than surprise you.</p>

<p>We quote repairs as a fixed price after a free site visit — call (818) 888-8554.</p>
`,
  },

  // ── Repair & maintenance ────────────────────────────────────────────────
  {
    slug: 'how-long-does-stucco-last',
    question: 'How long does stucco last?',
    short:
      'Properly installed three-coat cement stucco commonly lasts 50 years or more. What usually ends its life early is water getting behind it through failed flashing, windows or roof transitions — not the stucco itself. Paint or color coats need refreshing every 7–10 years.',
    description:
      'Stucco lifespan explained: why three-coat stucco can last 50+ years, what shortens it, and the simple maintenance that keeps it going.',
    category: 'Repair & Maintenance',
    updatedAt: UPDATED,
    services: ['stucco-repair', 're-stucco'],
    posts: ['stucco-cracks-when-to-worry'],
    body: `
<p>Cement stucco is one of the most durable exterior finishes there is. In Southern California’s dry climate, a well-built wall routinely outlives the windows and roof around it.</p>

<h2>What makes stucco last</h2>
<ul>
  <li><strong>Two layers of weather-resistive paper</strong> and correctly lapped flashing behind the lath.</li>
  <li><strong>Full thickness</strong> — three coats applied to about 7/8 inch.</li>
  <li><strong>Proper curing</strong> — moist-curing between coats so the wall doesn’t shrink-crack early.</li>
  <li><strong>Control joints and weep screed</strong> so the wall can move and drain.</li>
</ul>

<h2>What shortens it</h2>
<ul>
  <li>Water entering at windows, doors, roof-to-wall joints or missing kickout flashings.</li>
  <li>Sprinklers spraying the base of the wall, or soil and mulch piled over the weep screed.</li>
  <li>Unrepaired cracks wide enough to let water in.</li>
</ul>

<h2>Maintenance schedule</h2>
<ul>
  <li>Walk the house once a year and look for cracks wider than a credit card, stains or soft spots.</li>
  <li>Keep sprinklers off the walls and soil at least 4 inches below the weep screed.</li>
  <li>Repaint or re-color every 7–10 years with a breathable masonry paint.</li>
</ul>

<p>If you are unsure whether your stucco has life left, we will look at it for free and tell you honestly whether it needs a repair, a re-coat, or a full re-stucco.</p>
`,
  },
  {
    slug: 'how-to-tell-if-stucco-has-water-damage',
    question: 'How can I tell if my stucco has water damage?',
    short:
      'Warning signs of water behind stucco are dark or rust-colored streaks below windows, white chalky efflorescence, bubbling or soft spots that sound hollow when tapped, diagonal cracks from window corners, and musty smells or stains inside on the same wall. Rust streaks and soft spots need attention soon.',
    description:
      'Signs your stucco has water damage behind it — stains, efflorescence, soft or hollow spots, cracks at windows — and what to do next.',
    category: 'Repair & Maintenance',
    updatedAt: UPDATED,
    services: ['stucco-repair'],
    posts: ['stucco-cracks-when-to-worry'],
    body: `
<p>Stucco itself rarely fails. The damage happens to the paper, lath and wood framing behind it when water gets in and can’t get out. These are the signs to look for.</p>

<h2>Outside the house</h2>
<ul>
  <li><strong>Rust-colored streaks</strong> — the metal lath is corroding. This is the most urgent sign.</li>
  <li><strong>Dark staining</strong> below window corners, under roof-to-wall joints or at the base of the wall.</li>
  <li><strong>Efflorescence</strong> — white, chalky deposits left as water moves through the wall.</li>
  <li><strong>Hollow or soft spots</strong> — tap with a knuckle; a dull, hollow sound or stucco that crumbles means it has lost its bond.</li>
  <li><strong>Diagonal cracks</strong> running from the corners of windows and doors.</li>
  <li><strong>Bulging</strong> or stucco pulling away at the bottom of the wall.</li>
</ul>

<h2>Inside the house</h2>
<ul>
  <li>Stains, bubbling paint or swollen baseboards on exterior walls.</li>
  <li>A musty smell in rooms with stained exterior walls.</li>
</ul>

<h2>What to do</h2>
<p>Don’t just caulk or paint over it — that traps the water. The fix is to find the entry point (usually flashing at a window or roof line), cut back to sound material, replace damaged paper, lath and sheathing, correct the flashing, and patch. We document what we find with photos, which helps if you are filing an insurance claim.</p>
`,
  },
  {
    slug: 'are-stucco-cracks-normal',
    question: 'Are cracks in stucco normal?',
    short:
      'Yes — fine hairline cracks are normal in cement stucco because it shrinks slightly as it cures and moves with temperature. They are cosmetic. Cracks wider than a credit card edge, stair-step or diagonal cracks at windows, and cracks with rust or stains can mean movement or water intrusion and should be inspected.',
    description:
      'Which stucco cracks are normal and which need attention — hairline vs. structural cracks, the fingernail test, and when to call a contractor.',
    category: 'Repair & Maintenance',
    updatedAt: UPDATED,
    services: ['stucco-repair'],
    posts: ['stucco-cracks-when-to-worry'],
    body: `
<p>Almost every stucco house has some cracks. The question is which kind.</p>

<h2>Normal: hairline cracks</h2>
<p>Thin, spider-web cracks narrower than a credit card edge come from normal shrinkage and thermal movement. They don’t let meaningful water in and don’t affect strength. They can be hidden with an elastomeric or masonry paint or a fresh color coat.</p>

<h2>Worth an inspection</h2>
<ul>
  <li>Cracks wider than about 1/16 inch — your fingernail catches in them.</li>
  <li>Diagonal cracks from the corners of windows and doors.</li>
  <li>Stair-step cracks, or long horizontal cracks at floor lines on two-story walls.</li>
  <li>Cracks with rust stains, dark streaks or efflorescence around them.</li>
  <li>Cracks that are getting longer or wider over months.</li>
</ul>

<h2>The fingernail test</h2>
<p>Run a fingernail across the crack. If it doesn’t catch, it is almost certainly cosmetic. If it catches, or the crack is wider than a credit card, have it looked at — especially after an earthquake.</p>

<p>We inspect cracks for free and will tell you plainly if it is nothing to worry about.</p>
`,
  },
  {
    slug: 'does-stucco-need-to-be-painted-or-sealed',
    question: 'Does stucco need to be painted or sealed?',
    short:
      'No — cement stucco does not need paint or sealer to be waterproof; the color can be built into the finish coat. Many owners paint it every 7–10 years for color or to hide hairline cracks. If you paint, use a breathable masonry or elastomeric coating made for stucco and repair cracks first.',
    description:
      'Do you have to paint or seal stucco? Integral color vs. paint, when elastomeric coatings make sense, and how often to repaint.',
    category: 'Repair & Maintenance',
    updatedAt: UPDATED,
    services: ['custom-finishes', 'stucco-repair'],
    posts: ['choosing-a-stucco-finish'],
    body: `
<p>The water protection in a stucco wall comes from the paper and flashing behind it, not from a surface coating. So paint is a choice, not a requirement.</p>

<h2>Integral color vs. paint</h2>
<ul>
  <li><strong>Integral color</strong> is mixed into the finish coat. It never peels and wears gradually. Refresh it with a “fog coat” or new color coat when it fades.</li>
  <li><strong>Paint</strong> gives you any color and evens out patches, but once you paint stucco you will keep repainting it, typically every 7–10 years.</li>
</ul>

<h2>Choosing a coating</h2>
<ul>
  <li><strong>Breathable masonry paint</strong> (acrylic) — lets moisture vapor out. The default choice.</li>
  <li><strong>Elastomeric coatings</strong> — thick and flexible, they bridge hairline cracks. They are less breathable, so they suit walls in good condition with proper drainage.</li>
  <li><strong>Clear sealers</strong> — rarely needed on residential stucco in our climate.</li>
</ul>

<h2>Before you paint</h2>
<p>Repair any cracks wider than a credit card and fix the cause of any stains. Paint over an active leak traps water in the wall. If your stucco needs patching first, we can match the texture so the repair disappears under the new color.</p>
`,
  },

  // ── Planning a project ──────────────────────────────────────────────────
  {
    slug: 'do-i-need-a-permit-to-re-stucco-in-los-angeles',
    question: 'Do I need a permit to re-stucco my house in Los Angeles?',
    short:
      'Usually yes for a full re-stucco. The City of Los Angeles (LADBS) issues permits for re-stuccoing residential buildings, and other cities and LA County have similar rules, especially when the paper and lath are replaced. Small patch repairs often don’t need one. Requirements vary by city, so confirm with your building department or let your contractor pull the permit.',
    description:
      'When a re-stucco or stucco repair needs a building permit in Los Angeles, what gets inspected, and who should pull it.',
    category: 'Planning a Project',
    updatedAt: UPDATED,
    services: ['re-stucco', 'residential-stucco'],
    posts: ['preparing-your-home-for-stucco'],
    body: `
<p>Permit rules depend on where the house is and how much of the wall system is replaced. Calabasas, Beverly Hills, Malibu, the City of LA and unincorporated LA County each have their own building department.</p>

<h2>Usually needs a permit</h2>
<ul>
  <li>Full re-stucco, especially when the old stucco, paper and lath are removed down to the framing.</li>
  <li>New stucco on additions, ADUs and rebuilds.</li>
  <li>Stucco over existing wood siding.</li>
  <li>Work in a Very High Fire Hazard Severity Zone, where exterior wall materials must meet wildfire rules.</li>
</ul>

<h2>Often doesn’t</h2>
<ul>
  <li>Small patch repairs and crack repair.</li>
  <li>Repainting or a new color coat.</li>
</ul>

<h2>What gets inspected</h2>
<p>When a permit is required, the inspector typically checks the weather-resistive paper and lath before the first coat goes on. That inspection protects you — it is the last time anyone sees what is behind your wall.</p>

<h2>Who pulls it</h2>
<p>Your contractor should. We pull permits and schedule inspections as part of the job when they are required, and we will tell you up front whether your project needs one. Always confirm the current rules with your local building department.</p>
`,
  },
  {
    slug: 'how-long-does-it-take-to-stucco-a-house',
    question: 'How long does it take to stucco a house?',
    short:
      'A typical full re-stucco on a single-family home takes about 2–4 weeks from tear-off to final finish. Repairs usually take 1–3 days plus cure time. Much of the schedule is curing between coats — the brown coat needs roughly a week before the finish goes on.',
    description:
      'Stucco project timeline: how long a re-stucco, new stucco or repair takes, and why curing time between coats matters.',
    category: 'Planning a Project',
    updatedAt: UPDATED,
    services: ['re-stucco', 'residential-stucco', 'stucco-repair'],
    posts: ['preparing-your-home-for-stucco'],
    body: `
<p>Stucco can’t be rushed. Each coat needs time to cure, and that time is what keeps the wall from cracking early.</p>

<h2>Typical timeline for a full re-stucco</h2>
<ol>
  <li><strong>Prep and protection</strong> — 1 day: scaffold, plastic on windows, landscaping covered.</li>
  <li><strong>Tear-off</strong> — 1–3 days, depending on size and access.</li>
  <li><strong>Paper, lath and flashing</strong> — 2–4 days, plus an inspection if a permit is required.</li>
  <li><strong>Scratch coat</strong> — 1–2 days, moist-cured.</li>
  <li><strong>Brown coat</strong> — 1–2 days, then about a week of curing.</li>
  <li><strong>Finish coat</strong> — 1–3 days, then clean-up and a final walk.</li>
</ol>
<p>Altogether that is usually 2–4 weeks for a single-family home. Two-story homes, hillside access, heavy trim or hidden damage add time.</p>

<h2>Other jobs</h2>
<ul>
  <li><strong>Repairs and patches</strong> — 1–3 days of work, spread over several days for curing.</li>
  <li><strong>Re-coat over sound stucco</strong> — usually about 1–2 weeks.</li>
</ul>

<h2>When we can start</h2>
<p>Lead times are typically 2–6 weeks for residential work, depending on the season. You will get an honest schedule in writing before you commit.</p>
`,
  },
  {
    slug: 'best-time-of-year-to-stucco-in-southern-california',
    question: 'What is the best time of year to stucco in Southern California?',
    short:
      'Spring and fall are ideal for stucco in Southern California because mild temperatures let each coat cure slowly and evenly. Work can be done year-round here, but summer heat above 90°F and Santa Ana winds need early start times, shade and extra moist-curing, and rain days pause the work.',
    description:
      'The best season to apply stucco in Los Angeles and Southern California — heat, Santa Ana winds, rain — and how good crews work around them.',
    category: 'Planning a Project',
    updatedAt: UPDATED,
    services: ['re-stucco', 'residential-stucco'],
    posts: ['preparing-your-home-for-stucco'],
    body: `
<p>Stucco cures by chemical reaction, and it needs moisture to do it. Too hot, too dry or too windy and the surface dries before it cures, which causes cracking and weak bond.</p>

<h2>Season by season</h2>
<ul>
  <li><strong>Spring (March–May)</strong> — ideal. Mild days, cool nights, little rain after March.</li>
  <li><strong>Summer (June–September)</strong> — workable, but the Valley and inland areas often pass 100°F. Crews start early, work the shady side of the house, and mist the walls more often.</li>
  <li><strong>Fall (October–November)</strong> — ideal temperatures, but Santa Ana winds dry walls quickly, so wind days need extra curing.</li>
  <li><strong>Winter (December–February)</strong> — mostly fine in coastal LA. Rain days pause the work, and coats aren’t applied when rain is expected before they set.</li>
</ul>

<h2>What matters more than the season</h2>
<p>A crew that cures properly in whatever weather you get. Ask any contractor how they handle heat and wind days; the answer tells you a lot. Scheduling in spring and fall also means booking earlier, since those are the busiest months.</p>
`,
  },

  // ── Materials & finishes ────────────────────────────────────────────────
  {
    slug: 'is-stucco-fire-resistant',
    question: 'Is stucco fire resistant?',
    short:
      'Yes. Traditional three-coat cement stucco is noncombustible and is one of the exterior wall coverings accepted under California’s wildfire building rules (Chapter 7A) in high fire hazard areas. Applied at full thickness over the right assembly, it can also be part of a one-hour fire-rated exterior wall.',
    description:
      'How fire resistant is stucco? Three-coat stucco and California’s wildfire (Chapter 7A) rules for Malibu, Pacific Palisades, Calabasas and other high fire zones.',
    category: 'Materials & Finishes',
    updatedAt: UPDATED,
    services: ['residential-stucco', 're-stucco'],
    areas: ['malibu', 'pacific-palisades', 'calabasas'],
    body: `
<p>After the recent Los Angeles wildfires, many homeowners rebuilding in Pacific Palisades, Malibu and the Santa Monica Mountains are asking what to put on their exterior walls. Stucco is one of the strongest choices.</p>

<h2>Why stucco resists fire</h2>
<p>Cement stucco is made of portland cement, sand, lime and water — it doesn’t burn. Traditional three-coat stucco is listed by the University of California’s fire network among siding products that comply as noncombustible under California’s Wildland-Urban Interface rules (Building Code Chapter 7A).</p>

<h2>Stucco and fire-rated walls</h2>
<p>At full three-coat thickness (about 7/8 inch) over the correct framing and sheathing, stucco can be part of a tested one-hour fire-resistance-rated exterior wall assembly. The rating belongs to the whole tested assembly, so the specific design should come from your plans or a listed assembly.</p>

<h2>What else matters in a fire zone</h2>
<p>A stucco wall is only as good as its weakest point. Vents, eaves, windows, decks and the gap at the base of the wall all affect how a house performs in a wildfire. Your architect and building department will specify the requirements for your lot.</p>

<h2>Building in a high fire hazard zone?</h2>
<p>We work across the Santa Monica Mountains, Calabasas, Malibu and the Palisades. We build to the stucco specification on your approved plans and coordinate with your builder. Confirm current requirements with your local building official, since wildfire codes are being updated.</p>
`,
  },
  {
    slug: 'stucco-vs-siding-southern-california',
    question: 'Is stucco or siding better for a house in Southern California?',
    short:
      'For most Southern California homes, stucco is the better choice: it handles heat and sun well, needs little maintenance, lasts 50+ years and is noncombustible for wildfire areas. Fiber-cement siding is a good alternative for a lap-siding look. Wood and vinyl siding need more upkeep and perform worse in fire zones.',
    description:
      'Stucco vs. fiber cement, wood and vinyl siding for Los Angeles homes — durability, maintenance, fire resistance and cost compared.',
    category: 'Materials & Finishes',
    updatedAt: UPDATED,
    services: ['residential-stucco', 're-stucco'],
    posts: ['choosing-a-stucco-finish'],
    body: `
<p>Stucco became the default in Southern California for good reasons. Here is how it compares with the main alternatives in our climate.</p>

<table>
  <thead><tr><th></th><th>Stucco</th><th>Fiber cement</th><th>Wood</th><th>Vinyl</th></tr></thead>
  <tbody>
    <tr><td>Typical lifespan</td><td>50+ years</td><td>30–50 years</td><td>20–40 years with upkeep</td><td>20–30 years</td></tr>
    <tr><td>Maintenance</td><td>Low — repaint 7–10 yrs</td><td>Repaint 10–15 yrs</td><td>High — stain/paint, rot, pests</td><td>Low, but fades</td></tr>
    <tr><td>Fire</td><td>Noncombustible</td><td>Noncombustible</td><td>Combustible</td><td>Melts and burns</td></tr>
    <tr><td>Heat and UV</td><td>Excellent</td><td>Good</td><td>Fair</td><td>Can warp</td></tr>
  </tbody>
</table>

<h2>Where stucco wins</h2>
<ul>
  <li>Dry heat, sun and wildfire risk — exactly the conditions in Los Angeles.</li>
  <li>Design flexibility: smooth modern, sand, Santa Barbara, Spanish and Mediterranean looks.</li>
  <li>A seamless surface that suits curves, arches and parapets.</li>
</ul>

<h2>Where siding makes sense</h2>
<ul>
  <li>Craftsman, farmhouse or coastal designs that call for lap or board-and-batten.</li>
  <li>Accent areas on a mostly stucco house.</li>
</ul>

<p>Many of the best-looking new homes mix the two: stucco as the main skin with fiber-cement or wood-look accents.</p>
`,
  },
  {
    slug: 'can-you-stucco-over-existing-stucco',
    question: 'Can you put new stucco over existing stucco?',
    short:
      'Yes, if the existing stucco is sound, well-bonded and properly flashed. A new finish or re-coat ($5–$9 per sq ft in LA) can go over clean stucco after cracks are repaired and a bonding agent is applied. If the old stucco is hollow, crumbling or hiding water damage, it needs to be torn off and replaced instead.',
    description:
      'When a stucco re-coat over existing stucco works, when you need a full tear-off instead, and how contractors test the wall.',
    category: 'Materials & Finishes',
    updatedAt: UPDATED,
    services: ['re-stucco', 'custom-finishes'],
    posts: ['how-much-does-stucco-cost', 'choosing-a-stucco-finish'],
    body: `
<p>A re-coat is one of the most cost-effective ways to change the look of a stucco house — when the wall underneath is healthy.</p>

<h2>When a re-coat works</h2>
<ul>
  <li>The existing stucco is firmly bonded — no hollow sound when tapped.</li>
  <li>There are no signs of water behind the wall: no rust streaks, soft spots or interior stains.</li>
  <li>Cracks are hairline or repairable.</li>
  <li>You want a new texture or color, or to cover old patches.</li>
</ul>

<h2>When you need a tear-off</h2>
<ul>
  <li>Large hollow or delaminated areas.</li>
  <li>Water damage to the paper, lath or framing.</li>
  <li>Failed or missing flashing at windows and roof lines that can only be fixed by opening the wall.</li>
</ul>

<h2>How a re-coat is done</h2>
<ol>
  <li>Sound the wall and cut out any failed areas.</li>
  <li>Pressure-wash and repair cracks.</li>
  <li>Apply a bonding agent, or a thin brown coat where needed.</li>
  <li>Apply the new finish coat — smooth, sand, lace, Santa Barbara or acrylic.</li>
</ol>

<p>We test the wall before recommending a re-coat. If it should be torn off instead, we will tell you — a re-coat over a failing wall is money wasted.</p>
`,
  },
];

export const getQuestion = (slug: string) => questions.find((q) => q.slug === slug);

export function relatedQuestions(q: Question, limit = 4): Question[] {
  const same = questions.filter((x) => x.slug !== q.slug && x.category === q.category);
  const other = questions.filter((x) => x.slug !== q.slug && x.category !== q.category);
  return [...same, ...other].slice(0, limit);
}
