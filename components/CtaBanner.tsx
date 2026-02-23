import Link from 'next/link';

interface CtaBannerProps {
  title: string;
  subtitle?: string;
  buttonLabel: string;
  buttonHref: string;
}

export default function CtaBanner({ title, subtitle, buttonLabel, buttonHref }: CtaBannerProps) {
  return (
    <section className="bg-navy py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="accent-bar mx-auto" />
        <h2 className="font-display font-black text-3xl md:text-5xl text-white uppercase leading-tight mb-4">
          {title}
        </h2>
        {subtitle && (
          <p className="text-white/60 text-base md:text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
            {subtitle}
          </p>
        )}
        <Link href={buttonHref} className="btn-primary text-sm px-8 py-4">
          {buttonLabel}
        </Link>
      </div>
    </section>
  );
}
