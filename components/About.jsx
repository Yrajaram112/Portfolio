import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import { HiAcademicCap, HiArrowRight } from 'react-icons/hi';

const EDU = [
  { short:'UMKC', name:'University of Missouri - Kansas City', deg:'M.S. Computer Science',    icon:'🎓' },
  { short:'VIT',  name:'Vellore Institute of Technology',      deg:'B.S. Computer Engineering', icon:'🏛' },
  { short:'SXC',  name:"St. Xavier's College, Maitighar",      deg:'High School',               icon:'📚' },
];

function useReveal(delay=0) {
  const ref = useRef(null);
  useEffect(()=>{
    const el=ref.current; if(!el) return;
    el.style.opacity=0; el.style.transform='translateY(28px)';
    el.style.transition=`opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`;
    const obs=new IntersectionObserver(([e])=>{if(e.isIntersecting){el.style.opacity=1;el.style.transform='none';obs.disconnect();}},{threshold:0.1});
    obs.observe(el); return()=>obs.disconnect();
  },[delay]);
  return ref;
}

export default function About({ theme }) {
  const isDark = theme === 'dark';
  const r1=useReveal(0); const r2=useReveal(100); const r3=useReveal(150);

  return (
    <section id="about" style={{ background:'var(--bg-alt)', padding:'112px 0' }}>
      <div style={{ maxWidth:1200, margin:'0 auto', padding:'0 24px' }}>

        <p className="s-label" style={{ marginBottom:16 }}>About</p>
        <h2 ref={r1} style={{ maxWidth:520, marginBottom:64, color:'var(--text-1)' }}>
          Engineering at the{' '}
          <span className="grad-text">intersection</span>
          {' '}of scale & simplicity.
        </h2>

        <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:64 }} className="about-grid">

          {/* Left */}
          <div ref={r2}>
            {/* Photo */}
            <div style={{ position:'relative', marginBottom:28 }}>
              <div style={{ position:'absolute', top:-10, left:-10, right:10, bottom:10, borderRadius:18, border:'1px solid var(--border)', pointerEvents:'none' }}/>
              <div style={{ borderRadius:16, overflow:'hidden', position:'relative', border:'1px solid var(--border)', boxShadow:'var(--shadow-lg)', aspectRatio:'4/3' }}>
                <Image src="/assets/contact-rajaram-yadav.jpg" alt="Rajaram Yadav Senior Software Engineer" fill className="object-cover object-top" sizes="(max-width:900px) 100vw, 50vw"/>
                <div style={{ position:'absolute', inset:0, background:'linear-gradient(to top, rgba(0,0,0,0.35) 0%, transparent 50%)' }}/>
              </div>
              {/* Dot grid deco */}
              <div style={{ position:'absolute', bottom:-14, right:-14, width:72, height:72, backgroundImage:'radial-gradient(var(--accent) 1.5px, transparent 1.5px)', backgroundSize:'10px 10px', opacity:0.4, pointerEvents:'none' }}/>
            </div>

            {/* Education */}
            <div style={{ background:'var(--surface)', border:'1px solid var(--border)', borderRadius:16, padding:20 }}>
              <div style={{ display:'flex', alignItems:'center', gap:8, marginBottom:16 }}>
                <HiAcademicCap size={16} style={{ color:'var(--accent)' }}/>
                <span style={{ fontFamily:'JetBrains Mono,monospace', fontSize:10, color:'var(--text-3)', letterSpacing:'0.14em', textTransform:'uppercase' }}>Education</span>
              </div>
              <ul style={{ listStyle:'none', display:'flex', flexDirection:'column', gap:14 }}>
                {EDU.map(({ short, name, deg, icon }) => (
                  <li key={short} style={{ display:'flex', gap:12, alignItems:'flex-start' }}>
                    <div style={{ width:36, height:36, borderRadius:8, flexShrink:0, background:'var(--bg-alt)', border:'1px solid var(--border)', display:'flex', alignItems:'center', justifyContent:'center', fontSize:14 }}>{icon}</div>
                    <div>
                      <p style={{ fontFamily:'DM Sans,sans-serif', fontWeight:600, fontSize:13, color:'var(--text-1)', margin:0, lineHeight:1.3 }}>{name}</p>
                      <p style={{ fontFamily:'JetBrains Mono,monospace', fontSize:10, color:'var(--text-3)', margin:'3px 0 0', letterSpacing:'0.04em' }}>{deg}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right */}
          <div ref={r3}>
            {/* Terminal */}
            <div className="term" style={{ marginBottom:28, borderRadius:14 }}>
              <div style={{ display:'flex', gap:6, marginBottom:12 }}>
                {['#F85149','#D29922','#3FB950'].map(c => <span key={c} style={{ width:10,height:10,borderRadius:'50%',background:c,display:'inline-block' }}/>)}
              </div>
              <div><span className="p">$ </span><span className="c">whoami</span></div>
              <div className="o">rajaram-yadav</div>
              <div style={{marginTop:6}}><span className="p">$ </span><span className="c">cat stack.txt</span></div>
              <div className="o">7+ yrs · Java · Spring Boot · React · AWS</div>
              <div className="o">Enterprise · Fintech · EdTech · SaaS</div>
              <div style={{marginTop:6}}><span className="p">$ </span><span className="c">echo $STATUS</span></div>
              <div style={{ color:'var(--success)', fontFamily:'JetBrains Mono,monospace', fontSize:'0.82rem' }}>Available for senior roles & consulting ✓</div>
            </div>

            {[
              "I'm Rajaram Yadav — a Senior Software Engineer with 7+ years designing and shipping production-grade systems across fintech, ed-tech, and enterprise domains.",
              "I specialize in Java and Spring Boot microservices, event-driven architectures (Kafka, RabbitMQ), and modern full-stack apps with React and Next.js. I've led cloud migrations on AWS, designed distributed systems at scale, and mentored engineering teams.",
              "Beyond code, I run DreamBig — an education platform — and share engineering content on YouTube at @coderestart.",
            ].map((p,i)=>(
              <p key={i} style={{ fontSize:'0.97rem', color:'var(--text-2)', lineHeight:1.82, marginBottom:14 }}>{p}</p>
            ))}

            {/* Stats */}
            <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:12, borderTop:'1px solid var(--border)', borderBottom:'1px solid var(--border)', padding:'20px 0', margin:'20px 0' }}>
              {[['7+','Years'],['30+','Projects'],['3','Continents']].map(([n,l])=>(
                <div key={l} style={{ textAlign:'center' }}>
                  <div style={{ fontFamily:'Sora,sans-serif', fontWeight:700, fontSize:'1.8rem', color:'var(--accent)', letterSpacing:'-0.03em' }}>{n}</div>
                  <div style={{ fontFamily:'JetBrains Mono,monospace', fontSize:10, color:'var(--text-3)', marginTop:4, letterSpacing:'0.08em', textTransform:'uppercase' }}>{l}</div>
                </div>
              ))}
            </div>

            <Link href="/#projects" style={{ display:'inline-flex', alignItems:'center', gap:8, fontFamily:'DM Sans,sans-serif', fontWeight:600, fontSize:13, color:'var(--accent)', textDecoration:'none', transition:'gap 0.2s' }}
            onMouseEnter={e=>e.currentTarget.style.gap='14px'}
            onMouseLeave={e=>e.currentTarget.style.gap='8px'}
            >See selected projects <HiArrowRight size={15}/></Link>
          </div>
        </div>
      </div>
      <style>{`@media(max-width:900px){.about-grid{grid-template-columns:1fr!important;}}`}</style>
    </section>
  );
}
