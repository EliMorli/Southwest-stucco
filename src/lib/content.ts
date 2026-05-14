import { siteConfig } from './site-config';

/**
 * Centralized copy for the site. Edit here to change visible text.
 * Image filenames refer to files under /public.
 */

export const navLinks = [
  { href: '#about', label: 'About Us' },
  { href: '#gallery', label: 'Our Work' },
  { href: '#why', label: 'Why Us' },
  { href: '#contact', label: 'Contact' },
];

export const hero = {
  badge: 'Family Owned & Operated · Calabasas, CA',
  title: { line1: 'Your Home', line2: 'Deserves', line3: 'The Best.' },
  sub: "We're <strong>Southwest Stucco Inc.</strong> — a family business serving Los Angeles homeowners and builders for over 30 years. We treat every project like it's our own home.",
  promise:
    '"We show up, we do the job right, and we stand behind our work. That\'s our promise to every customer."',
  promiseIcon: '🤝',
  ctas: {
    primary: { label: 'Get a Free Estimate', href: '#contact' },
    secondary: { label: 'See Our Work', href: '#gallery' },
  },
  stats: [
    { n: '30+', l: 'Years in Business' },
    { n: '1K+', l: 'Happy Customers' },
    { n: 'A+', l: 'Reputation' },
  ],
};

export const ticker = [
  'Commercial Stucco',
  'Residential Plastering',
  'Scaffold Installation',
  'Smooth Finish',
  'Sand Finish',
  'Acrylic Finish',
  'Family Owned Since 1995',
  'CSLB #702110',
  'Free Estimates',
  'Calabasas, CA',
];

export const introBand = [
  { icon: '🏠', label: 'Family Business', sub: 'Not a franchise. Real people who care.' },
  { icon: '📋', label: 'Free Estimates', sub: 'No pressure. No obligation.' },
  { icon: '🏛️', label: 'CSLB Licensed', sub: `License #${siteConfig.cslb}. Fully insured.` },
  { icon: '⭐', label: '30+ Years Strong', sub: 'Serving LA since 1995.' },
];

export const about = {
  eyebrow: 'Our Story',
  title: { line1: 'A Family That', line2: 'Takes Pride In', line3Red: 'Every Wall.' },
  body1:
    "Southwest Stucco Inc. started in 1995 with one goal: <strong>do great work and treat people right.</strong> Three decades later, that's still what drives us every single day.",
  body2:
    "We're not a giant corporation. We're a family business. When you call us, you talk to us. When we show up, we show up on time. And when we finish, we make sure you're proud of what we built together.",
  trustBadges: [
    { icon: '🛡️', strong: 'Fully Licensed & Insured', sub: `CSLB #${siteConfig.cslb}` },
    { icon: '📍', strong: 'Based In', sub: 'Calabasas, CA' },
    { icon: '📅', strong: 'In Business Since', sub: '1995' },
  ],
  services: [
    {
      icon: '🏢',
      name: 'Commercial',
      desc: 'Apartment complexes, offices, retail — large-scale jobs done right and on schedule.',
    },
    {
      icon: '🏠',
      name: 'Residential',
      desc: 'Your home is important to us. We bring the same care to every house, big or small.',
    },
    {
      icon: '🔧',
      name: 'Scaffold',
      desc: 'Full scaffold setup and management. Safe, efficient, and built for your job site.',
    },
    {
      icon: '🎨',
      name: 'Custom Finishes',
      desc: "Smooth, sand, or acrylic — interior or exterior. We'll match your exact vision.",
    },
  ],
};

export const whyUs = {
  eyebrow: 'Why Families Choose Us',
  title: { line1: 'We Do Things', line2Red: 'The Right Way.' },
  sub: "After 30 years, our reputation is everything to us. Here's what sets us apart.",
  cards: [
    {
      icon: '👨‍👩‍👧‍👦',
      title: 'Family Owned & Operated',
      text: "We're not a franchise. You deal with us directly — real people who care about the work and your satisfaction.",
    },
    {
      icon: '⏰',
      title: 'We Show Up On Time',
      text: 'Your time matters. We respect your schedule and make sure the job starts and finishes when we say it will.',
    },
    {
      icon: '💯',
      title: 'Quality You Can See',
      text: "Every finish is something we're proud to put our name on. If it's not perfect, we make it right. Simple as that.",
    },
    {
      icon: '💬',
      title: 'Always Reachable',
      text: 'Have a question? Call us. We pick up, we respond, and we keep you informed every step of the way.',
    },
    {
      icon: '💰',
      title: 'Fair & Honest Pricing',
      text: 'No surprise charges. No hidden fees. We give you a clear estimate upfront and stick to it.',
    },
    {
      icon: '🌟',
      title: '30 Years of Trust',
      text: 'Our best advertising is word of mouth. Many of our customers come from referrals — that tells you everything.',
    },
  ],
};

// Generated from extracted-assets/gallery/captions.json
export const gallery = {
  eyebrow: 'Our Work',
  title: { line1: 'Real Projects.', line2Red: 'Real Results.' },
  items: [
    { src: '/gallery/gallery-01.jpg', label: 'Commercial Project' },
    { src: '/gallery/gallery-02.jpg', label: 'Stucco Finish' },
    { src: '/gallery/gallery-03.jpg', label: 'Residential' },
    { src: '/gallery/gallery-04.jpg', label: 'Commercial Build' },
    { src: '/gallery/gallery-05.jpg', label: 'Stucco Detail' },
    { src: '/gallery/gallery-06.jpg', label: 'Project' },
    { src: '/gallery/gallery-07.jpg', label: 'Smooth Finish' },
    { src: '/gallery/gallery-08.jpg', label: 'Commercial' },
    { src: '/gallery/gallery-09.jpg', label: 'Sand Finish' },
    { src: '/gallery/gallery-10.jpg', label: 'Residential' },
    { src: '/gallery/gallery-11.jpg', label: 'Scaffold' },
    { src: '/gallery/gallery-12.jpg', label: 'Project' },
    { src: '/gallery/gallery-13.jpg', label: 'Commercial' },
    { src: '/gallery/gallery-14.jpg', label: 'Galloway Project' },
    { src: '/gallery/gallery-15.jpg', label: 'Stucco Work' },
    { src: '/gallery/gallery-16.jpg', label: 'Grandview' },
    { src: '/gallery/gallery-17.jpg', label: 'Commercial' },
    { src: '/gallery/gallery-18.jpg', label: 'Residential' },
    { src: '/gallery/gallery-19.jpg', label: 'Laurel Project' },
    { src: '/gallery/gallery-20.jpg', label: 'Stucco Project' },
  ],
};

export const quote = {
  before: 'Honest Work.',
  middle: 'Proud Craftsmanship.', // rendered outlined
  after: 'Happy Customers.',
  attr: '— The Southwest Stucco Family, Since 1995',
};

export const contact = {
  eyebrow: 'Get In Touch',
  title: { line1: "We'd Love To", line2: 'Hear From You' },
  desc: "Whether it's a quick question or a big project — give us a call or fill out the form. We'll get back to you fast and make the whole process easy.",
  info: [
    {
      label: 'Phone',
      value: siteConfig.phone,
      href: `tel:${siteConfig.phoneE164}`,
      icon: '📞',
    },
    {
      label: 'Email',
      value: siteConfig.email,
      href: `mailto:${siteConfig.email}`,
      icon: '✉️',
    },
    {
      label: 'Office',
      value: `${siteConfig.address.streetAddress}\n${siteConfig.address.locality}, ${siteConfig.address.region} ${siteConfig.address.postalCode}`,
      icon: '📍',
    },
    {
      label: 'License',
      value: `CSLB #${siteConfig.cslb}`,
      icon: '🏛️',
    },
  ],
  form: {
    title: 'Request a Free Estimate',
    sub: "We'll get back to you within 24 hours — usually same day!",
    services: [
      'Commercial Stucco',
      'Residential Stucco',
      'Scaffold Installation',
      'Repair / Patching',
      'Other',
    ],
    submitLabel: 'Send My Request 🙌',
    successMsg: "✓ Got it! We'll be in touch very soon. Thank you!",
  },
};

export const footerCopy = {
  tagline: siteConfig.tagline,
  quickLinks: [
    { href: '#about', label: 'About Us' },
    { href: '#gallery', label: 'Our Work' },
    { href: '#why', label: 'Why Choose Us' },
    { href: '#contact', label: 'Get a Free Estimate' },
  ],
  copyright: `© ${new Date().getFullYear()} ${siteConfig.legalName} All rights reserved. Family owned & operated in ${siteConfig.address.locality}, ${siteConfig.address.region}.`,
};
