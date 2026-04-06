import ProjectPageClient from '@/components/ProjectPageClient';

const SITE_URL = 'https://www.rajaramyadav.com.np';

export const metadata = {
  title: 'Student Management System | Spring Boot · Java Project',
  description: 'Comprehensive academic ERP for a mid-sized educational institution, consolidating enrollment, attendance, grading, fee management, and reporting. Built with Spring Boot, Java, Docker.',
  alternates: { canonical: `${SITE_URL}/student` },
  openGraph: {
    title: 'Student Management System — Rajaram Yadav',
    description: 'Enterprise ERP built with Spring Boot · Java · Docker for 5,000+ student records.',
    url: `${SITE_URL}/student`,
    images: [{ url: `${SITE_URL}/assets/projects/studentImg-rajaram-yadav-project.jpg` }],
  },
};

export default function StudentPage() {
  return (
    <ProjectPageClient
      title="Student Management System"
      subtitle="Enterprise ERP · Spring Boot · Java"
      description="A comprehensive academic ERP for a mid-sized educational institution, consolidating enrollment, attendance, grading, fee management, and reporting into a single role-based platform."
      image="/assets/projects/studentImg-rajaram-yadav-project.jpg"
      accent="#3FB950"
      metrics={[
        { v: '5,000+', l: 'Student records' },
        { v: '40%',    l: 'Admin time saved' },
        { v: '12',     l: 'Departments' },
        { v: '99.5%',  l: 'Uptime' },
      ]}
      overview="The institution was managing student records across disconnected Excel sheets, paper forms, and fragmented tools. The mandate was to consolidate everything into a single, role-based system accessible by administrators, faculty, and students — with no external vendor lock-in."
      challenge="Building a flexible role and permissions model that served three very different user groups — administrators needing full data access, teachers needing class-level views, and students needing read-only self-service — without overcomplicating the UX for any of them."
      solution="Built a Spring Boot monolith with a layered architecture, JPA/Hibernate for ORM, and Spring Security for role-based access control (RBAC). Deployed with Docker on on-premise servers. Thymeleaf delivers a responsive, accessible UI without a separate SPA build pipeline — reducing deployment complexity."
      highlights={[
        'Designed a multi-role RBAC system using Spring Security with Admin, Faculty, and Student access tiers with granular permission overrides.',
        'Built a grading module supporting weighted assessments, GPA calculation per semester, and transcript generation as downloadable PDF via iText.',
        'Implemented an automated fee reminder system sending email and SMS alerts for upcoming and overdue payments using Spring Scheduler.',
        'Created an attendance tracking module with per-class, per-student views and automatic eligibility warnings at 75% threshold.',
        'Containerized the full stack (Spring Boot + MySQL) with Docker Compose for one-command reproducible deployment on institution servers.',
      ]}
      tech={['Spring Boot', 'Java', 'MySQL', 'Spring Security', 'JPA / Hibernate', 'Thymeleaf', 'Docker', 'iText PDF', 'Bootstrap']}
      github="https://github.com/Yrajaram112"
    />
  );
}
