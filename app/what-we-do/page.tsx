// What We Do page

import Card from '@/components/Card';
import ServiceCard from '@/components/ServiceCard';
import CtaBanner from '@/components/CtaBanner';

export default function WhatWeDoPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative rink-bg pt-40 pb-32 hero-clip overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1 orange-strip" />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="font-display font-black text-6xl md:text-8xl text-white uppercase leading-none tracking-tight mb-6 fade-in fade-in-delay-1">
              What We<br />
              <span className="text-orange">Do</span>
            </h1>
            <div className="bg-orange/10 border border-orange/30 rounded-sm p-8 mb-12 fade-in fade-in-delay-2">
              <p className="text-white text-2xl md:text-3xl font-display font-semibold leading-relaxed">
                VSG handles all sponsorship sales, activation strategy, category governance, and reporting — so league operators focus on on-ice performance.
              </p>
            </div>
            <p className="text-white font-display font-black text-xl uppercase tracking-wide fade-in fade-in-delay-3">
              Focused<span className="text-orange">.</span> Governed<span className="text-orange">.</span> Built to Scale<span className="text-orange">.</span>
            </p>
          </div>
        </div>
      </section>

      {/* WHO WE SERVE */}
      <section className="py-24 bg-slate-custom">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="section-eyebrow">Our Partners</div>
            <div className="accent-bar mx-auto" />
            <h2 className="section-title mb-4">Who We Serve</h2>
            <p className="text-gray-500 text-base max-w-3xl mx-auto leading-relaxed">
              We partner with Canadian hockey organizations that are committed to professional sponsorship strategy and transparent governance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card
              number="01"
              title="Junior A Hockey Leagues"
              description="We partner with Canadian Junior A leagues that operate multiple teams across defined regions and require a professional, centralized approach to sponsorship strategy and execution."
              variant="navy"
              size="lg"
            />
            <Card
              number="02"
              title="Large Minor Hockey Associations"
              description="We work with well-run minor hockey associations that deliver high-frequency participation, strong family engagement, and meaningful community reach — but lack the scale to attract larger corporate partners independently."
              variant="navy"
              size="lg"
            />
          </div>
        </div>
      </section>

      {/* OUR SERVICE SUITE */}
      <section className="py-24 bg-slate-custom">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="section-eyebrow">Our Capabilities</div>
            <div className="accent-bar mx-auto" />
            <h2 className="section-title mb-4">Our Service Suite</h2>
            <p className="text-gray-500 text-base max-w-3xl mx-auto leading-relaxed">
              Five integrated services designed to work together as one unified platform.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'AGGREGATED SPONSORSHIP STRATEGY & SALES',
                description: 'We design and sell multi-property sponsorship platforms aligned with how regional and national sponsors actually buy.',
              },
              {
                title: 'PLATFORM & CATEGORY ARCHITECTURE',
                description: 'We define standardized sponsorship categories, pricing structures, tiered partnership levels, and platform-wide category exclusivity.',
              },
              {
                title: 'CENTRALIZED SALES & CONTRACTING',
                description: 'VSG leads sponsor outreach, negotiations, contracting, and renewal strategy across the aggregated platform.',
              },
              {
                title: 'ACTIVATION GOVERNANCE & REPORTING',
                description: 'We govern activation standards, coordinate delivery, and provide consistent reporting — ensuring accountability and sponsor confidence.',
              },
              {
                title: 'RENEWAL & PLATFORM EXPANSION STRATEGY',
                description: 'We prioritize multi-year partnerships and structured renewals, enabling sponsors to scale with the platform over time.',
              },
            ].map((service, idx) => (
              <ServiceCard key={service.title} number={idx + 1} title={service.title} description={service.description} />
            ))}
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
