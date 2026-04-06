/**
 * app/sitemap.js — replaces pages/sitemap.xml.js
 * Next.js 14 App Router native sitemap generation.
 * Output: GET /sitemap.xml
 */

const SITE_URL = 'https://www.rajaramyadav.com.np';

export default function sitemap() {
  const today = new Date().toISOString().split('T')[0];

  return [
    {
      url: SITE_URL,
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 1.0,
    },
    {
      url: `${SITE_URL}/resume`,
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/blogs`,
      lastModified: today,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/kusom`,
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${SITE_URL}/nepse`,
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${SITE_URL}/student`,
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${SITE_URL}/loan`,
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
  ];
}
