import ResumeClient from './ResumeClient';

const SITE_URL = 'https://www.rajaramyadav.com.np';
const ROLES     = 'Data Engineer · AI Engineer · Software Engineer · ML Engineer';

export const metadata = {
  title: `Resume | ${ROLES}`,
  description:
    'Resume of Rajaram Yadav — Data, AI, Software, and ML Engineer building cloud-native data platforms, intelligent applications, and production distributed systems. Based in Dallas, TX. Open to full-time, consulting, and freelance.',
  alternates: { canonical: `${SITE_URL}/resume` },
  openGraph: {
    title: `Resume — Rajaram Yadav | ${ROLES}`,
    description: 'Cloud-native data · AI/LLM · full-stack · ML pipelines — fast to learn, confident to ship.',
    url: `${SITE_URL}/resume`,
    images: [{ url: `${SITE_URL}/assets/rajaram-yadav-engineer.png` }],
  },
};

export default function ResumePage() {
  return <ResumeClient />;
}
