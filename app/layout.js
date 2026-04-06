import '@/styles/globals.css';
import { Sora, DM_Sans } from 'next/font/google';

// ─── Font optimisation (replaces manual <link> in _document) ─────────────────
const sora = Sora({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-sora',
  display: 'swap',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-dm-sans',
  display: 'swap',
});

// ─── Inline script: set theme before React hydrates (prevents flash) ──────────
const THEME_SCRIPT = `(function(){
  try{
    var t=localStorage.getItem('ry-theme');
    document.documentElement.setAttribute('data-theme', t||'dark');
  }catch(e){
    document.documentElement.setAttribute('data-theme','dark');
  }
})();`;

// ─── Shared site constants ────────────────────────────────────────────────────
const SITE_URL  = 'https://www.rajaramyadav.com.np';
const FULL_NAME = 'Rajaram Yadav';
const DESC      = 'Rajaram Yadav is a Senior Software Engineer with 7+ years building scalable enterprise systems using Java, Spring Boot, React, Next.js, AWS, and Kubernetes. Based in United States. Available for senior engineering roles and consulting.';
const OG_IMAGE  = `${SITE_URL}/assets/rajaram-yadav-software-engineer.png`;

// ─── Root metadata (shared across all pages) ─────────────────────────────────
export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:  `${FULL_NAME} | Senior Software Engineer — Java, Spring Boot, React, AWS`,
    template: `%s — ${FULL_NAME}`,
  },
  description: DESC,
  authors: [{ name: FULL_NAME, url: SITE_URL }],
  creator: FULL_NAME,
  publisher: FULL_NAME,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_URL,
    siteName: `${FULL_NAME} Portfolio`,
    title: `${FULL_NAME} | Senior Software Engineer — Java, Spring Boot, React, AWS`,
    description: DESC,
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: `${FULL_NAME} — Senior Software Engineer`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${FULL_NAME} | Senior Software Engineer`,
    description: DESC,
    images: [{ url: OG_IMAGE, alt: `${FULL_NAME} — Senior Software Engineer` }],
  },
  verification: {
    google: 'Dg569p1GB8QfVH5JMRhGwko5EZ7FbJt4Ap1JQ3ukMfg',
  },
  alternates: {
    canonical: SITE_URL,
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', type: 'image/x-icon' },
    ],
    apple: '/favicon.svg',
  },
  other: {
    'theme-color': '#0D1117',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* JetBrains Mono — not in next/font/google; load manually */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${sora.variable} ${dmSans.variable}`}>
        {/* Inline script prevents theme flash — must execute before React */}
        <script dangerouslySetInnerHTML={{ __html: THEME_SCRIPT }} />
        {children}
      </body>
    </html>
  );
}
