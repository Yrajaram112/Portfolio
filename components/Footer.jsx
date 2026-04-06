import Link from 'next/link';
import { FaGithub, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import { FiFileText, FiArrowUp, FiMail } from 'react-icons/fi';
import { SiLeetcode } from 'react-icons/si';

export default function Footer({ theme }) {
  const isDark = theme === 'dark';

  return (
    <footer style={{ background: isDark ? '#080C10' : '#E8EDF2', borderTop:'1px solid var(--border)', padding:'48px 0 28px' }}>
      <div style={{ maxWidth:1200, margin:'0 auto', padding:'0 24px' }}>

        <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr 1fr', gap:32, marginBottom:40 }} className="f-grid">

          {/* Brand */}
          <div>
            <div style={{ display:'flex', alignItems:'center', gap:10, marginBottom:12 }}>
              <div style={{ width:32, height:32, borderRadius:8, background:'var(--grad)', display:'flex', alignItems:'center', justifyContent:'center' }}>
                <svg width="17" height="17" viewBox="0 0 20 20" fill="none">
                  <path d="M4 16L4 4L10.5 4Q15 4 15 8Q15 10.5 12 11.5L16 16" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M4 10.5L11.5 10.5" stroke="#fff" strokeWidth="1.8" strokeLinecap="round"/>
                </svg>
              </div>
              <div>
                <div style={{ fontFamily:'Sora,sans-serif', fontWeight:700, fontSize:14, color:'var(--text-1)' }}>Rajaram Yadav</div>
                <div style={{ fontFamily:'JetBrains Mono,monospace', fontSize:9, color:'var(--accent)', letterSpacing:'0.14em' }}>SENIOR SOFTWARE ENGINEER</div>
              </div>
            </div>
            <p style={{ fontFamily:'DM Sans,sans-serif', fontSize:13, color:'var(--text-3)', lineHeight:1.7, maxWidth:240 }}>
              Building scalable systems with Java, Spring Boot, React, and AWS. Open to senior engineering roles.
            </p>
            <div style={{ display:'flex', gap:8, marginTop:14, flexWrap:'wrap' }}>
              {[
                { icon:<FaLinkedinIn size={13}/>, href:'https://www.linkedin.com/in/yadavrajaram', label:'LinkedIn' },
                { icon:<FaGithub     size={13}/>, href:'https://github.com/Yrajaram112',           label:'GitHub' },
                { icon:<FaYoutube    size={13}/>, href:'https://www.youtube.com/@coderestart',     label:'YouTube' },
                { icon:<SiLeetcode  size={12}/>, href:'https://leetcode.com/rajaramyadav',         label:'LeetCode' },
              ].map(({icon,href,label})=>(
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} title={label}
                   style={{ width:30, height:30, borderRadius:6, display:'flex', alignItems:'center', justifyContent:'center', background:'var(--surface)', border:'1px solid var(--border)', color:'var(--text-3)', textDecoration:'none', transition:'all 0.2s' }}
                   onMouseEnter={e=>{ e.currentTarget.style.borderColor='var(--accent)'; e.currentTarget.style.color='var(--accent)'; }}
                   onMouseLeave={e=>{ e.currentTarget.style.borderColor='var(--border)'; e.currentTarget.style.color='var(--text-3)'; }}
                >{icon}</a>
              ))}
            </div>
          </div>

          {/* Nav */}
          <div>
            <p style={{ fontFamily:'JetBrains Mono,monospace', fontSize:10, color:'var(--text-3)', letterSpacing:'0.14em', textTransform:'uppercase', marginBottom:14 }}>Navigation</p>
            <ul style={{ listStyle:'none', display:'flex', flexDirection:'column', gap:10 }}>
              {[['About','/#about'],['Skills','/#skills'],['Projects','/#projects'],['Contact','/#contact'],['Resume','/resume'],['Blog','/blogs']].map(([l,h])=>(
                <li key={l}>
                  <Link href={h} style={{ fontFamily:'DM Sans,sans-serif', fontSize:13, color:'var(--text-3)', textDecoration:'none', transition:'color 0.2s' }}
                  onMouseEnter={e=>e.target.style.color='var(--accent)'}
                  onMouseLeave={e=>e.target.style.color='var(--text-3)'}
                  >{l}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <p style={{ fontFamily:'JetBrains Mono,monospace', fontSize:10, color:'var(--text-3)', letterSpacing:'0.14em', textTransform:'uppercase', marginBottom:14 }}>Connect</p>
            <div style={{ display:'flex', flexDirection:'column', gap:10, marginBottom:18 }}>
              {[
                { icon:<FiMail size={13}/>,       href:'mailto:rajaramyadavcse@gmail.com',      label:'rajaramyadavcse@gmail.com' },
                { icon:<FaLinkedinIn size={12}/>, href:'https://www.linkedin.com/in/yadavrajaram', label:'linkedin.com/in/yadavrajaram' },
                { icon:<FaYoutube size={13}/>,    href:'https://www.youtube.com/@coderestart',  label:'youtube.com/@coderestart' },
                { icon:<SiLeetcode size={12}/>,   href:'https://leetcode.com/rajaramyadav',     label:'leetcode.com/rajaramyadav' },
              ].map(({icon,href,label})=>(
                <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                   style={{ display:'flex', alignItems:'center', gap:8, fontFamily:'DM Sans,sans-serif', fontSize:12, color:'var(--text-3)', textDecoration:'none', transition:'color 0.2s' }}
                   onMouseEnter={e=>e.currentTarget.style.color='var(--accent)'}
                   onMouseLeave={e=>e.currentTarget.style.color='var(--text-3)'}
                >{icon} {label}</a>
              ))}
            </div>
            <Link href="/resume" style={{ display:'inline-flex', alignItems:'center', gap:6, padding:'8px 16px', background:'var(--accent-dim)', border:'1px solid var(--accent)', borderRadius:7, fontFamily:'DM Sans,sans-serif', fontSize:12, fontWeight:700, color:'var(--accent)', textDecoration:'none', letterSpacing:'0.06em', textTransform:'uppercase', transition:'all 0.22s' }}
            onMouseEnter={e=>e.currentTarget.style.background='var(--accent-dim)'}
            onMouseLeave={e=>e.currentTarget.style.background='var(--accent-dim)'}
            ><FiFileText size={13}/> Resume</Link>
          </div>
        </div>

        <div style={{ height:1, background:'var(--border)', marginBottom:20 }}/>

        <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', flexWrap:'wrap', gap:12 }}>
          <div>
            <p style={{ fontFamily:'JetBrains Mono,monospace', fontSize:11, color:'var(--text-3)' }}>
              © {new Date().getFullYear()} Rajaram Yadav · Built with Next.js & Tailwind CSS
            </p>
            {/* DreamBig — subtle */}
            <p style={{ fontFamily:'JetBrains Mono,monospace', fontSize:10, color:'var(--border)', marginTop:3 }}>
              Also building{' '}
              <a href="https://www.dreambig.com.np" target="_blank" rel="noopener noreferrer"
                 style={{ color:'var(--text-3)', textDecoration:'none', transition:'color 0.2s' }}
                 onMouseEnter={e=>e.target.style.color='var(--accent)'}
                 onMouseLeave={e=>e.target.style.color='var(--text-3)'}
              >dreambig.com.np</a>
            </p>
          </div>
          <button onClick={()=>window.scrollTo({top:0,behavior:'smooth'})}
            style={{ display:'flex', alignItems:'center', gap:6, background:'none', border:'1px solid var(--border)', borderRadius:6, padding:'6px 12px', cursor:'pointer', fontFamily:'JetBrains Mono,monospace', fontSize:10, color:'var(--text-3)', letterSpacing:'0.1em', textTransform:'uppercase', transition:'all 0.22s' }}
            onMouseEnter={e=>{ e.currentTarget.style.borderColor='var(--accent)'; e.currentTarget.style.color='var(--accent)'; }}
            onMouseLeave={e=>{ e.currentTarget.style.borderColor='var(--border)'; e.currentTarget.style.color='var(--text-3)'; }}
          ><FiArrowUp size={12}/> Top</button>
        </div>
      </div>
      <style>{`@media(max-width:768px){.f-grid{grid-template-columns:1fr!important;}}`}</style>
    </footer>
  );
}
