// Why VSG page
import CtaBanner from '@/components/CtaBanner';

export default function WhyVSGPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative rink-bg pt-40 pb-24 hero-clip overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1 orange-strip" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="section-eyebrow">What Sets Us Apart</div>
          <div className="accent-bar mx-auto" />
          <h1 className="font-display font-black text-6xl md:text-8xl text-white uppercase leading-none tracking-tight mb-6">
            Why<br />
            <span className="text-orange">VSG?</span>
          </h1>
        </div>
      </section>

      {/* WHY VSG CONTENT */}
      <section className="py-24 bg-navy">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-10">
            <div>
              <h2 className="font-display font-bold text-4xl text-white mb-4">Why VSG</h2>
              <p className="text-white/90 text-lg leading-relaxed">
                Villani Sports Group is not a transactional sponsorship agency.
              </p>
            </div>

            <div className="border-l-4 border-orange pl-6 py-4">
              <p className="text-white/80 text-base leading-relaxed">
                We are a purpose-built commercial platform designed to aggregate, govern, and scale sponsorship revenue through disciplined execution — not headcount growth.
              </p>
            </div>

            <div>
              <h3 className="font-display font-bold text-2xl text-white mb-6">Our Model is:</h3>
              <div className="space-y-4">
                {[
                  {
                    title: 'Centralized',
                    description: 'One strategy, one pricing framework, one governance structure',
                  },
                  {
                    title: 'Aligned',
                    description: 'Revenue tied directly to sponsor performance and renewal',
                  },
                  {
                    title: 'Disciplined',
                    description: 'Expansion gated by results, not ambition',
                  },
                  {
                    title: 'Scalable',
                    description: 'Growth driven by aggregation, not complexity',
                  },
                ].map((pillar) => (
                  <div key={pillar.title} className="bg-navy-mid border-l-4 border-orange rounded-sm p-5 flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-orange flex items-center justify-center text-navy font-display font-black text-lg flex-shrink-0">
                        ◆
                      </div>
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-white uppercase text-base mb-1">{pillar.title}</h4>
                      <p className="text-white/75 text-sm leading-relaxed">{pillar.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 bg-navy/50 border-2 border-orange rounded-sm p-8 text-center">
              <p className="text-orange font-display font-bold uppercase tracking-widest text-sm mb-3">Our Promise</p>
              <p className="text-white text-base italic leading-relaxed">
                Built for discipline. Designed for growth. Committed to results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* NEXT STEPS */}
      <section className="py-24 bg-slate-custom">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="section-eyebrow">Getting Started</div>
            <div className="accent-bar mx-auto" />
            <h2 className="section-title">Partnership Process</h2>
            <p className="text-gray-600 text-sm mt-3">A structured, low-risk approach to partnership exploration</p>
          </div>

          <div className="max-w-3xl mx-auto">
            <p className="text-center text-gray-700 text-base mb-12 font-semibold">
              Exploring a partnership with Villani Sports Group follows a structured, low-risk process:
            </p>

            <div className="space-y-4">
              {[
                {
                  step: '1',
                  title: 'Introductory Discussion',
                  description: 'Confirm strategic alignment, governance fit & mutual interest.',
                },
                {
                  step: '2',
                  title: 'Property & Governance Review',
                  description: 'Review organizational structure, commercial authority & platform scope.',
                },
                {
                  step: '3',
                  title: 'Platform Design',
                  description: 'Define sponsorship categories, exclusivity rules & Year 1 commercial framework.',
                },
                {
                  step: '4',
                  title: 'Commercial Launch',
                  description: 'Formalize the partnership & initiate controlled sponsor outreach & execution.',
                },
              ].map((item) => (
                <div key={item.step} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-navy flex items-center justify-center text-orange font-display font-bold text-lg">
                      {item.step}
                    </div>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-sm p-5 flex-1">
                    <h4 className="font-display font-bold text-navy uppercase text-base mb-1">{item.title}</h4>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 bg-navy rounded-sm p-8 text-center border-2 border-orange">
              <p className="text-white/80 text-sm italic">
                Designed to move at your pace, with full transparency & clear alignment throughout.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner
        title="Ready to Get Started?"
        subtitle="Connect with Michael Villani to discuss how VSG can unlock new sponsorship revenue for your organization."
        buttonLabel="Schedule a Conversation"
        buttonHref="/contact"
      />
    </>
  );
}
