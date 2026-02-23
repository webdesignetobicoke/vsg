import Link from 'next/link';

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  ctas?: Array<{ label: string; href: string; variant?: 'primary' | 'outline' }>;
  dark?: boolean;
}

export default function PageHero({ eyebrow, title, subtitle, ctas, dark = true }: PageHeroProps) {
  return (
    <section className={`relative pt-40 pb-24 ${dark ? 'rink-bg' : 'bg-navy'} hero-clip`}>
      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />
      {/* Orange accent line */}
      <div className="absolute top-0 left-0 right-0 h-1 orange-strip" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {eyebrow && (
          <div className="section-eyebrow fade-in">{eyebrow}</div>
        )}
        <div className="accent-bar fade-in" />
        <h1 className="font-display font-black text-5xl md:text-7xl text-white leading-none uppercase tracking-tight mb-6 fade-in fade-in-delay-1">
          {title}
        </h1>
        {subtitle && (
          <p className="text-white/70 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed fade-in fade-in-delay-2">
            {subtitle}
          </p>
        )}
        {ctas && ctas.length > 0 && (
          <div className="flex flex-wrap gap-4 justify-center mt-10 fade-in fade-in-delay-3">
            {ctas.map((cta) => (
              <Link
                key={cta.href}
                href={cta.href}
                className={cta.variant === 'outline' ? 'btn-outline' : 'btn-primary'}
              >
                {cta.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
