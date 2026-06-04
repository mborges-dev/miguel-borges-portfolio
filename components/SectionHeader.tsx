type Props = {
  number: string;
  label: string;
  title: React.ReactNode;
  /** Extra classes for the wrapper */
  className?: string;
};

export function SectionHeader({ number, label, title, className = '' }: Props) {
  return (
    <header className={`mb-16 md:mb-20 ${className}`}>
      <p className="font-mono text-[11px] tracking-[0.18em] uppercase text-muted/70 mb-5">
        {number} — {label}
      </p>
      <h2 className="section-title">{title}</h2>
    </header>
  );
}
