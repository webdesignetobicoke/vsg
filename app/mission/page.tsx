// Our Mission page
import Link from 'next/link';
import CtaBanner from '@/components/CtaBanner';

export default function MissionPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative rink-bg pt-40 pb-32 hero-clip overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1 orange-strip" />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="font-display font-black text-6xl md:text-8xl text-white uppercase leading-none tracking-tight mb-6 fade-in fade-in-delay-1">
              Our<br />
              <span className="text-orange">Mission</span>
            </h1>
            <div className="bg-orange/10 border border-orange/30 rounded-sm p-8 mb-12 fade-in fade-in-delay-2">
              <p className="text-white text-2xl md:text-3xl font-display font-semibold leading-relaxed">
                Villani Sports Group exists to organize Canadian hockey into sponsor-ready platforms that support long-term corporate investment.
              </p>
            </div>
            <p className="text-white font-display font-black text-xl uppercase tracking-wide fade-in fade-in-delay-3">
              Focused<span className="text-orange">.</span> Governed<span className="text-orange">.</span> Built to Scale<span className="text-orange">.</span>
            </p>
          </div>
        </div>

        {/* Tag line strip */}
        <div className="absolute bottom-0 left-0 right-0 py-3 bg-orange/10 border-t border-orange/20">
          <div className="max-w-6xl mx-auto px-4">
            <p className="text-orange text-xs uppercase tracking-[0.25em] font-semibold text-center">
              Focused · Governed · Built to Scale
            </p>
          </div>
        </div>
      </section>

      {/* MISSION CONTENT */}
      <section className="py-24 bg-slate-custom">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="section-eyebrow">Our Foundation</div>
            <div className="accent-bar mx-auto" />
            <h2 className="section-title mb-4">Our Mission</h2>
            <p className="text-2xl font-display font-semibold text-navy mt-2">
              Organizing Canadian Hockey for Corporate Partnership
            </p>
            <p className="text-gray-500 text-base max-w-3xl mx-auto mt-4 leading-relaxed">
              Villani Sports Group exists to organize Canadian hockey into sponsor-ready platforms that support long-term corporate investment.
            </p>
          </div>

          {/* 2-column mission content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-navy rounded-sm p-8 border-l-4 border-orange">
              <p className="text-orange text-xs uppercase tracking-widest font-semibold mb-3">01 · Aggregation</p>
              <p className="text-white/80 text-base leading-relaxed">
                By aggregating leagues and associations under a centralized commercial structure, VSG simplifies sponsor engagement, enforces governance, and delivers sustainable commercial outcomes for the organizations that support the game.
              </p>
            </div>
            <div className="bg-navy rounded-sm p-8 border-l-4 border-orange">
              <p className="text-orange text-xs uppercase tracking-widest font-semibold mb-3">02 · Preservation</p>
              <p className="text-white/80 text-base leading-relaxed">
                Our mission is not to replace local hockey identity — but to organize it commercially, creating a unified, investable ecosystem that benefits sponsors, leagues, associations, and communities alike.
              </p>
            </div>
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
