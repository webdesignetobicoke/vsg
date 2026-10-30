import Link from 'next/link';
import { readNews, withLinks } from '@/lib/newsStore';
import NewsCarousel from '@/components/NewsCarousel';

const MAX_ITEMS = 5;

export default async function NewsSection({ showHeading = true }: { showHeading?: boolean }) {
  const items = withLinks(await readNews()).slice(0, MAX_ITEMS);
  if (items.length === 0) return null;

  return (
    <section className="py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {showHeading && (
          <div className="flex items-end justify-between gap-4 mb-6">
            <h2 className="section-title">Latest News</h2>
            <Link href="/news" className="text-orange font-semibold uppercase tracking-wider text-sm whitespace-nowrap">
              View all ›
            </Link>
          </div>
        )}
        <NewsCarousel items={items} />
      </div>
    </section>
  );
}
