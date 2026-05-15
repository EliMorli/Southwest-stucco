import { siteConfig } from './site-config';

// E-E-A-T author signal. Swap the human name with the actual owner / writer when ready.
export const primaryAuthor = {
  name: 'The Southwest Stucco Family',
  role: 'Founders & Master Plasterers',
  bio: `Three decades of residential and commercial stucco across greater Los Angeles. Holders of California State License Board license #${siteConfig.cslb}, with thousands of completed projects from Calabasas to Beverly Hills.`,
  url: `${siteConfig.url}/about`,
  // Replace with founder's real social or LinkedIn URL when available
  sameAs: [siteConfig.social.instagram, siteConfig.social.facebook].filter(Boolean) as string[],
} as const;

export type Author = typeof primaryAuthor;
