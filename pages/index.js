import Head from 'next/head'
import Navbar from '@/components/Navbar'
import Main from '@/components/Main'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import { createClient } from "next-sanity";

export async function getServerSideProps(context) {
  const client = createClient({
    projectId: process.env.SANITY_PROJECT_ID,
    dataset: process.env.SANITY_DATASET,
    useCdn: true,
    apiVersion: "2022-09-01",
    token: process.env.SANITY_TOKEN
  });
  const query = `*[_type == "resume"]`;
  const portfolio = await client.fetch(query);

  const resumeQuery = `*[_type == 'resume'][0]{
    'url': resume.asset->url,
    'name': Name
  }`;
  const resumeUrl = await client.fetch(resumeQuery);

  return {
    props: {
      portfolio, resumeUrl
    }
  };
}

export default function Home({ portfolio, resumeUrl }) {
  return (
    <div>
      <Head>
        <title>Rajaram Yadav | Software Engineer | Java | Cloud | AWS</title>

        <meta
          name="description"
          content="Rajaram Yadav is a Senior Software Engineer specializing in Java, Spring Boot, Cloud, AWS, and scalable web applications. View portfolio, projects, and experience."
        />

        <meta name="keywords" content="Rajaram Yadav, Software Engineer, Java Developer, AWS, NextJS, Cloud Engineer, Spring Boot, React Developer, Full Stack Developer" />

        <meta name="author" content="Rajaram Yadav" />

        <link rel="canonical" href="https://www.rajaramyadav.com.np" />

        <link rel="icon" href="/favicon.ico" />

        {/* Open Graph for LinkedIn / Facebook */}
        <meta property="og:title" content="Rajaram Yadav | Software Engineer" />
        <meta property="og:description" content="Portfolio of Rajaram Yadav - Software Engineer specializing in Java, Cloud, and DevOps." />
        <meta property="og:image" content="https://www.rajaramyadav.com.np/assets/rajaram-yadav-software-engineer.png" />
        <meta property="og:url" content="https://www.rajaramyadav.com.np" />
        <meta property="og:type" content="website" />

        {/* Twitter preview */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Rajaram Yadav | Software Engineer" />
        <meta name="twitter:description" content="Portfolio of Rajaram Yadav - Java, Cloud, and DevOps Engineer." />
        <meta name="twitter:image" content="https://www.rajaramyadav.com.np/assets/rajaram-yadav-software-engineer.png" />
        <meta name="google-site-verification" content="Dg569p1GB8QfVH5JMRhGwko5EZ7FbJt4Ap1JQ3ukMfg" />
      </Head>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Rajaram Yadav",
            jobTitle: "Senior Software Engineer",
            url: "https://www.rajaramyadav.com.np",
            image: "https://www.rajaramyadav.com.np/assets/rajaram-yadav-software-engineer.png",
            sameAs: [
              "https://www.linkedin.com/in/yadavrajaram",
              "https://github.com/yrajaram112",
              "https://dev.to/rajaramyadav",
              "https://medium.com/@rajaramyadav",
              "https://instagram.com/yrajaram112"
            ]
          })
        }}
      />
      <Navbar resume={resumeUrl} />

      <Main />
      <About />
      <Skills />
      <Projects />
      <Contact />

    </div>
  )
}

