import { SectionHeader } from './SectionHeader';
import { WorkCard, type Work as WorkType } from './WorkCard';

const works: WorkType[] = [
  {
    year: '2026',
    status: 'LIVE',
    statusExtra: 'Active',
    title: 'Fleet HQ',
    role: 'Solo Builder',
    description:
      'A single-operator command center for running teams of Claude agents. CLI + live 3D dashboard + opinionated runtime — built on tmux, Bash and plain files, no orchestration framework.',
    stack: ['Claude Code', 'tmux', 'Bash', 'Node', 'Three.js', 'SSE'],
    link: { label: 'github.com/mborges-dev/fleet-hq', href: 'https://github.com/mborges-dev/fleet-hq' },
    art: 'terminal',
    terminalLines: [
      '$ fleet new research ~/agents/research',
      '$ fleet tell research "map B2B logistics vendors"',
      '$ fleet dashboard',
      '→ 3 agents active · 0 asks · DND 22:00-09:00',
      '',
      '[research]  Searching: G2 logistics',
      '[writer]    Reading report.md',
      '[fact-check]  Writing review.md',
    ],
  },
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
    year: '2026',
    status: 'LIVE',
    statusExtra: 'Open',
    title: 'Extraction Evals',
    role: 'Solo Builder',
    description:
      'A reproducible benchmark for LLM-based structured extraction from documents. Compares Claude / GPT-4o / Gemini on Portuguese invoices, receipts and CVs across four prompt strategies — with per-field F1, cost and latency tracking per call. 84 real calls, $0.54 USD total.',
    stack: ['Python', 'Pydantic', 'Anthropic SDK', 'OpenAI SDK', 'Google GenAI', 'uv', 'CI'],
    link: { label: 'github.com/mborges-dev/extraction-evals', href: 'https://github.com/mborges-dev/extraction-evals' },
    art: 'terminal',
    terminalLines: [
      '$ ./scripts/run.sh -m claude-sonnet-4-5 gpt-4o gemini-2.5-flash',
      'Eval matrix:  3 models × 4 prompts × 7 docs = 84 calls',
      '',
      '  gpt-4o-2024-11-20 × v2_structured  F1: 0.614  $0.039',
      '  claude-sonnet-4-5 × v2_structured  F1: 0.582  $0.067',
      '  gemini-2.5-flash  × v3_few_shot    F1: 0.398  $0.010',
      '  [cot hurt every model — see docs/results-2026-06.md]',
    ],
  },
  {
    year: '2025',
    status: 'LIVE',
    statusExtra: 'Demos',
    title: 'DocFlow',
    role: 'Solo Builder',
    description:
      'AI document extraction pipeline for logistics and distribution. Built under a client engagement for a Portuguese distribution operation — automating manual data entry across thousands of weekly delivery notes. Live demos available as anonymized recreations.',
    stack: ['GPT-4o Vision', 'Cloudflare R2 + Workers', 'Supabase', 'SAP S/4HANA', 'Next.js'],
    link: { label: 'mborges-dev.github.io/docflow', href: 'https://mborges-dev.github.io/docflow/' },
  },
  {
    year: '2026',
    status: 'IN DEVELOPMENT',
    title: 'Almi',
    role: 'Founder & Engineer',
    description:
      'AI-powered HR platform covering the full employee lifecycle — recruitment, onboarding, leave, documents, payroll, and an always-on HR assistant. Supports Portuguese and UAE labour law. Multilingual (PT/EN/AR). Two tiers: Almi for mid-size companies, Almi Lite for SMBs.',
    stack: ['Claude', 'Next.js', 'Supabase', 'Stripe', 'ElevenLabs', 'next-intl'],
    link: { label: 'github.com/mborges-dev/almi-platform', href: 'https://github.com/mborges-dev/almi-platform' },
    art: 'dashed',
  },
  {
    year: '2026',
    status: 'IN DEVELOPMENT',
    title: 'UNREAL Docs',
    role: 'Founder & Engineer',
    description:
      'Invoice processing SaaS for Portuguese businesses. Invoices enter via upload or dedicated email address, Claude Vision reads and structures the data, the user validates side-by-side, and exports in CSV / JSON / SAF-T — with vendor memory, approval workflows, and ERP integration.',
    stack: ['Claude Vision', 'Next.js', 'Supabase', 'Stripe', 'Resend'],
    link: { label: 'github.com/mborges-dev/unreal-docs', href: 'https://github.com/mborges-dev/unreal-docs' },
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
