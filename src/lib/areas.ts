export type ServiceArea = {
  slug: string;
  city: string;
  county: string;
  zips: string[];
  blurb: string;
  neighborhoods: string[];
  drivingMinutes: number; // from Calabasas HQ
  highlights: string[];
};

export const serviceAreas: ServiceArea[] = [
  {
    slug: 'calabasas',
    city: 'Calabasas',
    county: 'Los Angeles County',
    zips: ['91301', '91302', '91372'],
    drivingMinutes: 0,
    blurb:
      'Our hometown. We have been the stucco contractor of choice for Calabasas families and property managers since 1995 — gated communities, custom hillside homes, and Old Town storefronts.',
    neighborhoods: ['The Oaks', 'Mountain View Estates', 'Mulwood', 'Park Moderne', 'Old Town Calabasas'],
    highlights: [
      'Headquartered on Agoura Rd — fastest response in the city',
      'Familiar with HOA submittals across all major Calabasas communities',
      'Crews that know the city inspectors by name',
    ],
  },
  {
    slug: 'agoura-hills',
    city: 'Agoura Hills',
    county: 'Los Angeles County',
    zips: ['91301', '91376'],
    drivingMinutes: 8,
    blurb:
      'Across the 101 from our shop, Agoura Hills has been a steady part of our customer base for three decades — equestrian properties, custom Mediterranean homes, and the Whizin commercial corridor.',
    neighborhoods: ['Old Agoura', 'Morrison Ranch', 'Liberty Canyon', 'Forest Cove'],
    highlights: ['Same-day estimates inside city limits', 'Experience with hillside fire-code stucco specs', 'Re-stucco for 1970s and 80s tract homes'],
  },
  {
    slug: 'westlake-village',
    city: 'Westlake Village',
    county: 'LA / Ventura County',
    zips: ['91361', '91362'],
    drivingMinutes: 12,
    blurb:
      'Westlake homeowners trust us for full re-stucco on the lake-front estates, additions in the North Ranch communities, and HOA-compliant work in the gated tracts.',
    neighborhoods: ['North Ranch', 'First Neighborhood', 'Westlake Island', 'Trentwood'],
    highlights: ['Lakefront and view-property experience', 'HOA submittal packages prepared in-house', 'Color matching for high-spec custom homes'],
  },
  {
    slug: 'hidden-hills',
    city: 'Hidden Hills',
    county: 'Los Angeles County',
    zips: ['91302'],
    drivingMinutes: 5,
    blurb:
      'Privacy, discretion, and craftsmanship. Hidden Hills is one of our favorite communities to work in — large estates that demand a finish you would put on your own home.',
    neighborhoods: ['Roscomare', 'Spring Valley', 'Long Valley'],
    highlights: ['NDA-friendly crews', 'Familiar with the HHCA architectural review process', 'Hand-troweled smooth and Santa Barbara finish specialists'],
  },
  {
    slug: 'malibu',
    city: 'Malibu',
    county: 'Los Angeles County',
    zips: ['90263', '90264', '90265'],
    drivingMinutes: 25,
    blurb:
      'Coastal stucco needs corrosion-resistant lath, marine-grade flashing, and crews who understand what salt air does to a wall. We have been doing Malibu work since the late 90s.',
    neighborhoods: ['Point Dume', 'Malibu Colony', 'Carbon Beach', 'Malibu Park', 'Big Rock'],
    highlights: ['Marine-grade lath and accessories', 'Coastal Commission–aware crews', 'Replacement and rebuild after storm and fire damage'],
  },
  {
    slug: 'woodland-hills',
    city: 'Woodland Hills',
    county: 'Los Angeles County',
    zips: ['91364', '91367'],
    drivingMinutes: 14,
    blurb:
      'From Warner Center high-rises to the rolling hills of Walnut Acres, Woodland Hills is one of our most active residential and commercial markets.',
    neighborhoods: ['Walnut Acres', 'Vista de Oro', 'Woodland Hills Country Estates', 'Warner Center'],
    highlights: ['Mid-rise and apartment experience near Warner Center', 'Same-week estimates', 'Stucco patch + paint coordination'],
  },
  {
    slug: 'encino',
    city: 'Encino',
    county: 'Los Angeles County',
    zips: ['91316', '91436'],
    drivingMinutes: 22,
    blurb:
      'South-of-the-boulevard custom estates and Ventura Blvd commercial work. Encino has kept our crews busy for decades.',
    neighborhoods: ['Royal Oaks', 'Amestoy Estates', 'Encino Hills'],
    highlights: ['High-end residential trim and finish work', 'Commercial mixed-use experience', 'Discreet, clean job sites'],
  },
  {
    slug: 'sherman-oaks',
    city: 'Sherman Oaks',
    county: 'Los Angeles County',
    zips: ['91403', '91413', '91423'],
    drivingMinutes: 28,
    blurb:
      'Hillside homes, post-war ranches, and the Ventura Blvd commercial strip — Sherman Oaks is a regular stop for our crews.',
    neighborhoods: ['Sherman Oaks Hills', 'Chandler Estates', 'The Boulevard'],
    highlights: ['Hillside access experience', 'Ranch home re-stucco specialists', 'Color modernization for mid-century homes'],
  },
  {
    slug: 'tarzana',
    city: 'Tarzana',
    county: 'Los Angeles County',
    zips: ['91335', '91356'],
    drivingMinutes: 20,
    blurb:
      'Equestrian estates south of the 101 and dense single-family north — we work both sides of the boulevard.',
    neighborhoods: ['Tarzana Estates', 'Braemar Country Club area'],
    highlights: ['Familiar with large-lot estate work', 'HOA-friendly submittals'],
  },
  {
    slug: 'beverly-hills',
    city: 'Beverly Hills',
    county: 'Los Angeles County',
    zips: ['90209', '90210', '90211', '90212'],
    drivingMinutes: 35,
    blurb:
      'High-end residential stucco for Beverly Hills estates — Santa Barbara hand-troweled finishes, custom integral colors, and discreet crews used to working on premium homes.',
    neighborhoods: ['Beverly Hills Flats', 'Trousdale Estates', 'Beverly Hills Post Office'],
    highlights: ['NDA-friendly and discreet', 'Architect-grade finish work', 'Permit-aware in BH city limits'],
  },
  {
    slug: 'santa-monica',
    city: 'Santa Monica',
    county: 'Los Angeles County',
    zips: ['90401', '90402', '90403', '90404', '90405'],
    drivingMinutes: 38,
    blurb:
      'Coastal-zone stucco that holds up to salt air and the morning marine layer. Multi-family, single-family, and commercial in Santa Monica.',
    neighborhoods: ['North of Montana', 'Sunset Park', 'Ocean Park', 'Wilshire Montana'],
    highlights: ['Marine-grade assemblies', 'Multi-family / R3 experience', 'Coastal permit familiarity'],
  },
  {
    slug: 'pacific-palisades',
    city: 'Pacific Palisades',
    county: 'Los Angeles County',
    zips: ['90272'],
    drivingMinutes: 30,
    blurb:
      'Custom hillside and bluff homes that need coastal-grade detailing and crews used to working in tight access conditions.',
    neighborhoods: ['Huntington Palisades', 'The Riviera', 'Castellammare', 'Marquez Knolls'],
    highlights: ['Tight-access hillside experience', 'Coastal-grade lath and flashing', 'Fire rebuild experience'],
  },
];

export const getArea = (slug: string) => serviceAreas.find((a) => a.slug === slug);
