// What We Do page
import CtaBanner from '@/components/CtaBanner';

export default function WhatWeDoPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative rink-bg pt-40 pb-24 hero-clip overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1 orange-strip" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="section-eyebrow">VSG Service Offering</div>
          <div className="accent-bar mx-auto" />
          <h1 className="font-display font-black text-6xl md:text-8xl text-white uppercase leading-none tracking-tight mb-6">
            What We<br />
            <span className="text-orange">Do</span>
          </h1>
        </div>
      </section>

      {/* WHO WE SERVE */}
      <section className="py-24 bg-navy">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display font-black text-4xl text-white uppercase mb-2">Who We Serve</h2>
          </div>

          <div className="space-y-8">
            {[
              {
                title: 'Junior A Hockey Leagues',
                description: 'We partner with Canadian Junior A leagues that operate multiple teams across defined regions and require a professional, centralized approach to sponsorship strategy and execution.',
              },
              {
                title: 'Large Minor Hockey Associations',
                description: 'We work with well-run minor hockey associations that deliver high-frequency participation, strong family engagement, and meaningful community reach — but lack the scale to attract larger corporate partners independently.',
              },
            ].map((item) => (
              <div key={item.title} className="bg-navy-mid border-l-4 border-orange rounded-sm p-7">
                <h3 className="font-display font-bold text-white text-xl uppercase mb-3">{item.title}</h3>
                <p className="text-white/80 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OUR SERVICE SUITE */}
      <section className="py-24 bg-slate-custom">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="section-eyebrow">Our Service Offering</div>
            <div className="accent-bar mx-auto" />
            <h2 className="section-title">Our Service Suite</h2>
          </div>

          <div className="space-y-6">
            {[
              {
                title: 'Aggregated Sponsorship Strategy & Sales',
                description: 'We design and sell multi-property sponsorship platforms aligned with how regional and national sponsors actually buy.',
              },
              {
                title: 'Platform & Category Architecture',
                description: 'We define standardized sponsorship categories, pricing structures, tiered partnership levels, and platform-wide category exclusivity.',
              },
              {
                title: 'Centralized Sales & Contracting',
                description: 'VSG leads sponsor outreach, negotiations, contracting, and renewal strategy across the aggregated platform.',
              },
              {
                title: 'Activation Governance & Reporting',
                description: 'We govern activation standards, coordinate delivery, and provide consistent reporting — ensuring accountability and sponsor confidence.',
              },
              {
                title: 'Renewal & Platform Expansion Strategy',
                description: 'We prioritize multi-year partnerships and structured renewals, enabling sponsors to scale with the platform over time.',
              },
            ].map((service, idx) => (
              <div key={service.title} className="bg-white rounded-sm border border-gray-200 hover:border-orange/50 transition-all p-7 shadow-sm hover:shadow-md">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-navy flex items-center justify-center text-orange font-display font-black text-lg">
                      {idx + 1}
                    </div>
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-navy uppercase text-lg mb-2">{service.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-navy rounded-sm p-8 text-center">
            <p className="text-orange text-xs uppercase tracking-widest font-semibold mb-2">Integration Focus</p>
            <p className="text-white text-base italic">
              Every service is designed to integrate seamlessly — creating one unified platform with clear governance, transparent communication, and predictable outcomes.
            </p>
          </div>
        </div>
      </section>

      <CtaBanner
        title="Curious About a Partnership?"
        subtitle="Learn how VSG's integrated service model can transform your sponsorship revenue and operational efficiency."
        buttonLabel="Get in Touch"
        buttonHref="/contact"
      />
    </>
  );
}
