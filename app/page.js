import HomeClient from './HomeClient';

const SITE_URL  = 'https://www.rajaramyadav.com.np';
const FULL_NAME = 'Rajaram Yadav';
const TITLE     = 'Rajaram Yadav | Senior Software Engineer — Java, Spring Boot, React, AWS';
const DESC      = 'Rajaram Yadav is a Senior Software Engineer with 15+ years building scalable enterprise systems using Java, Spring Boot, React, Next.js, AWS, and Kubernetes. Based in United States. Available for senior engineering roles and consulting.';
const OG_IMAGE  = `${SITE_URL}/assets/rajaram-yadav-software-engineer.png`;
const KEYWORDS  = [
  'Rajaram Yadav', 'Rajaram Yadav Software Engineer', 'Rajaram Yadav Java Developer',
  'Rajaram Yadav Portfolio', 'Rajaram Yadav United States', 'Rajaram Yadav UMKC',
  'Rajaram Yadav GitHub', 'Rajaram Yadav LinkedIn', 'Rajaram Yadav LeetCode',
  'Rajaram Yadav YouTube CodeRestart',
  'Senior Software Engineer', 'Java Developer', 'Spring Boot Developer',
  'Full Stack Developer', 'AWS Cloud Engineer', 'React Developer', 'Next.js Developer',
  'Microservices Architect', 'System Design Expert', 'Cloud Engineer',
  'Backend Engineer', 'Software Architect Nepal',
].join(', ');

// ─── JSON-LD Schemas ──────────────────────────────────────────────────────────
const PERSON_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': `${SITE_URL}/#person`,
  name: FULL_NAME,
  givenName: 'Rajaram',
  familyName: 'Yadav',
  jobTitle: 'Senior Software Engineer',
  description: DESC,
  url: SITE_URL,
  image: { '@type': 'ImageObject', url: OG_IMAGE, width: 1200, height: 630 },
  email: 'rajaramyadavcse@gmail.com',
  knowsAbout: ['Java', 'Spring Boot', 'React', 'Next.js', 'AWS', 'Kubernetes', 'Microservices', 'System Design', 'PostgreSQL', 'Docker', 'Python', 'Django'],
  alumniOf: [
    { '@type': 'CollegeOrUniversity', name: 'University of Missouri - Kansas City' },
    { '@type': 'CollegeOrUniversity', name: 'Vellore Institute of Technology' },
    { '@type': 'CollegeOrUniversity', name: "St. Xavier's College, Maitighar" },
  ],
  sameAs: [
    'https://www.linkedin.com/in/yadavrajaram',
    'https://github.com/Yrajaram112',
    'https://www.youtube.com/@coderestart',
    'https://leetcode.com/rajaramyadav',
    'https://dev.to/rajaramyadav',
    'https://yadavrajaram.medium.com/',
    'https://www.dreambig.com.np',
    'https://scholar.google.com/citations?user=Hlhg8ngAAAAJ&hl=en',
  ],
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Charlotte',
    addressRegion: 'NC',
    addressCountry: 'US',
  },
  hasOccupation: {
    '@type': 'Occupation',
    name: 'Senior Software Engineer',
    occupationLocation: { '@type': 'City', name: 'Charlotte' },
  },
  worksFor: { '@type': 'Organization', name: 'Freelance / Consulting' },
};

const WEBSITE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${SITE_URL}/#website`,
  url: SITE_URL,
  name: `${FULL_NAME} — Portfolio`,
  description: DESC,
  author: { '@id': `${SITE_URL}/#person` },
  inLanguage: 'en-US',
};

const WEBPAGE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'ProfilePage',
  '@id': `${SITE_URL}/#webpage`,
  url: SITE_URL,
  name: TITLE,
  description: DESC,
  isPartOf: { '@id': `${SITE_URL}/#website` },
  about: { '@id': `${SITE_URL}/#person` },
  dateModified: new Date().toISOString(),
  inLanguage: 'en-US',
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL }],
  },
};

const SERVICE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Software Development & Consulting',
  provider: { '@id': `${SITE_URL}/#person` },
  areaServed: 'United States',
  description: 'Enterprise-grade Java Full Stack development and Microservices architecture.',
};

// ─── Next.js 14 Metadata export ───────────────────────────────────────────────
export const metadata = {
  title: TITLE,
  description: DESC,
  keywords: KEYWORDS,
  authors: [{ name: FULL_NAME, url: SITE_URL }],
  alternates: { canonical: SITE_URL },
  openGraph: {
    type: 'profile',
    locale: 'en_US',
    url: SITE_URL,
    title: TITLE,
    description: DESC,
    siteName: `${FULL_NAME} Portfolio`,
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: `${FULL_NAME} — Senior Software Engineer` }],
    firstName: 'Rajaram',
    lastName: 'Yadav',
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESC,
    images: [{ url: OG_IMAGE, alt: `${FULL_NAME} — Senior Software Engineer` }],
  },
};

export default function HomePage() {
  return (
    <>
      {/* JSON-LD structured data — rendered server-side for crawlers */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(PERSON_SCHEMA) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(WEBSITE_SCHEMA) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(WEBPAGE_SCHEMA) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_SCHEMA) }}
      />
      <HomeClient />
    </>
  );
}
