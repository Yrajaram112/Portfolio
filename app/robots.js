/**
 * app/robots.js — replaces pages/robots.txt.js
 * Next.js 14 App Router native robots.txt generation.
 * Output: GET /robots.txt
 */

export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/'],
      },
      {
        userAgent: 'Googlebot-Image',
        allow: '/assets/',
      },
      {
        userAgent: 'bingbot',
        allow: '/',
      },
    ],
    sitemap: 'https://www.rajaramyadav.com.np/sitemap.xml',
  };
}
