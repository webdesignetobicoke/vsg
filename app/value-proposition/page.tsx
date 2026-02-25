// Value Proposition page
import Link from 'next/link';
import CtaBanner from '@/components/CtaBanner';

export default function ValuePropositionPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative rink-bg pt-40 pb-32 hero-clip overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1 orange-strip" />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="font-display font-black text-6xl md:text-8xl text-white uppercase leading-none tracking-tight mb-6 fade-in fade-in-delay-1">
              The Value<br />
              <span className="text-orange">Proposition</span>
            </h1>
            <div className="bg-orange/10 border border-orange/30 rounded-sm p-8 mb-12 fade-in fade-in-delay-2">
              <p className="text-white text-2xl md:text-3xl font-display font-semibold leading-relaxed">
                VSG creates tangible value for every stakeholder in the hockey ecosystem — sponsors, leagues, associations, and the game itself.
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

      {/* VALUE PROPOSITION SECTIONS */}
      <section className="py-24 bg-slate-custom">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="section-eyebrow">Three Audiences</div>
            <div className="accent-bar mx-auto" />
            <h2 className="section-title mb-4">Value by Stakeholder</h2>
            <p className="text-gray-500 text-base max-w-3xl mx-auto leading-relaxed">
              Each audience receives distinct, measurable benefits designed into our platform.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* FOR SPONSORS */}
            <div className="bg-white rounded-sm overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 border-t-4 border-orange">
              <div className="bg-navy p-8 pb-6">
                <div className="font-display font-black text-4xl text-orange mb-4">01</div>
                <h3 className="font-display font-bold text-2xl text-white uppercase mb-2">For Sponsors</h3>
                <p className="text-orange text-xs font-semibold">Structured market access</p>
              </div>
              <div className="p-8 bg-white">
                <ul className="space-y-3 mb-6">
                  {[
                    'Single, governed access to large hockey audiences',
                    'One agreement replaces dozens of relationships',
                    'Category exclusivity across leagues',
                    'Consistent activation & reporting',
                    'Clear renewal pathways',
                  ].map((benefit, idx) => (
                    <li key={idx} className="flex gap-3 items-start">
                      <span className="text-orange font-bold text-lg flex-shrink-0 mt-0.5">›</span>
                      <p className="text-gray-700 text-sm leading-relaxed">{benefit}</p>
                    </li>
                  ))}
                </ul>
                <div className="pt-4 border-t border-gray-200">
                  <p className="text-orange text-xs italic font-semibold">
                    "Structured market access."
                  </p>
                </div>
              </div>
            </div>

            {/* FOR LEAGUES & ASSOCIATIONS */}
            <div className="bg-white rounded-sm overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 border-t-4 border-orange">
              <div className="bg-navy p-8 pb-6">
                <div className="font-display font-black text-4xl text-orange mb-4">02</div>
                <h3 className="font-display font-bold text-2xl text-white uppercase mb-2">For Leagues & Associations</h3>
                <p className="text-orange text-xs font-semibold">Revenue without overhead</p>
              </div>
              <div className="p-8 bg-white">
                <ul className="space-y-3 mb-6">
                  {[
                    'Access to regional & national sponsors',
                    'Predictable sponsorship revenue',
                    'Reduced internal resource burden',
                    'Centralized pricing & governance',
                    'Local identity preserved',
                  ].map((benefit, idx) => (
                    <li key={idx} className="flex gap-3 items-start">
                      <span className="text-orange font-bold text-lg flex-shrink-0 mt-0.5">›</span>
                      <p className="text-gray-700 text-sm leading-relaxed">{benefit}</p>
                    </li>
                  ))}
                </ul>
                <div className="pt-4 border-t border-gray-200">
                  <p className="text-orange text-xs italic font-semibold">
                    "Revenue without overhead."
                  </p>
                </div>
              </div>
            </div>

            {/* FOR THE HOCKEY ECOSYSTEM */}
            <div className="bg-white rounded-sm overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 border-t-4 border-orange">
              <div className="bg-navy p-8 pb-6">
                <div className="font-display font-black text-4xl text-orange mb-4">03</div>
                <h3 className="font-display font-bold text-2xl text-white uppercase mb-2">For the Hockey Ecosystem</h3>
                <p className="text-orange text-xs font-semibold">Sustainable investment</p>
              </div>
              <div className="p-8 bg-white">
                <ul className="space-y-3">
                  {[
                    'Sustainable investment in grassroots hockey',
                    'Reduced dependency on registration fees',
                    'Stronger corporate partnerships',
                    'Improved sponsor trust & execution',
                  ].map((benefit, idx) => (
                    <li key={idx} className="flex gap-3 items-start">
                      <span className="text-orange font-bold text-lg flex-shrink-0 mt-0.5">›</span>
                      <p className="text-gray-700 text-sm leading-relaxed">{benefit}</p>
                    </li>
                  ))}
                </ul>
                <div className="pt-4 mt-4 border-t border-gray-200">
                  <p className="text-orange text-xs italic font-semibold">
                    "Sustainable investment."
                  </p>
                </div>
              </div>
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
