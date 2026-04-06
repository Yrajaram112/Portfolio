import ProjectPageClient from '@/components/ProjectPageClient';

const SITE_URL = 'https://www.rajaramyadav.com.np';

export const metadata = {
  title: 'KUSOM Alumni Network | Django · Python Project',
  description: 'Full-featured alumni management platform for Kathmandu University School of Management — connecting 2,000+ graduates. Built with Django, Python, AWS EC2, PostgreSQL.',
  alternates: { canonical: `${SITE_URL}/kusom` },
  openGraph: {
    title: 'KUSOM Alumni Network — Rajaram Yadav',
    description: 'Community platform built with Django · Python · AWS for 2,000+ alumni.',
    url: `${SITE_URL}/kusom`,
    images: [{ url: `${SITE_URL}/assets/projects/kusom-rajaram-yadav-project.png` }],
  },
};

export default function KusomPage() {
  return (
    <ProjectPageClient
      title="KUSOM Alumni Network"
      subtitle="Community Platform · Django · Python"
      description="A full-featured alumni management platform for Kathmandu University School of Management — connecting 2,000+ graduates through member directories, events, news, and engagement analytics."
      image="/assets/projects/kusom-rajaram-yadav-project.png"
      accent="#00D9F5"
      metrics={[
        { v: '2,000+', l: 'Alumni managed' },
        { v: '99.9%',  l: 'Uptime SLA' },
        { v: '4×',     l: 'Admin efficiency' },
        { v: '<1s',    l: 'Page load time' },
      ]}
      overview="KUSOM needed a scalable, maintainable platform to replace fragmented spreadsheets and email lists used to manage their growing alumni base. The goal was a centralized hub for directories, events, news, and donations — one system that any staff member could operate without technical knowledge."
      challenge="Designing a flexible membership and role system that could support multiple cohorts, chapters, and committees simultaneously while keeping the UX intuitive for non-technical administrators was the primary engineering challenge. Data privacy compliance and alumni search performance at scale were secondary concerns."
      solution="Built a Django-powered platform with a custom CMS, event registration with Celery-powered automated email reminders, a searchable alumni directory with privacy controls, and a responsive frontend. Deployed on AWS EC2 behind Nginx with SSL via Certbot and automated PostgreSQL backups to S3."
      highlights={[
        'Designed a multi-tier membership system supporting alumni, faculty, student chapters, and executive committee roles with fine-grained permission controls.',
        'Built an event management module with RSVPs, capacity limits, waitlisting, and Celery-driven automated reminder emails — eliminating manual outreach.',
        'Integrated a searchable, filterable alumni directory with GDPR-compliant privacy controls and batch CSV export for development campaigns.',
        'Deployed on AWS EC2 with Nginx reverse proxy, SSL via Certbot, and automated daily PostgreSQL backups to S3 with 30-day retention.',
        'Reduced alumni admin workload by an estimated 4× by automating previously manual batch email and data entry workflows.',
      ]}
      tech={['Django', 'Python', 'PostgreSQL', 'Celery', 'Redis', 'AWS EC2', 'Nginx', 'Certbot', 'Bootstrap 5']}
      github="https://github.com/Yrajaram112"
    />
  );
}
