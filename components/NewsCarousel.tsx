'use client';

import { useEffect, useState } from 'react';
import type { NewsItem } from '@/content/news';

const AUTOPLAY_MS = 7000;

function formatDate(date: string) {
  return new Date(`${date}T12:00:00`).toLocaleDateString('en-CA', { year: 'numeric', month: 'long', day: 'numeric' });
}

export default function NewsCarousel({ items }: { items: NewsItem[] }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const count = items.length;

  useEffect(() => {
    if (paused || count < 2) return;
    const t = setInterval(() => setIndex((i) => (i + 1) % count), AUTOPLAY_MS);
    return () => clearInterval(t);
  }, [paused, count]);

  const item = items[index];
  const prev = () => setIndex((i) => (i - 1 + count) % count);
  const next = () => setIndex((i) => (i + 1) % count);
  const external = item.href?.startsWith('http');

  return (
    <div
      className="grid md:grid-cols-2 bg-navy-dark border border-orange/30 shadow-lg overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-roledescription="carousel"
    >
      {/* TEXT PANEL */}
      <div className="flex flex-col justify-between p-6 md:p-8 min-h-[280px] order-2 md:order-1">
        <div>
          <div className="text-orange text-xs uppercase tracking-wider font-bold mb-4">
            {formatDate(item.date)}
            {item.source ? ` · ${item.source}` : ''}
          </div>
          <h3 className="font-display font-bold text-2xl md:text-3xl text-white leading-tight mb-3">
            {item.href ? (
              <a
                href={item.href}
                {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                className="hover:text-orange transition-colors"
              >
                {item.title}
              </a>
            ) : (
              item.title
            )}
          </h3>
          {item.summary && <p className="text-white/80 text-base leading-relaxed">{item.summary}</p>}
          {item.href && (
            <a
              href={item.href}
              {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              className="inline-block mt-5 text-orange font-semibold uppercase tracking-wider text-sm hover:text-white transition-colors"
            >
              Read full article ›
            </a>
          )}
        </div>

        {count > 1 && (
          <div className="flex items-center justify-between mt-5">
            <button onClick={prev} aria-label="Previous story" className="text-white/70 hover:text-orange p-2">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M15 4 7 12l8 8" /></svg>
            </button>
            <div className="flex gap-3">
              {items.map((it, i) => (
                <button
                  key={it.title}
                  onClick={() => setIndex(i)}
                  aria-label={`Go to story ${i + 1}`}
                  aria-current={i === index}
                  className={`w-3.5 h-3.5 rounded-full border-2 border-white/70 ${i === index ? 'bg-transparent' : 'bg-white/70'}`}
                />
              ))}
            </div>
            <button onClick={next} aria-label="Next story" className="text-white/70 hover:text-orange p-2">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="m9 4 8 8-8 8" /></svg>
            </button>
          </div>
        )}
      </div>

      {/* IMAGE PANEL */}
      <div className="relative min-h-[160px] md:min-h-[280px] order-1 md:order-2 bg-gradient-to-br from-navy to-navy-dark flex items-center justify-center p-6">
        {item.image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={item.image} alt={item.title} className="max-h-[200px] w-auto max-w-full object-contain" />
        ) : (
          // eslint-disable-next-line @next/next/no-img-element
          <img src="/vsg-logo.png" alt="Villani Sports Group" className="w-36 opacity-90" />
        )}
      </div>
    </div>
  );
}
