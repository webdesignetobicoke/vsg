// About page – Founder bio, mission, VSG solution snapshot, what VSG does NOT do, next steps
import Link from 'next/link';
import CtaBanner from '@/components/CtaBanner';

const notDo = [
  {
    title: 'No Team-Level Sponsorship Selling',
    description: 'All commercial activity is governed at the platform level. Individual teams are removed from commercial sales activity.',
  },
  {
    title: 'No One-Off or Short-Term Deals',
    description: 'Partnerships are structured to support renewal and long-term stability — not one-season arrangements.',
  },
  {
    title: 'No Category Overlap or Dilution',
    description: 'Exclusivity is defined and enforced centrally. One sponsor per category, governed at the league or association level.',
  },
  {
    title: 'No Disruption to Hockey Operations',
    description: 'Competition, scheduling, rules, and governance remain completely unchanged.',
  },
  {
    title: 'No Expansion Without Proof',
    description: 'Scale follows performance, not pressure. VSG grows only when results validate the next step.',
  },
];

const nextSteps = [
  {
    num: 1,
    title: 'Introductory Discussion',
    description: 'Confirm strategic alignment, governance fit, and mutual interest between VSG and your organization.',
  },
  {
    num: 2,
    title: 'Property & Governance Review',
    description: 'Review organizational structure, commercial authority, and platform scope to assess fit.',
  },
  {
    num: 3,
    title: 'Platform Design',
    description: 'Define sponsorship categories, exclusivity rules, and the Year 1 commercial framework together.',
  },
  {
    num: 4,
    title: 'Commercial Launch',
    description: 'Formalize the partnership and initiate controlled, founder-led sponsor outreach and execution.',
  },
];

export default function AboutPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative rink-bg pt-40 pb-24 hero-clip overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1 orange-strip" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="section-eyebrow">Who We Are</div>
          <div className="accent-bar" />
          <h1 className="font-display font-black text-6xl md:text-8xl text-white uppercase leading-none tracking-tight mb-4">
            About<br /><span className="text-orange">Our Founder</span>
          </h1>
          <p className="text-white/60 text-lg max-w-xl">
            15+ years building large-scale commercial partnerships across Canadian sport and entertainment.
          </p>
        </div>
      </section>

      {/* FOUNDER BIO */}
      <section className="py-24 bg-slate-custom">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Photo placeholder */}
            <div className="relative">
              <div className="aspect-[4/5] bg-navy rounded-sm overflow-hidden border-4 border-orange/30">
                <img
                  src="https://via.placeholder.com/600x750/021b3b/f36b21?text=Michael+Villani"
                  alt="Michael Villani, Founder of Villani Sports Group"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-orange px-6 py-3">
                <p className="text-white font-display font-bold text-sm uppercase tracking-wide">Founder & Principal</p>
              </div>
            </div>

            {/* Bio text */}
            <div>
              <div className="section-eyebrow">Michael Villani</div>
              <div className="accent-bar" />
              <h2 className="section-title mb-6">
                Senior Sales & Partnerships Executive
              </h2>
              <div className="space-y-5 text-gray-600 text-base leading-relaxed">
                <p>
                  Michael Villani is a senior sales and partnerships executive with over 15 years of experience building and managing large-scale commercial partnerships, combined with lifelong involvement in Canadian hockey.
                </p>
                <p>
                  Most recently, Michael served as <strong className="text-navy">National Sales Director at Carlsberg Group</strong>, where he led a national sales organization, managed over <strong className="text-navy">$150M in annual revenue</strong>, and negotiated multi-year corporate partnerships across retail, hospitality, sports, and entertainment.
                </p>
                <p>
                  His background includes league-level partnerships with organizations such as the <strong className="text-navy">Canadian Hockey League, Ontario Hockey League, Memorial Cup, Toronto FC, and Canada Soccer</strong> — requiring the same centralized strategy, pricing discipline, and activation governance that underpin Villani Sports Group.
                </p>
                <p>
                  Michael played Junior A hockey with the Brooks Bandits (AJHL) and Huntsville Wildcats (OPJHL) and remains actively involved in the game today, coaching minor hockey in the GTHL.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-4 mt-10">
                {[
                  { value: '15+', label: 'Years Experience' },
                  { value: '$150M+', label: 'Revenue Managed' },
                  { value: 'CHL · OHL', label: 'League Partnerships' },
                ].map((kpi) => (
                  <div key={kpi.value} className="bg-navy rounded-sm p-4 text-center">
                    <div className="font-display font-black text-2xl text-orange">{kpi.value}</div>
                    <div className="text-white/60 text-xs uppercase tracking-wide mt-1">{kpi.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION STATEMENT */}
      <section className="rink-bg py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="section-eyebrow">Our Mission</div>
          <div className="accent-bar mx-auto" />
          <blockquote className="font-display font-black text-3xl md:text-5xl text-white italic leading-tight">
            "Villani Sports Group exists to organize and aggregate Canadian hockey into centralized, sponsor-ready platforms that enable scalable, long-term corporate investment — while preserving local identity & hockey governance."
          </blockquote>
        </div>
      </section>

      {/* VSG SOLUTION SNAPSHOT */}
      <section className="py-24 bg-slate-custom">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="section-eyebrow">The VSG Solution</div>
            <div className="accent-bar mx-auto" />
            <h2 className="section-title">How VSG Works</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Aggregation Across Leagues or Associations',
                points: ['Multiple properties unified under one commercial framework', 'Scale that individual teams cannot achieve alone', 'Platform-level reach for corporate partners'],
              },
              {
                title: 'Platform-Level Sponsorship Categories',
                points: ['Categories defined centrally & applied across all properties', 'One sponsor per category — enforced at the league level', 'Standardized asset bundles across all teams & venues'],
              },
              {
                title: 'Centralized Pricing, Contracts & Reporting',
                points: ['One rate card. One contract structure. One commercial authority.', 'Unified activation & reporting frameworks', 'Multi-year orientation for stability & renewal'],
              },
            ].map((col) => (
              <div key={col.title} className="bg-navy rounded-sm p-8 border border-orange/20 hover:border-orange/60 transition-all">
                <div className="w-1 h-8 bg-orange mb-4" />
                <h3 className="font-display font-bold text-lg text-white uppercase mb-4 leading-tight">{col.title}</h3>
                <ul className="space-y-2">
                  {col.points.map((pt) => (
                    <li key={pt} className="flex items-start gap-2 text-white/65 text-sm">
                      <span className="text-orange mt-0.5 flex-shrink-0">›</span>
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT VSG DOES NOT DO */}
      <section className="py-24 bg-navy">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="section-eyebrow">How We Protect Long-Term Value</div>
            <div className="accent-bar mx-auto" />
            <h2 className="font-display font-black text-4xl md:text-6xl text-white uppercase leading-none">
              What VSG Does <span className="text-orange underline decoration-orange">NOT</span> Do
            </h2>
            <p className="text-white/50 mt-4 text-sm italic">Discipline today protects value tomorrow.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {notDo.map((item) => (
              <div
                key={item.title}
                className="bg-navy-mid border border-white/10 hover:border-orange rounded-sm p-6 flex flex-col gap-3 transition-all duration-200 group"
              >
                <div className="text-orange text-2xl font-black">✕</div>
                <h3 className="font-display font-bold text-sm text-white uppercase leading-tight group-hover:text-orange transition-colors">
                  {item.title}
                </h3>
                <p className="text-white/50 text-xs leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NEXT STEPS */}
      <section className="py-24 bg-slate-custom">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="section-eyebrow">Path to Partnership</div>
            <div className="accent-bar mx-auto" />
            <h2 className="section-title">Next Steps</h2>
            <p className="text-gray-500 mt-4 max-w-xl mx-auto text-sm">
              Exploring a partnership with Villani Sports Group follows a structured, low-risk process designed to move at your pace.
            </p>
          </div>

          <div className="relative">
            {/* Connector line */}
            <div className="hidden md:block absolute top-10 left-10 right-10 h-0.5 bg-orange-DEFAULT/20" />
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
              {nextSteps.map((step) => (
                <div key={step.num} className="bg-white rounded-sm p-6 border border-gray-100 shadow-sm hover:shadow-md hover:border-orange/40 transition-all">
                  <div className="w-12 h-12 rounded-full bg-navy flex items-center justify-center text-orange font-display font-black text-xl mb-4 border-2 border-orange">
                    {step.num}
                  </div>
                  <h3 className="font-display font-bold text-base text-navy uppercase mb-2 leading-tight">{step.title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CtaBanner
        title="Ready to Start the Conversation?"
        subtitle="The process is structured, transparent, and moves at your pace."
        buttonLabel="Schedule an Introductory Discussion"
        buttonHref="/contact"
      />
    </>
  );
}
