import BlogsClient from './BlogsClient';

const SITE_URL = 'https://www.rajaramyadav.com.np';

export const metadata = {
  title: 'Blog | Software Engineering Insights',
  description: 'Technical articles by Rajaram Yadav — Java, Spring Boot, distributed systems, cloud architecture, AWS, and software engineering career insights.',
  alternates: { canonical: `${SITE_URL}/blogs` },
  openGraph: {
    title: 'Blog — Rajaram Yadav | Engineering Insights',
    description: 'Deep dives into Java, Spring Boot, cloud architecture, and software craft.',
    url: `${SITE_URL}/blogs`,
  },
};

// Fetch posts server-side (replace with your CMS fetch when ready)
async function getPosts() {
  // TODO: replace with CMS fetch, e.g.:
  // const posts = await sanityClient.fetch(`*[_type=="post"]{...}`)
  return [];
}

export default async function BlogsPage() {
  const posts = await getPosts();
  return <BlogsClient posts={posts} />;
}
