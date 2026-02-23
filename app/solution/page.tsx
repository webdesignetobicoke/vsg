// Solution page – VSG Solution, Aggregation Strategy, Rollout Timeline, Revenue Model, Go-To-Market
import CtaBanner from '@/components/CtaBanner';

const pillars = [
  { label: 'Aggregation Across\nLeagues or Associations', pos: 'top' },
  { label: 'Platform-Level\nSponsor Categories', pos: 'right' },
  { label: 'Centralized Pricing,\nContracts & Reporting', pos: 'bottom' },
  { label: 'Multi-Year\nCommercial Discipline', pos: 'left' },
];

const timeline = [
  {
    num: 1,
    phase: 'Platform Onboarding & Alignment',
    timing: 'Now',
    bullets: [
      'Confirm centralized commercial authority',
      'Finalize sponsorship categories & exclusivity rules',
      'Align participating teams & stakeholders',
      'Prepare sponsor-ready materials & contracts',
    ],
    outcome: 'Centralized commercial authority approved · Platform sponsorship categories locked',
  },
  {
    num: 2,
    phase: 'Category Lock & Sponsor Outreach',
    timing: 'Pre-Season',
    bullets: [
      'Lock platform-level categories',
      'Founder-led sponsor outreach begins',
      'Focus on a small number of priority partners',
      'Negotiate multi-year oriented agreements',
    ],
    outcome: '3–6 platform sponsorship commitments · Team-level selling eliminated',
  },
  {
    num: 3,
    phase: 'Activation & In-Season Delivery',
    timing: 'Early–Mid Season',
    bullets: [
      'Execute standardized activation frameworks',
      'Support teams with clear execution playbooks',
      'Centralize tracking & reporting',
      'Ongoing sponsor communication',
    ],
    outcome: 'Standardized sponsorship activation executed · Consolidated sponsor reporting package',
  },
  {
    num: 4,
    phase: 'Review, Renewal & Expansion Planning',
    timing: 'Late/Post Season',
    bullets: [
      'Performance & delivery review',
      'Sponsor renewal discussions',
      'Refine platform for Year 2',
      'Assess additional categories & properties',
    ],
    outcome: 'Renewal intent established on Year 1 sponsors · Year 2 expansion confirmed',
  },
];

const gtmCards = [
  {
    num: 1,
    title: 'Founder-Led Sponsor Outreach',
    description: 'Senior-level engagement with decision-makers at regional and national brands — not junior sales staff.',
  },
  {
    num: 2,
    title: 'Platform-First Selling',
    description: 'Sponsorships are sold at the league or association level — not by individual teams or clubs.',
  },
  {
    num: 3,
    title: 'Fewer, Higher-Quality Partners',
    description: 'Priority is placed on category leaders capable of multi-year investment and meaningful activation.',
  },
  {
    num: 4,
    title: 'Defined Sales Windows',
    description: 'Structured outreach periods are aligned to the season calendar for maximum sponsor engagement.',
  },
  {
    num: 5,
    title: 'No Team-Level Selling',
    description: 'Teams are removed from commercial sales activity entirely — protecting platform integrity and value.',
  },
];

export default function SolutionPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative rink-bg pt-40 pb-24 hero-clip overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1 orange-strip" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="section-eyebrow">The VSG Model</div>
          <div className="accent-bar mx-auto" />
          <h1 className="font-display font-black text-6xl md:text-8xl text-white uppercase leading-none tracking-tight mb-6">
            From Fragmentation<br />
            <span className="text-orange">to Sponsor-Ready</span><br />
            Platforms
          </h1>
          <p className="text-white/70 text-lg max-w-3xl mx-auto">
            VSG transforms decentralized sponsorship activity into a governed, scalable commercial platform — without disrupting hockey operations.
          </p>
        </div>
      </section>

      {/* THE VSG SOLUTION – 4-pillar diagram */}
      <section className="py-24 bg-slate-custom">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="section-eyebrow">The VSG Solution</div>
            <div className="accent-bar mx-auto" />
            <h2 className="section-title">Four Core Pillars</h2>
            <p className="text-gray-500 mt-4 text-base max-w-2xl mx-auto">
              VSG transforms decentralized sponsorship activity into a governed, scalable commercial platform.
            </p>
          </div>

          {/* Pillar grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto mb-6">
            {pillars.map((p) => (
              <div
                key={p.label}
                className="bg-navy border-2 border-orange rounded-sm p-6 text-center hover:bg-navy-light transition-all"
              >
                <p className="text-white font-display font-bold text-base uppercase leading-tight whitespace-pre-line">
                  {p.label}
                </p>
              </div>
            ))}
          </div>

          {/* Central tag */}
          <div className="max-w-3xl mx-auto bg-navy-dark border border-orange/50 rounded-sm p-6 text-center">
            <div className="font-display font-black text-sm text-orange uppercase tracking-widest mb-2">What Changes?</div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-sm text-white/70">
              <span>Many Sellers <strong className="text-orange">→</strong> One Commercial Authority</span>
              <span className="hidden sm:block text-white/20">|</span>
              <span>Inconsistent Value <strong className="text-orange">→</strong> Standardized, Sponsor-Ready Programs</span>
            </div>
          </div>
        </div>
      </section>

      {/* AGGREGATION STRATEGY */}
      <section className="py-24 bg-navy">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="section-eyebrow">Year 1 Strategy</div>
            <div className="accent-bar mx-auto" />
            <h2 className="font-display font-black text-4xl md:text-6xl text-white uppercase leading-none">
              Aggregation Strategy
            </h2>
            <p className="text-white/50 mt-4 text-sm">From Individual Properties to Sponsor-Ready Platforms</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
            {/* Fragmented */}
            <div className="bg-navy-mid border border-white/10 rounded-sm p-6">
              <h3 className="font-display font-bold text-base text-white/60 uppercase mb-4 border-b border-white/10 pb-3">
                Fragmented Properties
              </h3>
              <p className="text-white/50 text-xs leading-relaxed">
                Many individual associations and teams each selling sponsorships independently — resulting in inconsistent pricing, category conflicts, and limited corporate appeal.
              </p>
              <div className="mt-4 grid grid-cols-2 gap-2">
                {['MHA 1', 'MHA 2', 'MHA 3', 'MHA 4', 'Team A', 'Team B'].map(t => (
                  <div key={t} className="bg-navy-dark/50 border border-white/10 rounded-sm px-3 py-1.5 text-white/40 text-xs text-center font-medium">{t}</div>
                ))}
              </div>
            </div>

            {/* Engine */}
            <div className="bg-orange/10 border-2 border-orange rounded-sm p-6 flex flex-col items-center justify-center text-center gap-4">
              <svg width="48" height="48" viewBox="0 0 100 100" fill="none">
                <path d="M10 10 L50 85 L90 10 L72 10 L50 55 L28 10 Z" fill="#f36b21"/>
                <path d="M32 10 L50 50 L68 10 Z" fill="#021b3b"/>
              </svg>
              <h3 className="font-display font-black text-lg text-white uppercase">VSG Aggregation Engine</h3>
              <ul className="space-y-2 text-sm text-white/80">
                <li className="flex items-center gap-2 justify-center"><span className="text-orange">▶</span> Category Standardization</li>
                <li className="flex items-center gap-2 justify-center"><span className="text-orange">▶</span> Centralized Sales & Governance</li>
                <li className="flex items-center gap-2 justify-center"><span className="text-orange">▶</span> Unified Activation & Reporting</li>
              </ul>
            </div>

            {/* Platforms */}
            <div className="bg-navy-mid border border-white/10 rounded-sm p-6">
              <h3 className="font-display font-bold text-base text-orange uppercase mb-4 border-b border-orange/20 pb-3">
                Sponsor-Ready Platforms
              </h3>
              <div className="space-y-4">
                <div className="bg-navy-dark/50 border border-orange/20 rounded-sm p-4">
                  <p className="text-orange text-xs uppercase font-bold tracking-wider mb-1">Platform #1 — Junior A Leagues</p>
                  <p className="text-white/60 text-xs">3 Leagues · 59 Teams · Province-wide Footprint</p>
                </div>
                <div className="bg-navy-dark/50 border border-orange/20 rounded-sm p-4">
                  <p className="text-orange text-xs uppercase font-bold tracking-wider mb-1">Platform #2 — Toronto Minor Hockey</p>
                  <p className="text-white/60 text-xs">6 Associations · 5k–7k Families · High Frequency Seasonal Exposure</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 py-4 px-6 bg-navy-mid border-l-4 border-orange text-center rounded-sm">
            <p className="text-white/70 text-sm italic">
              Aggregation converts dozens of fragmented properties into a small number of high-value, sponsor-ready platforms.
            </p>
          </div>
        </div>
      </section>

      {/* ROLLOUT TIMELINE */}
      <section className="py-24 bg-slate-custom">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="section-eyebrow">What Year 1 Looks Like</div>
            <div className="accent-bar mx-auto" />
            <h2 className="section-title">Year 1 Rollout Timeline</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
            {timeline.map((step) => (
              <div key={step.num} className="flex flex-col">
                <div className="bg-navy rounded-sm p-6 border border-orange/20 hover:border-orange transition-all flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-orange flex items-center justify-center font-display font-black text-white text-lg flex-shrink-0">
                      {step.num}
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-sm text-white uppercase leading-tight">{step.phase}</h3>
                      <p className="text-orange text-xs">({step.timing})</p>
                    </div>
                  </div>
                  <ul className="space-y-1.5">
                    {step.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2 text-white/65 text-xs">
                        <span className="text-orange mt-0.5 flex-shrink-0">›</span>
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-3 bg-navy-mid border border-orange/30 rounded-sm p-3">
                  <p className="text-orange text-[10px] font-semibold uppercase tracking-wide mb-1">Outcome</p>
                  <p className="text-white/60 text-xs leading-relaxed">{step.outcome}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REVENUE MODEL */}
      <section className="rink-bg py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="section-eyebrow">How VSG Is Compensated</div>
              <div className="accent-bar" />
              <h2 className="font-display font-black text-4xl md:text-5xl text-white uppercase leading-none mb-4">
                Commission & Revenue Model
              </h2>
              <p className="text-orange text-sm italic">Aligned, Performance-Based Compensation</p>
              <p className="text-white/60 text-sm mt-4 leading-relaxed">
                Designed to align incentives, limit risk, and support long-term partnerships.
              </p>
            </div>
            <div className="space-y-4">
              {[
                { title: 'Commission-Based Only', description: 'No retainers, no fixed fees, no upfront costs to the league or association.' },
                { title: 'Paid on Contracted & Collected Value', description: 'Compensation is earned only after sponsorship revenue is secured and received.' },
                { title: 'Conservative Treatment of In-Kind Value', description: 'In-kind benefits are recognized only when they deliver verified, realized value.' },
                { title: 'Aligned Incentives', description: 'VSG succeeds only when sponsorships perform, renew, and deliver value to the league or association.' },
              ].map((item) => (
                <div key={item.title} className="bg-navy/80 border border-orange/20 hover:border-orange rounded-sm p-5 transition-all flex gap-4">
                  <div className="w-1.5 h-auto bg-orange rounded-full flex-shrink-0" />
                  <div>
                    <h4 className="font-display font-bold text-white uppercase text-sm">{item.title}</h4>
                    <p className="text-white/60 text-xs mt-1 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* GO-TO-MARKET */}
      <section className="py-24 bg-slate-custom">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="section-eyebrow">How Sponsors Are Engaged</div>
            <div className="accent-bar mx-auto" />
            <h2 className="section-title">Go-To-Market Approach</h2>
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto text-sm">
              VSG leads a focused, governed sales process designed for quality over volume.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5">
            {gtmCards.map((card) => (
              <div
                key={card.num}
                className="bg-white border border-gray-100 hover:border-orange/50 rounded-sm p-6 shadow-sm hover:shadow-md transition-all flex flex-col gap-4"
              >
                <div className="w-12 h-12 rounded-full bg-navy flex items-center justify-center text-orange font-display font-black text-xl">
                  {card.num}
                </div>
                <h3 className="font-display font-bold text-sm text-navy uppercase leading-tight">{card.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{card.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 bg-navy rounded-sm p-5 text-center">
            <p className="text-orange text-xs uppercase tracking-widest font-semibold mb-1">Bottom Line</p>
            <p className="text-white text-sm italic">Disciplined go-to-market execution protects long-term commercial value.</p>
          </div>
        </div>
      </section>

      <CtaBanner
        title="See the Full VSG Platform in Action"
        subtitle="Ready to move from fragmented sponsorship to a governed, scalable commercial platform?"
        buttonLabel="Schedule an Introductory Discussion"
        buttonHref="/contact"
      />
    </>
  );
}
