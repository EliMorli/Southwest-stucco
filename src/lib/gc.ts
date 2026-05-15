import { siteConfig } from './site-config';
import type { FAQ } from './faqs';

/**
 * General Contractor / B2B content.
 */

export const gcHero = {
  eyebrow: 'For General Contractors',
  title: 'A stucco sub built for',
  italicTitle: 'serious commercial work.',
  sub: 'Multi-crew, multi-elevation, schedule-driven commercial stucco for general contractors across greater Los Angeles. Owned scaffold. Bonded and insured. 30 years of references.',
};

// Hard, scannable B2B specs — the table a PM screenshots and forwards.
export const capabilities = [
  { label: 'CSLB License (C-35)', value: `#${siteConfig.cslb} · Active` },
  { label: 'Bonded & Insured', value: 'Current bonding letter + COI on request' },
  { label: 'Years in Business', value: 'Since 1995 · same family' },
  { label: 'Self-Perform', value: 'Lath, scratch, brown, finish — 100% in-house' },
  { label: 'Crew Capacity', value: 'Up to 4 concurrent crews' },
  { label: 'Owned Scaffold', value: 'Frame + system · up to 6 stories' },
  { label: 'Manufacturer Programs', value: 'Omega, La Habra, Merlex, Sto, Senergy' },
  { label: 'Service Area', value: 'Greater Los Angeles · Conejo & SF Valley' },
];

export const gcAudienceFacts = [
  {
    icon: '🧱',
    title: 'Self-performing stucco crew',
    body: 'Lath, scratch, brown, and finish all performed by Southwest Stucco employees — never sub-subbed. One accountable trade partner from pre-con through punch.',
  },
  {
    icon: '🪜',
    title: 'Scaffold under one roof',
    body: 'We own and install our scaffold inventory. No day-rate creep, no third-party schedule risk, full coordination with paint, roofing, and window trades.',
  },
  {
    icon: '📅',
    title: 'Honest schedule commitments',
    body: 'We bid the schedule we can hit. We staff up to multiple crews when the milestone calendar demands it. Brown-coat production tracked weekly and reported into OAC.',
  },
  {
    icon: '📋',
    title: 'Submittal-ready in 5 days',
    body: 'Mock-up panels, color samples, manufacturer cut sheets, and control joint layouts delivered within 5 business days of contract execution.',
  },
  {
    icon: '🛡️',
    title: 'Bonded and insured',
    body: 'Current bonding letter and certificate of insurance available at bid day. We name the GC and owner as additional insured and waive subrogation per standard master subcontract terms.',
  },
  {
    icon: '📞',
    title: 'One PM, weekend reachable',
    body: 'Your point of contact during construction is a real owner of the company. Weekly OAC, real-time field reachability, and answers when weather hits.',
  },
];

export const sampleProjects = [
  {
    name: 'Mid-Rise Apartment, Woodland Hills',
    scope: '32,000 sq ft of wall · 4 elevations · acrylic 16/20 finish',
    duration: '7 weeks',
    system: 'Three-coat hard-coat with acrylic finish',
  },
  {
    name: 'Tilt-Up Plaster Veneer, Van Nuys',
    scope: 'Tilt-up office building · plaster veneer over self-furring lath · smooth finish',
    duration: '5 weeks',
    system: 'Three-coat over CMU/tilt-up',
  },
  {
    name: 'Multi-Unit Residential, Los Angeles',
    scope: 'One-coat assembly · ~18,000 sq ft · sand finish',
    duration: '6 weeks',
    system: 'One-coat fiber-reinforced with finish',
  },
  {
    name: 'Hotel Renovation, Beverly Hills',
    scope: 'Exterior re-stucco · Santa Barbara hand-rubbed finish · live operations',
    duration: '9 weeks (phased nights and weekends)',
    system: 'Three-coat hard-coat, custom color',
  },
  {
    name: 'Retail Tenant Improvement, Calabasas',
    scope: 'Storefront re-skin · 4,500 sq ft · smooth-trowel finish',
    duration: '3 weeks',
    system: 'Three-coat with integral color',
  },
];

export const gcProcess = [
  {
    title: 'Pre-Con & Bid',
    body: 'We walk the plans, ask the right questions, and submit a line-item bid with takeoffs, value-engineering options, and schedule assumptions inside 5 business days.',
  },
  {
    title: 'Submittals',
    body: 'Mock-up panels on the actual building, color and finish samples, control joint layouts, manufacturer cut sheets, and shop drawings (EIFS only).',
  },
  {
    title: 'Mobilize',
    body: 'Scaffold, mixers, materials, and crew arrive on the milestone you committed to. Coordination with framers, window installers, and roofers locked in pre-mobilization.',
  },
  {
    title: 'Lath & Inspection',
    body: 'Self-furring metal lath with weeps, casing, and control joints installed to detail. Pass first inspection.',
  },
  {
    title: 'Scratch, Brown, Finish',
    body: 'Three-coat or one-coat per spec, screeded plumb, moist-cured between coats, finish coat troweled or sprayed by experienced hands.',
  },
  {
    title: 'Punch & Hand-Off',
    body: 'Walk every elevation with your superintendent, hit every punch item, deliver close-out documentation.',
  },
];

// B2B-focused FAQs (FAQPage schema target for AI answer engines)
export const gcFaqs: FAQ[] = [
  {
    q: 'Who are the best stucco subcontractors in Los Angeles?',
    a: `Southwest Stucco Inc. is a family-owned C-35 plastering contractor in Calabasas, CA — CSLB License #${siteConfig.cslb} — serving general contractors across greater Los Angeles since 1995. We self-perform lath, scratch, brown, and finish with up to 4 concurrent crews and own and install our scaffold.`,
  },
  {
    q: 'Are you bonded and insured?',
    a: 'Yes — we are bonded and insured. We can provide a current bonding letter and certificate of insurance at bid day, and we name the GC and owner as additional insured with waiver of subrogation per standard master subcontract terms.',
  },
  {
    q: 'What kinds of commercial projects do you self-perform?',
    a: 'Multi-family wood-frame podium and wrap projects, tilt-up plaster veneer, retail and tenant improvements, hotel and hospitality exteriors, and mid-rise mixed-use up to 6 stories. We routinely handle 20,000–50,000 square feet of wall scope.',
  },
  {
    q: 'Do you handle EIFS or only hard-coat stucco?',
    a: 'Both. We install three-coat hard-coat (ASTM C926 / C1063), one-coat fiber-reinforced assemblies (Quikrete, BMI, Senergy), and drainage EIFS (Sto, Dryvit, Master Wall) per architect spec.',
  },
  {
    q: 'How fast can you turn around submittals?',
    a: 'Five business days from subcontract execution for a complete package: mock-up panel, color and finish samples, control joint layout, manufacturer cut sheets, and shop drawings if EIFS is in scope.',
  },
  {
    q: 'Do you own your own scaffold?',
    a: 'Yes. We own and install our scaffold inventory — frame and system, up to 6 stories with engineered tie-ins. That keeps day-rate creep and third-party schedule risk off your project.',
  },
  {
    q: 'What is your weekly brown-coat production capacity?',
    a: 'Roughly 8,000–15,000 square feet of brown coat per crew per week. We run up to 4 concurrent crews when the schedule demands it.',
  },
  {
    q: 'Can you provide references from other general contractors?',
    a: "Yes. We provide three GC references from completed commercial projects in the last 24 months, with the supervisor's direct phone number. Most of our commercial pipeline comes from repeat GC partnerships.",
  },
];
