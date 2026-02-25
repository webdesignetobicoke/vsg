// Home page – based on title slide + opportunity + why aggregation works + what sponsors demand
import Link from 'next/link';
import CtaBanner from '@/components/CtaBanner';

const stats = [
  { value: '~600,000', label: 'Registered Players Nationwide' },
  { value: '3,000+', label: 'Rinks as Year-Round Community Hubs' },
  { value: '$600M–$900M', label: 'Annual Equipment & Apparel Spend' },
  { value: '230,000+', label: 'Registered Team Personnel & Coaches' },
];

const aggregationBenefits = [
  {
    title: 'Larger, Credible Sponsorship Commitments',
    description: 'Platform-level scale attracts corporate partners that will not engage at the individual team level.',
  },
  {
    title: 'Category Protection & Pricing Discipline',
    description: 'Central governance eliminates overlap and preserves long-term category value for all parties.',
  },
  {
    title: 'Reduced Internal Workload',
    description: 'Commercial selling, servicing, and reporting are centralized and managed externally by VSG.',
  },
  {
    title: 'Improved Sponsor Confidence & Retention',
    description: 'Consistency, accountability, and standardized reporting drive renewals season after season.',
  },
  {
    title: 'More Predictable Revenue',
    description: 'Multi-year, platform-based agreements reduce volatility and support long-term planning.',
  },
];

const sponsorDemands = [
  {
    title: 'Fewer Partners, Larger Commitments',
    description: 'Brands are consolidating spend with fewer, higher-impact partners — not spreading thin across dozens of teams.',
  },
  {
    title: 'Protected Categories & Exclusivity',
    description: 'Clear rules around category ownership are now mandatory for serious corporate investment.',
  },
  {
    title: 'Central Governance & Accountability',
    description: 'Sponsors want one contracted authority and one reporting standard — not fragmented team relationships.',
  },
  {
    title: 'Measurable Delivery & ROI',
    description: 'Proof of activation, visibility, and value delivered is no longer optional in the sponsorship market.',
  },
];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative rink-bg pt-40 pb-32 hero-clip overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
            backgroundSize: '64px 64px',
          }}
        />
        <div className="absolute top-0 left-0 right-0 h-1 orange-strip" />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="section-eyebrow fade-in">A Purpose-Built Platform</div>
            <div className="accent-bar" />
            <h1 className="font-display font-black text-6xl md:text-8xl text-white uppercase leading-none tracking-tight mb-6 fade-in fade-in-delay-1">
              Building the<br />
              Commercial<br />
              <span className="text-orange">Infrastructure</span><br />
              for Canadian Hockey
            </h1>
            <p className="text-white/70 text-lg md:text-xl max-w-2xl leading-relaxed mb-10 fade-in fade-in-delay-2">
              Villani Sports Group is a Canadian sports-commercial platform built to organize and scale corporate sponsorship across Junior A hockey leagues and large minor hockey associations. Canadian hockey delivers one of the country's largest participation audiences — yet sponsorship remains fragmented, sold locally, and governed unevenly. VSG solves this by aggregating leagues into centralized, sponsor-ready platforms with standardized categories, unified pricing, and centralized execution.
            </p>
            <div className="flex flex-wrap gap-4 fade-in fade-in-delay-3">
              <Link href="/mission" className="btn-primary px-8 py-4 text-sm">
                Learn Our Mission
              </Link>
              <Link href="/what-we-do" className="btn-outline px-8 py-4 text-sm">
                What We Do
              </Link>
            </div>
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

      {/* THE OPPORTUNITY */}
      <section className="py-24 bg-slate-custom">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="section-eyebrow">The Opportunity</div>
            <div className="accent-bar mx-auto" />
            <h2 className="section-title mb-4">The Scale of Hockey in Canada</h2>
            <p className="text-2xl font-display font-semibold text-navy mt-2">
              A Mass Market, High Frequency, Always-On Audience
            </p>
            <p className="text-gray-500 text-base max-w-3xl mx-auto mt-4 leading-relaxed">
              Hockey is one of the largest, most consistently engaged consumer ecosystems in Canada — yet it remains largely unstructured for corporate sponsors.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {stats.map((stat) => (
              <div
                key={stat.value}
                className="bg-navy rounded-sm p-7 border border-orange/20 hover:border-orange transition-all duration-200 group text-center"
              >
                <div className="font-display font-black text-3xl text-orange group-hover:scale-105 transition-transform leading-none mb-3">
                  {stat.value}
                </div>
                <div className="text-white/70 text-sm leading-relaxed uppercase tracking-wide font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* 2-column detail */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div className="bg-navy rounded-sm p-8 border border-orange/20">
              <h3 className="font-display font-bold text-xl text-orange uppercase mb-1">High Frequency Participation</h3>
              <p className="text-white/50 text-xs uppercase tracking-wider mb-4">Consistent, weekly exposure embedded in family routines</p>
              <ul className="space-y-2 text-white/75 text-sm">
                <li className="flex items-start gap-2"><span className="text-orange mt-0.5">›</span> ~600,000 Registered Players Nationwide</li>
                <li className="flex items-start gap-2"><span className="text-orange mt-0.5">›</span> 2–4 Ice Sessions per week per player, 8–9 Month Season</li>
                <li className="flex items-start gap-2"><span className="text-orange mt-0.5">›</span> 50+ Million Player Ice Sessions Annually</li>
              </ul>
            </div>
            <div className="bg-navy rounded-sm p-8 border border-orange/20">
              <h3 className="font-display font-bold text-xl text-orange uppercase mb-1">Physical Footprint</h3>
              <p className="text-white/50 text-xs uppercase tracking-wider mb-4">Repeated, in-person brand exposure in committed physical environments</p>
              <ul className="space-y-2 text-white/75 text-sm">
                <li className="flex items-start gap-2"><span className="text-orange mt-0.5">›</span> 3,000+ Rinks as Year-Round Community Hubs</li>
                <li className="flex items-start gap-2"><span className="text-orange mt-0.5">›</span> Multiple Weekly Visits per Family</li>
                <li className="flex items-start gap-2"><span className="text-orange mt-0.5">›</span> Long Dwell Time Before & After Ice Sessions</li>
              </ul>
            </div>
            <div className="bg-navy rounded-sm p-8 border border-orange/20">
              <h3 className="font-display font-bold text-xl text-orange uppercase mb-1">High-Engagement Consumer Economy</h3>
              <p className="text-white/50 text-xs uppercase tracking-wider mb-4">Hockey families are high-frequency, needs-based consumers</p>
              <ul className="space-y-2 text-white/75 text-sm">
                <li className="flex items-start gap-2"><span className="text-orange mt-0.5">›</span> $1,000–$1,500 Average Spend per Player, per Year</li>
                <li className="flex items-start gap-2"><span className="text-orange mt-0.5">›</span> $600M–$900M+ in Annual Equipment & Apparel Spend</li>
              </ul>
            </div>
            <div className="bg-navy rounded-sm p-8 border border-orange/20">
              <h3 className="font-display font-bold text-xl text-orange uppercase mb-1">Community Trust at Scale</h3>
              <p className="text-white/50 text-xs uppercase tracking-wider mb-4">A brand-safe environment with trusted community influence</p>
              <ul className="space-y-2 text-white/75 text-sm">
                <li className="flex items-start gap-2"><span className="text-orange mt-0.5">›</span> 230,000+ Registered Team Personnel (Coaches & Bench Staff)</li>
                <li className="flex items-start gap-2"><span className="text-orange mt-0.5">›</span> Tens of Thousands of Volunteers Supporting the Game</li>
                <li className="flex items-start gap-2"><span className="text-orange mt-0.5">›</span> Deep Local Credibility & Parental Trust</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* WHY AGGREGATION WORKS */}
      <section className="rink-bg py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="section-eyebrow">Why Aggregation Works</div>
            <div className="accent-bar mx-auto" />
            <h2 className="font-display font-black text-4xl md:text-6xl text-white uppercase leading-none">
              League & Association Value
            </h2>
            <p className="text-white/60 text-base max-w-2xl mx-auto mt-4">
              Aggregation delivers structural benefits that individual teams cannot achieve alone.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {aggregationBenefits.map((benefit) => (
              <div
                key={benefit.title}
                className="bg-navy/80 border border-orange/30 hover:border-orange rounded-sm p-6 flex flex-col gap-3 transition-all duration-200 group"
              >
                <div className="w-1 h-8 bg-orange" />
                <h3 className="font-display font-bold text-base text-white leading-tight uppercase group-hover:text-orange transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-white/60 text-xs leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 py-5 px-8 bg-navy/60 border-l-4 border-orange rounded-sm">
            <p className="text-white/80 text-sm italic">
              <strong className="text-orange not-italic uppercase tracking-wide text-xs">The Net Effect — </strong>
              Leagues & associations gain commercial scale without adding staff or changing hockey operations.
            </p>
          </div>
        </div>
      </section>

      {/* WHAT SPONSORS ARE DEMANDING */}
      <section className="py-24 bg-slate-custom">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="section-eyebrow">How the Market Has Changed</div>
            <div className="accent-bar mx-auto" />
            <h2 className="section-title mb-4">What Sponsors Are Demanding Today</h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-base">
              Corporate partners now expect professional, platform-level programs — not fragmented team-by-team relationships.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {sponsorDemands.map((item, i) => (
              <div
                key={item.title}
                className="bg-white rounded-sm p-7 border border-gray-100 hover:border-orange/50 shadow-sm hover:shadow-md transition-all duration-200 flex gap-5"
              >
                <div className="w-10 h-10 rounded-full bg-navy flex items-center justify-center text-orange font-display font-black text-lg flex-shrink-0 mt-1">
                  {i + 1}
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg text-navy uppercase leading-tight mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 bg-navy rounded-sm p-6 text-center">
            <p className="text-xs text-orange uppercase tracking-widest font-semibold mb-1">The Shift</p>
            <p className="text-white text-base italic">
              Sponsors are moving away from fragmented team-level programs toward governed, scalable platforms.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CtaBanner
        title="Transform Fragmented Sponsorship Into Scalable Platforms"
        subtitle="VSG manages the commercial platform so leagues and associations can focus on governing the game."
        buttonLabel="Schedule an Introductory Discussion"
        buttonHref="/contact"
      />
    </>
  );
}
