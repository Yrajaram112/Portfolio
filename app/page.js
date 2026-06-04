import HomeClient from './HomeClient';

const SITE_URL  = 'https://www.rajaramyadav.com.np';
const FULL_NAME = 'Rajaram Yadav';
const TITLE     = 'Rajaram Yadav | Senior Software Engineer · AI Engineer · Data Engineer';
const DESC      = 'Rajaram Yadav is a Senior Software Engineer, AI Engineer, and Data Engineer with 6+ years building scalable enterprise systems, machine-learning pipelines, and data platforms using Java, Spring Boot, Python, React, Next.js, AWS, and Kubernetes. Based in the United States. Available for senior engineering roles and consulting.';
const OG_IMAGE  = `${SITE_URL}/assets/rajaram-yadav-software-engineer.png`;
const KEYWORDS  = [
  // ── Personal brand
  'Rajaram Yadav', 'Rajaram Yadav Software Engineer', 'Rajaram Yadav Java Developer',
  'Rajaram Yadav AI Engineer', 'Rajaram Yadav Data Engineer',
  'Rajaram Yadav Portfolio', 'Rajaram Yadav United States', 'Rajaram Yadav UMKC',
  'Rajaram Yadav GitHub', 'Rajaram Yadav LinkedIn', 'Rajaram Yadav LeetCode',
  'Rajaram Yadav YouTube CodeRestart',
  // ── Software Engineering
  'Senior Software Engineer', 'Java Developer', 'Spring Boot Developer',
  'Full Stack Developer', 'AWS Cloud Engineer', 'React Developer', 'Next.js Developer',
  'Microservices Architect', 'System Design Expert', 'Cloud Engineer',
  'Backend Engineer', 'Software Architect Nepal',
  // ── AI / ML Engineering
  'AI Engineer', 'Machine Learning Engineer', 'LLM Engineer', 'Generative AI Engineer',
  'MLOps Engineer', 'Deep Learning Engineer', 'NLP Engineer',
  'LangChain Developer', 'OpenAI API Developer', 'RAG Engineer',
  'AI Application Developer', 'Prompt Engineer',
  // ── Data Engineering
  'Data Engineer', 'Data Pipeline Engineer', 'ETL Developer',
  'Apache Spark Developer', 'Apache Kafka Developer', 'Airflow Developer',
  'dbt Developer', 'Snowflake Developer', 'BigQuery Engineer',
  'Data Warehouse Engineer', 'Data Platform Engineer', 'Analytics Engineer',
].join(', ');

// ─── JSON-LD Schemas ──────────────────────────────────────────────────────────
const PERSON_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': `${SITE_URL}/#person`,
  name: FULL_NAME,
  givenName: 'Rajaram',
  familyName: 'Yadav',
  jobTitle: [
    'Senior Software Engineer',
    'AI Engineer',
    'Data Engineer',
  ],
  description: DESC,
  url: SITE_URL,
  image: { '@type': 'ImageObject', url: OG_IMAGE, width: 1200, height: 630 },
  email: 'rajaramyadavcse@gmail.com',
  knowsAbout: [
    // Software Engineering
    'Java', 'Spring Boot', 'React', 'Next.js', 'AWS', 'Kubernetes',
    'Microservices', 'System Design', 'PostgreSQL', 'Docker', 'REST APIs',
    // AI / ML
    'Machine Learning', 'Deep Learning', 'Natural Language Processing',
    'Large Language Models', 'LangChain', 'OpenAI API', 'Retrieval-Augmented Generation',
    'MLOps', 'TensorFlow', 'PyTorch', 'Hugging Face',
    // Data Engineering
    'Python', 'Apache Spark', 'Apache Kafka', 'Apache Airflow',
    'dbt', 'Snowflake', 'BigQuery', 'ETL Pipelines',
    'Data Warehousing', 'Data Modeling', 'Redshift', 'Delta Lake',
  ],
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
  hasOccupation: [
    {
      '@type': 'Occupation',
      name: 'Senior Software Engineer',
      occupationLocation: { '@type': 'City', name: 'Charlotte' },
    },
    {
      '@type': 'Occupation',
      name: 'AI Engineer',
      occupationLocation: { '@type': 'City', name: 'Charlotte' },
    },
    {
      '@type': 'Occupation',
      name: 'Data Engineer',
      occupationLocation: { '@type': 'City', name: 'Charlotte' },
    },
  ],
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
  mainEntity: { '@id': `${SITE_URL}/#person` },
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
  serviceType: 'Software Development, AI Engineering & Data Engineering Consulting',
  provider: { '@id': `${SITE_URL}/#person` },
  areaServed: 'United States',
  description:
    'Enterprise-grade Java Full Stack development, AI/ML application engineering, ' +
    'LLM integration and RAG pipelines, and end-to-end data platform & ETL pipeline design.',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Engineering Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Senior Software Engineering',
          description: 'Microservices, Java Spring Boot, React/Next.js, AWS, Kubernetes.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'AI / ML Engineering',
          description: 'LLM fine-tuning, RAG pipelines, LangChain, OpenAI API, MLOps.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Data Engineering',
          description: 'ETL pipelines, Apache Spark, Kafka, Airflow, Snowflake, dbt, BigQuery.',
        },
      },
    ],
  },
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
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: `${FULL_NAME} — Senior Software Engineer · AI Engineer · Data Engineer`,
      },
    ],
    firstName: 'Rajaram',
    lastName: 'Yadav',
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESC,
    images: [
      {
        url: OG_IMAGE,
        alt: `${FULL_NAME} — Senior Software Engineer · AI Engineer · Data Engineer`,
      },
    ],
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