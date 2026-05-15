export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  category: string;
  audience?: 'homeowner' | 'gc' | 'all';
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

  // ─────────── B2B / General Contractor audience ───────────
  {
    slug: 'how-to-vet-a-stucco-subcontractor',
    title: 'How to Vet a Stucco Subcontractor in Los Angeles (A PM Checklist)',
    description:
      'A practical vetting checklist for general contractor project managers hiring a stucco sub in Los Angeles — license, bonding, crew capacity, scope clarity, and the red flags worth walking away from.',
    category: 'For General Contractors',
    audience: 'gc',
    readingMinutes: 8,
    publishedAt: '2026-04-08',
    cover: '/gallery/gallery-16.jpg',
    body: `
<p>If you are bidding a podium project, a wrap apartment community, or a tilt-up plaster scope, the difference between hitting your schedule and explaining a four-week slip to ownership often comes down to one trade: stucco. Here is the vetting checklist we wish more PMs ran before they handed out a stucco scope.</p>

<h2>1. License + classification (and verify it)</h2>
<p>In California, look for an active <strong>C-35 Lathing and Plastering</strong> contractor or a <strong>B General Building</strong> with C-35 supervision in place. Verify the number at <strong>cslb.ca.gov</strong> — confirm active status, no disciplinary action, and a recent renewal. A clean CSLB record is the bare minimum.</p>

<h2>2. Insurance limits and additional insured</h2>
<p>Get a current Certificate of Insurance: General Liability with at least $1M / $2M aggregate, Workers’ Compensation per California statute, and Auto Liability. Confirm the sub will name your firm and the owner as <strong>additional insured</strong> and waive subrogation — most master subcontract agreements require it.</p>

<h2>3. Bonding capacity</h2>
<p>For projects above $1M of stucco scope, ask the sub for a current letter from their bonding agent stating single-job and aggregate capacity. A real bonding letter tells you a lot about the financial backbone of the company — small subs that bid above their bonding limits are a project risk.</p>

<h2>4. Crew capacity and self-perform percentage</h2>
<p>Ask flat-out: how many crews do you run, what is each crew's weekly brown-coat production, and what percentage of the work is self-performed vs. sub-subbed? On commercial stucco, you want a sub that self-performs lath, scratch, brown, and finish — not someone who is going to broker your job to three smaller crews you have never met.</p>

<h2>5. Scaffold and equipment</h2>
<p>Does the sub own and install their own scaffold, or are they hiring a third-party scaffold contractor? Owned scaffold means tighter schedule control and one less day-rate creep risk on your job. Ask about owned mixers, mast climbers, and lifts as well.</p>

<h2>6. Reference projects of similar size and type</h2>
<p>Three references from completed projects within the last 24 months, ideally with another GC's superintendent's direct phone number. Drive by at least one completed project and look at the wall. If you can spot patches, mismatched textures, or hairline cracking patterns at openings, that is your answer.</p>

<h2>7. Submittal turnaround</h2>
<p>Ask the sub how long they need for a complete submittal package: mock-up boards, control joint layouts, color samples, manufacturer cut sheets, and shop drawings if EIFS is in scope. The professional answer is 5–10 business days from contract execution. "We'll get you something" is not an answer.</p>

<h2>8. Mock-up willingness</h2>
<p>A real stucco sub will mock up a 4×4 sample on the actual building before committing the elevations. If they push back on that, walk away — you are going to be arguing about color and texture on every floor for the duration of the job.</p>

<h2>9. Communication cadence</h2>
<p>Who is your point of contact during construction — the owner, a PM, a foreman? Will they attend weekly OAC meetings? Are they reachable on weekends if there is a weather issue mid-pour? Bad communication is the single biggest source of stucco-related schedule slips.</p>

<h2>Red flags worth walking away from</h2>
<ul>
  <li><strong>Bid is 25%+ below the rest of the field.</strong> They are either missing scope, planning to cut crew quality, or do not understand the work.</li>
  <li><strong>No physical office or yard.</strong> Stucco subs need a real laydown yard. A PO box is a flag.</li>
  <li><strong>Cannot produce a sample of past commercial work the same size as yours.</strong> Residential subs cannot scale to mid-rise without learning on your job.</li>
  <li><strong>Resistant to mock-ups, submittals, or pre-installation meetings.</strong> You will pay for this resistance in re-work.</li>
</ul>

<h2>About Southwest Stucco</h2>
<p>We are a family-owned stucco contractor based in Calabasas, working with general contractors across Los Angeles since 1995. Multi-crew commercial capability, owned scaffold and equipment, bonded and insured. If you are vetting subs for a commercial project, <a href="/general-contractors">see our trade partner page</a> or call us at (818) 888-8554 to talk through your scope.</p>
    `,
  },

  {
    slug: 'three-coat-vs-one-coat-stucco-commercial',
    title: 'Three-Coat vs One-Coat Stucco: A Project Manager’s Guide',
    description:
      'When to spec three-coat hard-coat stucco, when one-coat fiber-reinforced makes sense, and the schedule, cost, and performance trade-offs a project manager needs to know.',
    category: 'For General Contractors',
    audience: 'gc',
    readingMinutes: 9,
    publishedAt: '2026-03-20',
    cover: '/gallery/gallery-08.jpg',
    body: `
<p>"Stucco" is not one product. When you sit down with a sub to scope a commercial wall assembly, the first decision is almost always: <strong>three-coat hard-coat or one-coat fiber-reinforced?</strong> Here is what a PM needs to know to spec, schedule, and bid the right system.</p>

<h2>Three-coat hard-coat (ASTM C926 / C1063)</h2>
<p>The traditional system: paper, lath, scratch coat, brown coat, finish coat. Each cement coat is applied at roughly 3/8" and cured before the next goes on. Total thickness ~7/8". This is the gold standard for performance and longevity.</p>
<h3>Pros</h3>
<ul>
  <li>50+ year service life when detailed correctly</li>
  <li>Superior impact resistance and structural rigidity</li>
  <li>Forgiving of minor substrate movement</li>
  <li>Accepts virtually any finish, including hand-troweled and Santa Barbara</li>
  <li>Universally accepted by California building departments</li>
</ul>
<h3>Cons</h3>
<ul>
  <li>Longer schedule — each coat needs cure time</li>
  <li>Higher labor cost per square foot</li>
  <li>More weight on the framing (factor into structural design)</li>
</ul>

<h2>One-coat fiber-reinforced (ICC-ES approved systems)</h2>
<p>A modern system from manufacturers like Quikrete, Senergy, Sto, and BMI Products. A single fiber-reinforced cement coat at ~3/8" is applied over lath, then a finish coat. The "one" refers to the base coat — there is still a finish layer over it.</p>
<h3>Pros</h3>
<ul>
  <li>Faster schedule — typically 30–40% time savings on the wall</li>
  <li>Lower labor cost per square foot</li>
  <li>Lighter system weight</li>
  <li>Continuous insulation often integrated (foam under lath)</li>
</ul>
<h3>Cons</h3>
<ul>
  <li>System-specific — you are buying a proprietary assembly, training matters</li>
  <li>Less impact resistant than full three-coat</li>
  <li>Some California jurisdictions require specific ICC-ES approvals — verify with AHJ before bidding</li>
  <li>Crack repair behavior different from three-coat — your maintenance plan should reflect it</li>
</ul>

<h2>Where each system fits</h2>
<table>
  <tr><th>Building type</th><th>Typical pick</th></tr>
  <tr><td>Custom luxury home, hand-troweled finish</td><td>Three-coat</td></tr>
  <tr><td>Multi-family wood-frame podium, schedule-driven</td><td>One-coat</td></tr>
  <tr><td>Concrete tilt-up with plaster veneer</td><td>Three-coat (over self-furring lath)</td></tr>
  <tr><td>Retail / tenant improvement on metal stud</td><td>Either, schedule-dependent</td></tr>
  <tr><td>Historic remodel, matching existing</td><td>Three-coat</td></tr>
  <tr><td>Hotel exterior, large repetitive elevations</td><td>One-coat or EIFS</td></tr>
</table>

<h2>Bidding implications</h2>
<p>If your spec is open, ask both systems be bid as alternates. The cost delta is usually $2–$4 per square foot of wall in favor of one-coat. The schedule delta is bigger — 1–3 weeks per crew on a typical mid-rise. Decide which is more valuable on your project before you commit.</p>

<h2>Detailing matters more than the system</h2>
<p>The single biggest predictor of stucco performance is not which system you specified — it is how the openings, control joints, kickout flashings, and roof-to-wall transitions are detailed. We have torn off premium three-coat assemblies that failed in five years because of a missing kickout, and we have re-coated 30-year one-coat walls in great shape because someone flashed them correctly.</p>

<h2>A note on EIFS</h2>
<p>If you are weighing EIFS (Exterior Insulation and Finish System) vs hard-coat stucco, that is a different conversation. EIFS gives you continuous insulation and a synthetic finish, but it lives or dies on water management detailing — the spec needs to be drainage EIFS, not the older barrier systems. Happy to walk you through it on a real project.</p>

<h2>Talk to a stucco sub before you finalize the spec</h2>
<p>The best time to get a stucco sub involved is during design development, not after permit. A 30-minute call with a sub who has built 500+ Los Angeles walls can save you tens of thousands of change orders. Reach us at (818) 888-8554 or via the <a href="/general-contractors">general contractor page</a>.</p>
    `,
  },

  {
    slug: 'stucco-scope-of-work-commercial-bid',
    title: 'Stucco Scope of Work: What to Include When Bidding Commercial Projects',
    description:
      'A complete checklist of what belongs in a commercial stucco scope of work — the line items GCs miss most often, the inclusions that prevent change orders, and the exclusions that prevent disputes.',
    category: 'For General Contractors',
    audience: 'gc',
    readingMinutes: 10,
    publishedAt: '2026-02-26',
    cover: '/gallery/gallery-12.jpg',
    body: `
<p>Most stucco change orders are not arguments about the work — they are arguments about whose scope it was. A clean scope of work, written before bid day, is the single cheapest insurance policy a PM can buy. Here is the line-item checklist we use when we write proposals, and the items that go in the inclusions and exclusions sections.</p>

<h2>Project basics (top of the SOW)</h2>
<ul>
  <li>Project name, address, owner, architect, GC</li>
  <li>Plan set reference (architectural sheets, structural sheets, spec section)</li>
  <li>Total square footage of wall by elevation</li>
  <li>Stucco system: three-coat hard-coat, one-coat fiber-reinforced, or EIFS — manufacturer and product line if known</li>
  <li>Finish type and color (with sample reference)</li>
  <li>Schedule reference: start date, brown-coat milestone, finish-coat milestone</li>
</ul>

<h2>Inclusions — labor and material line items</h2>
<ol>
  <li><strong>Weather-resistive barrier (WRB)</strong> — Grade D paper (two-layer) or approved alternative</li>
  <li><strong>Self-furring metal lath</strong> — 17 ga or 3.4 lb/sy hot-dipped galvanized</li>
  <li><strong>Casing beads, weeps, expansion and control joints</strong> — list quantity, gauge, and color</li>
  <li><strong>Window and door perimeter accessories</strong> — casing bead, foam closure, sealant joint backing</li>
  <li><strong>Scratch coat</strong> — Portland cement plaster, thickness per code, raked horizontal</li>
  <li><strong>Brown coat</strong> — Portland cement plaster, screed plumb to thickness</li>
  <li><strong>Finish coat</strong> — cement-based or acrylic per finish spec</li>
  <li><strong>Color and texture</strong> — integral color, sample mock-ups, or factory-finished acrylic</li>
  <li><strong>Moist cure</strong> — between coats per ASTM C926</li>
  <li><strong>Scaffold</strong> — install, maintain, and remove (specify height limit and tie-in scope)</li>
  <li><strong>Sidewalk and pedestrian protection</strong> if applicable</li>
  <li><strong>Job-site cleanup</strong> — daily perimeter sweep, dumpster scope (specify "shared dumpster" or "stucco dumpster")</li>
  <li><strong>Mock-up panels and sample boards</strong></li>
  <li><strong>Submittals</strong> — manufacturer cut sheets, color samples, control joint layout, shop drawings if EIFS</li>
</ol>

<h2>Exclusions — what to explicitly call out</h2>
<p>Half of stucco disputes come from grey-zone items. Make these black-and-white in the SOW:</p>
<ul>
  <li>Caulking and sealants at window/door perimeter (by sealant sub or stucco sub — pick one)</li>
  <li>Painting of cement-based finish (often a separate painter scope)</li>
  <li>Window flashing and pan flashing (typically by window installer or framer)</li>
  <li>Roof-to-wall flashing and kickout flashing (typically by roofer)</li>
  <li>Foam architectural trim — included or by separate trim sub?</li>
  <li>Concrete tilt-up patching of form ties, blowouts, or honeycombing</li>
  <li>Sandblasting or pressure washing of existing concrete substrate</li>
  <li>Lead-based paint encapsulation or asbestos abatement</li>
  <li>Permit fees and inspection fees</li>
  <li>Engineered shop drawings (EIFS only, typically)</li>
  <li>Overtime or shift premium</li>
  <li>Hoist or material handling beyond manual lift to scaffold</li>
</ul>

<h2>Schedule and milestone language</h2>
<p>Specify the work-in-place milestones the stucco scope is tied to:</p>
<ul>
  <li>Substrate ready for lath (framing inspection passed, rough plumbing/electrical complete)</li>
  <li>Windows installed and flashed before lath</li>
  <li>WRB / lath inspection date</li>
  <li>Brown coat completion by elevation</li>
  <li>Finish coat completion by elevation</li>
  <li>Punch and walk-through</li>
</ul>

<h2>Insurance, bonding, retention</h2>
<ul>
  <li>Minimum insurance limits and additional insured / waiver of subrogation language</li>
  <li>Bonding requirement (P&P bond required Yes/No, threshold)</li>
  <li>Retention percentage and release schedule</li>
  <li>Lien release schedule (conditional/unconditional, progress and final)</li>
</ul>

<h2>Quality requirements</h2>
<ul>
  <li>ASTM C926 compliance for application</li>
  <li>ASTM C1063 compliance for lath installation</li>
  <li>Acceptable cracking criteria (cosmetic hairline acceptable, anything wider repaired by stucco sub)</li>
  <li>Mock-up approval by architect prior to elevation start</li>
  <li>Final walk-through with punch list completion timeline</li>
</ul>

<h2>The five inclusions GCs miss most often</h2>
<ol>
  <li><strong>Mock-up cost</strong> — set the expectation that a mock-up panel is part of the bid</li>
  <li><strong>Substrate preparation</strong> — sweeping concrete, removing form-release residue, etc.</li>
  <li><strong>Layout coordination with other trades</strong> — control joint locations aligned with structural lines</li>
  <li><strong>Owner's representative walk-downs</strong> — number of formal punch walks</li>
  <li><strong>Warranty period and scope</strong> — workmanship vs. material; one year minimum</li>
</ol>

<h2>Talk through your scope before bid day</h2>
<p>If you have a project coming up and want a stucco sub to review your draft SOW, we do this for GCs we work with as part of pre-construction. Call (818) 888-8554 or use the <a href="/general-contractors">GC contact form</a>.</p>
    `,
  },
];

export const getPost = (slug: string) => blogPosts.find((p) => p.slug === slug);
