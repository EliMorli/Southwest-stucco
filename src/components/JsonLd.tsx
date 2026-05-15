import { siteConfig } from '@/lib/site-config';
import { services } from '@/lib/services';
import { primaryAuthor } from '@/lib/authors';

/**
 * Global JSON-LD graph: LocalBusiness + Organization + WebSite + FAQPage
 * + Person (author) + ProfessionalService offerings. Per-page schema
 * (Service, BlogPosting, BreadcrumbList, etc.) is emitted by individual pages.
 */
export function JsonLd() {
  const businessId = `${siteConfig.url}/#business`;
  const orgId = `${siteConfig.url}/#organization`;
  const websiteId = `${siteConfig.url}/#website`;
  const authorId = `${siteConfig.url}/#author`;

  const sameAs = [siteConfig.social.instagram, siteConfig.social.facebook].filter(Boolean);

  const offerCatalog = {
    '@type': 'OfferCatalog',
    name: 'Stucco & Plastering Services',
    itemListElement: services.map((s) => ({
      '@type': 'Offer',
      url: `${siteConfig.url}/services/${s.slug}`,
      itemOffered: {
        '@type': 'Service',
        name: s.name,
        description: s.metaDescription,
        url: `${siteConfig.url}/services/${s.slug}`,
        provider: { '@id': businessId },
        areaServed: siteConfig.serviceAreas.map((c) => ({ '@type': 'City', name: c })),
      },
    })),
  };

  const graph = [
    {
      '@type': 'Organization',
      '@id': orgId,
      name: siteConfig.legalName,
      alternateName: siteConfig.name,
      url: siteConfig.url,
      logo: `${siteConfig.url}/logo.png`,
      foundingDate: String(siteConfig.foundedYear),
      sameAs,
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: siteConfig.phoneE164,
        contactType: 'customer service',
        email: siteConfig.email,
        areaServed: 'US-CA',
        availableLanguage: ['en', 'es'],
      },
    },
    {
      '@type': 'WebSite',
      '@id': websiteId,
      url: siteConfig.url,
      name: siteConfig.name,
      publisher: { '@id': orgId },
      inLanguage: 'en-US',
    },
    {
      '@type': 'Person',
      '@id': authorId,
      name: primaryAuthor.name,
      jobTitle: primaryAuthor.role,
      description: primaryAuthor.bio,
      worksFor: { '@id': orgId },
      url: primaryAuthor.url,
      sameAs: primaryAuthor.sameAs,
    },
    {
      '@type': ['LocalBusiness', 'HomeAndConstructionBusiness', 'GeneralContractor', 'ProfessionalService'],
      '@id': businessId,
      name: siteConfig.name,
      legalName: siteConfig.legalName,
      url: siteConfig.url,
      telephone: siteConfig.phoneE164,
      email: siteConfig.email,
      description: siteConfig.description,
      foundingDate: String(siteConfig.foundedYear),
      founder: { '@id': authorId },
      image: `${siteConfig.url}/og-image.png`,
      logo: `${siteConfig.url}/logo.png`,
      priceRange: '$$',
      currenciesAccepted: 'USD',
      paymentAccepted: 'Cash, Check, ACH, Credit Card',
      sameAs,
      address: {
        '@type': 'PostalAddress',
        streetAddress: siteConfig.address.streetAddress,
        addressLocality: siteConfig.address.locality,
        addressRegion: siteConfig.address.region,
        postalCode: siteConfig.address.postalCode,
        addressCountry: siteConfig.address.country,
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: siteConfig.geo.latitude,
        longitude: siteConfig.geo.longitude,
      },
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          opens: '07:00',
          closes: '17:00',
        },
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: 'Saturday',
          opens: '08:00',
          closes: '14:00',
        },
      ],
      areaServed: siteConfig.serviceAreas.map((name) => ({
        '@type': 'City',
        name,
      })),
      audience: [
        { '@type': 'PeopleAudience', audienceType: 'Homeowners' },
        { '@type': 'BusinessAudience', audienceType: 'General Contractors' },
        { '@type': 'BusinessAudience', audienceType: 'Property Managers' },
      ],
      makesOffer: siteConfig.services.map((s) => ({
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: s },
      })),
      hasOfferCatalog: offerCatalog,
      knowsAbout: [
        ...siteConfig.services,
        'Three-coat hard-coat stucco',
        'One-coat fiber-reinforced stucco',
        'EIFS (Exterior Insulation and Finish System)',
        'ASTM C926 / C1063 compliance',
        'Multi-family / podium stucco',
        'Tilt-up plaster veneer',
        'Santa Barbara hand-rubbed finish',
      ],
      slogan: siteConfig.tagline,
      identifier: {
        '@type': 'PropertyValue',
        name: 'CSLB License',
        value: siteConfig.cslb,
      },
      hasCredential: {
        '@type': 'EducationalOccupationalCredential',
        credentialCategory: 'license',
        name: `CSLB License #${siteConfig.cslb}`,
        recognizedBy: {
          '@type': 'GovernmentOrganization',
          name: 'California State License Board',
        },
      },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How long has Southwest Stucco been in business?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Southwest Stucco Inc. has been a family-owned and operated stucco and plastering contractor based in Calabasas, California, serving the greater Los Angeles area since 1995 — over 30 years.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is Southwest Stucco licensed and insured?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: `Yes. Southwest Stucco Inc. is licensed in California (CSLB License #${siteConfig.cslb}) and is bonded and insured. We can provide a current bonding letter and certificate of insurance on request.`,
          },
        },
        {
          '@type': 'Question',
          name: 'What areas does Southwest Stucco serve?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: `Based in Calabasas, CA, we serve homeowners, builders, and general contractors across greater Los Angeles, including ${siteConfig.serviceAreas.slice(0, -1).join(', ')}, and ${siteConfig.serviceAreas.slice(-1)[0]}.`,
          },
        },
        {
          '@type': 'Question',
          name: 'Who are the best stucco subcontractors in Los Angeles for general contractors?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: `Southwest Stucco Inc. is a family-owned C-35 plastering contractor in Calabasas, CA — CSLB License #${siteConfig.cslb} — serving general contractors across greater Los Angeles since 1995. We self-perform lath, scratch, brown, and finish with up to 4 concurrent crews, own and install our scaffold, and are bonded and insured.`,
          },
        },
        {
          '@type': 'Question',
          name: 'What stucco services do you offer?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'We offer commercial and residential stucco application, re-stucco, repair and patching, scaffold installation, three-coat hard-coat, one-coat fiber-reinforced, and EIFS assemblies, plus custom finishes including smooth, sand, Santa Barbara, lace, dash, and acrylic.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do you offer free estimates?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes — we offer free, no-pressure, no-obligation estimates for homeowners and pre-bid scoping conversations for general contractors. We respond within 24 hours, usually the same day.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do I get in touch with Southwest Stucco?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: `Call or text ${siteConfig.phone}, email ${siteConfig.email}, or visit our office at ${siteConfig.address.streetAddress}, ${siteConfig.address.locality}, ${siteConfig.address.region} ${siteConfig.address.postalCode}.`,
          },
        },
      ],
    },
  ];

  const json = { '@context': 'https://schema.org', '@graph': graph };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
    />
  );
}
