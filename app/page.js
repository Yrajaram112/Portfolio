import HomeClient from './HomeClient';

const SITE_URL  = 'https://www.rajaramyadav.com.np';
const FULL_NAME = 'Rajaram Yadav';
const ROLES     = 'Data Engineer · AI Engineer · Software Engineer · ML Engineer';
const TITLE     = `${FULL_NAME} | ${ROLES}`;
const DESC      =
  'Rajaram Yadav builds cloud-native data platforms, AI-powered applications, and enterprise distributed systems engineered for scale and real production impact. ' +
  'From lakehouse pipelines and near real-time analytics on AWS, Azure, Snowflake, and Databricks — to RAG architectures, microservices, and full-stack delivery. ' +
  'Fast to learn new stacks, confident shipping to production. Based in Dallas, TX. Open to full-time roles, consulting, and freelance engagements.';
const OG_IMAGE  = `${SITE_URL}/assets/rajaram-yadav-engineer.png`;
const KEYWORDS  = [
  // ── Personal brand
  'Rajaram Yadav', 'Rajaram Yadav Data Engineer', 'Rajaram Yadav AI Engineer',
  'Rajaram Yadav ML Engineer', 'Rajaram Yadav Software Engineer',
  'Rajaram Yadav Portfolio', 'Rajaram Yadav United States', 'Rajaram Yadav UMKC',
  'Rajaram Yadav GitHub', 'Rajaram Yadav LinkedIn', 'Rajaram Yadav LeetCode',
  'Rajaram Yadav YouTube CodeRestart',
  // ── Data Engineering
  'Data Engineer', 'Data Pipeline Engineer', 'ETL Developer', 'ELT Developer',
  'Lakehouse Architect', 'Data Platform Engineer', 'Analytics Engineer',
  'Apache Spark Developer', 'Databricks Engineer', 'dbt Developer',
  'Snowflake Developer', 'BigQuery Engineer', 'Redshift Engineer',
  'Apache Airflow Developer', 'Apache Kafka Developer', 'AWS Glue Developer',
  'Azure Data Factory Developer', 'Delta Lake', 'Medallion Architecture',
  // ── AI / ML Engineering
  'AI Engineer', 'ML Engineer', 'Machine Learning Engineer', 'MLOps Engineer',
  'Generative AI Engineer', 'LLM Engineer', 'RAG Engineer', 'LangChain Developer',
  'Azure OpenAI Developer', 'AWS Bedrock Engineer', 'OpenAI API Developer',
  'Vector Database Engineer', 'Prompt Engineer', 'AI Agent Developer',
  // ── Software Engineering
  'Software Engineer', 'Full Stack Developer', 'Java Developer', 'Spring Boot Developer',
  'Backend Engineer', 'Microservices Architect', 'Cloud Engineer', 'AWS Cloud Engineer',
  'React Developer', 'Angular Developer', 'Next.js Developer', 'System Design',
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
    'Data Engineer',
    'AI Engineer',
    'Software Engineer',
    'ML Engineer',
  ],
  description: DESC,
  url: SITE_URL,
  image: { '@type': 'ImageObject', url: OG_IMAGE, width: 1200, height: 630 },
  email: 'rajaramyadav.eng@gmail.com',
  knowsAbout: [
    // Data Engineering
    'Apache Spark', 'Databricks', 'Snowflake', 'dbt', 'Apache Airflow', 'Dagster',
    'AWS Glue', 'Azure Data Factory', 'Delta Lake', 'Amazon Redshift', 'BigQuery',
    'Apache Kafka', 'AWS Kinesis', 'ETL Pipelines', 'Data Warehousing',
    'Lakehouse Architecture', 'Medallion Architecture', 'Data Mesh',
    'Great Expectations', 'Terraform', 'Microsoft Fabric',
    // AI / ML
    'Machine Learning', 'MLOps', 'MLflow', 'AWS SageMaker',
    'Large Language Models', 'Retrieval-Augmented Generation',
    'LangChain', 'LlamaIndex', 'Azure OpenAI', 'AWS Bedrock', 'OpenAI API',
    'Generative AI', 'Hugging Face', 'Vector Databases', 'Prompt Engineering',
    'Scikit-learn', 'Feature Engineering', 'Model Deployment',
    // Software Engineering
    'Java', 'Spring Boot', 'Spring Cloud', 'Spring Security', 'Python', 'Go',
    'TypeScript', 'JavaScript', 'React', 'Angular', 'Next.js', 'Node.js',
    'Microservices', 'REST APIs', 'GraphQL', 'OAuth2',
    'AWS', 'Azure', 'GCP', 'Kubernetes', 'Docker', 'Helm',
    'PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'DynamoDB',
    'Apache Kafka', 'RabbitMQ', 'Splunk', 'Datadog', 'Grafana',
    'HIPAA', 'PCI DSS', 'SOC 2', 'FHIR',
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
    addressLocality: 'Dallas',
    addressRegion: 'TX',
    addressCountry: 'US',
  },
  hasOccupation: [
    {
      '@type': 'Occupation',
      name: 'Data Engineer',
      occupationLocation: { '@type': 'City', name: 'Dallas' },
    },
    {
      '@type': 'Occupation',
      name: 'AI Engineer',
      occupationLocation: { '@type': 'City', name: 'Dallas' },
    },
    {
      '@type': 'Occupation',
      name: 'Software Engineer',
      occupationLocation: { '@type': 'City', name: 'Dallas' },
    },
    {
      '@type': 'Occupation',
      name: 'ML Engineer',
      occupationLocation: { '@type': 'City', name: 'Dallas' },
    },
  ],
  worksFor: { '@type': 'Organization', name: 'Open to Full-Time · Consulting · Freelance' },
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
  serviceType: 'Data Engineering, AI Engineering, Software Engineering & ML Engineering Consulting',
  provider: { '@id': `${SITE_URL}/#person` },
  areaServed: 'United States',
  description:
    'Cloud-native data platform design, AI and LLM application engineering, enterprise microservices, ' +
    'and production ML pipelines — built for high-scale, real-time workloads.',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Engineering Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Data Engineering',
          description:
            'Lakehouse and Medallion architectures, batch and real-time pipelines with Spark, Kafka, Airflow, dbt, ' +
            'AWS Glue, Azure Data Factory, Snowflake, Databricks, and Redshift — with data quality, lineage, and governance.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'AI Engineering',
          description:
            'RAG pipelines, LLM integrations, Azure OpenAI, AWS Bedrock, LangChain, vector databases, ' +
            'and AI-assisted data validation for enterprise search and automated insights.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Software Engineering',
          description:
            'Enterprise microservices with Java, Spring Boot, Spring Cloud, React, Angular, and Next.js — ' +
            'REST/GraphQL APIs, event-driven systems, AWS/Azure deployment, CI/CD, and production observability.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'ML Engineering',
          description:
            'End-to-end ML lifecycle with MLflow, SageMaker, Databricks ML, feature engineering, ' +
            'experiment tracking, and real-time and batch model deployment at scale.',
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
        alt: `${FULL_NAME} — ${ROLES}`,
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
        alt: `${FULL_NAME} — ${ROLES}`,
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
