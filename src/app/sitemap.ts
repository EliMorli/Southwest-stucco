import type { MetadataRoute } from 'next';
import { siteConfig } from '@/lib/site-config';
import { services } from '@/lib/services';
import { serviceAreas } from '@/lib/areas';
import { blogPosts } from '@/lib/blog';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const u = (path: string) => `${siteConfig.url}${path}`;

  const staticEntries: MetadataRoute.Sitemap = [
    { url: u('/'), lastModified: now, changeFrequency: 'monthly', priority: 1.0 },
    { url: u('/services'), lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: u('/service-areas'), lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: u('/general-contractors'), lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: u('/projects'), lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: u('/reviews'), lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: u('/about'), lastModified: now, changeFrequency: 'yearly', priority: 0.7 },
    { url: u('/faq'), lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: u('/blog'), lastModified: now, changeFrequency: 'weekly', priority: 0.7 },
    { url: u('/contact'), lastModified: now, changeFrequency: 'yearly', priority: 0.8 },
    { url: u('/privacy-policy'), lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
    { url: u('/terms-of-service'), lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
    { url: u('/cookie-policy'), lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
    { url: u('/accessibility-statement'), lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
  ];

  const serviceEntries: MetadataRoute.Sitemap = services.map((s) => ({
    url: u(`/services/${s.slug}`),
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.85,
  }));

  const areaEntries: MetadataRoute.Sitemap = serviceAreas.map((a) => ({
    url: u(`/service-areas/${a.slug}`),
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  const blogEntries: MetadataRoute.Sitemap = blogPosts.map((p) => ({
    url: u(`/blog/${p.slug}`),
    lastModified: new Date(p.updatedAt || p.publishedAt),
    changeFrequency: 'yearly',
    priority: 0.6,
  }));

  return [...staticEntries, ...serviceEntries, ...areaEntries, ...blogEntries];
}
