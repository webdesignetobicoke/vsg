// Value Proposition page
import CtaBanner from '@/components/CtaBanner';

export default function ValuePropositionPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative rink-bg pt-40 pb-24 hero-clip overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1 orange-strip" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="section-eyebrow">Why Partner With VSG</div>
          <div className="accent-bar mx-auto" />
          <h1 className="font-display font-black text-6xl md:text-8xl text-white uppercase leading-none tracking-tight mb-6">
            Value<br />
            <span className="text-orange">Proposition</span>
          </h1>
        </div>
      </section>

      {/* FOR SPONSORS */}
      <section className="py-24 bg-navy">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display font-black text-3xl text-white uppercase mb-3">For Sponsors</h2>
          <p className="text-white/70 text-lg mb-10">Single, governed access to large, repeat hockey audiences</p>

          <div className="grid grid-cols-1 gap-5">
            {[
              'Single, governed access to large, repeat hockey audiences',
              'One agreement replaces dozens of fragmented relationships',
              'Category exclusivity across leagues and associations',
              'Consistent activation standards and reporting',
              'Clear pathways to renewal and platform expansion',
            ].map((benefit, idx) => (
              <div key={idx} className="flex gap-4 items-start bg-navy-mid border-l-4 border-orange p-5 rounded-sm">
                <div className="w-6 h-6 rounded-full bg-orange flex items-center justify-center text-navy font-bold flex-shrink-0 mt-0.5">
                  ✓
                </div>
                <p className="text-white/85 text-base">{benefit}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 bg-navy/50 border border-orange/30 rounded-sm p-6 text-center">
            <p className="text-white/80 text-sm italic">
              Sponsors are not buying logos — they are buying structured market access.
            </p>
          </div>
        </div>
      </section>

      {/* FOR LEAGUES & ASSOCIATIONS */}
      <section className="py-24 bg-slate-custom">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display font-black text-3xl text-navy uppercase mb-3">For Leagues & Associations</h2>
          <p className="text-gray-700 text-lg mb-10">Predictable revenue, professional management, preserved independence</p>

          <div className="grid grid-cols-1 gap-5">
            {[
              'Access to higher-value regional and national sponsors',
              'Predictable, professionally managed sponsorship revenue',
              'Reduced reliance on volunteers or internal resources',
              'Centralized pricing, governance, and accountability',
              'Preservation of local identity within a larger platform',
            ].map((benefit, idx) => (
              <div key={idx} className="flex gap-4 items-start bg-white border-l-4 border-orange p-5 rounded-sm shadow-sm">
                <div className="w-6 h-6 rounded-full bg-navy flex items-center justify-center text-orange font-bold flex-shrink-0 mt-0.5">
                  ✓
                </div>
                <p className="text-gray-700 text-base">{benefit}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 bg-navy rounded-sm p-6 text-center">
            <p className="text-white/80 text-sm italic">
              Revenue is professional and predictable. Operations are scalable. Identity remains local.
            </p>
          </div>
        </div>
      </section>

      {/* FOR THE HOCKEY ECOSYSTEM */}
      <section className="py-24 bg-navy">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display font-black text-3xl text-white uppercase mb-3">For the Hockey Ecosystem</h2>
          <p className="text-white/70 text-lg mb-10">Sustainable commercial investment in the sport we all love</p>

          <div className="grid grid-cols-1 gap-5">
            {[
              'Sustainable commercial investment in grassroots and Junior A hockey',
              'Reduced dependency on registration fees and fundraising',
              'Stronger, longer-term corporate partnerships',
              'Improved sponsor trust and execution consistency',
            ].map((benefit, idx) => (
              <div key={idx} className="flex gap-4 items-start bg-navy-mid border-l-4 border-orange p-5 rounded-sm">
                <div className="w-6 h-6 rounded-full bg-orange flex items-center justify-center text-navy font-bold flex-shrink-0 mt-0.5">
                  ✓
                </div>
                <p className="text-white/85 text-base">{benefit}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-orange/10 border border-orange/30 rounded-sm p-8 text-center">
            <p className="text-white text-base font-semibold mb-2">The Mission</p>
            <p className="text-white/80 text-sm italic">
              A platform where sponsors invest with confidence, leagues operate with clarity, and hockey thrives with resources to grow.
            </p>
          </div>
        </div>
      </section>

      <CtaBanner
        title="See How This Works"
        subtitle="Understand how VSG's value proposition creates wins for every stakeholder in the hockey ecosystem."
        buttonLabel="Start a Conversation"
        buttonHref="/contact"
      />
    </>
  );
}
