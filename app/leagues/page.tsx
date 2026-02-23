// Leagues page – current commercial reality, why aggregation works, governance, target partner profile
import CtaBanner from '@/components/CtaBanner';

const challenges = [
  {
    title: 'Fragmented Selling Models',
    description: 'Teams operate independently, resulting in inconsistent pricing, assets, and sponsor value across the league or association.',
  },
  {
    title: 'Category Conflict & Dilution',
    description: 'Overlapping sponsors weaken exclusivity and erode long-term category value for all parties involved.',
  },
  {
    title: 'Operational Strain',
    description: 'Volunteers and staff are expected to sell, service, and report on sponsorships — often without commercial expertise or capacity.',
  },
  {
    title: 'Declining Sponsor Confidence',
    description: 'Brands increasingly question scale, professionalism, and measurable return from grassroots and junior hockey programs.',
  },
];

const aggregationBenefits = [
  {
    title: 'Larger, Credible Sponsorship Commitments',
    description: 'Platform-level scale attracts partners that will not engage at the individual team level.',
  },
  {
    title: 'Category Protection & Pricing Discipline',
    description: 'Central governance eliminates overlap and preserves long-term category value.',
  },
  {
    title: 'Reduced Internal Workload',
    description: 'Commercial selling, servicing, and reporting are centralized and managed externally by VSG.',
  },
  {
    title: 'Improved Sponsor Confidence & Retention',
    description: 'Consistency, accountability, and reporting drive renewals year after year.',
  },
  {
    title: 'More Predictable Revenue',
    description: 'Multi-year, platform-based agreements reduce volatility and support long-term planning.',
  },
];

const vsgResponsible = [
  'Aggregated sponsorship strategy & sales',
  'Sponsorship pricing & category governance',
  'Sponsor contracting & renewals',
  'Centralized reporting & performance review',
  'Activation frameworks & sponsor servicing',
];

const leagueRetains = [
  'Hockey operations, rules & governance',
  'Scheduling, competition & discipline',
  'Team / League / Association branding & identity',
  'Community, member & stakeholder relationships',
  'Local execution support (as applicable)',
];

const partnerProfile = [
  {
    num: 1,
    title: 'Strong Central Governance',
    description: 'Clear authority to set and enforce commercial standards across all member teams.',
  },
  {
    num: 2,
    title: 'Meaningful Scale',
    description: 'Typically 8+ teams or 1,000+ registered players to deliver the reach corporate partners require.',
  },
  {
    num: 3,
    title: 'Long-Term Value Mindset',
    description: 'Preference for sustainable, growing revenue over one-off or short-term deals.',
  },
  {
    num: 4,
    title: 'Willingness to Centralize Commercial Rights',
    description: 'Alignment around category governance and exclusivity at the platform level.',
  },
  {
    num: 5,
    title: 'Commitment to Professionalism',
    description: 'Interest in sponsor-ready processes, standardized reporting, and commercial accountability.',
  },
];

export default function LeaguesPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative rink-bg pt-40 pb-24 hero-clip overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1 orange-strip" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="section-eyebrow">For Leagues & Associations</div>
          <div className="accent-bar mx-auto" />
          <h1 className="font-display font-black text-6xl md:text-8xl text-white uppercase leading-none tracking-tight mb-6">
            Commercial Scale<br />
            <span className="text-orange">Without Disruption</span>
          </h1>
          <p className="text-white/70 text-lg max-w-3xl mx-auto">
            VSG manages the commercial platform so your league or association can focus on what it does best — governing the game and serving your community.
          </p>
        </div>
      </section>

      {/* CURRENT COMMERCIAL REALITY */}
      <section className="py-24 bg-slate-custom">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="section-eyebrow">Why Traditional Models Are Breaking Down</div>
            <div className="accent-bar mx-auto" />
            <h2 className="section-title">The Current Commercial Reality</h2>
            <p className="text-gray-500 mt-4 text-base max-w-2xl mx-auto">
              Structural challenges have emerged across grassroots and junior hockey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {challenges.map((c) => (
              <div
                key={c.title}
                className="bg-white border-l-4 border-orange rounded-sm p-7 shadow-sm hover:shadow-md transition-all"
              >
                <h3 className="font-display font-bold text-lg text-navy uppercase mb-2">{c.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{c.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-navy rounded-sm p-5 text-center">
            <p className="text-white/70 text-sm italic">
              The traditional team-by-team sponsorship model has not kept pace with today's sponsor expectations.
            </p>
          </div>
        </div>
      </section>

      {/* WHY AGGREGATION WORKS */}
      <section className="rink-bg py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="section-eyebrow">Structural Benefits</div>
            <div className="accent-bar mx-auto" />
            <h2 className="font-display font-black text-4xl md:text-6xl text-white uppercase leading-none">
              Why Aggregation Works
            </h2>
            <p className="text-white/60 mt-4 text-sm max-w-xl mx-auto">
              Aggregation delivers structural benefits that individual teams simply cannot achieve alone.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {aggregationBenefits.map((b) => (
              <div key={b.title} className="bg-navy/80 border border-orange/30 hover:border-orange rounded-sm p-6 flex flex-col gap-3 transition-all group">
                <div className="w-1 h-8 bg-orange" />
                <h3 className="font-display font-bold text-sm text-white uppercase leading-tight group-hover:text-orange transition-colors">{b.title}</h3>
                <p className="text-white/60 text-xs leading-relaxed">{b.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GOVERNANCE */}
      <section className="py-24 bg-slate-custom">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="section-eyebrow">Clear Roles. Clear Authority. No Operational Disruption.</div>
            <div className="accent-bar mx-auto" />
            <h2 className="section-title">Governance & Oversight</h2>
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto text-sm">
              Commercial responsibilities are clearly defined to protect hockey operations and governance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-navy rounded-sm overflow-hidden">
              <div className="px-6 py-4 bg-navy-mid border-b border-orange/30">
                <h3 className="font-display font-bold text-white uppercase text-base text-center">VSG is Responsible For</h3>
              </div>
              <ul className="divide-y divide-white/10">
                {vsgResponsible.map((item) => (
                  <li key={item} className="px-6 py-4 text-white/70 text-sm flex items-center gap-3">
                    <span className="text-orange text-base">›</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-sm overflow-hidden border border-gray-100 shadow-sm">
              <div className="px-6 py-4 bg-gray-50 border-b border-gray-100">
                <h3 className="font-display font-bold text-navy uppercase text-base text-center">Leagues / Associations Retain</h3>
              </div>
              <ul className="divide-y divide-gray-100">
                {leagueRetains.map((item) => (
                  <li key={item} className="px-6 py-4 text-gray-600 text-sm flex items-center gap-3">
                    <span className="text-navy text-base">›</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-8 bg-navy rounded-sm p-5 text-center">
            <p className="text-white text-sm italic">
              VSG manages the commercial platform — leagues & associations continue to govern the game.
            </p>
          </div>
        </div>
      </section>

      {/* TARGET PARTNER PROFILE */}
      <section className="py-24 bg-navy">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="section-eyebrow">Who This Model Is Designed For</div>
            <div className="accent-bar mx-auto" />
            <h2 className="font-display font-black text-4xl md:text-6xl text-white uppercase leading-none">
              Target Partner Profile
            </h2>
            <p className="text-white/50 mt-4 text-sm max-w-xl mx-auto">
              The VSG aggregation model is purpose-built for leagues and associations with the following characteristics:
            </p>
          </div>

          <div className="space-y-4">
            {partnerProfile.map((p) => (
              <div
                key={p.num}
                className="flex items-start gap-6 bg-navy-mid border border-white/10 hover:border-orange rounded-sm p-6 transition-all group"
              >
                <div className="w-12 h-12 rounded-full bg-orange-DEFAULT flex items-center justify-center text-white font-display font-black text-xl flex-shrink-0 border-2 border-orange-dark group-hover:scale-110 transition-transform">
                  {p.num}
                </div>
                <div>
                  <h3 className="font-display font-bold text-white uppercase text-base group-hover:text-orange transition-colors">{p.title}</h3>
                  <p className="text-white/60 text-sm mt-1 leading-relaxed">{p.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 py-4 px-6 border-l-4 border-orange bg-navy-mid rounded-sm">
            <p className="text-white/70 text-sm italic">
              This model is not designed for every organization — it is designed for those ready to lead commercially.
            </p>
          </div>
        </div>
      </section>

      <CtaBanner
        title="Is Your League or Association Ready?"
        subtitle="Start the conversation to explore whether the VSG aggregation model is the right fit for your organization."
        buttonLabel="Schedule an Introductory Discussion"
        buttonHref="/contact"
      />
    </>
  );
}
