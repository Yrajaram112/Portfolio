'use client';

import Link from 'next/link';
import PageShell from '@/components/PageShell';
import { FiDownload, FiArrowLeft, FiFileText, FiExternalLink } from 'react-icons/fi';
import { FaLinkedinIn, FaGithub, FaYoutube } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

const PDF_PATH = '/resume.pdf';

const SKILLS = [
  'Java', 'Spring Boot', 'React', 'Next.js',
  'AWS', 'Kubernetes', 'Docker', 'PostgreSQL',
  'Kafka', 'Microservices', 'System Design', 'Python',
];

const INFO_CARDS = [
  { label: 'Experience', value: '7+ Years'               },
  { label: 'Location',   value: 'United States'          },
  { label: 'Email',      value: 'rajaramyadavcse@gmail.com' },
  { label: 'Status',     value: 'Available ✓', green: true },
];

const LINKS = [
  { icon: <FaLinkedinIn size={13} />, label: 'LinkedIn', href: 'https://www.linkedin.com/in/yadavrajaram' },
  { icon: <FaGithub     size={13} />, label: 'GitHub',   href: 'https://github.com/Yrajaram112' },
  { icon: <FaYoutube    size={13} />, label: 'YouTube',  href: 'https://www.youtube.com/@coderestart' },
  { icon: <SiLeetcode   size={12} />, label: 'LeetCode', href: 'https://leetcode.com/rajaramyadav' },
];

export default function ResumeClient() {
  return (
    <PageShell>
      {({ theme }) => (
        <main style={{ minHeight: '100vh', background: 'var(--bg)', paddingTop: 88, paddingBottom: 64 }}>
          <div style={{ maxWidth: 1100, margin: '0 auto', padding: '40px 24px 0' }}>

            {/* Back */}
            <Link href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontFamily: 'JetBrains Mono,monospace', fontSize: 11, color: 'var(--text-3)', textDecoration: 'none', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 32, transition: 'color 0.2s' }}
              onMouseEnter={e => e.currentTarget.style.color = 'var(--accent)'}
              onMouseLeave={e => e.currentTarget.style.color = 'var(--text-3)'}
            ><FiArrowLeft size={14} /> Back to portfolio</Link>

            {/* Hero card */}
            <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 20, padding: '28px 32px', marginBottom: 20, display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 20, boxShadow: 'var(--shadow-sm)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
                <div style={{ width: 56, height: 56, borderRadius: 14, background: 'var(--accent-dim)', border: '1px solid var(--accent)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <FiFileText size={24} style={{ color: 'var(--accent)' }} />
                </div>
                <div>
                  <h1 style={{ fontFamily: 'Sora,sans-serif', fontWeight: 700, fontSize: '1.4rem', color: 'var(--text-1)', letterSpacing: '-0.02em', margin: 0 }}>
                    Rajaram Yadav
                  </h1>
                  <p style={{ fontFamily: 'JetBrains Mono,monospace', fontSize: 11, color: 'var(--accent)', margin: '4px 0 0', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                    Senior Software Engineer · 7+ Years
                  </p>
                  <p style={{ fontFamily: 'DM Sans,sans-serif', fontSize: 12, color: 'var(--text-3)', margin: '4px 0 0' }}>
                    Java · Spring Boot · React · AWS · Kubernetes · System Design
                  </p>
                </div>
              </div>
              <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
                <a href={PDF_PATH} download="Rajaram_Yadav_Resume.pdf" className="btn btn-solid" style={{ fontSize: 12 }}>
                  <FiDownload size={13} /> Download PDF
                </a>
                <a href={PDF_PATH} target="_blank" rel="noopener noreferrer" className="btn btn-ghost" style={{ fontSize: 12 }}>
                  <FiExternalLink size={13} /> Open in new tab
                </a>
              </div>
            </div>

            {/* Info strip */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 12, marginBottom: 20 }} className="info-grid">
              {INFO_CARDS.map(({ label, value, green }) => (
                <div key={label} style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 12, padding: '14px 16px', boxShadow: 'var(--shadow-sm)' }}>
                  <div style={{ fontFamily: 'JetBrains Mono,monospace', fontSize: 9, color: 'var(--text-3)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 5 }}>{label}</div>
                  <div style={{ fontFamily: 'DM Sans,sans-serif', fontWeight: 600, fontSize: 13, color: green ? 'var(--success)' : 'var(--text-1)', display: 'flex', alignItems: 'center', gap: 5 }}>
                    {green && <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--success)', boxShadow: '0 0 6px var(--success)', display: 'inline-block' }} />}
                    {value}
                  </div>
                </div>
              ))}
            </div>

            {/* Skills preview */}
            <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 14, padding: '16px 20px', marginBottom: 20, display: 'flex', alignItems: 'center', gap: 14, flexWrap: 'wrap', boxShadow: 'var(--shadow-sm)' }}>
              <span style={{ fontFamily: 'JetBrains Mono,monospace', fontSize: 9, color: 'var(--text-3)', letterSpacing: '0.14em', textTransform: 'uppercase', flexShrink: 0 }}>Tech Stack</span>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7 }}>
                {SKILLS.map(s => (
                  <span key={s} className="tag" style={{ fontSize: 10 }}>{s}</span>
                ))}
              </div>
            </div>

            {/* PDF iframe — desktop */}
            <div className="pdf-desktop" style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 16, overflow: 'hidden', height: '80vh', boxShadow: 'var(--shadow-md)' }}>
              <iframe src={PDF_PATH} title="Rajaram Yadav Resume" style={{ width: '100%', height: '100%', border: 'none', display: 'block' }} />
            </div>

            {/* Mobile fallback */}
            <div className="pdf-mobile" style={{ display: 'none', textAlign: 'center', padding: '52px 24px', background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 16, boxShadow: 'var(--shadow-sm)' }}>
              <FiFileText size={42} style={{ color: 'var(--border)', marginBottom: 16 }} />
              <p style={{ fontFamily: 'DM Sans,sans-serif', fontSize: 14, color: 'var(--text-3)', marginBottom: 20 }}>Tap below to download the resume PDF.</p>
              <a href={PDF_PATH} download="Rajaram_Yadav_Resume.pdf" className="btn btn-solid" style={{ fontSize: 13 }}>
                <FiDownload size={15} /> Download PDF
              </a>
            </div>

            {/* Social links */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 18, marginTop: 24, flexWrap: 'wrap' }}>
              {LINKS.map(({ icon, label, href }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                  style={{ display: 'flex', alignItems: 'center', gap: 7, fontFamily: 'DM Sans,sans-serif', fontSize: 13, color: 'var(--text-3)', textDecoration: 'none', transition: 'color 0.2s' }}
                  onMouseEnter={e => e.currentTarget.style.color = 'var(--accent)'}
                  onMouseLeave={e => e.currentTarget.style.color = 'var(--text-3)'}
                >{icon} {label}</a>
              ))}
              <Link href="/"
                style={{ display: 'flex', alignItems: 'center', gap: 7, fontFamily: 'DM Sans,sans-serif', fontSize: 13, color: 'var(--text-3)', textDecoration: 'none', transition: 'color 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.color = 'var(--accent)'}
                onMouseLeave={e => e.currentTarget.style.color = 'var(--text-3)'}
              >← Portfolio</Link>
            </div>
          </div>

          <style>{`
            @media(max-width:768px){
              .pdf-desktop{display:none!important;}
              .pdf-mobile{display:block!important;}
              .info-grid{grid-template-columns:1fr 1fr!important;}
            }
          `}</style>
        </main>
      )}
    </PageShell>
  );
}
