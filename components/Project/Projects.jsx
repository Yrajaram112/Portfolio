import styles from './Projects.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { FiGithub, FiArrowRight } from 'react-icons/fi';

const PROJECTS = [
  {
    id:'kusom', title:'KUSOM Alumni Network', subtitle:'Community Platform',
    desc:'Full-featured alumni management for Kathmandu University School of Management — member directories, events, news, and engagement analytics at scale.',
    tech:['Django','Python','PostgreSQL','Celery','Redis','AWS'],
    metrics:[{v:'2,000+',l:'Alumni'},{v:'99.9%',l:'Uptime'},{v:'4×',l:'Efficiency'},{v:'<1s',l:'Load'}],
    image:'/assets/projects/kusom-rajaram-yadav-project.png',
    href:'/kusom', github:'https://github.com/Yrajaram112',
    accent:'#00D9F5', accentLight:'#0369A1', featured:true,
  },
  {
    id:'nepse', title:'NEPSE Analytics Dashboard', subtitle:'Financial Platform',
    desc:'Real-time Nepal Stock Exchange analytics delivering live feeds, historical trend charts, and algorithmic screening for retail and institutional investors.',
    tech:['Next.js','React','Chart.js','Node.js','PostgreSQL','Redis'],
    metrics:[{v:'<200ms',l:'Latency'},{v:'10k+',l:'Daily users'},{v:'98',l:'Lighthouse'},{v:'50+',l:'Stocks'}],
    image:'/assets/projects/nepse-rajaram-yadav-project.png',
    href:'/nepse', github:'https://github.com/Yrajaram112',
    accent:'#7C3AED', accentLight:'#6D28D9', featured:true,
  },
  {
    id:'student', title:'Student Management ERP', subtitle:'Enterprise System',
    desc:'Comprehensive academic ERP built with Spring Boot — enrollment, attendance, grading, fee management, and reporting for 5,000+ students.',
    tech:['Spring Boot','Java','MySQL','Spring Security','Docker'],
    metrics:[{v:'5k+',l:'Records'},{v:'40%',l:'Time saved'},{v:'12',l:'Departments'},{v:'99.5%',l:'Uptime'}],
    image:'/assets/projects/studentImg-rajaram-yadav-project.jpg',
    href:'/student', github:'https://github.com/Yrajaram112',
    accent:'#3FB950', accentLight:'#16A34A', featured:false,
  },
  {
    id:'loan', title:'Loan Management System', subtitle:'Fintech Tool',
    desc:'End-to-end loan origination platform automating EMI calculations, repayment schedules, delinquency alerts, and regulatory reporting.',
    tech:['PHP','Laravel','MySQL','Bootstrap','DOMPDF'],
    metrics:[{v:'500+',l:'Loans'},{v:'3×',l:'Speed'},{v:'0',l:'Errors'},{v:'85%',l:'Report time saved'}],
    image:'/assets/projects/loanMan-rajaram-yadav-project.jpg',
    href:'/loan', github:'https://github.com/Yrajaram112',
    accent:'#D29922', accentLight:'#B45309', featured:false,
  },
];

function useReveal(delay = 0) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.opacity=0; el.style.transform='translateY(28px)';
    el.style.transition=`opacity 0.65s ease ${delay}ms, transform 0.65s ease ${delay}ms`;
    const obs = new IntersectionObserver(([e])=>{ if(e.isIntersecting){ el.style.opacity=1; el.style.transform='none'; obs.disconnect(); }},{threshold:0.08});
    obs.observe(el);
    return ()=>obs.disconnect();
  },[delay]);
  return ref;
}

// isDark is passed as a prop — correctly scoped
function ProjectCard({ project, index, isDark }) {
  const ref = useReveal(index * 110);
  const [hovered, setHovered] = useState(false);

  const accent = isDark ? project.accent : project.accentLight;
  const isBig  = project.featured && index === 0;
  const cardBg = isDark ? '#161B22' : '#FFFFFF';

  return (
    <div
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        gridColumn: isBig ? 'span 2' : 'span 1',
        background: cardBg,
        border: `1px solid ${hovered ? accent+'50' : 'var(--border)'}`,
        borderRadius: 20, overflow:'hidden',
        transition:'all 0.35s ease',
        boxShadow: hovered
          ? `0 0 36px ${accent}18, 0 20px 60px rgba(0,0,0,${isDark?0.6:0.1})`
          : `var(--shadow-sm)`,
        transform: hovered ? 'translateY(-6px)' : 'none',
        cursor:'pointer',
      }}
    >
      {/* Image */}
      <div style={{ position:'relative', overflow:'hidden', height: isBig ? 280 : 200 }}>
        <Image
          src={project.image}
          alt={`${project.title} — Rajaram Yadav project`}
          fill className="object-cover"
          style={{ transition:'transform 0.7s ease', transform: hovered ? 'scale(1.06)' : 'scale(1)' }}
          sizes="(max-width:900px) 100vw, 50vw"
        />
        <div style={{ position:'absolute', inset:0, background:`linear-gradient(to bottom, transparent 35%, ${isDark?'rgba(22,27,34,0.95)':'rgba(255,255,255,0.85)'} 100%)` }}/>
        <div style={{ position:'absolute', top:14, left:14, display:'flex', gap:8 }}>
          <span style={{ fontFamily:'JetBrains Mono,monospace', fontSize:10, padding:'4px 10px', borderRadius:100, background:'rgba(0,0,0,0.6)', color:'#fff', backdropFilter:'blur(8px)', letterSpacing:'0.08em' }}>{project.subtitle}</span>
          {project.featured && <span style={{ fontFamily:'JetBrains Mono,monospace', fontSize:10, padding:'4px 10px', borderRadius:100, background:accent, color: isDark?'#0D1117':'#fff', fontWeight:700 }}>Featured</span>}
        </div>
        <a href={project.github} target="_blank" rel="noopener noreferrer" onClick={e=>e.stopPropagation()} title="GitHub"
           style={{ position:'absolute', top:14, right:14, width:32, height:32, borderRadius:7, background:'rgba(0,0,0,0.6)', backdropFilter:'blur(8px)', display:'flex', alignItems:'center', justifyContent:'center', color:'#fff', textDecoration:'none', transition:'background 0.2s' }}
           onMouseEnter={e=>e.currentTarget.style.background='rgba(0,0,0,0.85)'}
           onMouseLeave={e=>e.currentTarget.style.background='rgba(0,0,0,0.6)'}
        ><FiGithub size={14}/></a>
      </div>

      {/* Content */}
      <div style={{ padding:'20px 22px 22px' }}>
        <h3 style={{ fontFamily:'Sora,sans-serif', fontWeight:700, fontSize:'1.1rem', color: hovered ? accent : 'var(--text-1)', letterSpacing:'-0.02em', marginBottom:8, transition:'color 0.25s' }}>
          {project.title}
        </h3>
        <p style={{ fontFamily:'DM Sans,sans-serif', fontSize:13, color:'var(--text-2)', lineHeight:1.75, marginBottom:16 }}>{project.desc}</p>

        {/* Metrics */}
        <div style={{ display:'grid', gridTemplateColumns:`repeat(${project.metrics.length},1fr)`, gap:8, marginBottom:16, padding:'12px 14px', borderRadius:10, background: isDark?'#0D1117':'#F0F4F8', border:`1px solid ${isDark?'#21262D':'#E4E9ED'}` }}>
          {project.metrics.map(({v,l}) => (
            <div key={l} style={{ textAlign:'center' }}>
              <div style={{ fontFamily:'Sora,sans-serif', fontWeight:700, fontSize:'1rem', color:accent }}>{v}</div>
              <div style={{ fontFamily:'JetBrains Mono,monospace', fontSize:9, color:'var(--text-3)', marginTop:2, letterSpacing:'0.06em', textTransform:'uppercase' }}>{l}</div>
            </div>
          ))}
        </div>

        {/* Tech */}
        <div style={{ display:'flex', flexWrap:'wrap', gap:6, marginBottom:16 }}>
          {project.tech.map(t => (
            <span key={t} style={{ fontFamily:'JetBrains Mono,monospace', fontSize:10, padding:'3px 9px', borderRadius:100, background: isDark?'#21262D':'#F0F4F8', border:`1px solid ${isDark?'#373E47':'#D1D9E0'}`, color:'var(--text-3)' }}>{t}</span>
          ))}
        </div>

        <Link href={project.href} style={{ display:'inline-flex', alignItems:'center', gap:6, fontFamily:'DM Sans,sans-serif', fontWeight:700, fontSize:12, color:accent, textDecoration:'none', letterSpacing:'0.04em', textTransform:'uppercase', transition:'gap 0.2s' }}
        onMouseEnter={e=>e.currentTarget.style.gap='10px'}
        onMouseLeave={e=>e.currentTarget.style.gap='6px'}
        >Case study <FiArrowRight size={13}/></Link>
      </div>
    </div>
  );
}

export default function Projects({ theme }) {
  const isDark = theme === 'dark'; // correctly scoped at top
  const headerRef = useReveal(0);

  return (
    <section id="projects" style={{ background:'var(--bg-alt)', padding:'112px 0' }}>
      <div style={{ maxWidth:1200, margin:'0 auto', padding:'0 24px' }}>

        <p className="s-label" style={{ marginBottom:16 }}>Projects</p>
        <div ref={headerRef} style={{ display:'flex', flexWrap:'wrap', alignItems:'flex-end', justifyContent:'space-between', gap:16, marginBottom:56 }}>
          <h2 style={{ maxWidth:420, margin:0, color:'var(--text-1)' }}>
            Work that{' '}<span className="grad-text">speaks</span>{' '}for itself.
          </h2>
          <a href="https://github.com/Yrajaram112" target="_blank" rel="noopener noreferrer" className="btn btn-ghost" style={{ fontSize:12 }}>
            <FiGithub size={14}/> View all on GitHub
          </a>
        </div>

        <div style={{ display:'grid', gridTemplateColumns:'repeat(2,1fr)', gap:16 }} className={styles.projGrid}>
          {PROJECTS.map((p,i) => (
            // Pass isDark as prop — no closure bug
            <ProjectCard key={p.id} project={p} index={i} isDark={isDark}/>
          ))}
        </div>
      </div>

    </section>
  );
}
