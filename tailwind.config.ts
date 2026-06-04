import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0A0A0A',
        bone: '#F5F0E8',
        muted: '#A8A29E',
        sage: '#84C7AE',
        flash: '#4ADE80',
        hairline: '#1F1F1F',
      },
      fontFamily: {
        hero: ['var(--font-hero)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-display)', 'serif'],
        sans: ['var(--font-geist-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'ui-monospace', 'monospace'],
      },
      maxWidth: {
        prose: '720px',
        wide: '1200px',
      },
      letterSpacing: {
        'mono-wide': '0.14em',
      },
    },
  },
  plugins: [],
};

export default config;
