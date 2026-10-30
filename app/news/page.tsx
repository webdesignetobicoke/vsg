// Latest News page – featured carousel of posts created in /admin/news
import CtaBanner from '@/components/CtaBanner';
import NewsSection from '@/components/NewsSection';

export const metadata = { title: 'Latest News | Villani Sports Group' };

export default function NewsPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative rink-bg pt-52 md:pt-60 pb-32 hero-clip overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1 orange-strip" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="font-display font-black text-6xl md:text-8xl text-white uppercase leading-none tracking-tight mb-6 fade-in fade-in-delay-1">
              Latest<br />
              <span className="text-orange">News</span>
            </h1>
            <p className="text-white text-xl md:text-2xl font-display font-semibold leading-relaxed max-w-2xl fade-in fade-in-delay-2">
              Announcements, programs and updates from Villani Sports Group.
            </p>
          </div>
        </div>
      </section>

      {/* LATEST NEWS */}
      <NewsSection showHeading={false} />

      <CtaBanner
        title="Ready to Explore a Partnership?"
        subtitle="Discover how VSG can transform your sponsorship strategy and unlock structured market access."
        buttonLabel="Start the Conversation"
        buttonHref="/contact"
      />
    </>
  );
}
