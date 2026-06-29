import { MetadataRoute } from 'next';

const BASE_URL = 'https://skypaints.in';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    '',
    '/products',
    '/about',
    '/contact',
    '/cart',
    '/tools',
    '/gallery',
    '/shades',
    '/inspiration',
    '/privacy',
    '/terms',
  ];

  const blogSlugs = [
    'cost-to-paint-2bhk-3bhk-india',
    'distemper-vs-emulsion',
    'fixing-peeling-paint',
    'heat-reflective-paints',
    'how-to-choose-paint-finish',
    'how-to-use-dark-colours',
    'interior-wall-painting-checklist',
    'safe-paints-for-nurseries',
    'trending-colour-combinations',
    'vastu-compliant-colours',
    'wall-texture-designs',
    'why-waterproofing-matters',
  ];

  const staticEntries: MetadataRoute.Sitemap = staticPages.map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: path === '' ? 'weekly' : 'monthly',
    priority: path === '' ? 1 : path === '/products' ? 0.9 : 0.7,
  }));

  const blogEntries: MetadataRoute.Sitemap = blogSlugs.map((slug) => ({
    url: `${BASE_URL}/inspiration/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...staticEntries, ...blogEntries];
}
