# Rajaram Yadav Portfolio — Next.js 14 App Router

Minimal, confident, production-grade portfolio for a Senior Software Engineer.
Built with **Next.js 14 (App Router)**, **Tailwind CSS**, and zero external animation libraries — pure CSS animations only for maximum performance.

---

## ⚡ Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Set up environment variables
cp .env.local.example .env.local
# SET UP EMAIL USER EMAIL PASSWORD AND EMAIL TO 
# Used in Contact/Api


# 3. Run dev server
npm run dev
# → http://localhost:3000
```

---

### 2. Set up contact form
Edit `.env.local`:
```
EMAIL_USER=your.gmail@gmail.com
EMAIL_PASS=your_gmail_app_password   # From https://myaccount.google.com/apppasswords
EMAIL_TO=your.inbox@gmail.com
```


## 🎨 Design System

The design uses CSS custom properties (variables) for theming. Edit `styles/globals.css`:

| Token           | Light           | Dark            | Usage              |
|-----------------|-----------------|-----------------|-------------------|
| `--bg`          | `#F5F3EF`       | `#111010`       | Page background   |
| `--surface`     | `#FFFFFF`       | `#1E1C1B`       | Cards             |
| `--accent`      | `#C8622A`       | `#D97840`       | Brand color       |
| `--text-primary`| `#1A1714`       | `#F0EDE8`       | Headings          |

To change the brand color, just update `--accent` in `:root` and `.dark`.

---

## 🚀 Deployment (Vercel)

```bash
# Build locally first to catch errors
npm run build

# Deploy
vercel --prod
```

Set env vars in Vercel dashboard → Project → Settings → Environment Variables.

---

## 📈 Performance

- No external animation libraries (Framer Motion removed)
- CSS-only animations with `animation-delay` stagger
- Next.js Image component with `avif`/`webp` format optimization
- Aggressive static asset caching headers
- Server-side rendering on homepage for SEO + LCP
- JSON-LD structured data (Person schema)
- `robots.txt` + `sitemap.xml` included

---

## 🔗 SEO Checklist

- [x] `<title>` and `<meta description>` on every page
- [x] Open Graph + Twitter card meta tags
- [x] JSON-LD Person schema on homepage
- [x] Canonical URLs
- [x] `robots.txt` allowing all bots
- [x] `sitemap.xml` with all routes
- [x] Security headers (`X-Frame-Options`, etc.)
- [ ] Update `sitemap.xml` when you add blog posts
- [ ] Update `canonical` URLs to your real domain
- [ ] Add `NEXT_PUBLIC_GA_ID` for analytics if needed
