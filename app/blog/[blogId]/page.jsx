import { notFound } from 'next/navigation';
import BlogPostClient from './BlogPostClient';

const SITE_URL = 'https://www.rajaramyadav.com.np';

// TODO: Replace with your CMS fetch
async function getPost(slug) {
  // const post = await sanityClient.fetch(
  //   `*[_type=="post" && slug.current==$slug][0]{title,body,excerpt,publishedAt,estimatedReadingTime,category,"slug":slug.current}`,
  //   { slug }
  // )
  // return post || null
  return null;
}

// generateStaticParams replaces getStaticPaths
export async function generateStaticParams() {
  // TODO: Replace with your CMS fetch
  // const posts = await sanityClient.fetch(`*[_type=="post"]{"slug":slug.current}`)
  // return posts.map(p => ({ blogId: p.slug }))
  return [];
}

// generateMetadata replaces getStaticProps + <Head> for SEO
export async function generateMetadata({ params }) {
  const post = await getPost(params.blogId);
  if (!post) return {};

  return {
    title: post.title,
    description: post.excerpt,
    authors: [{ name: 'Rajaram Yadav', url: SITE_URL }],
    alternates: { canonical: `${SITE_URL}/blog/${post.slug}` },
    openGraph: {
      type: 'article',
      title: `${post.title} — Rajaram Yadav`,
      description: post.excerpt,
      url: `${SITE_URL}/blog/${post.slug}`,
      publishedTime: post.publishedAt,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
    },
  };
}

export default async function BlogPostPage({ params }) {
  const post = await getPost(params.blogId);
  if (!post) notFound();

  const SCHEMA = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: post.title,
    description: post.excerpt,
    author: { '@type': 'Person', name: 'Rajaram Yadav', url: SITE_URL },
    publisher: { '@type': 'Person', name: 'Rajaram Yadav', url: SITE_URL },
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    url: `${SITE_URL}/blog/${post.slug}`,
    mainEntity: { '@type': 'WebPage', '@id': `${SITE_URL}/blog/${post.slug}` },
    mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE_URL}/blog/${post.slug}` },
    proficiencyLevel: 'Expert',
    inLanguage: 'en-US',
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }}
      />
      <BlogPostClient post={post} />
    </>
  );
}
