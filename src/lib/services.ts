export type Service = {
  slug: string;
  name: string;
  short: string;
  icon: string;
  hero: { eyebrow: string; title: string; sub: string };
  intro: string;
  bullets: string[];
  process: { title: string; desc: string }[];
  finishes?: { name: string; desc: string }[];
  faqs: { q: string; a: string }[];
  metaTitle: string;
  metaDescription: string;
};

export const services: Service[] = [
  {
    slug: 'commercial-stucco',
    name: 'Commercial Stucco',
    short:
      'Apartment buildings, retail centers, offices, hotels — large-scale stucco done on schedule and on spec.',
    icon: '🏢',
    hero: {
      eyebrow: 'Commercial Stucco',
      title: 'Built for Big Buildings.',
      sub: 'Multi-story commercial stucco systems delivered on schedule, to spec, and inspection-ready — across Los Angeles since 1995.',
    },
    intro:
      'For three decades we have been the stucco crew that general contractors call when the job has to be right the first time. From mixed-use podium buildings in downtown LA to apartment communities in the Valley, we run efficient crews, coordinate scaffold and lift logistics, and finish on the schedule we promised at bid.',
    bullets: [
      'Three-coat hard-coat stucco systems (ASTM C926 / C1063)',
      'One-coat fiber-reinforced stucco assemblies',
      'EIFS and acrylic-finish coordination',
      'Tilt-up and CMU plaster coatings',
      'Soffit, parapet, and fascia plaster',
      'Patch and re-stucco for tenant improvements',
    ],
    process: [
      { title: 'Bid & Pre-Con', desc: 'Walk the plans with the GC, submit takeoffs, finishes, and value-engineering options inside 5 business days.' },
      { title: 'Mobilize', desc: 'Scaffold, mixers, and material laydown coordinated with the schedule. We come ready, not late.' },
      { title: 'Lath & Inspect', desc: 'Self-furring metal lath, weep, casing, and control joints installed to detail. We pass first inspection.' },
      { title: 'Scratch & Brown', desc: 'Two base coats applied to thickness, screeded plumb, moist-cured to prevent cracking.' },
      { title: 'Finish Coat', desc: 'Smooth, sand, dash, lace, or acrylic — color and texture matched to architect samples.' },
      { title: 'Punch & Hand-Off', desc: 'Walk the project with you, hit every punch item, leave the wall ready for the next trade.' },
    ],
    faqs: [
      {
        q: 'What size of commercial project do you take on?',
        a: 'Anything from a 4-unit infill to 200,000+ sq ft podium and wrap projects. We staff up with vetted, long-term crews — no day-laborer roulette.',
      },
      {
        q: 'Can you hit a tight schedule?',
        a: 'Yes. We typically run 8,000–15,000 sq ft of brown coat per week per crew, and we will run multiple crews when the schedule demands it. We commit to dates we can hit.',
      },
      {
        q: 'Do you handle scaffold yourselves?',
        a: 'We do. Owning our own scaffold means no day-rate hostage situations and no waiting on a third party. See our Scaffold Installation page.',
      },
    ],
    metaTitle: 'Commercial Stucco Contractor | Los Angeles | Southwest Stucco',
    metaDescription:
      'Family-owned commercial stucco contractor serving Los Angeles, the San Fernando Valley, and Calabasas since 1995. Three-coat, one-coat, EIFS. CSLB #702110. Free bids.',
  },
  {
    slug: 'residential-stucco',
    name: 'Residential Stucco',
    short:
      'Single-family homes, additions, and full re-stucco. Done by people who treat your house like ours.',
    icon: '🏠',
    hero: {
      eyebrow: 'Residential Stucco',
      title: 'Your Home, Done Right.',
      sub: "From a single wall to a full-house re-stucco — clean job sites, on-time crews, and a finish you'll be proud of for the next 30 years.",
    },
    intro:
      "Most of our homeowner work comes from neighbors of last year's customers. That kind of referral business only happens when the crew shows up clean, the work is square, and the price you signed is the price you pay. That's how we run residential.",
    bullets: [
      'New-construction stucco for custom homes',
      'Full re-stucco over existing walls',
      'Additions, ADUs, and pop-tops blended into the existing finish',
      'Color and texture matching for repairs',
      'Foam architectural trim install (bandings, sills, quoins)',
      'Crack repair and waterproofing prep',
    ],
    process: [
      { title: 'Free On-Site Estimate', desc: "We come out, look at the wall, ask what you're hoping for, and write you a clear, line-item bid. No pressure." },
      { title: 'Color & Texture Sampling', desc: 'We mock up finish samples on a board so you can pick exactly what you want before we touch the house.' },
      { title: 'Protect & Prep', desc: 'Plastic on windows, drop-cloths on landscaping, sidewalks swept every day. Your home stays livable.' },
      { title: 'Lath, Brown, Finish', desc: 'Three-coat system applied by hand. We moist-cure between coats so your stucco does not hairline-crack in year two.' },
      { title: 'Walk the House', desc: "We walk every elevation with you and don't leave until you sign off." },
    ],
    faqs: [
      {
        q: 'How long does a re-stucco take?',
        a: 'A typical 2,500 sq ft single-family home is roughly 2–3 weeks from lath to finish coat, weather depending. We give you a real schedule before we start.',
      },
      {
        q: 'Will you match my existing finish?',
        a: "Yes. We do hand-troweled samples on the wall before we commit. Smooth, sand, lace, dash — we match what's there or help you change it.",
      },
      {
        q: 'How much does residential stucco cost?',
        a: 'Most full-house re-stucco projects run between $9 and $16 per square foot of wall, depending on prep, finish, and access. We give you a fixed-price bid before you commit.',
      },
    ],
    metaTitle: 'Residential Stucco Contractor | Calabasas & LA | Southwest Stucco',
    metaDescription:
      'Family-owned residential stucco contractor in Calabasas serving Los Angeles homeowners since 1995. New stucco, re-stucco, additions, color & texture matching. Free estimates.',
  },
  {
    slug: 'stucco-repair',
    name: 'Stucco Repair & Patching',
    short:
      'Cracks, water damage, missing chunks, failed patches from another crew — we fix it so it stays fixed.',
    icon: '🔨',
    hero: {
      eyebrow: 'Stucco Repair & Patching',
      title: 'Make It Right. Make It Last.',
      sub: 'Crack repair, water-damage rebuilds, and patches that actually disappear into the wall instead of shouting from the curb.',
    },
    intro:
      "Patching stucco is a craft. Bad patches stand out for years — wrong texture, wrong color, wrong depth. We've been color- and texture-matching residential and commercial stucco in Los Angeles for 30 years. When we walk away, you can't tell where the patch was.",
    bullets: [
      'Hairline and structural crack repair',
      'Water-intrusion rebuilds (lath, paper, brown, finish)',
      'Failed-patch remediation',
      'Color and texture matching to existing wall',
      'Wood-trim and window-opening rework',
      'Insurance-claim documentation and bids',
    ],
    process: [
      { title: 'Diagnose', desc: 'Most stucco failures are a water problem, not a stucco problem. We figure out why first.' },
      { title: 'Cut Back', desc: 'Cut back to sound stucco, replace lath and paper if needed, install proper flashing.' },
      { title: 'Three-Coat Patch', desc: 'Scratch, brown, finish — applied to thickness, moist-cured, blended to existing texture.' },
      { title: 'Color Match', desc: 'Mock-up swatches on the wall, dial in the color and texture, then commit.' },
      { title: 'Final Walk', desc: 'You should not be able to find the patch. If you can, we keep working.' },
    ],
    faqs: [
      {
        q: 'Why does my stucco keep cracking?',
        a: 'Hairline cracks are normal and cosmetic. Stair-step or diagonal cracks at openings often mean a deflection or water issue underneath. We diagnose the cause before we patch — otherwise it just comes back.',
      },
      {
        q: 'Can you match a 30-year-old finish?',
        a: 'Almost always. Texture matching is muscle memory after this long. Color is dialed in with on-wall samples and a little patience.',
      },
      {
        q: 'Do you do insurance work?',
        a: 'Yes. We provide line-item bids and photo documentation that adjusters expect, and we work directly with your carrier when you want us to.',
      },
    ],
    metaTitle: 'Stucco Repair & Patching | Los Angeles | Southwest Stucco',
    metaDescription:
      'Cracked, water-damaged, or failing stucco? Family-owned stucco repair contractor in Calabasas serving LA since 1995. Color & texture-matched patches that disappear.',
  },
  {
    slug: 'scaffold-installation',
    name: 'Scaffold Installation',
    short:
      'OSHA-compliant scaffold setup and management for stucco, paint, masonry, and roofing trades.',
    icon: '🪜',
    hero: {
      eyebrow: 'Scaffold Installation',
      title: 'Safe, Square, Ready.',
      sub: 'Frame and system scaffold engineered for stucco, paint, and roofing trades. We own it, we install it, we maintain it.',
    },
    intro:
      "Owning our own scaffold inventory means we don't gouge you on a day rate, we don't disappear when your project slides, and we don't show up with rusty walk-boards. We engineer the layout, install to OSHA spec, and stay on call until the wall is done.",
    bullets: [
      'Frame, system, and tube-and-clamp scaffold',
      'Up to 6+ stories with engineered tie-ins',
      'Sidewalk canopies and pedestrian protection',
      'OSHA Subpart L compliance and weekly inspection tags',
      'Stair towers, hoists, and chute access',
      'Long-term project rates for GCs',
    ],
    process: [
      { title: 'Site Walk', desc: 'We measure the elevation, identify tie-in points, and plan around landscaping and access.' },
      { title: 'Engineer & Permit', desc: 'Engineered drawings and city permits when required. Pull-tested anchors documented.' },
      { title: 'Install', desc: 'Tagged green-yellow-red. Toe-boards, mid-rails, full planks, debris netting per code.' },
      { title: 'Maintain', desc: 'Weekly inspection, anchor checks, plank rotation, additional levels added as work progresses.' },
      { title: 'Strike', desc: 'Clean tear-down, full inventory return, no leftover hardware in your bushes.' },
    ],
    faqs: [
      {
        q: 'How tall can you go?',
        a: 'Routinely 4–6 stories on residential and mid-rise commercial. For taller work we use system scaffold with engineered tie-ins and stamped drawings.',
      },
      {
        q: 'Can other trades use the scaffold?',
        a: 'Yes — we coordinate with paint, roofing, and window crews. We post tag, weight, and access limits so every trade is working safe.',
      },
      {
        q: 'Do you rent scaffold without installation?',
        a: 'Generally no — we install everything we put up. The liability picture for self-erected scaffold is not one we sign onto.',
      },
    ],
    metaTitle: 'Scaffold Installation Contractor | Los Angeles | Southwest Stucco',
    metaDescription:
      'OSHA-compliant scaffold install and management in Los Angeles. Frame, system, tube-and-clamp. Owned inventory means no day-rate gouging. CSLB #702110.',
  },
  {
    slug: 'custom-finishes',
    name: 'Custom Finishes',
    short:
      'Smooth, sand, lace, dash, Santa Barbara, and acrylic — interior or exterior, matched to your sample.',
    icon: '🎨',
    hero: {
      eyebrow: 'Custom Finishes',
      title: 'The Finish Makes the House.',
      sub: 'Hand-troweled smooth, fine sand, dash, lace, and Santa Barbara finishes. Acrylic colors mixed to architect samples.',
    },
    intro:
      "After 30 years of trowel work we can match almost any finish you put in front of us — vintage 1920s Spanish smooth-trowel, modern flat smooth, fine sand, heavy lace, you name it. We mock up samples on the wall first so you can see the finish in your light before we commit the elevation.",
    bullets: [
      'Smooth-trowel (modern flat or hand-troweled Old World)',
      'Sand finish — fine, medium, and coarse',
      'Lace and skip-trowel',
      'Dash and sponge',
      'Santa Barbara hand-rubbed finish',
      'Acrylic finishes (Omega, La Habra, Merlex, Sto)',
      'Custom integral colors and pigment matching',
    ],
    process: [
      { title: 'Inspiration & References', desc: 'Bring us photos of finishes you like — we will tell you what we are looking at and how it is achieved.' },
      { title: 'Sample Boards', desc: 'We trowel 2–3 sample boards in your top picks so you can see them in your actual sunlight.' },
      { title: 'On-Wall Mock-Up', desc: 'For final calibration we trowel a small patch directly on the wall before committing the elevation.' },
      { title: 'Apply', desc: 'Brown coat leveled and prepped, finish coat troweled by experienced hands. No shortcuts.' },
      { title: 'Cure & Walk', desc: 'Let the finish cure, walk every elevation in different light, sign off together.' },
    ],
    finishes: [
      { name: 'Smooth Trowel', desc: 'Flat, modern, architectural. Unforgiving — we level it on the brown coat first.' },
      { name: 'Fine Sand (16/20)', desc: 'The classic California exterior. Forgiving and timeless.' },
      { name: 'Lace / Skip-Trowel', desc: 'Texture without volume. Common on tract and ranch homes.' },
      { name: 'Santa Barbara', desc: 'Hand-troweled, slightly cloudy, Old-World character.' },
      { name: 'Dash', desc: 'Aggressive texture, hides imperfections, durable in high-wear areas.' },
      { name: 'Acrylic', desc: 'Color in the finish — no painting, lifetime fade resistance.' },
    ],
    faqs: [
      {
        q: 'Can I see the finish before you do the whole wall?',
        a: 'Always. We trowel out 2–3 sample boards (or sample patches on the wall) so you can pick texture and color in your actual sunlight.',
      },
      {
        q: 'Acrylic vs. integral-color cement finish — which is better?',
        a: "Acrylic gives a more uniform color and almost never needs paint, but it's more expensive. Integral cement is more traditional and easier to patch later. We help you pick.",
      },
      {
        q: 'Do you do interior plaster too?',
        a: 'Yes — interior smooth, Venetian, and lime plasters on accent walls, fireplaces, and full rooms.',
      },
    ],
    metaTitle: 'Custom Stucco & Plaster Finishes | LA | Southwest Stucco',
    metaDescription:
      'Hand-troweled smooth, sand, Santa Barbara, lace, dash, and acrylic stucco finishes in Los Angeles. Color & texture sampled on your wall before we commit.',
  },
  {
    slug: 're-stucco',
    name: 'Re-Stucco',
    short:
      'Old, painted, dated, or failing stucco rebuilt into a wall that lasts another 30 years.',
    icon: '🪨',
    hero: {
      eyebrow: 'Re-Stucco',
      title: 'A New Skin for the House.',
      sub: 'Tear-off or re-coat — we rebuild tired stucco into a clean, modern, code-compliant wall, on schedule and on budget.',
    },
    intro:
      "Re-stucco is the highest-impact exterior project a homeowner can do. The right finish and color makes a 1970s ranch look brand-new for less than half the cost of siding. We do this work every week — we know what fails, what lasts, and what gets you the curb appeal you're after.",
    bullets: [
      'Full tear-off and three-coat replacement',
      'Re-coat over sound existing stucco (when appropriate)',
      'Window and door flashing upgrades',
      'Foam architectural trim addition',
      'Color and texture modernization',
      'Stucco-over-siding conversions',
    ],
    process: [
      { title: 'Inspect', desc: "We sound the existing wall, check moisture, and tell you whether re-coat or tear-off is the right call. We won't sell you what you don't need." },
      { title: 'Plan', desc: 'Schedule windows, gutters, paint, and landscaping around the work so nothing gets damaged.' },
      { title: 'Demo / Prep', desc: 'Tear-off to substrate or rough-up existing stucco. Replace failing flashing.' },
      { title: 'Lath & Build', desc: 'New lath, paper, weep. Scratch and brown coats applied to thickness and moist-cured.' },
      { title: 'Finish & Detail', desc: 'Final texture and color, foam trim, casing beads, and clean caulking around openings.' },
      { title: 'Walk-Through', desc: 'Every elevation, every detail, signed off before we leave.' },
    ],
    faqs: [
      {
        q: 'Re-coat or tear-off?',
        a: "Depends on what's underneath. If the existing stucco is sound and well-bonded, a re-coat saves you money. If it's hollow, water-damaged, or over a failed system, tear-off is the only honest answer.",
      },
      {
        q: 'How long does re-stucco take?',
        a: 'A typical single-family home runs 2–4 weeks depending on size, finish, and weather. We give you a calendar before we start.',
      },
      {
        q: 'Do I need to move out?',
        a: 'No. Re-stucco is exterior — you live in the house the whole time. We seal windows, protect entries, and clean up daily.',
      },
    ],
    metaTitle: 'Re-Stucco Los Angeles | Tear-Off & Re-Coat | Southwest Stucco',
    metaDescription:
      'Re-stucco contractor in Calabasas serving Los Angeles since 1995. Tear-off, re-coat, color modernization, foam trim. Family-owned. Free estimates. CSLB #702110.',
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
