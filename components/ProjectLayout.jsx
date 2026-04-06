import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { FiArrowLeft, FiGithub, FiExternalLink, FiArrowRight } from 'react-icons/fi';

const SITE_URL = 'https://www.rajaramyadav.com.np';

function useReveal(delay=0) {
  const ref = useRef(null);
  useEffect(()=>{
    const el=ref.current; if(!el) return;
    el.style.opacity=0; el.style.transform='translateY(22px)';
    el.style.transition=`opacity 0.65s ease ${delay}ms, transform 0.65s ease ${delay}ms`;
    const obs=new IntersectionObserver(([e])=>{if(e.isIntersecting){el.style.opacity=1;el.style.transform='none';obs.disconnect();}},{threshold:0.1});
    obs.observe(el); return()=>obs.disconnect();
  },[delay]);
  return ref;
}

export default function ProjectLayout({ title, subtitle, description, image, tech=[], metrics=[], highlights=[], overview, challenge, solution, github, live, accent='var(--accent)', theme, toggleTheme, mounted }) {
  const r1=useReveal(0); const r2=useReveal(100); const r3=useReveal(150); const r4=useReveal(200); const r5=useReveal(250);

  const SCHEMA = {
    '@context':'https://schema.org','@type':'SoftwareApplication',
    name:title, description, author:{name:'Rajaram Yadav',url:SITE_URL},
    applicationCategory:'WebApplication',
    ...(image?{image:`${SITE_URL}${image}`}:{}),
    ...(live?{url:live}:{}),
  };

  return (
    <>
      <Head>
        <title>{title} — Rajaram Yadav Portfolio</title>
        <meta name="description" content={description}/>
        <meta name="robots" content="index, follow"/>
        <meta property="og:title" content={`${title} — Rajaram Yadav`}/>
        <meta property="og:description" content={description}/>
        {image && <meta property="og:image" content={`${SITE_URL}${image}`}/>}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html:JSON.stringify(SCHEMA) }}/>
      </Head>

      <Navbar theme={theme} toggleTheme={toggleTheme} mounted={mounted}/>

      <main style={{ background:'var(--bg)', minHeight:'100vh', paddingBottom:80 }}>

        {/* Hero image */}
        {image && (
          <div style={{ position:'relative', width:'100%', height:'clamp(200px,38vh,460px)', overflow:'hidden' }}>
            <Image src={image} alt={`${title} — Rajaram Yadav`} fill className="object-cover" priority sizes="100vw" style={{ filter:'brightness(0.7)' }}/>
            <div style={{ position:'absolute', inset:0, background:'linear-gradient(to bottom, transparent 40%, var(--bg) 100%)' }}/>
            <div style={{ position:'absolute', bottom:0, left:0, right:0, height:2, background:`linear-gradient(90deg,transparent,${accent},transparent)` }}/>
          </div>
        )}

        <div style={{ maxWidth:860, margin:'0 auto', padding:`${image?'40px':'112px'} 24px 0` }}>

          {/* Back */}
          <Link href="/#projects" ref={r1} style={{ display:'inline-flex', alignItems:'center', gap:8, fontFamily:'JetBrains Mono,monospace', fontSize:11, color:'var(--text-3)', textDecoration:'none', letterSpacing:'0.1em', textTransform:'uppercase', marginBottom:32, transition:'color 0.2s' }}
          onMouseEnter={e=>e.currentTarget.style.color='var(--accent)'}
          onMouseLeave={e=>e.currentTarget.style.color='var(--text-3)'}
          ><FiArrowLeft size={13}/> All Projects</Link>

          {/* Header */}
          <div ref={r2} style={{ marginBottom:36 }}>
            <div style={{ fontFamily:'JetBrains Mono,monospace', fontSize:10, color:'var(--accent)', letterSpacing:'0.18em', textTransform:'uppercase', marginBottom:10 }}>// {subtitle}</div>
            <h1 style={{ color:'var(--text-1)', marginBottom:16 }}>{title}</h1>
            <p style={{ fontFamily:'DM Sans,sans-serif', fontSize:'1.05rem', color:'var(--text-2)', lineHeight:1.8, maxWidth:680 }}>{description}</p>
            <div style={{ display:'flex', flexWrap:'wrap', gap:10, marginTop:22 }}>
              {github && <a href={github} target="_blank" rel="noopener noreferrer" className="btn btn-ghost" style={{ fontSize:12 }}><FiGithub size={14}/> GitHub</a>}
              {live   && <a href={live}   target="_blank" rel="noopener noreferrer" className="btn btn-solid" style={{ fontSize:12 }}><FiExternalLink size={14}/> Live Site</a>}
            </div>
          </div>

          {/* Metrics */}
          {metrics.length>0 && (
            <div ref={r3} style={{ display:'grid', gridTemplateColumns:`repeat(${Math.min(metrics.length,4)},1fr)`, gap:12, marginBottom:36 }} className="m-grid">
              {metrics.map(({v,l})=>(
                <div key={l} style={{ background:'var(--surface)', border:'1px solid var(--border)', borderRadius:14, padding:'18px 14px', textAlign:'center', boxShadow:'var(--shadow-sm)' }}>
                  <div style={{ fontFamily:'Sora,sans-serif', fontWeight:700, fontSize:'1.5rem', color:'var(--accent)', letterSpacing:'-0.03em' }}>{v}</div>
                  <div style={{ fontFamily:'JetBrains Mono,monospace', fontSize:9, color:'var(--text-3)', marginTop:5, letterSpacing:'0.1em', textTransform:'uppercase' }}>{l}</div>
                </div>
              ))}
            </div>
          )}

          <div style={{ height:1, background:'var(--border)', marginBottom:36 }}/>

          {/* Body */}
          <div ref={r4} style={{ display:'flex', flexDirection:'column', gap:32 }}>
            {overview  && <div><div style={{ fontFamily:'JetBrains Mono,monospace', fontSize:10, color:'var(--accent)', letterSpacing:'0.16em', textTransform:'uppercase', marginBottom:10 }}>// Overview</div><p style={{ fontFamily:'DM Sans,sans-serif', fontSize:'0.97rem', color:'var(--text-2)', lineHeight:1.88 }}>{overview}</p></div>}
            {challenge && <div><div style={{ fontFamily:'JetBrains Mono,monospace', fontSize:10, color:'var(--accent)', letterSpacing:'0.16em', textTransform:'uppercase', marginBottom:10 }}>// The Challenge</div><p style={{ fontFamily:'DM Sans,sans-serif', fontSize:'0.97rem', color:'var(--text-2)', lineHeight:1.88 }}>{challenge}</p></div>}
            {solution  && <div><div style={{ fontFamily:'JetBrains Mono,monospace', fontSize:10, color:'var(--accent)', letterSpacing:'0.16em', textTransform:'uppercase', marginBottom:10 }}>// The Solution</div><p style={{ fontFamily:'DM Sans,sans-serif', fontSize:'0.97rem', color:'var(--text-2)', lineHeight:1.88 }}>{solution}</p></div>}
          </div>

          {/* Highlights */}
          {highlights.length>0 && (
            <div ref={r5} style={{ marginTop:36 }}>
              <div style={{ fontFamily:'JetBrains Mono,monospace', fontSize:10, color:'var(--accent)', letterSpacing:'0.16em', textTransform:'uppercase', marginBottom:14 }}>// Key Highlights</div>
              <ul style={{ listStyle:'none', display:'flex', flexDirection:'column', gap:10 }}>
                {highlights.map((item,i)=>(
                  <li key={i} style={{ display:'flex', gap:14, padding:'14px 16px', background:'var(--surface)', border:'1px solid var(--border)', borderRadius:10, transition:'border-color 0.2s' }}
                  onMouseEnter={e=>e.currentTarget.style.borderColor='var(--accent)'}
                  onMouseLeave={e=>e.currentTarget.style.borderColor='var(--border)'}
                  >
                    <span style={{ fontFamily:'JetBrains Mono,monospace', fontSize:10, color:'var(--accent)', flexShrink:0, marginTop:2 }}>{String(i+1).padStart(2,'0')}</span>
                    <p style={{ fontFamily:'DM Sans,sans-serif', fontSize:14, color:'var(--text-2)', lineHeight:1.75, margin:0 }}>{item}</p>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Tech */}
          {tech.length>0 && (
            <div style={{ marginTop:36 }}>
              <div style={{ fontFamily:'JetBrains Mono,monospace', fontSize:10, color:'var(--accent)', letterSpacing:'0.16em', textTransform:'uppercase', marginBottom:14 }}>// Tech Stack</div>
              <div style={{ display:'flex', flexWrap:'wrap', gap:8 }}>
                {tech.map(t=>(
                  <span key={t} className="tag" style={{ fontSize:11 }}>{t}</span>
                ))}
              </div>
            </div>
          )}

          {/* Nav footer */}
          <div style={{ marginTop:56, padding:'22px 26px', background:'var(--surface)', border:'1px solid var(--border)', borderRadius:16, display:'flex', alignItems:'center', justifyContent:'space-between', flexWrap:'wrap', gap:14 }}>
            <div>
              <p style={{ fontFamily:'JetBrains Mono,monospace', fontSize:10, color:'var(--text-3)', letterSpacing:'0.12em', textTransform:'uppercase', marginBottom:3 }}>// Next</p>
              <p style={{ fontFamily:'DM Sans,sans-serif', fontWeight:600, fontSize:14, color:'var(--text-1)' }}>Explore more projects</p>
            </div>
            <Link href="/#projects" style={{ display:'inline-flex', alignItems:'center', gap:8, fontFamily:'DM Sans,sans-serif', fontWeight:700, fontSize:12, color:'var(--accent)', textDecoration:'none', letterSpacing:'0.06em', textTransform:'uppercase', transition:'gap 0.2s' }}
            onMouseEnter={e=>e.currentTarget.style.gap='12px'}
            onMouseLeave={e=>e.currentTarget.style.gap='8px'}
            >All Projects <FiArrowRight size={14}/></Link>
          </div>
        </div>
      </main>

      <Footer theme={theme}/>
      <style>{`@media(max-width:640px){.m-grid{grid-template-columns:1fr 1fr!important;}}`}</style>
    </>
  );
}
