'use client';

import { useState, type FormEvent } from 'react';
import { SectionHeader } from './SectionHeader';

type Status = 'idle' | 'submitting' | 'success' | 'error';

export function Contact() {
  const [status, setStatus] = useState<Status>('idle');
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('submitting');
    setError(null);
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch('https://formspree.io/f/xpqnvkbe', {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });
      if (res.ok) {
        setStatus('success');
        form.reset();
      } else {
        const json = await res.json().catch(() => null);
        setError(json?.error || 'Something went wrong. Please try again.');
        setStatus('error');
      }
    } catch {
      setError('Network error. Please try again.');
      setStatus('error');
    }
  }

  return (
    <section id="contact" className="relative w-full px-6 md:px-10 py-20 md:py-40">
      <div className="mx-auto max-w-wide">
        <div className="section-enter" style={{ ['--d' as any]: '0ms' }}>
          <SectionHeader
            number="005"
            label="Talk"
            title={
              <>
                Let&apos;s build
                <br />
                something.
              </>
            }
          />
        </div>

        <div
          className="section-enter grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20"
          style={{ ['--d' as any]: '100ms' }}
        >
          {/* LEFT — Form */}
          <div>
            {status === 'success' ? (
              <SuccessState />
            ) : (
              <form
                onSubmit={onSubmit}
                action="https://formspree.io/f/xpqnvkbe"
                method="POST"
                className="max-w-[520px]"
                noValidate
              >
                <div className="space-y-1">
                  <Field name="name" label="Name" required placeholder="Your name" />
                  <Field
                    name="email"
                    type="email"
                    label="Email"
                    required
                    placeholder="your@email.com"
                  />
                  <Field
                    name="message"
                    label="Message"
                    required
                    placeholder="What are you building?"
                    multiline
                  />
                </div>

                <div className="mt-10 flex items-center justify-between gap-6">
                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="group inline-flex items-center gap-3 px-6 py-3 border border-bone/40 text-bone font-mono text-[12px] tracking-[0.14em] uppercase hover:border-flash hover:text-flash transition-colors disabled:opacity-50"
                  >
                    <span>{status === 'submitting' ? 'Sending' : 'Send'}</span>
                    <span aria-hidden className="transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  </button>
                  {error ? (
                    <p className="font-mono text-[11px] text-red-300/80">{error}</p>
                  ) : (
                    <p className="font-mono text-[10.5px] tracking-[0.18em] uppercase text-muted/60">
                      Reply within 24h
                    </p>
                  )}
                </div>
              </form>
            )}
          </div>

          {/* RIGHT — Contact info */}
          <div className="md:pl-8">
            <p className="font-mono text-[10.5px] tracking-[0.18em] uppercase text-muted/70 mb-4">
              Direct
            </p>
            <a
              href="mailto:hello@miguelborges.dev"
              className="block font-hero font-black text-bone hover:text-flash transition-colors leading-[1.05] tracking-tight"
              style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)' }}
            >
              hello@miguelborges.dev
            </a>

            <div className="mt-10">
              <p className="font-mono text-[10.5px] tracking-[0.18em] uppercase text-muted/70 mb-4">
                Elsewhere
              </p>
              <ul className="space-y-2.5">
                <SocialLink href="https://www.linkedin.com/in/miguelcborges/" label="LinkedIn" />
                <SocialLink href="https://github.com/miguelcborges" label="GitHub" />
                <SocialLink href="https://x.com/miguelcborges" label="X" />
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  name,
  label,
  type = 'text',
  required,
  placeholder,
  multiline,
}: {
  name: string;
  label: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
  multiline?: boolean;
}) {
  return (
    <label className="block py-2">
      <span className="block font-mono text-[10.5px] tracking-[0.18em] uppercase text-muted/70 mb-1">
        {label}
      </span>
      {multiline ? (
        <textarea
          name={name}
          rows={5}
          required={required}
          placeholder={placeholder}
          className="field min-h-[140px]"
        />
      ) : (
        <input
          name={name}
          type={type}
          required={required}
          placeholder={placeholder}
          className="field"
        />
      )}
    </label>
  );
}

function SocialLink({ href, label }: { href: string; label: string }) {
  return (
    <li>
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className="group inline-flex items-center gap-3 font-mono text-[14px] text-bone hover:text-flash transition-colors"
      >
        <span className="min-w-[80px]">{label}</span>
        <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
      </a>
    </li>
  );
}

function SuccessState() {
  return (
    <div className="border border-hairline p-8 max-w-[520px]">
      <div className="flex items-center gap-3 font-mono text-[11px] tracking-[0.18em] uppercase text-flash">
        <span className="pulse-dot" aria-hidden />
        <span>Message sent</span>
      </div>
      <p className="mt-5 text-[18px] leading-[1.5] text-bone">
        Thanks — I&apos;ll reply within 24h. Usually faster.
      </p>
      <p className="mt-3 text-[14px] text-muted">
        In the meantime, feel free to email me directly at{' '}
        <a href="mailto:hello@miguelborges.dev" className="text-flash hover:underline">
          hello@miguelborges.dev
        </a>
        .
      </p>
    </div>
  );
}
