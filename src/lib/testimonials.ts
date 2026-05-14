export type Testimonial = {
  name: string;
  city: string;
  rating: 5;
  service: string;
  body: string;
  date: string; // ISO
};

// Placeholder testimonials — swap with real customer reviews.
// Names/cities are illustrative; replace before going live.
export const testimonials: Testimonial[] = [
  {
    name: 'Daniel R.',
    city: 'Calabasas, CA',
    rating: 5,
    service: 'Residential Re-Stucco',
    body: "Southwest Stucco re-stuccoed our whole house and the result is unreal. The crew was on time every single morning, swept the driveway every night, and the finish is exactly what they showed us on the sample board. Hard to find a contractor like this anymore.",
    date: '2025-09-12',
  },
  {
    name: 'Maria G.',
    city: 'Agoura Hills, CA',
    rating: 5,
    service: 'Stucco Repair',
    body: 'We had cracking around two windows after a small leak. They diagnosed the actual cause (failed flashing), fixed it, and patched the stucco so cleanly I literally cannot find where the patch was. Fair price, no upsell.',
    date: '2025-08-04',
  },
  {
    name: 'Steve K.',
    city: 'Westlake Village, CA',
    rating: 5,
    service: 'New Custom Home',
    body: "I'm a GC and I've used a lot of stucco subs. Southwest is the only one I keep going back to. They bid honestly, schedule realistically, and walk the job clean. My homeowners are always happy.",
    date: '2025-07-21',
  },
  {
    name: 'Jenna P.',
    city: 'Hidden Hills, CA',
    rating: 5,
    service: 'Santa Barbara Finish',
    body: 'They troweled three sample patches on our garage so we could see the texture in our actual sunlight before committing. Incredible craftsmanship and the most respectful crew that has ever worked on our house.',
    date: '2025-06-18',
  },
  {
    name: 'Mark D.',
    city: 'Woodland Hills, CA',
    rating: 5,
    service: 'Apartment Re-Stucco',
    body: '32-unit apartment building, full re-stucco, on a tight schedule. They hit every milestone, communicated proactively, and the residents barely felt disrupted. Already booked them for the next property.',
    date: '2025-05-09',
  },
  {
    name: 'Linda S.',
    city: 'Encino, CA',
    rating: 5,
    service: 'Smooth-Trowel Finish',
    body: "I wanted that Spanish hand-troweled smooth look and three other contractors talked me out of it because it's hard. Southwest just said 'sure' and nailed it. The house looks like it's from a magazine.",
    date: '2025-04-02',
  },
  {
    name: 'Anthony V.',
    city: 'Sherman Oaks, CA',
    rating: 5,
    service: 'Crack Repair',
    body: 'Honest, fast, and reasonably priced. Came out for an estimate the same day I called, did the repair the following week, and matched the texture perfectly. Will use them again.',
    date: '2025-03-15',
  },
  {
    name: 'Karen B.',
    city: 'Malibu, CA',
    rating: 5,
    service: 'Coastal Re-Stucco',
    body: 'Salt air had eaten our old stucco. They tore it off, replaced lath and flashing with marine-grade materials, and put on an acrylic finish that handles the coast beautifully. Three years in, still looks new.',
    date: '2024-11-22',
  },
];

export const aggregate = {
  ratingValue: 5.0,
  reviewCount: testimonials.length,
};
