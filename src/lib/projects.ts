import { gallery } from './content';

// Curated project case-studies built from existing gallery images.
export type Project = {
  slug: string;
  title: string;
  city: string;
  service: string;
  finish: string;
  scope: string;
  duration: string;
  cover: string;
  shots: string[];
  body: string;
};

export const projects: Project[] = [
  {
    slug: 'galloway-residence',
    title: 'Galloway Residence — Full Re-Stucco',
    city: 'Calabasas, CA',
    service: 'Residential Re-Stucco',
    finish: 'Hand-troweled smooth, integral color',
    scope: '~3,800 sq ft of wall, full tear-off, foam trim',
    duration: '3.5 weeks',
    cover: '/gallery/gallery-14.jpg',
    shots: ['/gallery/gallery-14.jpg', '/gallery/gallery-13.jpg', '/gallery/gallery-15.jpg'],
    body: 'A tired 1980s Mediterranean re-stuccoed top to bottom. We tore off the old finish, replaced failed window flashing on six openings, added a new band of foam trim above the second-floor windows, and finished in a hand-troweled smooth with a warm integral color. The owners host the family Christmas this year — first time in a decade they wanted to show the house off.',
  },
  {
    slug: 'grandview-commercial',
    title: 'Grandview Commercial Building',
    city: 'Woodland Hills, CA',
    service: 'Commercial Stucco',
    finish: 'Acrylic 16/20 sand finish',
    scope: '32,000 sq ft of wall across 4 elevations',
    duration: '7 weeks',
    cover: '/gallery/gallery-16.jpg',
    shots: ['/gallery/gallery-16.jpg', '/gallery/gallery-08.jpg', '/gallery/gallery-12.jpg'],
    body: 'A mid-rise mixed-use re-stucco done on a tight handover schedule. We ran two crews and our own scaffold crew in parallel, hit the brown coat milestone three days early, and finished in an acrylic sand color matched to the architect’s palette. Coordinated daily with the GC, painters, and roofers — zero re-work, zero punch list at hand-off.',
  },
  {
    slug: 'laurel-canyon-restoration',
    title: 'Laurel Canyon Restoration',
    city: 'Studio City, CA',
    service: 'Restoration & Repair',
    finish: 'Santa Barbara hand-rubbed',
    scope: 'Crack repair, water-damage rebuild, partial re-stucco',
    duration: '2 weeks',
    cover: '/gallery/gallery-19.jpg',
    shots: ['/gallery/gallery-19.jpg', '/gallery/gallery-07.jpg', '/gallery/gallery-09.jpg'],
    body: 'A 1928 Spanish Colonial with three decades of mismatched patches. We sounded the wall, replaced lath and paper around two leaking second-floor windows, then re-finished a single elevation in a Santa Barbara hand-rubbed finish to match the rest of the house. Owners said it’s the first time in 20 years the house has looked like itself.',
  },
];

// Re-export gallery items for the /projects page grid.
export const galleryItems = gallery.items;
