import { useState, useRef, useEffect } from 'react';
import { FaLinkedinIn, FaGithub, FaYoutube } from 'react-icons/fa';
import { FiMail, FiSend, FiCheck, FiAlertCircle } from 'react-icons/fi';
import { SiLeetcode } from 'react-icons/si';

const TYPES = ['Full-Stack Web Application','Backend / API Development','Cloud Architecture & Migration','System Design Consultation','Code Review & Technical Audit','Open to Senior Engineering Roles','Other'];
const INIT  = { name:'', email:'', projectType:'', message:'' };

const SOCIALS = [
  { icon:<FiMail size={15}/>,       label:'Email',    val:'rajaramyadavcse@gmail.com',      href:'mailto:rajaramyadavcse@gmail.com' },
  { icon:<FaLinkedinIn size={14}/>, label:'LinkedIn', val:'linkedin.com/in/yadavrajaram',   href:'https://www.linkedin.com/in/yadavrajaram' },
  { icon:<FaGithub size={15}/>,     label:'GitHub',   val:'github.com/Yrajaram112',         href:'https://github.com/Yrajaram112' },
  { icon:<FaYoutube size={15}/>,    label:'YouTube',  val:'youtube.com/@coderestart',       href:'https://www.youtube.com/@coderestart' },
  { icon:<SiLeetcode size={13}/>,   label:'LeetCode', val:'leetcode.com/rajaramyadav',      href:'https://leetcode.com/rajaramyadav' },
];

function useReveal() {
  const ref = useRef(null);
  useEffect(()=>{
    const el=ref.current; if(!el) return;
    el.style.opacity=0; el.style.transform='translateY(24px)';
    el.style.transition='opacity 0.7s ease, transform 0.7s ease';
    const obs=new IntersectionObserver(([e])=>{if(e.isIntersecting){el.style.opacity=1;el.style.transform='none';obs.disconnect();}},{threshold:0.1});
    obs.observe(el); return()=>obs.disconnect();
  },[]);
  return ref;
}

export default function Contact({ theme }) {
  const isDark = theme === 'dark';
  const [form, setForm]   = useState(INIT);
  const [errs, setErrs]   = useState({});
  const [stat, setStat]   = useState('idle');
  const hdr = useReveal();

  const validate = () => {
    const e = {};
    if (!form.name.trim() || form.name.trim().length<2) e.name='Please enter your name.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email='Please enter a valid email.';
    if (!form.message.trim() || form.message.trim().length<20) e.message='Message must be at least 20 characters.';
    return e;
  };

  const submit = async e => {
    e.preventDefault();
    const ev = validate();
    if (Object.keys(ev).length) { setErrs(ev); return; }
    setStat('loading');
    try {
      const r = await fetch('/api/contact', { method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify(form) });
      setStat(r.ok ? 'success' : 'error');
      if (r.ok) { setForm(INIT); setTimeout(()=>setStat('idle'),6000); }
    } catch { setStat('error'); }
  };

  const bind = f => ({
    value: form[f],
    onChange: e => { setForm(p=>({...p,[f]:e.target.value})); if(errs[f]) setErrs(p=>({...p,[f]:undefined})); },
  });

  const ifocus = e => { e.target.style.borderColor='var(--accent)'; e.target.style.boxShadow='0 0 0 3px var(--accent-dim)'; };
  const iblur  = (e, hasErr) => { e.target.style.borderColor=hasErr?'var(--danger)':'var(--border)'; e.target.style.boxShadow='none'; };

  return (
    <section id="contact" style={{ background:'var(--bg)', padding:'112px 0' }}>
      <div style={{ maxWidth:1200, margin:'0 auto', padding:'0 24px' }}>

        <p className="s-label" style={{ marginBottom:16 }}>Contact</p>
        <div ref={hdr} style={{ display:'flex', flexWrap:'wrap', alignItems:'flex-end', justifyContent:'space-between', gap:16, marginBottom:56 }}>
          <h2 style={{ maxWidth:440, margin:0, color:'var(--text-1)' }}>
            Let's build something <span className="grad-text">remarkable</span>.
          </h2>
          <p style={{ fontFamily:'JetBrains Mono,monospace', fontSize:11, color:'var(--text-3)' }}>// open to senior roles &amp; consulting</p>
        </div>

        <div style={{ display:'grid', gridTemplateColumns:'2fr 3fr', gap:24 }} className="c-grid">

          {/* Left */}
          <div style={{ display:'flex', flexDirection:'column', gap:14 }}>
            <div style={{ background:'var(--surface)', border:'1px solid var(--border)', borderRadius:16, padding:20 }}>
              <p style={{ fontFamily:'JetBrains Mono,monospace', fontSize:10, color:'var(--text-3)', letterSpacing:'0.14em', textTransform:'uppercase', marginBottom:14 }}>// direct channels</p>
              <div style={{ display:'flex', flexDirection:'column', gap:9 }}>
                {SOCIALS.map(({ icon, label, val, href }) => (
                  <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                     style={{ display:'flex', alignItems:'center', gap:11, padding:'9px 11px', borderRadius:9, background:'var(--bg-alt)', border:'1px solid var(--border-subtle)', textDecoration:'none', transition:'all 0.22s' }}
                     onMouseEnter={e=>{ e.currentTarget.style.borderColor='var(--accent)'; e.currentTarget.style.transform='translateX(4px)'; }}
                     onMouseLeave={e=>{ e.currentTarget.style.borderColor='var(--border-subtle)'; e.currentTarget.style.transform='none'; }}
                  >
                    <div style={{ width:30, height:30, borderRadius:7, flexShrink:0, background:'var(--accent-dim)', border:'1px solid var(--accent-dim)', display:'flex', alignItems:'center', justifyContent:'center', color:'var(--accent)' }}>{icon}</div>
                    <div>
                      <div style={{ fontFamily:'JetBrains Mono,monospace', fontSize:9, color:'var(--text-3)', letterSpacing:'0.1em', textTransform:'uppercase' }}>{label}</div>
                      <div style={{ fontFamily:'DM Sans,sans-serif', fontSize:12, color:'var(--text-1)', marginTop:1 }}>{val}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Status */}
            <div style={{ background:'rgba(63,185,80,0.07)', border:'1px solid rgba(63,185,80,0.22)', borderRadius:12, padding:'13px 16px', display:'flex', alignItems:'center', gap:10 }}>
              <span style={{ width:8, height:8, borderRadius:'50%', background:'var(--success)', boxShadow:`0 0 8px var(--success)`, flexShrink:0, animation:'blink 2s infinite' }}/>
              <div>
                <div style={{ fontFamily:'DM Sans,sans-serif', fontWeight:600, fontSize:13, color:'var(--success)' }}>Available Now</div>
                <div style={{ fontFamily:'JetBrains Mono,monospace', fontSize:10, color:'var(--text-3)', marginTop:2 }}>Responding within 24 hours</div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div style={{ background:'var(--surface)', border:'1px solid var(--border)', borderRadius:18, padding:28 }}>
            {stat==='success' ? (
              <div style={{ display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', minHeight:340, gap:16, textAlign:'center' }}>
                <div style={{ width:56, height:56, borderRadius:'50%', background:'rgba(63,185,80,0.12)', border:'1px solid rgba(63,185,80,0.3)', display:'flex', alignItems:'center', justifyContent:'center' }}>
                  <FiCheck size={24} style={{ color:'var(--success)' }}/>
                </div>
                <h3 style={{ color:'var(--text-1)' }}>Message sent!</h3>
                <p style={{ color:'var(--text-3)', fontSize:14 }}>Thanks for reaching out. I'll reply within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={submit} noValidate style={{ display:'flex', flexDirection:'column', gap:15 }}>
                <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:13 }}>
                  {[['name','Name *','Your name','text'],['email','Email *','you@company.com','email']].map(([f,lbl,ph,t])=>(
                    <div key={f}>
                      <label style={{ fontFamily:'JetBrains Mono,monospace', fontSize:10, color:'var(--text-3)', letterSpacing:'0.12em', textTransform:'uppercase', display:'block', marginBottom:6 }}>{lbl}</label>
                      <input type={t} placeholder={ph} {...bind(f)} className="inp"
                             style={{ borderColor: errs[f]?'var(--danger)':'var(--border)' }}
                             onFocus={ifocus} onBlur={e=>iblur(e,!!errs[f])}/>
                      {errs[f] && <p style={{ color:'var(--danger)', fontSize:11, marginTop:4, fontFamily:'JetBrains Mono,monospace' }}>⚠ {errs[f]}</p>}
                    </div>
                  ))}
                </div>
                <div>
                  <label style={{ fontFamily:'JetBrains Mono,monospace', fontSize:10, color:'var(--text-3)', letterSpacing:'0.12em', textTransform:'uppercase', display:'block', marginBottom:6 }}>Project Type</label>
                  <select {...bind('projectType')} className="inp" style={{ cursor:'pointer' }} onFocus={ifocus} onBlur={e=>iblur(e,false)}>
                    <option value="">Select (optional)</option>
                    {TYPES.map(t=><option key={t} value={t}>{t}</option>)}
                  </select>
                </div>
                <div>
                  <label style={{ fontFamily:'JetBrains Mono,monospace', fontSize:10, color:'var(--text-3)', letterSpacing:'0.12em', textTransform:'uppercase', display:'block', marginBottom:6 }}>Message *</label>
                  <textarea rows={5} placeholder="Tell me about the project, challenge, or role…" {...bind('message')} className="inp"
                            style={{ resize:'none', borderColor:errs.message?'var(--danger)':'var(--border)' }}
                            onFocus={ifocus} onBlur={e=>iblur(e,!!errs.message)}/>
                  {errs.message && <p style={{ color:'var(--danger)', fontSize:11, marginTop:4, fontFamily:'JetBrains Mono,monospace' }}>⚠ {errs.message}</p>}
                </div>
                {stat==='error' && (
                  <div style={{ display:'flex', alignItems:'center', gap:8, padding:'10px 14px', borderRadius:8, background:'rgba(220,38,38,0.08)', border:'1px solid rgba(220,38,38,0.25)', color:'var(--danger)', fontSize:13 }}>
                    <FiAlertCircle size={15}/> Something went wrong. Email me directly.
                  </div>
                )}
                <button type="submit" disabled={stat==='loading'} className="btn btn-solid"
                  style={{ width:'100%', justifyContent:'center', padding:'13px 0', opacity:stat==='loading'?0.7:1, cursor:stat==='loading'?'not-allowed':'pointer' }}>
                  {stat==='loading' ? 'Sending…' : <><FiSend size={14}/> Send Message</>}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
      <style>{`@keyframes blink{0%,100%{opacity:1}50%{opacity:0}} @media(max-width:900px){.c-grid{grid-template-columns:1fr!important;}}`}</style>
    </section>
  );
}
