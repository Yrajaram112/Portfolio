import ResumeClient from './ResumeClient';

const SITE_URL = 'https://www.rajaramyadav.com.np';

export const metadata = {
  title: 'Resume | Senior Software Engineer',
  description: 'Download or view the resume of Rajaram Yadav — Senior Software Engineer with 7+ years experience in Java, Spring Boot, React, AWS, and Kubernetes.',
  alternates: { canonical: `${SITE_URL}/resume` },
  openGraph: {
    title: 'Resume — Rajaram Yadav | Senior Software Engineer',
    description: '7+ years · Java · Spring Boot · React · AWS · Kubernetes',
    url: `${SITE_URL}/resume`,
    images: [{ url: `${SITE_URL}/assets/rajaram-yadav-software-engineer.png` }],
  },
};

export default function ResumePage() {
  return <ResumeClient />;
}
