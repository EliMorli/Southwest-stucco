import { siteConfig } from '@/lib/site-config';

/**
 * JSON-LD structured data for SEO, AEO (answer engines), and GEO (local).
 * Includes:
 *   - LocalBusiness (NAP + license + service areas + geo) — critical for local search
 *   - Organization (brand identity, sameAs links to social)
 *   - WebSite
 *   - FAQPage (AEO — direct answers in AI overviews / ChatGPT / Perplexity)
 *   - Service entries linked to LocalBusiness
 */
export function JsonLd() {
  const businessId = `${siteConfig.url}/#business`;
  const orgId = `${siteConfig.url}/#organization`;
  const websiteId = `${siteConfig.url}/#website`;

  const sameAs = [siteConfig.social.instagram, siteConfig.social.facebook].filter(Boolean);

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
      '@type': ['LocalBusiness', 'HomeAndConstructionBusiness', 'GeneralContractor'],
      '@id': businessId,
      name: siteConfig.name,
      legalName: siteConfig.legalName,
      url: siteConfig.url,
      telephone: siteConfig.phoneE164,
      email: siteConfig.email,
      description: siteConfig.description,
      foundingDate: String(siteConfig.foundedYear),
      image: `${siteConfig.url}/og-image.png`,
      logo: `${siteConfig.url}/logo.png`,
      priceRange: '$$',
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
      areaServed: siteConfig.serviceAreas.map((name) => ({
        '@type': 'City',
        name,
      })),
      makesOffer: siteConfig.services.map((s) => ({
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: s },
      })),
      knowsAbout: siteConfig.services,
      slogan: siteConfig.tagline,
      // California State License Board identifier
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
            text: `Yes. Southwest Stucco Inc. is fully licensed and insured in California — CSLB License #${siteConfig.cslb}.`,
          },
        },
        {
          '@type': 'Question',
          name: 'What areas does Southwest Stucco serve?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: `Based in Calabasas, CA, we serve homeowners and builders across greater Los Angeles, including ${siteConfig.serviceAreas.slice(0, -1).join(', ')}, and ${siteConfig.serviceAreas.slice(-1)[0]}.`,
          },
        },
        {
          '@type': 'Question',
          name: 'What stucco services do you offer?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: `We offer commercial and residential stucco application, re-stucco, repair and patching, scaffold installation, and custom finishes including smooth, sand, and acrylic finishes for both interior and exterior projects.`,
          },
        },
        {
          '@type': 'Question',
          name: 'Do you offer free estimates?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes — we offer free, no-pressure, no-obligation estimates. We respond within 24 hours, usually the same day.',
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
