'use client';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

const PROJECTS = [
  {
    id: 'kira',
    num: '01',
    title: 'KIRA AI',
    subtitle: 'Voice-Controlled AI Assistant',
    role: 'Creator · AI & Systems Engineer',
    desc: 'Personal voice-controlled AI assistant — wake word, local Whisper STT, ElevenLabs TTS, Claude intent routing, and multi-agent orchestration with LangGraph. Browser, email, calendar, files, WhatsApp, and developer agents behind an Electron + Three.js orb UI.',
    tech: ['Python', 'Claude API', 'LangGraph', 'Whisper', 'ElevenLabs', 'Playwright', 'PostgreSQL', 'pgvector', 'Electron', 'React', 'Docker'],
    metrics: [{ v: 'Voice', l: 'First' }, { v: 'Multi', l: 'Agent' }, { v: 'Local', l: 'STT' }, { v: 'Private', l: 'Memory' }],
    url: '',
    github: 'https://github.com/Yrajaram112/kira',
    video: '/assets/projects/kira-ai.mp4',
    poster: '/assets/projects/kira-ai-poster.png',
    image: null,
    accent: '#A78BFA',
    accentRgb: '167,139,250',
    category: 'AI · Agents',
    status: 'Open Source',
    year: '2025',
    featured: true,
    emphasis: ['LangGraph', 'Claude API', 'Whisper', 'Playwright', 'pgvector'],
    emoji: '🎙️',
  },
  {
    id: 'jhilko',
    num: '02',
    title: 'Jhilko झिल्को',
    subtitle: 'City-to-City Gift Delivery',
    role: 'Founder · Full-Stack Engineer',
    desc: 'Nepal-to-Nepal gift platform — cakes, flowers, and hampers fulfilled by local partners in every city. Surprise delivery via SMS, live Socket.IO GPS tracking, eSewa/Khalti/COD payments, partner KYC, admin ops, and installable PWA.',
    tech: ['Next.js 16', 'React 19', 'NestJS 11', 'Prisma', 'PostgreSQL', 'Redis', 'BullMQ', 'Socket.IO', 'Turborepo', 'Baato Maps'],
    metrics: [{ v: 'City', l: 'to City' }, { v: 'Live', l: 'Tracking' }, { v: 'eSewa', l: 'Payments' }, { v: 'PWA', l: 'Ready' }],
    url: 'https://jhilko.com.np',
    github: 'https://github.com/Yrajaram112/jhilko',
    image: '/assets/projects/jhilko.png',
    accent: '#FB7185',
    accentRgb: '251,113,133',
    category: 'Full-Stack · Marketplace',
    status: 'MVP · Phases 0–5',
    year: '2025',
    featured: true,
    emphasis: ['Next.js 16', 'NestJS 11', 'Socket.IO', 'PostgreSQL', 'Turborepo'],
    emoji: '🎁',
  },
  {
    id: 'smartretail',
    num: '03',
    title: 'SmartRetail 360',
    subtitle: 'Modern Data Engineering Platform',
    role: 'Data Engineer · Platform Builder',
    desc: 'End-to-end retail analytics lakehouse — dlt ingestion, DuckDB + Iceberg storage, dbt medallion models, Great Expectations quality gates, Dagster orchestration, FastAPI serving, Metabase BI, and GitHub Actions CI/CD. Built to demonstrate production-grade DE craft.',
    tech: ['dlt', 'DuckDB', 'Apache Iceberg', 'dbt', 'Great Expectations', 'Dagster', 'FastAPI', 'Metabase', 'Docker', 'GitHub Actions'],
    metrics: [{ v: '3', l: 'Medallion' }, { v: '25', l: 'Tests' }, { v: 'dbt', l: 'Lineage' }, { v: 'CI/CD', l: 'Gated' }],
    url: 'https://github.com/Yrajaram112/smartretail-360',
    github: 'https://github.com/Yrajaram112/smartretail-360',
    image: '/assets/projects/smartretail-360.png',
    accent: '#00D9F5',
    accentRgb: '0,217,245',
    category: 'Data Engineering',
    status: 'Portfolio · Open Source',
    year: '2025',
    featured: true,
    emphasis: ['dbt', 'Dagster', 'DuckDB', 'Great Expectations', 'FastAPI'],
    emoji: '📊',
  },
  {
    id: 'nepseuncle',
    num: '04',
    title: 'NEPSE Uncle',
    subtitle: 'Stock Analytics Platform',
    role: 'Founder & Lead Engineer',
    desc: 'Real-time Nepal Stock Exchange intelligence — live market feeds, candlestick charts, and AI screeners. Python + Playwright scraping, Spring Boot APIs, Redis caching, Nginx + PM2 on a Linux VM. Site refresh in progress.',
    tech: ['Spring Boot', 'Java', 'Python', 'Playwright', 'PostgreSQL', 'Redis', 'Nginx', 'Next.js'],
    metrics: [{ v: '10k+', l: 'Daily Users' }, { v: '<200ms', l: 'Latency' }, { v: '50+', l: 'Stocks' }, { v: 'AI', l: 'Screeners' }],
    url: 'https://nepseuncle.com',
    github: 'https://github.com/Yrajaram112',
    image: '/assets/projects/nepse-rajaram-yadav-project.png',
    accent: '#3FB950',
    accentRgb: '63,185,80',
    category: 'Data · Backend',
    status: 'Maintenance',
    year: '2023',
    featured: true,
    emphasis: ['Spring Boot', 'Python', 'Playwright', 'Redis'],
    emoji: '📈',
  },
  {
    id: 'bato-ghar-naam',
    num: '05',
    title: 'Bato Ghar Naam/Map',
    subtitle: 'Plus Codes & Metric Addressing',
    role: 'Creator · Geospatial Engineer',
    desc: 'Open-source web map for Lahan Municipality — click-to-address Plus Codes, OSM road/ward/building layers, and a metric addressing engine aligned with Nepal\'s MAS. Auto-assigns house numbers from road distance; exports CSV and GeoJSON for municipal pilots.',
    tech: ['React', 'TypeScript', 'Vite', 'MapLibre GL', 'Turf.js', 'RBush', 'OpenStreetMap', 'Plus Codes'],
    metrics: [{ v: '3.7k', l: 'Buildings' }, { v: '3.3k', l: 'Addressed' }, { v: 'MAS', l: 'Aligned' }, { v: 'OSM', l: 'Export' }],
    url: '',
    github: 'https://github.com/Yrajaram112/bato-ghar-naam',
    image: '/assets/projects/bato-ghar-naam.png',
    accent: '#0EA5E9',
    accentRgb: '14,165,233',
    category: 'Geospatial · Civic Tech',
    status: 'Proof of Concept',
    year: '2025',
    featured: false,
    emphasis: ['MapLibre GL', 'Turf.js', 'OpenStreetMap', 'Plus Codes'],
    emoji: '🗺️',
  },
  {
    id: 'shortlisted',
    num: '06',
    title: 'GoShortlisted',
    subtitle: 'AI Resume Optimizer',
    role: 'Full-Stack · AI Engineer',
    desc: 'AI-powered resume optimizer — intelligent parsing, LLM-driven improvements, and a polished applicant experience. Built to ship fast and iterate on real hiring workflows.',
    tech: ['FastAPI', 'Python', 'LLM', 'Redis', 'Celery', 'React', 'PostgreSQL', 'Docker'],
    metrics: [{ v: 'LLM', l: 'Powered' }, { v: 'Async', l: 'Pipeline' }, { v: 'Resume', l: 'Parsing' }, { v: 'Live', l: 'Deploy' }],
    url: 'https://goshortlisted.vercel.app/',
    github: 'https://github.com/Yrajaram112/shortlisted',
    image: '/assets/projects/goshortlisted.png',
    accent: '#3FB950',
    accentRgb: '63,185,80',
    category: 'AI · HR Tech',
    status: 'Live',
    year: '2024',
    featured: false,
    emphasis: ['FastAPI', 'LLM', 'Celery', 'React'],
    emoji: '🎯',
  },
  {
    id: 'sathiai',
    num: '07',
    title: 'Sathi AI',
    subtitle: 'Startup Journey Companion',
    role: 'Co-Founder & Developer',
    desc: 'AI companion for Nepal\'s startup ecosystem — conversational guidance, culturally aware prompts, and accessible AI for founders navigating their first build. LLM backbone with a focused product UX.',
    tech: ['Next.js', 'OpenAI API', 'Python', 'FastAPI', 'Vercel', 'PostgreSQL'],
    metrics: [{ v: 'Nepali', l: 'Context' }, { v: 'LLM', l: 'Powered' }, { v: 'Startup', l: 'Focused' }, { v: 'Live', l: 'Product' }],
    url: 'https://sathiai.vercel.app',
    github: 'https://github.com/Yrajaram112/SathiAI',
    image: '/assets/projects/sathi-ai.png',
    accent: '#A78BFA',
    accentRgb: '167,139,250',
    category: 'AI · Product',
    status: 'Live',
    year: '2024',
    featured: false,
    emphasis: ['OpenAI API', 'Next.js', 'FastAPI'],
    emoji: '🤖',
  },
  {
    id: 'dreambig',
    num: '08',
    title: 'Dream Big Nepal',
    subtitle: 'Education & Empowerment Platform',
    role: 'Full-Stack Developer',
    desc: 'Platform connecting young Nepalis with mentorship, scholarships, and success stories — bridging aspiration and action through an accessible, content-rich web experience.',
    tech: ['Next.js', 'React', 'Tailwind', 'Node.js', 'Vercel'],
    metrics: [{ v: 'Mentors', l: 'Network' }, { v: 'Scholarships', l: 'Hub' }, { v: 'Youth', l: 'Focused' }, { v: 'Live', l: 'Site' }],
    url: 'https://dreambig.com.np',
    github: 'https://github.com/Yrajaram112/dream-big',
    image: '/assets/projects/dreambig.png',
    accent: '#FB7185',
    accentRgb: '251,113,133',
    category: 'EdTech · Community',
    status: 'Live',
    year: '2024',
    featured: false,
    emphasis: ['Next.js', 'React', 'Tailwind'],
    emoji: '🌟',
  },
  {
    id: 'reedyengineering',
    num: '09',
    title: 'Reedy Engineering',
    subtitle: 'Precast & Construction Services',
    role: 'Full-Stack Developer',
    desc: 'Marketing site for a precast and engineering services company — service showcases, team profiles, and a clean responsive frontend built for credibility and lead generation.',
    tech: ['Next.js', 'React', 'Tailwind', 'Vercel'],
    metrics: [{ v: 'Precast', l: 'Services' }, { v: 'Responsive', l: 'UI' }, { v: 'SEO', l: 'Ready' }, { v: 'Live', l: 'Deploy' }],
    url: 'https://reddyengineering.com',
    github: 'https://github.com/Yrajaram112/reedyengineering',
    image: '/assets/projects/reedyengineering-2.png',
    accent: '#F59E0B',
    accentRgb: '245,158,11',
    category: 'Web · Business',
    status: 'Live',
    year: '2024',
    featured: false,
    emphasis: ['Next.js', 'React', 'Tailwind'],
    emoji: '🏗️',
  },
  {
    id: 'tinymash',
    num: '10',
    title: 'TinyMash',
    subtitle: 'Safe Learning Game for Toddlers',
    role: 'Creator · Full-Stack Engineer',
    desc: 'Live at tinymash.com — a COPPA-safe keyboard and touch game that speaks words and letters, helping toddlers learn meaningfully while having full fun. Seven magical worlds, pentatonic music on every tap, creatures that persist on screen, and parent-locked controls. Zero ads, zero data, free forever.',
    tech: ['Next.js', 'React', 'Web Audio API', 'Speech Synthesis', 'Canvas', 'Vercel', 'TypeScript'],
    metrics: [{ v: '7', l: 'Worlds' }, { v: '50+', l: 'Creatures' }, { v: 'COPPA', l: 'Safe' }, { v: 'Free', l: 'Forever' }],
    url: 'https://www.tinymash.com/',
    github: 'https://github.com/Yrajaram112/babyworld',
    image: '/assets/projects/tinymash-1.png',
    accent: '#F59E0B',
    accentRgb: '245,158,11',
    category: 'EdTech · Kids',
    status: 'Live',
    year: '2025',
    featured: false,
    emphasis: ['Next.js', 'Speech Synthesis', 'Web Audio API'],
    emoji: '🦆',
  },
  {
    id: 'kusomalumni',
    num: '11',
    title: 'KUSOM Alumni',
    subtitle: 'Alumni Network Platform',
    role: 'Full-Stack Developer',
    desc: 'Full-stack Django platform for Kathmandu University School of Management — alumni directory, messaging, posts, event management, and community interaction. eSewa payment integration for event registrations and donations. Built for real alumni engagement at scale.',
    tech: ['Django', 'Python', 'PostgreSQL', 'Celery', 'Redis', 'AWS EC2', 'Nginx', 'eSewa', 'Bootstrap'],
    metrics: [{ v: '2k+', l: 'Alumni' }, { v: 'eSewa', l: 'Payments' }, { v: 'Events', l: 'Module' }, { v: 'Live', l: 'Platform' }],
    url: 'https://kusomalumni.org',
    github: 'https://github.com/Yrajaram112',
    image: '/assets/projects/kusomalumni.png',
    accent: '#00D9F5',
    accentRgb: '0,217,245',
    category: 'Full-Stack · Community',
    status: 'Live',
    year: '2023',
    featured: false,
    emphasis: ['Django', 'PostgreSQL', 'eSewa', 'Celery'],
    emoji: '🎓',
  },
  {
    id: 'portfolio',
    num: '12',
    title: 'This Portfolio',
    subtitle: 'Personal Brand · Dev Showcase',
    role: 'Design · Development · SEO',
    desc: 'Hand-crafted from zero — performance-tuned, micro-animated, dark/light themed, and SEO-optimized across Data, AI, Software, and ML engineering. Fast to load, confident to present, built to ship.',
    tech: ['Next.js', 'React', 'CSS Modules', 'JSON-LD', 'Vercel'],
    metrics: [{ v: 'SEO', l: 'Optimized' }, { v: '<1s', l: 'Load' }, { v: '100%', l: 'Custom' }, { v: '4', l: 'Domains' }],
    url: 'https://www.rajaramyadav.com.np',
    github: 'https://github.com/Yrajaram112',
    image: '/assets/projects/rajaram-portfolio.png',
    accent: '#00D9F5',
    accentRgb: '0,217,245',
    category: 'Portfolio',
    status: "You're here",
    year: '2025',
    featured: false,
    emphasis: ['Next.js', 'JSON-LD', 'CSS Modules'],
    emoji: '🚀',
  },
];

function useInView(threshold = 0.1, delay = 0) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setTimeout(() => setVisible(true), delay); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold, delay]);
  return [ref, visible];
}

function FeaturedVisual({ project, hovered, accentRgb }) {
  const videoRef = useRef(null);
  const panelRef = useRef(null);

  useEffect(() => {
    if (!project.video || !videoRef.current || !panelRef.current) return;
    const vid = videoRef.current;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) vid.play().catch(() => {});
        else vid.pause();
      },
      { threshold: 0.2 }
    );
    obs.observe(panelRef.current);
    return () => obs.disconnect();
  }, [project.video]);

  const mediaStyle = {
    position: 'absolute',
    inset: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    opacity: hovered ? 0.92 : 0.78,
    transition: 'opacity 0.4s',
  };

  const overlay = (
    <div style={{
      position: 'absolute', inset: 0,
      background: 'linear-gradient(135deg, rgba(13,17,23,0.55) 0%, rgba(13,17,23,0.15) 55%, rgba(13,17,23,0.75) 100%)',
      zIndex: 1,
      pointerEvents: 'none',
    }} />
  );

  if (project.video) {
    return (
      <div ref={panelRef} style={{ position: 'absolute', inset: 0 }}>
        <video
          ref={videoRef}
          src={project.video}
          poster={project.poster}
          muted
          loop
          playsInline
          preload="none"
          disablePictureInPicture
          aria-label={`${project.title} — ${project.subtitle} demo`}
          style={mediaStyle}
        />
        {overlay}
      </div>
    );
  }

  if (project.image) {
    return (
      <>
        <Image
          src={project.image}
          alt={`${project.title} — ${project.subtitle}`}
          fill
          sizes="(max-width: 760px) 100vw, 55vw"
          style={mediaStyle}
        />
        {overlay}
      </>
    );
  }

  return (
    <>
      <div style={{ position: 'absolute', fontSize: 160, fontFamily: "'Sora',sans-serif", fontWeight: 900, color: `rgba(${accentRgb},0.05)`, lineHeight: 1, userSelect: 'none', letterSpacing: '-0.05em' }}>{project.num}</div>
      <div style={{ width: 76, height: 76, borderRadius: 22, background: `rgba(${accentRgb},0.08)`, border: `1px solid rgba(${accentRgb},0.18)`, display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'transform 0.4s ease', transform: hovered ? 'scale(1.12) rotate(6deg)' : 'scale(1) rotate(0deg)', fontSize: 30, zIndex: 2 }}>
        {project.emoji}
      </div>
    </>
  );
}

function FeaturedCard({ project, reverse }) {
  const [ref, visible] = useInView(0.06, reverse ? 150 : 0);
  const [hovered, setHovered] = useState(false);
  const { accent, accentRgb } = project;

  return (
    <div
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr',
        borderRadius: 24,
        overflow: 'hidden',
        border: `1px solid ${hovered ? accent + '55' : 'var(--border)'}`,
        background: 'var(--bg-alt)',
        transition: 'all 0.5s cubic-bezier(0.4,0,0.2,1)',
        boxShadow: hovered
          ? `0 0 60px rgba(${accentRgb},0.12), 0 32px 80px rgba(0,0,0,0.5)`
          : '0 8px 32px rgba(0,0,0,0.3)',
        transform: visible ? 'translateY(0) scale(1)' : 'translateY(40px) scale(0.98)',
        opacity: visible ? 1 : 0,
      }}
      className="proj-featured-inner"
    >
      <style>{`
        .proj-featured-inner {
          display: grid !important;
          grid-template-columns: 1.4fr 1fr !important;
        }
        .proj-featured-inner.reverse-layout {
          grid-template-columns: 1fr 1.4fr !important;
        }
        @media (max-width: 760px) {
          .proj-featured-inner,
          .proj-featured-inner.reverse-layout {
            grid-template-columns: 1fr !important;
          }
          .proj-featured-order-visual { order: 1 !important; min-height: 180px !important; }
          .proj-featured-order-content { order: 2 !important; }
        }
      `}</style>

      {/* Visual Panel */}
      <div
        className={`proj-featured-order-visual`}
        style={{
          order: reverse ? 2 : 1,
          position: 'relative',
          minHeight: 320,
          background: `radial-gradient(ellipse at ${reverse ? '80%' : '20%'} 50%, rgba(${accentRgb},0.1) 0%, transparent 70%), #0D1117`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
        }}
      >
        <div style={{ position: 'absolute', top: 20, left: 20, display: 'flex', gap: 8, flexWrap: 'wrap', zIndex: 3 }}>
          <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 9, padding: '4px 10px', borderRadius: 100, background: `rgba(${accentRgb},0.12)`, color: accent, border: `1px solid rgba(${accentRgb},0.25)`, letterSpacing: '0.1em', textTransform: 'uppercase' }}>{project.category}</span>
          <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 9, padding: '4px 10px', borderRadius: 100, background: 'rgba(63,185,80,0.08)', color: '#3FB950', border: '1px solid rgba(63,185,80,0.2)', letterSpacing: '0.08em' }}>● {project.status}</span>
        </div>
        <div style={{ position: 'absolute', bottom: 20, right: 20, fontFamily: "'JetBrains Mono',monospace", fontSize: 10, color: 'var(--text-3)', letterSpacing: '0.15em', zIndex: 3 }}>{project.year}</div>
        {project.emoji && (project.video || project.image) && (
          <div style={{
            position: 'absolute', top: 20, right: 20, zIndex: 3,
            width: 76, height: 76, borderRadius: 22,
            background: `rgba(${accentRgb},0.12)`,
            border: `1px solid rgba(${accentRgb},0.22)`,
            backdropFilter: 'blur(8px)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            transition: 'transform 0.4s ease, box-shadow 0.4s ease',
            transform: hovered ? 'scale(1.12) rotate(6deg)' : 'scale(1) rotate(0deg)',
            fontSize: 30,
            boxShadow: hovered ? `0 0 28px rgba(${accentRgb},0.25)` : `0 4px 20px rgba(0,0,0,0.35)`,
          }}>
            {project.emoji}
          </div>
        )}
        <FeaturedVisual project={project} hovered={hovered} accentRgb={accentRgb} />
        <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: 2, background: `linear-gradient(90deg, transparent, ${accent}, transparent)`, opacity: hovered ? 1 : 0, transition: 'opacity 0.4s', zIndex: 3 }} />
      </div>

      {/* Content Panel */}
      <div
        className="proj-featured-order-content"
        style={{ order: reverse ? 1 : 2, padding: 'clamp(24px,4vw,44px)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: 20 }}
      >
        <div>
          <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 10, color: accent, letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: 10 }}>{project.num} — {project.subtitle}</div>
          <h3 style={{ fontFamily: "'Sora',sans-serif", fontWeight: 800, fontSize: 'clamp(1.5rem,2.8vw,2.2rem)', letterSpacing: '-0.04em', lineHeight: 1.05, color: 'var(--text-1)', marginBottom: 14 }}>{project.title}</h3>
          <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 13.5, color: 'var(--text-2)', lineHeight: 1.82 }}>{project.desc}</p>
        </div>

        {/* Metrics */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 8, padding: '12px 14px', borderRadius: 12, background: 'rgba(0,0,0,0.25)', border: '1px solid var(--border-subtle)' }}>
          {project.metrics.map(({ v, l }) => (
            <div key={l} style={{ textAlign: 'center' }}>
              <div style={{ fontFamily: "'Sora',sans-serif", fontWeight: 700, fontSize: '0.9rem', color: accent }}>{v}</div>
              <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 8, color: 'var(--text-3)', marginTop: 2, letterSpacing: '0.06em', textTransform: 'uppercase' }}>{l}</div>
            </div>
          ))}
        </div>

        {/* Tech — highlight emphasis */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
          {project.tech.map(t => {
            const isKey = project.emphasis.includes(t);
            return (
              <span key={t} style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 9, padding: '4px 10px', borderRadius: 100, background: isKey ? `rgba(${accentRgb},0.1)` : 'var(--surface-2)', border: `1px solid ${isKey ? `rgba(${accentRgb},0.3)` : 'var(--border)'}`, color: isKey ? accent : 'var(--text-3)', fontWeight: isKey ? 600 : 400 }}>{t}</span>
            );
          })}
        </div>

        {/* CTAs */}
        <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
          {project.url ? (
            <a href={project.url} target="_blank" rel="noopener noreferrer"
              style={{ display: 'inline-flex', alignItems: 'center', gap: 6, padding: '9px 18px', borderRadius: 100, background: accent, color: '#000', fontFamily: "'DM Sans',sans-serif", fontWeight: 700, fontSize: 11, textDecoration: 'none', letterSpacing: '0.06em', textTransform: 'uppercase', transition: 'all 0.25s' }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = `0 8px 24px rgba(${accentRgb},0.35)`; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none'; }}
            >View Live ↗</a>
          ) : null}
          <a href={project.github} target="_blank" rel="noopener noreferrer"
            style={{ display: 'inline-flex', alignItems: 'center', gap: 6, padding: '9px 14px', borderRadius: 100, border: '1px solid var(--border)', color: 'var(--text-2)', fontFamily: "'DM Sans',sans-serif", fontWeight: 600, fontSize: 11, textDecoration: 'none', transition: 'all 0.25s', background: 'transparent' }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = accent; e.currentTarget.style.color = accent; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text-2)'; }}
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
}

function GridCard({ project, index }) {
  const [ref, visible] = useInView(0.07, index * 90);
  const [hovered, setHovered] = useState(false);
  const { accent, accentRgb } = project;

  return (
    <div ref={ref} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
      style={{
        borderRadius: 20, border: `1px solid ${hovered ? accent + '48' : 'var(--border)'}`, background: 'var(--bg-alt)', overflow: 'hidden',
        transition: 'all 0.4s cubic-bezier(0.4,0,0.2,1)',
        boxShadow: hovered ? `0 0 40px rgba(${accentRgb},0.1), 0 20px 60px rgba(0,0,0,0.4)` : '0 4px 16px rgba(0,0,0,0.25)',
        transform: visible ? (hovered ? 'translateY(-8px)' : 'translateY(0)') : 'translateY(36px)',
        opacity: visible ? 1 : 0,
        display: 'flex', flexDirection: 'column',
      }}
    >
      <div style={{ height: 3, background: `linear-gradient(90deg, ${accent}, transparent)`, opacity: hovered ? 1 : 0.25, transition: 'opacity 0.4s' }} />

      {project.image && (
        <div style={{ position: 'relative', height: 148, background: '#0D1117', overflow: 'hidden' }}>
          <Image
            src={project.image}
            alt={`${project.title} preview`}
            fill
            sizes="(max-width: 760px) 100vw, 360px"
            style={{ objectFit: 'cover', opacity: hovered ? 0.95 : 0.82, transition: 'opacity 0.35s' }}
          />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(13,17,23,0.65), transparent 55%)' }} />
        </div>
      )}

      <div style={{ padding: project.image ? '16px 22px 0' : '18px 22px 0', display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 10 }}>
        <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 44, fontWeight: 900, color: hovered ? `rgba(${accentRgb},0.18)` : `rgba(${accentRgb},0.07)`, lineHeight: 1, letterSpacing: '-0.04em', userSelect: 'none', transition: 'color 0.3s' }}>{project.num}</div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 5 }}>
          <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 8.5, padding: '3px 9px', borderRadius: 100, background: `rgba(${accentRgb},0.1)`, color: accent, border: `1px solid rgba(${accentRgb},0.22)`, letterSpacing: '0.1em', textTransform: 'uppercase' }}>{project.category}</span>
          <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 8.5, color: 'var(--text-3)', letterSpacing: '0.12em' }}>{project.year}</span>
        </div>
      </div>

      <div style={{ padding: '10px 22px 22px', flex: 1, display: 'flex', flexDirection: 'column', gap: 12 }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
            <span style={{ fontSize: 18 }}>{project.emoji}</span>
            <h3 style={{ fontFamily: "'Sora',sans-serif", fontWeight: 800, fontSize: 'clamp(1.1rem,2.2vw,1.35rem)', letterSpacing: '-0.03em', color: hovered ? accent : 'var(--text-1)', transition: 'color 0.3s', margin: 0 }}>{project.title}</h3>
          </div>
          <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 9, color: 'var(--text-3)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 10 }}>{project.subtitle}</div>
          <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 12.5, color: 'var(--text-2)', lineHeight: 1.78 }}>{project.desc}</p>
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5 }}>
          {project.tech.slice(0, 5).map(t => {
            const isKey = project.emphasis.includes(t);
            return (
              <span key={t} style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 8.5, padding: '3px 9px', borderRadius: 100, background: isKey ? `rgba(${accentRgb},0.08)` : 'var(--surface-2)', border: `1px solid ${isKey ? `rgba(${accentRgb},0.25)` : 'var(--border)'}`, color: isKey ? accent : 'var(--text-3)', fontWeight: isKey ? 600 : 400 }}>{t}</span>
            );
          })}
          {project.tech.length > 5 && <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 8.5, padding: '3px 9px', borderRadius: 100, background: 'var(--surface-2)', border: '1px solid var(--border)', color: 'var(--text-3)' }}>+{project.tech.length - 5}</span>}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: 12, borderTop: '1px solid var(--border-subtle)', marginTop: 'auto' }}>
          <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 8.5, color: '#3FB950', letterSpacing: '0.1em', display: 'flex', alignItems: 'center', gap: 4 }}>
            <span style={{ fontSize: 6 }}>●</span> {project.status}
          </span>
          <div style={{ display: 'flex', gap: 7 }}>
            <a href={project.github} target="_blank" rel="noopener noreferrer"
              style={{ width: 30, height: 30, borderRadius: 8, background: 'var(--surface-2)', border: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-2)', textDecoration: 'none', transition: 'all 0.2s' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = accent; e.currentTarget.style.color = accent; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text-2)'; }}
            ><svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg></a>
            {project.url ? (
              <a href={project.url} target="_blank" rel="noopener noreferrer"
                style={{ width: 30, height: 30, borderRadius: 8, background: `rgba(${accentRgb},0.08)`, border: `1px solid rgba(${accentRgb},0.2)`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: accent, textDecoration: 'none', transition: 'all 0.2s', fontSize: 12 }}
                onMouseEnter={e => { e.currentTarget.style.background = `rgba(${accentRgb},0.18)`; }}
                onMouseLeave={e => { e.currentTarget.style.background = `rgba(${accentRgb},0.08)`; }}
              >↗</a>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}

function SectionHeader() {
  const [ref, visible] = useInView(0.1, 0);
  return (
    <div ref={ref} style={{ marginBottom: 64, transition: 'all 0.8s cubic-bezier(0.4,0,0.2,1)', opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(32px)' }}>
      <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontFamily: "'JetBrains Mono',monospace", fontSize: '0.68rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 18 }}>
        <span style={{ opacity: 0.4 }}>//</span> Selected Projects
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end', justifyContent: 'space-between', gap: 16 }}>
        <h2 style={{ fontFamily: "'Sora',sans-serif", fontWeight: 900, fontSize: 'clamp(1.9rem,4.5vw,3.2rem)', letterSpacing: '-0.05em', lineHeight: 1.02, margin: 0, maxWidth: 500, color: 'var(--text-1)' }}>
          Things I&apos;ve{' '}<span style={{ background: 'var(--grad-text)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>shipped</span>{' '}&amp; own.
        </h2>
        <a href="https://github.com/Yrajaram112" target="_blank" rel="noopener noreferrer"
          style={{ display: 'inline-flex', alignItems: 'center', gap: 7, padding: '9px 16px', borderRadius: 100, border: '1px solid var(--border)', color: 'var(--text-2)', fontFamily: "'DM Sans',sans-serif", fontWeight: 600, fontSize: 11, textDecoration: 'none', transition: 'all 0.25s', background: 'transparent' }}
          onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.color = 'var(--accent)'; }}
          onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text-2)'; }}
        >
          <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>
          All on GitHub
        </a>
      </div>
      <div style={{ marginTop: 28, height: 1, background: 'linear-gradient(90deg, var(--accent), var(--accent-2), transparent)', opacity: 0.28 }} />
    </div>
  );
}

function TechStrip() {
  const items = ['Spark', '·', 'dbt', '·', 'Dagster', '·', 'LangChain', '·', 'Python', '·', 'Spring Boot', '·', 'NestJS', '·', 'FastAPI', '·', 'Next.js', '·', 'React', '·', 'Kafka', '·', 'PostgreSQL', '·', 'AWS', '·', 'Docker', '·', 'Kubernetes', '·', 'Terraform', '·', 'MapLibre'];
  return (
    <div style={{ overflow: 'hidden', padding: '24px 0', borderTop: '1px solid var(--border-subtle)', borderBottom: '1px solid var(--border-subtle)', margin: '72px 0 0', position: 'relative' }}>
      <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 100, background: 'linear-gradient(90deg, var(--bg-alt), transparent)', zIndex: 2, pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: 100, background: 'linear-gradient(-90deg, var(--bg-alt), transparent)', zIndex: 2, pointerEvents: 'none' }} />
      <div style={{ display: 'flex', gap: 24, animation: 'marquee 28s linear infinite', width: 'max-content' }}>
        {[...items, ...items].map((item, i) => (
          <span key={i} style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 10, letterSpacing: '0.14em', color: item === '·' ? 'var(--text-3)' : 'var(--text-2)', textTransform: 'uppercase', whiteSpace: 'nowrap' }}>{item}</span>
        ))}
      </div>
      <style>{`@keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }`}</style>
    </div>
  );
}

export default function Projects({ theme }) {
  const featured = PROJECTS.filter(p => p.featured);
  const rest = PROJECTS.filter(p => !p.featured);

  return (
    <section id="projects" style={{ background: 'var(--bg-alt)', padding: 'clamp(80px,10vw,120px) 0' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 clamp(20px,5vw,40px)' }}>
        <SectionHeader />
        <div style={{ display: 'flex', flexDirection: 'column', gap: 18, marginBottom: 18 }}>
          {featured.map((p, i) => <FeaturedCard key={p.id} project={p} reverse={i % 2 === 1} />)}
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 14 }}>
          {rest.map((p, i) => <GridCard key={p.id} project={p} index={i} />)}
        </div>
        <TechStrip />
      </div>
    </section>
  );
}