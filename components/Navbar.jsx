import Link from 'next/link';
import { useState, useEffect } from 'react';
import { FiMenu, FiX, FiFileText, FiSun, FiMoon } from 'react-icons/fi';

const NAV = [
  { label:'About',    href:'/#about' },
  { label:'Skills',   href:'/#skills' },
  { label:'Projects', href:'/#projects' },
  { label:'Contact',  href:'/#contact' },
];

export default function Navbar({ theme, toggleTheme, mounted }) {
  const [scrolled,   setScrolled]   = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active,     setActive]     = useState('');
  const isDark = theme === 'dark';

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
      let cur = '';
      for (const id of ['about','skills','projects','contact']) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) cur = id;
      }
      setActive(cur);
    };
    window.addEventListener('scroll', onScroll, { passive:true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <>
      <header style={{
        position:'fixed', top:0, left:0, right:0, zIndex:100,
        transition:'all 0.35s ease',
        padding: scrolled ? '10px 0' : '20px 0',
        background: scrolled
          ? isDark ? 'rgba(13,17,23,0.92)' : 'rgba(240,244,248,0.92)'
          : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--border-subtle)' : 'none',
      }}>
        <nav style={{ maxWidth:1200, margin:'0 auto', padding:'0 24px', display:'flex', alignItems:'center', justifyContent:'space-between' }}>

          {/* Logo */}
          <Link href="/" style={{ display:'flex', alignItems:'center', gap:10, textDecoration:'none' }}>
            <div style={{ width:36, height:36, borderRadius:9, background:'var(--grad)', display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0 }}>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M4 16L4 4L10.5 4Q15 4 15 8Q15 10.5 12 11.5L16 16" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M4 10.5L11.5 10.5" stroke="#fff" strokeWidth="1.8" strokeLinecap="round"/>
              </svg>
            </div>
            <div>
              <div style={{ fontFamily:'Sora,sans-serif', fontWeight:700, fontSize:14, color:'var(--text-1)', letterSpacing:'-0.01em' }}>Rajaram Yadav</div>
              <div style={{ fontFamily:'JetBrains Mono,monospace', fontSize:9, color:'var(--accent)', letterSpacing:'0.15em', textTransform:'uppercase' }}>Senior Software Engineer</div>
            </div>
          </Link>

          {/* Desktop nav */}
          <ul style={{ display:'flex', gap:32, listStyle:'none', alignItems:'center' }} className="desk-nav">
            {NAV.map(({ label, href }) => {
              const isA = active === href.replace('/#','');
              return (
                <li key={label}>
                  <Link href={href} style={{
                    fontFamily:'DM Sans,sans-serif', fontSize:13, fontWeight:500,
                    letterSpacing:'0.05em', textTransform:'uppercase',
                    color: isA ? 'var(--accent)' : 'var(--text-2)',
                    textDecoration:'none', transition:'color 0.2s',
                    position:'relative', paddingBottom:4,
                  }}
                  onMouseEnter={e => e.target.style.color='var(--accent)'}
                  onMouseLeave={e => e.target.style.color = isA ? 'var(--accent)' : 'var(--text-2)'}
                  >
                    {label}
                    <span style={{
                      position:'absolute', bottom:0, left:0, right:0, height:1,
                      background:'var(--accent)', borderRadius:1,
                      transform: isA ? 'scaleX(1)' : 'scaleX(0)',
                      transition:'transform 0.25s var(--ease)',
                      transformOrigin:'left',
                    }}/>
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Actions */}
          <div style={{ display:'flex', alignItems:'center', gap:8 }}>
            {/* Theme toggle — only after mount to avoid hydration mismatch */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              suppressHydrationWarning
              style={{
                width:36, height:36, borderRadius:8,
                border:'1px solid var(--border)', background:'var(--surface)',
                color:'var(--text-2)', cursor:'pointer',
                display:'flex', alignItems:'center', justifyContent:'center',
                transition:'all 0.25s',
                opacity: mounted ? 1 : 0, // hide until mounted to avoid flicker
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor='var(--accent)'; e.currentTarget.style.color='var(--accent)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor='var(--border)'; e.currentTarget.style.color='var(--text-2)'; }}
            >
              {/* Always render both, show correct one after mount */}
              {!mounted || isDark ? <FiSun size={15}/> : <FiMoon size={15}/>}
            </button>

            <Link href="/resume" className="desk-nav" style={{
              display:'inline-flex', alignItems:'center', gap:6,
              padding:'8px 16px', border:'1px solid var(--border)', borderRadius:7,
              fontFamily:'DM Sans,sans-serif', fontSize:12, fontWeight:700,
              letterSpacing:'0.07em', textTransform:'uppercase',
              color:'var(--accent)', textDecoration:'none',
              transition:'all 0.25s',
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor='var(--accent)'; e.currentTarget.style.background='var(--accent-dim)'; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor='var(--border)'; e.currentTarget.style.background='transparent'; }}
            >
              <FiFileText size={13}/> Resume
            </Link>

            <button onClick={() => setMobileOpen(!mobileOpen)} aria-label="Menu"
              className="mob-btn"
              style={{ width:36, height:36, borderRadius:8, border:'1px solid var(--border)', background:'var(--surface)', color:'var(--text-2)', cursor:'pointer', display:'none', alignItems:'center', justifyContent:'center' }}
            >
              {mobileOpen ? <FiX size={18}/> : <FiMenu size={18}/>}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div onClick={() => setMobileOpen(false)} style={{ position:'fixed', inset:0, zIndex:98, background:'rgba(0,0,0,0.5)', backdropFilter:'blur(4px)' }}/>
      )}

      {/* Mobile drawer */}
      <div style={{
        position:'fixed', top:0, right:0, bottom:0, zIndex:99, width:280,
        background:'var(--surface)', borderLeft:'1px solid var(--border)',
        transform: mobileOpen ? 'translateX(0)' : 'translateX(100%)',
        transition:'transform 0.35s var(--ease)',
        display:'flex', flexDirection:'column', padding:28,
      }}>
        <div style={{ display:'flex', justifyContent:'flex-end', marginBottom:40 }}>
          <button onClick={() => setMobileOpen(false)} style={{ background:'none', border:'none', color:'var(--text-3)', cursor:'pointer' }}>
            <FiX size={22}/>
          </button>
        </div>
        <ul style={{ listStyle:'none', flex:1, display:'flex', flexDirection:'column', gap:28 }}>
          {NAV.map(({ label, href }) => (
            <li key={label}>
              <Link href={href} onClick={() => setMobileOpen(false)} style={{ fontFamily:'Sora,sans-serif', fontSize:22, fontWeight:700, color:'var(--text-1)', textDecoration:'none', transition:'color 0.2s' }}
              onMouseEnter={e => e.currentTarget.style.color='var(--accent)'}
              onMouseLeave={e => e.currentTarget.style.color='var(--text-1)'}
              >{label}</Link>
            </li>
          ))}
        </ul>
        <button onClick={toggleTheme} style={{ display:'flex', alignItems:'center', gap:10, background:'none', border:'1px solid var(--border)', borderRadius:8, padding:'10px 14px', cursor:'pointer', color:'var(--text-2)', marginBottom:12, fontFamily:'DM Sans,sans-serif', fontSize:13, fontWeight:500 }} suppressHydrationWarning>
          {isDark ? <><FiSun size={15}/> Light mode</> : <><FiMoon size={15}/> Dark mode</>}
        </button>
        <Link href="/resume" onClick={() => setMobileOpen(false)} style={{ display:'flex', alignItems:'center', justifyContent:'center', gap:8, padding:'13px 0', background:'var(--accent)', borderRadius:7, fontFamily:'DM Sans,sans-serif', fontSize:13, fontWeight:700, letterSpacing:'0.06em', textTransform:'uppercase', color: isDark?'#0D1117':'#fff', textDecoration:'none' }}>
          <FiFileText size={14}/> View Resume
        </Link>
      </div>

      <style>{`
        @media(min-width:769px){ .mob-btn{display:none!important;} }
        @media(max-width:768px){ .desk-nav{display:none!important;} .mob-btn{display:flex!important;} }
      `}</style>
    </>
  );
}
