/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['Sora', 'sans-serif'],
        sans:    ['DM Sans', 'sans-serif'],
        mono:    ['JetBrains Mono', 'monospace'],
      },
      colors: {
        obsidian: '#0D1117',
        electric: '#00D9F5',
        violet:   '#7C3AED',
        steel:    '#8B949E',
      },
      animation: {
        'fade-up':    'fadeUp 0.7s ease forwards',
        'fade-in':    'fadeIn 0.6s ease forwards',
        'float':      'float 4s ease-in-out infinite',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
        'scan':       'scanline 8s linear infinite',
        'shimmer':    'shimmer 3s linear infinite',
        'blink':      'blink 1s step-end infinite',
        'spin-slow':  'spin 8s linear infinite',
      },
      keyframes: {
        fadeUp:    { from: { opacity: 0, transform: 'translateY(28px)' }, to: { opacity: 1, transform: 'translateY(0)' } },
        fadeIn:    { from: { opacity: 0 }, to: { opacity: 1 } },
        float:     { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-10px)' } },
        glowPulse: { '0%,100%': { boxShadow: '0 0 20px rgba(0,217,245,0.08)' }, '50%': { boxShadow: '0 0 50px rgba(0,217,245,0.28)' } },
        scanline:  { from: { transform: 'translateY(-100%)' }, to: { transform: 'translateY(100vh)' } },
        shimmer:   { '0%': { backgroundPosition: '-200% center' }, '100%': { backgroundPosition: '200% center' } },
        blink:     { '0%,100%': { opacity: 1 }, '50%': { opacity: 0 } },
      },
      boxShadow: {
        glow:    '0 0 40px rgba(0,217,245,0.15)',
        'glow-lg': '0 0 80px rgba(0,217,245,0.22)',
        violet:  '0 0 40px rgba(124,58,237,0.2)',
      },
    },
  },
  plugins: [],
};
