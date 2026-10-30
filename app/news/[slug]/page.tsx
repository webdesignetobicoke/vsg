// Single news article – written in /admin/news
import Link from 'next/link';
import { notFound } from 'next/navigation';
import CtaBanner from '@/components/CtaBanner';
import { readNews } from '@/lib/newsStore';

export const dynamic = 'force-dynamic';

async function getArticle(slug: string) {
  return (await readNews()).find((it) => it.slug === slug && it.body);
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const article = await getArticle(params.slug);
  return article ? { title: `${article.title} | Villani Sports Group`, description: article.summary } : {};
}

function formatDate(date: string) {
  return new Date(`${date}T12:00:00`).toLocaleDateString('en-CA', { year: 'numeric', month: 'long', day: 'numeric' });
}

export default async function ArticlePage({ params }: { params: { slug: string } }) {
  const article = await getArticle(params.slug);
  if (!article) notFound();

  const blocks = article.body!.split(/\n{2,}/).map((b) => b.trim()).filter(Boolean);

  return (
    <>
      {/* HERO */}
      <section className="relative rink-bg pt-52 md:pt-60 pb-32 hero-clip overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1 orange-strip" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-orange text-sm uppercase tracking-wider font-bold mb-4">
            {formatDate(article.date)}
            {article.source ? ` · ${article.source}` : ''}
          </div>
          <h1 className="font-display font-black text-4xl md:text-6xl text-white uppercase leading-tight tracking-tight">
            {article.title}
          </h1>
        </div>
      </section>

      {/* ARTICLE */}
      <section className="py-24 bg-slate-custom">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border-t-4 border-orange shadow-md p-8 md:p-12">
            {article.image && (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={article.image} alt={article.title} className="w-full max-h-96 object-contain bg-navy p-6 mb-10" />
            )}
            {article.summary && (
              <p className="text-2xl font-display font-semibold text-navy leading-snug mb-8">{article.summary}</p>
            )}
            <div className="space-y-6">
              {blocks.map((block, i) =>
                block.startsWith('## ') ? (
                  <h2 key={i} className="font-display font-bold text-3xl text-navy pt-4">
                    {block.slice(3)}
                  </h2>
                ) : (
                  <p key={i} className="text-gray-700 text-lg leading-relaxed whitespace-pre-line">
                    {block}
                  </p>
                )
              )}
            </div>
          </div>
          <div className="mt-10 text-center">
            <Link href="/news" className="text-orange font-semibold uppercase tracking-wider text-sm">
              ‹ Back to Latest News
            </Link>
          </div>
        </div>
      </section>

      <CtaBanner
        title="Ready to Explore a Partnership?"
        subtitle="Discover how VSG can transform your sponsorship strategy and unlock structured market access."
        buttonLabel="Start the Conversation"
        buttonHref="/contact"
      />
    </>
  );
}
