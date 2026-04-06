import ProjectPageClient from '@/components/ProjectPageClient';

const SITE_URL = 'https://www.rajaramyadav.com.np';

export const metadata = {
  title: 'NEPSE Analytics Dashboard | Next.js · React Project',
  description: 'Real-time Nepal Stock Exchange analytics platform delivering live market feeds, historical trend visualization, and custom stock screening. Built with Next.js, React, Redis.',
  alternates: { canonical: `${SITE_URL}/nepse` },
  openGraph: {
    title: 'NEPSE Analytics Dashboard — Rajaram Yadav',
    description: 'Financial dashboard with sub-200ms data latency built with Next.js · React · Redis.',
    url: `${SITE_URL}/nepse`,
    images: [{ url: `${SITE_URL}/assets/projects/nepse-rajaram-yadav-project.png` }],
  },
};

export default function NepsePage() {
  return (
    <ProjectPageClient
      title="NEPSE Analytics Dashboard"
      subtitle="Financial Dashboard · Next.js · React"
      description="Real-time Nepal Stock Exchange analytics platform delivering live market feeds, historical trend visualization, and custom stock screening for retail and institutional investors."
      image="/assets/projects/nepse-rajaram-yadav-project.png"
      accent="#7C3AED"
      metrics={[
        { v: '<200ms', l: 'Data latency' },
        { v: '10k+',   l: 'Daily sessions' },
        { v: '98',     l: 'Lighthouse score' },
        { v: '50+',    l: 'Stocks tracked' },
      ]}
      overview="Nepal's retail investment community lacked accessible tooling to analyze stock performance beyond raw broker data. This platform was built to democratize NEPSE financial data — presenting it in clean, interactive charts with custom screening and portfolio tracking features."
      challenge="NEPSE doesn't offer an official public API, requiring a custom data ingestion pipeline with scheduling, deduplication, and retry logic. The frontend had to render large time-series datasets performantly on lower-end devices common among Nepali retail investors, while maintaining sub-200ms perceived response times."
      solution="Built a Node.js data pipeline to ingest and normalize NEPSE market data on a configurable schedule. Next.js handles SSR for SEO and fast first-load. Chart.js renders performant time-series visualizations. Aggressive Redis caching cut repeat data fetch times by 80%, and ISR keeps pages fresh without re-deploying."
      highlights={[
        'Engineered a resilient NEPSE data ingestion pipeline with automatic retry on failure, deduplication, and scheduled daily market snapshots.',
        'Built a responsive charting dashboard with candlestick, volume, and moving-average overlays using Chart.js — optimized for mobile rendering.',
        'Implemented server-side rendering (SSR) in Next.js to ensure every page is indexable and loads instantly on first visit for SEO.',
        'Achieved sub-200ms data delivery on live market views using Redis caching and incremental static regeneration (ISR) for historical data.',
        'Launched a custom stock screener allowing filtering by sector, P/E ratio, 52-week performance, and daily volume — a first for the Nepali market.',
      ]}
      tech={['Next.js', 'React', 'TypeScript', 'Chart.js', 'Node.js', 'PostgreSQL', 'Redis', 'Vercel', 'Tailwind CSS']}
      github="https://github.com/Yrajaram112"
    />
  );
}
