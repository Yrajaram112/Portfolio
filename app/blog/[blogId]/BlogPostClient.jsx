'use client';

import Link from 'next/link';
import PageShell from '@/components/PageShell';
import { FiArrowLeft, FiCalendar, FiClock } from 'react-icons/fi';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';

const SITE_URL = 'https://www.rajaramyadav.com.np';

export default function BlogPostClient({ post }) {
  const shareUrl = encodeURIComponent(`${SITE_URL}/blog/${post.slug}`);

  return (
    <PageShell>
      {({ theme }) => (
        <main style={{ background: 'var(--bg)', minHeight: '100vh', paddingTop: 88, paddingBottom: 80 }}>
          <article style={{ maxWidth: 720, margin: '0 auto', padding: '40px 24px 0' }}>

            {/* Back */}
            <Link href="/blogs" style={{ display: 'inline-flex', alignItems: 'center', gap: 7, fontFamily: 'JetBrains Mono,monospace', fontSize: 11, color: 'var(--text-3)', textDecoration: 'none', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 32, transition: 'color 0.2s' }}
              onMouseEnter={e => e.currentTarget.style.color = 'var(--accent)'}
              onMouseLeave={e => e.currentTarget.style.color = 'var(--text-3)'}
            ><FiArrowLeft size={13} /> All Articles</Link>

            {/* Category */}
            {post.category && (
              <div style={{ fontFamily: 'JetBrains Mono,monospace', fontSize: 10, color: 'var(--accent)', letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: 12 }}>
                // {post.category}
              </div>
            )}

            {/* Title */}
            <h1 style={{ marginBottom: 22, color: 'var(--text-1)' }}>{post.title}</h1>

            {/* Meta bar */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12, paddingBottom: 24, borderBottom: '1px solid var(--border)', marginBottom: 36 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <div style={{ width: 34, height: 34, borderRadius: '50%', background: 'var(--grad)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <span style={{ fontFamily: 'Sora,sans-serif', fontWeight: 700, fontSize: 12, color: '#fff' }}>RY</span>
                  </div>
                  <div>
                    <div style={{ fontFamily: 'DM Sans,sans-serif', fontWeight: 600, fontSize: 13, color: 'var(--text-1)' }}>Rajaram Yadav</div>
                    <div style={{ fontFamily: 'JetBrains Mono,monospace', fontSize: 9, color: 'var(--text-3)' }}>Senior Software Engineer</div>
                  </div>
                </div>
                {post.publishedAt && (
                  <span style={{ display: 'flex', alignItems: 'center', gap: 5, fontFamily: 'JetBrains Mono,monospace', fontSize: 10, color: 'var(--text-3)' }}>
                    <FiCalendar size={11} />{new Date(post.publishedAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                  </span>
                )}
                {post.estimatedReadingTime && (
                  <span style={{ display: 'flex', alignItems: 'center', gap: 5, fontFamily: 'JetBrains Mono,monospace', fontSize: 10, color: 'var(--text-3)' }}>
                    <FiClock size={11} />{post.estimatedReadingTime} min
                  </span>
                )}
              </div>

              {/* Share */}
              <div style={{ display: 'flex', gap: 8 }}>
                <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`} target="_blank" rel="noopener noreferrer" aria-label="Share on LinkedIn"
                  style={{ width: 32, height: 32, borderRadius: 7, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--surface)', border: '1px solid var(--border)', color: 'var(--text-3)', textDecoration: 'none', transition: 'all 0.2s' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.color = 'var(--accent)'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text-3)'; }}
                ><FaLinkedinIn size={13} /></a>
                <a href="https://github.com/Yrajaram112" target="_blank" rel="noopener noreferrer" aria-label="GitHub"
                  style={{ width: 32, height: 32, borderRadius: 7, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--surface)', border: '1px solid var(--border)', color: 'var(--text-3)', textDecoration: 'none', transition: 'all 0.2s' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.color = 'var(--accent)'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text-3)'; }}
                ><FaGithub size={13} /></a>
              </div>
            </div>

            {/* Article body */}
            {/*
              TODO: Render your CMS content here.
              Sanity + Portable Text:
                import { PortableText } from '@portabletext/react'
                <PortableText value={post.body} />
              MDX:
                import { MDXRemote } from 'next-mdx-remote'
                <MDXRemote {...post.mdxSource} />
            */}
            <div style={{ fontFamily: 'DM Sans,sans-serif', fontSize: '1rem', color: 'var(--text-2)', lineHeight: 1.85 }}>
              {/* Article content renders here */}
            </div>

            {/* Author card */}
            <div style={{ marginTop: 52, padding: '22px 26px', background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 16, display: 'flex', alignItems: 'center', gap: 18, flexWrap: 'wrap', boxShadow: 'var(--shadow-sm)' }}>
              <div style={{ width: 52, height: 52, borderRadius: 13, flexShrink: 0, background: 'var(--grad)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ fontFamily: 'Sora,sans-serif', fontWeight: 700, fontSize: 16, color: '#fff' }}>RY</span>
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontFamily: 'Sora,sans-serif', fontWeight: 700, fontSize: 15, color: 'var(--text-1)', marginBottom: 3 }}>Rajaram Yadav</div>
                <div style={{ fontFamily: 'DM Sans,sans-serif', fontSize: 13, color: 'var(--text-3)', lineHeight: 1.6 }}>
                  Senior Software Engineer · Java · Spring Boot · React · AWS · 7+ years building scalable systems.
                </div>
              </div>
              <Link href="/#contact" className="btn btn-ghost" style={{ fontSize: 12, whiteSpace: 'nowrap' }}>
                Get in touch
              </Link>
            </div>

            {/* Back to blog */}
            <div style={{ textAlign: 'center', marginTop: 36 }}>
              <Link href="/blogs"
                style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontFamily: 'DM Sans,sans-serif', fontSize: 13, fontWeight: 600, color: 'var(--text-3)', textDecoration: 'none', transition: 'color 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.color = 'var(--accent)'}
                onMouseLeave={e => e.currentTarget.style.color = 'var(--text-3)'}
              >← More articles</Link>
            </div>
          </article>
        </main>
      )}
    </PageShell>
  );
}
