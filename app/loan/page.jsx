import ProjectPageClient from '@/components/ProjectPageClient';

const SITE_URL = 'https://www.rajaramyadav.com.np';

export const metadata = {
  title: 'Loan Management System | PHP · Laravel Project',
  description: 'End-to-end loan origination and servicing platform automating EMI calculations, repayment schedules, delinquency tracking, and regulatory reporting. Built with PHP, Laravel, MySQL.',
  alternates: { canonical: `${SITE_URL}/loan` },
  openGraph: {
    title: 'Loan Management System — Rajaram Yadav',
    description: 'Fintech platform built with PHP · Laravel · MySQL for a micro-lending institution.',
    url: `${SITE_URL}/loan`,
    images: [{ url: `${SITE_URL}/assets/projects/loanMan-rajaram-yadav-project.jpg` }],
  },
};

export default function LoanPage() {
  return (
    <ProjectPageClient
      title="Loan Management System"
      subtitle="Fintech Tool · PHP · Laravel"
      description="End-to-end loan origination and servicing platform automating EMI calculations, repayment schedules, delinquency tracking, and regulatory reporting for a micro-lending institution."
      image="/assets/projects/loanMan-rajaram-yadav-project.jpg"
      accent="#D29922"
      metrics={[
        { v: '500+',  l: 'Loans tracked' },
        { v: '3×',    l: 'Processing speed' },
        { v: '0',     l: 'Calculation errors' },
        { v: '85%',   l: 'Report time saved' },
      ]}
      overview="A micro-lending organization was managing loan portfolios in spreadsheets, leading to calculation errors, missed payment follow-ups, and days spent preparing regulatory reports manually. This platform replaced all of that with automated, auditable workflows that financial regulators could inspect directly."
      challenge="Financial calculations — compound interest, EMI schedules, partial prepayments, and penalty accrual — needed to be mathematically precise and immutably auditable. The system also had to handle edge cases like loan restructuring and early closure without corrupting historical ledger records."
      solution="Built a Laravel application with a double-entry ledger model ensuring every financial transaction is immutable and auditable. EMI schedules are pre-computed on disbursement and stored as amortization tables. PHP's BCMath library ensures full decimal precision for all financial arithmetic — no floating-point errors."
      highlights={[
        'Implemented a double-entry ledger system ensuring full auditability of every disbursement, repayment, and fee transaction — each with a timestamp and user attribution.',
        'Built an amortization engine supporting flat-rate and reducing-balance interest methods with penalty accrual for overdue loans and partial prepayment handling.',
        'Created automated delinquency alerts with aging buckets (30/60/90 days) and email notifications to loan officers via Laravel queues.',
        'Generated regulatory reports (portfolio at risk, collection efficiency, disbursement summary) as downloadable Excel and PDF with one click.',
        'Eliminated manual EMI calculation errors, reducing average loan processing time from 45 minutes to under 15 minutes per application.',
      ]}
      tech={['PHP', 'Laravel', 'MySQL', 'Bootstrap', 'jQuery', 'PhpSpreadsheet', 'DOMPDF', 'BCMath', 'Laravel Queues']}
      github="https://github.com/Yrajaram112"
    />
  );
}
