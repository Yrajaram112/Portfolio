'use client';

import Link from 'next/link';
import { useEffect, useRef } from 'react';
import PageShell from '@/components/PageShell';
import { FiArrowRight, FiCalendar, FiClock, FiEdit3 } from 'react-icons/fi';

function useReveal(delay = 0) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    el.style.opacity = 0; el.style.transform = 'translateY(20px)';
    el.style.transition = `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { el.style.opacity = 1; el.style.transform = 'none'; obs.disconnect(); }
    }, { threshold: 0.1 });
    obs.observe(el); return () => obs.disconnect();
  }, [delay]);
  return ref;
}

function PostCard({ post, index }) {
  const ref = useReveal(index * 80);
  return (
    <li ref={ref}>
      <Link href={`/blog/${post.slug}`} style={{ display: 'block', padding: '22px 24px', background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 14, textDecoration: 'none', transition: 'all 0.28s ease' }}
        onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = 'var(--shadow-glow)'; }}
        onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none'; }}
      >
        {post.category && <span style={{ fontFamily: 'JetBrains Mono,monospace', fontSize: 9, color: 'var(--accent)', letterSpacing: '0.16em', textTransform: 'uppercase', display: 'block', marginBottom: 10 }}>{post.category}</span>}
        <h2 style={{ fontFamily: 'Sora,sans-serif', fontWeight: 700, fontSize: '1.1rem', color: 'var(--text-1)', letterSpacing: '-0.02em', marginBottom: 8 }}>{post.title}</h2>
        {post.excerpt && <p style={{ fontFamily: 'DM Sans,sans-serif', fontSize: 13, color: 'var(--text-2)', lineHeight: 1.7, marginBottom: 14 }}>{post.excerpt}</p>}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', gap: 16 }}>
            {post.publishedAt && <span style={{ display: 'flex', alignItems: 'center', gap: 5, fontFamily: 'JetBrains Mono,monospace', fontSize: 10, color: 'var(--text-3)' }}><FiCalendar size={11} />{new Date(post.publishedAt).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</span>}
            {post.estimatedReadingTime && <span style={{ display: 'flex', alignItems: 'center', gap: 5, fontFamily: 'JetBrains Mono,monospace', fontSize: 10, color: 'var(--text-3)' }}><FiClock size={11} />{post.estimatedReadingTime} min</span>}
          </div>
          <FiArrowRight size={14} style={{ color: 'var(--accent)' }} />
        </div>
      </Link>
    </li>
  );
}

export default function BlogsClient({ posts }) {
  const hdr = useReveal(0);

  return (
    <PageShell>
      {({ theme }) => (
        <main style={{ minHeight: '100vh', background: 'var(--bg)', paddingTop: 88, paddingBottom: 80 }}>
          <div style={{ maxWidth: 720, margin: '0 auto', padding: '40px 24px 0' }}>

            <div ref={hdr} style={{ marginBottom: 52 }}>
              <p className="s-label" style={{ marginBottom: 16 }}>Writing</p>
              <h1 style={{ marginBottom: 14, color: 'var(--text-1)' }}>
                Engineering <span className="grad-text">insights</span>
              </h1>
              <p style={{ fontFamily: 'DM Sans,sans-serif', fontSize: '1.05rem', color: 'var(--text-2)', lineHeight: 1.75 }}>
                Deep dives, production lessons, and opinions on software craft — Java, distributed systems, cloud architecture, and career reflections.
              </p>
            </div>

            {posts.length > 0 ? (
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 12 }}>
                {posts.map((p, i) => <PostCard key={p.slug} post={p} index={i} />)}
              </ul>
            ) : (
              <div style={{ textAlign: 'center', padding: '72px 32px', background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 20 }}>
                <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 64, height: 64, borderRadius: 16, background: 'var(--accent-dim)', border: '1px solid var(--border)', marginBottom: 20 }}>
                  <FiEdit3 size={26} style={{ color: 'var(--accent)' }} />
                </div>
                <div style={{ fontFamily: 'JetBrains Mono,monospace', fontSize: 12, color: 'var(--border)', marginBottom: 8 }}>// articles in progress</div>
                <h2 style={{ fontFamily: 'Sora,sans-serif', fontWeight: 700, fontSize: '1.3rem', color: 'var(--text-1)', marginBottom: 10 }}>Coming soon.</h2>
                <p style={{ fontFamily: 'DM Sans,sans-serif', fontSize: 14, color: 'var(--text-3)', marginBottom: 24, lineHeight: 1.7, maxWidth: 360, margin: '0 auto 24px' }}>
                  Follow me on Dev.to and Medium for early access to articles.
                </p>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12, flexWrap: 'wrap' }}>
                  {[['Dev.to', 'https://dev.to/rajaramyadav'], ['Medium', 'https://yadavrajaram.medium.com/']].map(([l, h]) => (
                    <a key={l} href={h} target="_blank" rel="noopener noreferrer" className="btn btn-ghost" style={{ fontSize: 12 }}>{l} →</a>
                  ))}
                </div>
              </div>
            )}
          </div>
        </main>
      )}
    </PageShell>
  );
}
