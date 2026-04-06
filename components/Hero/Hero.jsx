import styles from './Hero.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { FaGithub, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import { FiMail, FiFileText, FiArrowDown } from 'react-icons/fi';
import { SiLeetcode } from 'react-icons/si';

const ROLES = ['Senior Software Engineer','Java & Spring Boot Architect','Cloud & AWS Engineer','Full-Stack Developer','System Design Expert'];

// Typewriter — pure client, never touches server
function Typewriter() {
  const [text, setText] = useState('');
  const [wi, setWi]     = useState(0);
  const [ci, setCi]     = useState(0);
  const [del, setDel]   = useState(false);

  useEffect(() => {
    const word = ROLES[wi];
    const speed = del ? 40 : 80;
    const t = setTimeout(() => {
      if (!del && ci < word.length) {
        setText(word.slice(0, ci + 1));
        setCi(c => c + 1);
      } else if (!del && ci === word.length) {
        setTimeout(() => setDel(true), 2200);
      } else if (del && ci > 0) {
        setText(word.slice(0, ci - 1));
        setCi(c => c - 1);
      } else {
        setDel(false);
        setWi(i => (i + 1) % ROLES.length);
      }
    }, speed);
    return () => clearTimeout(t);
  }, [ci, del, wi]);

  return (
    <span style={{ display:'inline-flex', alignItems:'center', gap:2 }}>
      <span style={{ color:'var(--text-3)', fontFamily:'JetBrains Mono,monospace' }}>$ </span>
      <span style={{ color:'var(--accent)', fontFamily:'JetBrains Mono,monospace' }}>{text}</span>
      <span className="cursor"/>
    </span>
  );
}

// Dot grid canvas — client only
function DotGrid({ isDark }) {
  const ref = useRef(null);
  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let raf;
    let mx = -999, my = -999;
    const resize = () => { canvas.width = canvas.offsetWidth; canvas.height = canvas.offsetHeight; };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);
    const onMove = e => { const r = canvas.getBoundingClientRect(); mx = e.clientX-r.left; my = e.clientY-r.top; };
    canvas.addEventListener('mousemove', onMove);
    const S = 32;
    const rgb = isDark ? '0,217,245' : '3,105,161';
    const draw = () => {
      ctx.clearRect(0,0,canvas.width,canvas.height);
      for (let r=0; r<=canvas.height/S+1; r++) {
        for (let c=0; c<=canvas.width/S+1; c++) {
          const x=c*S, y=r*S;
          const d = Math.hypot(x-mx,y-my);
          const inf = Math.max(0,1-d/150);
          ctx.beginPath();
          ctx.arc(x,y,1+inf*2.2,0,Math.PI*2);
          ctx.fillStyle = `rgba(${rgb},${0.07+inf*0.45})`;
          ctx.fill();
        }
      }
      raf = requestAnimationFrame(draw);
    };
    draw();
    return () => { cancelAnimationFrame(raf); ro.disconnect(); canvas.removeEventListener('mousemove',onMove); };
  }, [isDark]);
  return <canvas ref={ref} style={{ position:'absolute', inset:0, width:'100%', height:'100%', pointerEvents:'none', zIndex:0 }}/>;
}

const SOCIALS = [
  { icon:<FaLinkedinIn size={15}/>, href:'https://www.linkedin.com/in/yadavrajaram',  label:'LinkedIn' },
  { icon:<FaGithub     size={15}/>, href:'https://github.com/Yrajaram112',            label:'GitHub' },
  { icon:<FaYoutube    size={15}/>, href:'https://www.youtube.com/@coderestart',      label:'YouTube' },
  { icon:<SiLeetcode   size={14}/>, href:'https://leetcode.com/rajaramyadav',         label:'LeetCode' },
  { icon:<FiMail       size={15}/>, href:'mailto:rajaramyadavcse@gmail.com',          label:'Email' },
];

export default function Hero({ theme, mounted }) {
  const isDark = theme === 'dark';

  return (
    <section id="hero" style={{ position:'relative', minHeight:'100vh', display:'flex', alignItems:'center', background:'var(--bg)', overflow:'hidden' }}>

      {/* Canvas — client only, no hydration issue */}
      {mounted && <DotGrid isDark={isDark}/>}

      {/* Glow blobs */}
      <div style={{ position:'absolute', top:'10%', right:'5%', width:'40vw', height:'40vw', borderRadius:'50%', background:`radial-gradient(circle,var(--accent-dim) 0%,transparent 70%)`, pointerEvents:'none', zIndex:0, animation:'glow 5s ease-in-out infinite' }}/>
      <div style={{ position:'absolute', bottom:'10%', left:'0', width:'30vw', height:'30vw', borderRadius:'50%', background:`radial-gradient(circle,var(--accent-2-dim) 0%,transparent 70%)`, pointerEvents:'none', zIndex:0 }}/>

      {/* Scanline — client only */}
      {mounted && <div className={styles.scanline} style={{ zIndex:1 }}/>}

      <div style={{ position:'relative', zIndex:2, maxWidth:1200, margin:'0 auto', padding:'120px 24px 80px', width:'100%' }}>
        <div className={styles.heroGrid} style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:60, alignItems:'center' }}>

          {/* Left */}
          <div>
            {/* Available pill */}
            <div className="fu d1" style={{ display:'inline-flex', alignItems:'center', gap:8, padding:'6px 14px', borderRadius:100, border:`1px solid rgba(63,185,80,0.3)`, background:`rgba(63,185,80,0.07)`, marginBottom:24 }}>
              {/* Use a stable element for SSR, animate after mount */}
              <span style={{ width:7, height:7, borderRadius:'50%', background:'#3FB950', boxShadow:'0 0 8px #3FB950', flexShrink:0, animation: mounted ? 'blink 2s infinite' : 'none' }}/>
              <span style={{ fontFamily:'JetBrains Mono,monospace', fontSize:11, color:'#3FB950', letterSpacing:'0.12em' }}>AVAILABLE FOR OPPORTUNITIES</span>
            </div>

            {/* Name — static, no hydration issues */}
            <h1 className="fu d2" style={{ marginBottom:14, color:'var(--text-1)' }}>
              Rajaram<br/>
              <span className="grad-text">Yadav</span>
            </h1>

            {/* Typewriter — client-only component, suppress hydration */}
            <div className="fu d3" style={{ fontSize:'clamp(0.82rem,1.4vw,0.96rem)', marginBottom:20, minHeight:'1.6em' }} suppressHydrationWarning>
              {mounted ? <Typewriter/> : (
                <span style={{ color:'var(--accent)', fontFamily:'JetBrains Mono,monospace' }}>
                  <span style={{ color:'var(--text-3)' }}>$ </span>Senior Software Engineer
                </span>
              )}
            </div>

            {/* Tagline */}
            <p className="fu d4" style={{ fontSize:'clamp(0.95rem,1.5vw,1.08rem)', color:'var(--text-2)', lineHeight:1.78, maxWidth:480, marginBottom:36 }}>
              Java · Spring Boot · React · AWS · Kubernetes —{' '}
              <strong style={{ color:'var(--text-1)', fontWeight:500 }}>7+ years</strong> turning
              complex engineering challenges into elegant, production-grade software.
            </p>

            {/* CTAs */}
            <div className="fu d5" style={{ display:'flex', flexWrap:'wrap', gap:12, marginBottom:36 }}>
              <Link href="/#projects" className="btn btn-solid">View My Work</Link>
              <Link href="/resume"    className="btn btn-ghost"><FiFileText size={14}/> Resume</Link>
            </div>

            {/* Socials */}
            <div className="fu d6" style={{ display:'flex', gap:8, flexWrap:'wrap', alignItems:'center' }}>
              {SOCIALS.map(({ icon, href, label }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} title={label}
                   style={{ width:38, height:38, borderRadius:8, display:'flex', alignItems:'center', justifyContent:'center', background:'var(--surface)', border:'1px solid var(--border)', color:'var(--text-3)', textDecoration:'none', transition:'all 0.22s' }}
                   onMouseEnter={e => { const el=e.currentTarget; el.style.borderColor='var(--accent)'; el.style.color='var(--accent)'; el.style.transform='translateY(-2px)'; el.style.boxShadow='0 4px 16px var(--accent-dim)'; }}
                   onMouseLeave={e => { const el=e.currentTarget; el.style.borderColor='var(--border)'; el.style.color='var(--text-3)'; el.style.transform='none'; el.style.boxShadow='none'; }}
                >{icon}</a>
              ))}
              <a href="https://www.dreambig.com.np" target="_blank" rel="noopener noreferrer" title="DreamBig — Education Platform"
                 style={{ padding:'6px 12px', borderRadius:8, border:'1px solid var(--border)', background:'var(--surface)', color:'var(--text-3)', fontFamily:'JetBrains Mono,monospace', fontSize:10, textDecoration:'none', transition:'all 0.22s', display:'flex', alignItems:'center', gap:5 }}
                 onMouseEnter={e => { e.currentTarget.style.borderColor='var(--accent)'; e.currentTarget.style.color='var(--accent)'; }}
                 onMouseLeave={e => { e.currentTarget.style.borderColor='var(--border)'; e.currentTarget.style.color='var(--text-3)'; }}
              >🚀 dreambig.com.np</a>
            </div>

            {/* Stats */}
            <div className="fu d7" style={{ display:'flex', gap:28, marginTop:40, paddingTop:28, borderTop:'1px solid var(--border-subtle)' }}>
              {[['7+','Years'],['30+','Projects'],['3','Continents']].map(([v,l]) => (
                <div key={l}>
                  <div style={{ fontFamily:'Sora,sans-serif', fontWeight:700, fontSize:'1.6rem', color:'var(--accent)', letterSpacing:'-0.03em', lineHeight:1 }}>{v}</div>
                  <div style={{ fontFamily:'JetBrains Mono,monospace', fontSize:10, color:'var(--text-3)', marginTop:4, letterSpacing:'0.08em', textTransform:'uppercase' }}>{l}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Photo (hidden mobile) */}
          <div className={`${styles.heroPhoto} fi d3`} style={{ display:'flex', justifyContent:'center', position:'relative' }}>
            {/* Glow ring — client only */}
            {mounted && (
              <div style={{ position:'absolute', inset:-24, borderRadius:'50%', background:`radial-gradient(circle,var(--accent-dim) 0%,transparent 70%)`, animation:'glow 4s ease-in-out infinite', pointerEvents:'none' }}/>
            )}

            {/* Corner brackets */}
            {[
              { top:-12, left:-12, borderTop:'2px solid var(--accent)', borderLeft:'2px solid var(--accent)', borderRadius:'4px 0 0 0' },
              { top:-12, right:-12, borderTop:'2px solid var(--accent)', borderRight:'2px solid var(--accent)', borderRadius:'0 4px 0 0' },
              { bottom:-12, left:-12, borderBottom:'2px solid var(--accent)', borderLeft:'2px solid var(--accent)', borderRadius:'0 0 0 4px' },
              { bottom:-12, right:-12, borderBottom:'2px solid var(--accent)', borderRight:'2px solid var(--accent)', borderRadius:'0 0 4px 0' },
            ].map((s,i) => <div key={i} style={{ position:'absolute', width:24, height:24, ...s }}/>)}

            {/* Photo */}
            <div style={{ position:'relative', width:340, height:420, borderRadius:20, overflow:'hidden', border:'1px solid var(--border)', boxShadow:'var(--shadow-lg), var(--shadow-glow)' }}>
              <Image
                src="/assets/rajaram-yadav-software-engineer.png"
                alt="Rajaram Yadav — Senior Software Engineer"
                fill className="object-cover object-center"
                priority sizes="(max-width:900px) 0px, 380px"
              />
              <div style={{ position:'absolute', bottom:0, left:0, right:0, height:130, background:'linear-gradient(to top,rgba(0,0,0,0.8),transparent)' }}/>
              <div style={{ position:'absolute', bottom:16, left:16, right:16, display:'flex', alignItems:'center', justifyContent:'space-between' }}>
                <div>
                  <div style={{ fontFamily:'Sora,sans-serif', fontWeight:700, fontSize:14, color:'#fff' }}>Rajaram Yadav</div>
                  <div style={{ fontFamily:'JetBrains Mono,monospace', fontSize:9, color:'var(--accent)', letterSpacing:'0.12em', marginTop:2 }}>SENIOR SOFTWARE ENGINEER</div>
                </div>
                <div style={{ width:8, height:8, borderRadius:'50%', background:'#3FB950', boxShadow:'0 0 8px #3FB950' }}/>
              </div>
            </div>

            {/* Floating badges — client only */}
            {mounted && (
              <>
                <div style={{ position:'absolute', top:32, right:-18, padding:'8px 14px', borderRadius:9, background:'var(--surface)', border:'1px solid var(--border)', boxShadow:'var(--shadow-md)', animation:'float 4s ease-in-out infinite', animationDelay:'0.5s', zIndex:5 }}>
                  <div style={{ fontFamily:'JetBrains Mono,monospace', fontSize:10, color:'var(--accent)' }}>☁ AWS · Kubernetes</div>
                </div>
                <div style={{ position:'absolute', bottom:60, left:-22, padding:'8px 14px', borderRadius:9, background:'var(--surface)', border:'1px solid var(--border)', boxShadow:'var(--shadow-md)', animation:'float 4s ease-in-out infinite', animationDelay:'1.3s', zIndex:5 }}>
                  <div style={{ fontFamily:'JetBrains Mono,monospace', fontSize:10, color:'var(--accent-2)' }}>⚡ Spring Boot · Java</div>
                </div>
              </>
            )}
          </div>
        </div>

        {/* Scroll indicator — client only */}
        {mounted && (
          <div className="fi d8" style={{ position:'absolute', bottom:32, left:'50%', transform:'translateX(-50%)', display:'flex', flexDirection:'column', alignItems:'center', gap:6 }}>
            <span style={{ fontFamily:'JetBrains Mono,monospace', fontSize:9, color:'var(--text-3)', letterSpacing:'0.2em', textTransform:'uppercase' }}>Scroll</span>
            <FiArrowDown size={13} style={{ color:'var(--text-3)', animation:'float 2s ease-in-out infinite' }}/>
          </div>
        )}
      </div>

    </section>
  );
}
