import { SectionHeader } from './SectionHeader';
import { WorkCard, type Work as WorkType } from './WorkCard';

const works: WorkType[] = [
  {
    year: '2025',
    status: 'LIVE',
    statusExtra: 'Active',
    title: 'TheFacio',
    role: 'Founder & Engineer',
    description:
      'AI-powered customer service for restaurants and bars. WhatsApp conversations handled end-to-end by Claude agents — bookings, menu questions, complaints, all without human intervention.',
    stack: ['WhatsApp Cloud API', 'Claude', 'Supabase', 'Cloudflare Workers', 'n8n'],
    link: { label: 'thefacio.com', href: 'https://thefacio.com' },
  },
  {
    year: '2025',
    status: 'PRIVATE',
    title: 'DocFlow',
    role: 'Solo Builder',
    description:
      'Logistics dashboard with AI document extraction. Pilot built for a distribution company in Portugal — automating manual data entry across thousands of weekly delivery notes.',
    stack: ['OCR', 'GPT-4o Vision', 'Next.js', 'Supabase', 'Cloudflare'],
    noLinkLabel: 'Case study on request',
  },
  {
    year: '2026',
    status: 'LOCAL',
    statusExtra: 'Beta',
    title: 'Mini-Miguel',
    role: 'Solo Builder',
    description:
      'A background AI agent that runs in your terminal, acts as your operational double, and respects rules about when to interrupt you and when to work autonomously.',
    stack: ['Claude', 'TypeScript', 'Bun', 'Local-first', 'MCP'],
    noLinkLabel: 'GitHub coming soon',
    art: 'terminal',
    terminalLines: [
      '$ mini-miguel start',
      '→ context loaded (4,231 entries)',
      '→ watching: calendar, email, code, browser',
      '→ mode: respectful — won\'t interrupt before 9am',
      '',
      '[12:14] flagged: pricing decision needs you. queueing.',
      '[12:31] handled: scheduled call with Maria, no input needed.',
    ],
  },
  {
    year: '2026',
    status: 'IN DEVELOPMENT',
    title: 'Almi',
    role: 'Founder & Engineer',
    description:
      'AI-powered HR software for SMBs. Automating onboarding, time tracking, and people ops for teams that don\'t need (or can\'t afford) enterprise HR platforms.',
    stack: ['Claude', 'Next.js', 'Supabase', 'Stripe'],
    noLinkLabel: 'Launching late 2026',
    art: 'dashed',
  },
];

export function Work() {
  return (
    <section id="work" className="relative w-full px-6 md:px-10 py-20 md:py-40">
      <div className="mx-auto max-w-wide">
        <div className="section-enter" style={{ ['--d' as any]: '0ms' }}>
          <SectionHeader number="001" label="The work" title="Selected Work" />
        </div>

        <div className="flex flex-col gap-24 md:gap-[96px]">
          {works.map((w, i) => (
            <div
              key={w.title}
              className="section-enter"
              style={{ ['--d' as any]: `${100 + i * 100}ms` }}
            >
              <WorkCard work={w} index={i} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
