export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  category: string;
  readingMinutes: number;
  publishedAt: string; // ISO
  updatedAt?: string;
  cover: string; // /gallery/...
  body: string; // simple markdown-ish HTML
};

// Long-form, evergreen content — written for both humans and answer engines.
export const blogPosts: BlogPost[] = [
  {
    slug: 'stucco-cracks-when-to-worry',
    title: 'Stucco Cracks: Which Ones Matter and Which Ones Don’t',
    description:
      'A 30-year stucco contractor explains the difference between cosmetic hairline cracks and structural cracks that need attention — with photos and a simple decision tree.',
    category: 'Maintenance',
    readingMinutes: 7,
    publishedAt: '2026-03-04',
    cover: '/gallery/gallery-05.jpg',
    body: `
<p>Stucco cracks are the single most common reason a homeowner calls us. The good news: most cracks you see are cosmetic and harmless. The honest news: a few of them are early warnings of a real problem, and you should not paint over those.</p>

<h2>Hairline cracks (the safe kind)</h2>
<p>Tiny, spider-web cracks under the width of a credit card edge are normal in cement stucco. Cement shrinks slightly as it cures, and walls flex with temperature swings. These cracks are cosmetic. They do not let water in, they do not affect strength, and you do not need to do anything about them other than paint over them every 7–10 years if they bother you.</p>

<h2>Cracks that matter</h2>
<ul>
  <li><strong>Stair-step cracks</strong> following the diagonal pattern of CMU or brick joints behind the stucco — a sign of substrate movement.</li>
  <li><strong>Diagonal cracks running from the corners of windows or doors</strong> — usually deflection at the opening or a missing control joint.</li>
  <li><strong>Long horizontal cracks</strong> at floor lines on a multi-story wall — often a sign of framing shrinkage or a missing horizontal control joint.</li>
  <li><strong>Cracks with rust or efflorescence stains</strong> bleeding out — water is getting behind the stucco and corroding the lath. This is the urgent one.</li>
</ul>

<h2>The two-minute test</h2>
<p>Press a fingernail along the crack. If you can’t catch it, it’s cosmetic. If your nail catches and the crack is wider than a credit card, get an opinion.</p>

<h2>Why patching without diagnosing is a waste of money</h2>
<p>Most stucco “failures” are actually water failures — a missing kickout flashing, a failed window pan, a roof-to-wall transition done badly. If you patch the crack without fixing the leak, the crack comes back inside a year. Always diagnose first.</p>

<h2>When to call us</h2>
<p>If you’re seeing rust stains, soft stucco, bulging, or cracks wider than a credit card, give us a call — we’ll come look at it for free and tell you honestly whether it needs attention or not.</p>
    `,
  },
  {
    slug: 'how-much-does-stucco-cost',
    title: 'How Much Does Stucco Cost in Los Angeles? (2026 Pricing Guide)',
    description:
      'Honest 2026 pricing for new stucco, re-stucco, and stucco repair in Los Angeles — from a Calabasas contractor who has been bidding this work for 30 years.',
    category: 'Pricing',
    readingMinutes: 9,
    publishedAt: '2026-02-12',
    cover: '/gallery/gallery-04.jpg',
    body: `
<p>The honest answer is: it depends. But “it depends” is unhelpful when you’re trying to budget. Here is what we are actually charging in 2026 across Los Angeles, with the variables that move the price.</p>

<h2>New construction stucco — $7–$11 / sq ft of wall</h2>
<p>Three-coat hard-coat stucco on a new wood-frame wall, including paper, lath, scratch, brown, finish, and standard accessories. Weeps, casing beads, and one row of control joints included. Color in the finish (acrylic) adds $1–$2 / sq ft.</p>

<h2>Full re-stucco (tear-off + replace) — $12–$18 / sq ft</h2>
<p>Includes tear-off of the existing stucco, dump fees, paper and lath replacement, three coats, and finish. Foam architectural trim is extra (typically $20–$60 per linear foot installed). Window flashing upgrades, if needed, run $200–$500 per opening.</p>

<h2>Re-coat over existing stucco — $5–$9 / sq ft</h2>
<p>Only viable if the existing stucco is sound, well-bonded, and properly flashed. We sound the wall first — if it’s hollow, we’ll tell you to tear off instead.</p>

<h2>Stucco patches and repairs — $400–$2,500 typical</h2>
<p>Most homeowner repairs (cracks, small water-damage areas, post-electrical-work patches) come in between $400 and $2,500 as a fixed price after a free site visit. Color and texture matching is included.</p>

<h2>Commercial stucco — bid line-item</h2>
<p>Commercial bids are scoped from drawings — takeoffs include lath linear feet, control joint linear feet, square footage by elevation, and any specialty assemblies (EIFS, parapet caps, soffits). Typical mid-rise residential stucco lands $9–$14 / sq ft of wall in this market.</p>

<h2>What moves the price up</h2>
<ul>
  <li><strong>Access.</strong> Hillside lots, tight side yards, and second-story-only access need more scaffold and more labor hours.</li>
  <li><strong>Architectural detail.</strong> Foam trim, reveals, custom corners, and arches are slow work.</li>
  <li><strong>Substrate condition.</strong> Replacing rotten sheathing or failed flashing is real money.</li>
  <li><strong>Custom finishes.</strong> Hand-troweled smooth and Santa Barbara take 2–3x longer than a sand finish.</li>
  <li><strong>Permit and inspection requirements.</strong> Cities vary widely.</li>
</ul>

<h2>How to get an honest number</h2>
<p>Get three line-item written bids, not three round-number verbal quotes. Ask each contractor what they would do if they found rotten sheathing under your existing stucco. The answer tells you everything.</p>
    `,
  },
  {
    slug: 'choosing-a-stucco-finish',
    title: 'How to Choose a Stucco Finish (Smooth, Sand, Lace, Santa Barbara)',
    description:
      'A side-by-side comparison of the most common California stucco finishes — with the trade-offs we tell our customers about before they commit.',
    category: 'Design',
    readingMinutes: 6,
    publishedAt: '2026-01-22',
    cover: '/gallery/gallery-09.jpg',
    body: `
<p>The texture you pick is the single biggest visual decision in a stucco project. It is also one of the easiest to second-guess, because it looks different on a sample board than it does on the actual wall.</p>

<h2>Smooth (modern flat)</h2>
<p>Crisp, modern, architectural. Looks great on contemporary homes and commercial buildings. The finish is unforgiving — every imperfection in the brown coat shows. We level the brown coat first, then trowel the finish carefully. Costs more in labor.</p>

<h2>Smooth (hand-troweled / Old World)</h2>
<p>The traditional Spanish smooth-trowel: slightly cloudy, slightly irregular, lots of character. Great on Spanish, Mediterranean, and Tudor homes. Hides minor wall imperfections better than modern smooth.</p>

<h2>Fine sand (16/20)</h2>
<p>The most common California exterior finish for a reason: forgiving, timeless, easy to patch later, and still looks crisp. If you don’t know what you want, this is the safe answer.</p>

<h2>Lace and skip-trowel</h2>
<p>Texture without volume. Common on tract and ranch homes, especially in the Valley. Hides imperfections well, easy to patch, very durable. Looks dated to some buyers — worth thinking about if you’re selling.</p>

<h2>Santa Barbara hand-rubbed</h2>
<p>Pure Old-World character: hand-troweled, slightly cloudy, color variations and trowel marks built in. Stunning on Spanish Colonial homes. Slow and expensive — expect 2–3x the labor of a sand finish.</p>

<h2>Dash</h2>
<p>Aggressive, textured, hides everything, very durable. Common on commercial and on lower walls in high-wear areas.</p>

<h2>How we recommend choosing</h2>
<ol>
  <li>Drive your neighborhood and photograph 5–10 finishes you like.</li>
  <li>Ask your contractor to mock up the top 2–3 as 2×2 sample patches on your actual wall.</li>
  <li>Look at them at three times of day — morning, midday, late afternoon. Stucco changes character with the light.</li>
  <li>Pick. Commit. Don’t change your mind once the wall starts.</li>
</ol>
    `,
  },
  {
    slug: 'how-to-find-a-stucco-contractor',
    title: 'How to Find a Stucco Contractor You Can Actually Trust',
    description:
      'A 30-year stucco contractor on what to ask, what to verify, and what red flags to walk away from — even if their bid is the cheapest.',
    category: 'Hiring',
    readingMinutes: 8,
    publishedAt: '2025-12-08',
    cover: '/gallery/gallery-13.jpg',
    body: `
<p>Stucco is one of the easier trades to get burned in, because bad work doesn’t fail until year three. Here is how to vet a contractor before you sign.</p>

<h2>1. Verify the license</h2>
<p>In California, every stucco contractor needs a CSLB license. Look it up at <strong>cslb.ca.gov</strong> — confirm it’s active, the classification is correct (C-35 plastering or B general), and there are no recent disciplinary actions. If the contractor refuses to give you the number, walk away.</p>

<h2>2. Ask for proof of insurance</h2>
<p>You want a current Certificate of Insurance for general liability and workers’ compensation. If a worker gets hurt on your property and the contractor doesn’t carry workers comp, your homeowner’s insurance becomes the backstop — and they will not be happy about it.</p>

<h2>3. Get three written, line-item bids</h2>
<p>“$15,000 for the whole house” is not a bid, it’s a number. A real bid breaks out lath, scratch coat, brown coat, finish coat, accessories, scaffold, paint protection, and dump fees as separate line items. That’s the only way to compare apples to apples.</p>

<h2>4. Visit a job they’re running right now</h2>
<p>Forget the portfolio photos. Ask to drive by a job they’re actively working on. Look at how the crew is dressed, how the site is laid out, whether the scaffold is OSHA-compliant, and how the homeowner’s landscaping looks. That’s what your job will look like.</p>

<h2>5. Ask about the warranty</h2>
<p>Get the warranty in writing. “One-year workmanship” is standard. Anything shorter is a flag. Anything longer is a sales tactic — confirm the company has been in business at least that long.</p>

<h2>6. Watch for these red flags</h2>
<ul>
  <li>Door-knocker who happens to be “finishing a job in the area.” Run.</li>
  <li>Cash-only or 50%+ deposit. California law caps deposits at $1,000 or 10%, whichever is less.</li>
  <li>No physical address.</li>
  <li>Unwilling to pull permits when permits are required.</li>
  <li>Bids 30%+ below the others. Either they’re missing scope, undercutting on labor (which means crew turnover mid-job), or they don’t understand the work.</li>
</ul>

<h2>7. Check actual reviews — carefully</h2>
<p>Google reviews are the most useful, because they’re tied to a real Google profile and a physical address. Cross-check with Yelp and the BBB. A pattern of one-star reviews about “disappeared after the deposit” is the signal you’re looking for.</p>

<h2>The honest truth</h2>
<p>The right contractor is rarely the cheapest. They’re usually the one whose bid is in the middle, who answered the phone when you called, and who walked the site with you instead of giving a number sight-unseen.</p>
    `,
  },
  {
    slug: 'preparing-your-home-for-stucco',
    title: 'Preparing Your Home for a Stucco Project: A Homeowner’s Checklist',
    description:
      'What to move, what to cover, what to expect day by day — the homeowner prep checklist we wish every customer had before we showed up.',
    category: 'Homeowner Tips',
    readingMinutes: 5,
    publishedAt: '2025-11-18',
    cover: '/gallery/gallery-17.jpg',
    body: `
<p>A residential stucco project is dusty, loud, and disrupts the perimeter of your home for 1–4 weeks. Here’s how to make it as painless as possible.</p>

<h2>One week before</h2>
<ul>
  <li>Move patio furniture, BBQ, and potted plants 10+ feet away from the wall.</li>
  <li>Trim back any landscaping that touches the wall — we need 18–24” of clearance.</li>
  <li>Take down anything mounted to the exterior: address numbers, light fixtures, mailboxes.</li>
  <li>Tell your neighbors. They’ll appreciate the heads-up about the noise and the trucks.</li>
</ul>

<h2>Day before</h2>
<ul>
  <li>Park inside the garage or down the street — we’ll need driveway access for material delivery.</li>
  <li>Keep pets indoors during work hours.</li>
  <li>Make sure we have a way to reach an outdoor outlet and a hose bib.</li>
</ul>

<h2>What to expect during the work</h2>
<ol>
  <li><strong>Scaffold &amp; demo (1–3 days).</strong> Loud and dusty. Windows will be sealed in plastic.</li>
  <li><strong>Lath (2–4 days).</strong> Quieter — mostly snipping wire and tacking paper.</li>
  <li><strong>Inspection.</strong> A city inspector will come walk the wall.</li>
  <li><strong>Scratch and brown (3–7 days).</strong> Wet, slow, controlled. We moist-cure between coats.</li>
  <li><strong>Finish (1–3 days).</strong> The fast, satisfying part — the wall transforms.</li>
  <li><strong>Walk-through and tear-down.</strong> We walk every elevation with you and don’t leave until you sign off.</li>
</ol>

<h2>What you don’t have to worry about</h2>
<p>You don’t have to be home. You don’t have to move out. You don’t have to clean up after the crew — sweeping the perimeter every evening is on us.</p>
    `,
  },
];

export const getPost = (slug: string) => blogPosts.find((p) => p.slug === slug);
