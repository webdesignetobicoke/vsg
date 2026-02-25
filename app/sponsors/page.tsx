// Sponsors page – what sponsors demand, aggregated framework, target categories
import CtaBanner from '@/components/CtaBanner';

const sponsorCategories = [
  {
    name: 'Quick Service Restaurants & Family Dining',
    profile: ['Family-driven purchase behavior', 'Strong promotional & offer-based activation', 'Dense store footprints across Ontario'],
    examples: "McDonald's, Tim Hortons, Subway, Pizza Pizza, Harvey's, DoorDash, Skip the Dishes",
  },
  {
    name: 'Financial Services (Banking & Insurance)',
    profile: ['Household-focused customer base', 'Long sales cycles suited to multi-year sponsorships', 'Comfort with grassroots & community sport'],
    examples: 'RBC, TD, Canada Trust, CIBC, BMO, Scotiabank, Sun Life, Desjardins',
  },
  {
    name: 'Automotive & Mobility',
    profile: ['Strong regional dealer networks', 'High value in repeated exposure', 'Ability to activate at rinks & community events'],
    examples: 'Hyundai, Kia, Ford, Toyota, Dilawri, Pfaff',
  },
  {
    name: 'Food, Beverage & Convenience Retail',
    profile: ['High-frequency household purchasing', 'Strong regional store footprints across Ontario', 'Ability to activate through in-store promotions & family offers'],
    examples: 'Loblaws, Sobeys, Circle K, Metro, Costco Wholesale',
  },
  {
    name: 'Sports Apparel, Equipment & Lifestyle Brands',
    profile: ['Direct relevance to players, parents & coaches', 'High category credibility within hockey', 'Clear performance & lifestyle alignment'],
    examples: 'Canadian Tire, Sport Chek, Hockey Life',
  },
  {
    name: 'Telecom / Technology',
    profile: ['National service coverage', 'Interest in family connectivity, streaming, or mobile usage', 'Ability to activate digitally & in-venue'],
    examples: 'Rogers, Bell, Cogeco, Google',
  },
];

export default function SponsorsPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative rink-bg pt-40 pb-24 hero-clip overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1 orange-strip" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="section-eyebrow">For Corporate Partners</div>
          <div className="accent-bar mx-auto" />
          <h1 className="font-display font-black text-6xl md:text-8xl text-white uppercase leading-none tracking-tight mb-6">
            What Sponsors<br />
            <span className="text-orange">Are Demanding</span><br />
            Today
          </h1>
          <p className="text-white/70 text-lg max-w-3xl mx-auto">
            Corporate partners are moving away from fragmented team-level programs toward governed, scalable platforms. VSG delivers exactly that.
          </p>
        </div>
      </section>

      {/* WHAT SPONSORS DEMAND */}
      <section className="py-24 bg-slate-custom">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="section-eyebrow">How the Market Has Changed</div>
            <div className="accent-bar mx-auto" />
            <h2 className="section-title">Corporate Partners Now Expect Platform-Level Programs</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: 'Fewer Partners, Larger Commitments', description: 'Brands are consolidating spend with fewer, higher-impact partners. One powerful relationship outweighs dozens of small activations.' },
              { title: 'Protected Categories & Exclusivity', description: 'Clear rules around category ownership are now mandatory. Sponsors need assurance that competitors are excluded.' },
              { title: 'Central Governance & Accountability', description: 'Sponsors want one contracted authority and one reporting standard — not fragmented relationships with individual teams.' },
              { title: 'Measurable Delivery & ROI', description: 'Proof of activation, visibility, and value delivered is no longer optional. Standardized reporting is essential.' },
            ].map((item, i) => (
              <div key={item.title} className="bg-white rounded-sm p-7 border border-gray-100 hover:border-orange/50 shadow-sm hover:shadow-md transition-all flex gap-5">
                <div className="w-10 h-10 rounded-full bg-navy flex items-center justify-center text-orange font-display font-black text-xl flex-shrink-0 mt-1">
                  {i + 1}
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg text-navy uppercase mb-2 leading-tight">{item.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-navy rounded-sm p-5 text-center">
            <p className="text-orange text-xs uppercase tracking-widest font-semibold mb-1">The Shift</p>
            <p className="text-white text-sm italic">Sponsors are moving away from fragmented team-level programs toward governed, scalable platforms.</p>
          </div>
        </div>
      </section>

      {/* AGGREGATED FRAMEWORK */}
      <section className="py-24 bg-navy">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="section-eyebrow">How Sponsorship Is Structured</div>
            <div className="accent-bar mx-auto" />
            <h2 className="font-display font-black text-4xl md:text-6xl text-white uppercase leading-none">
              Aggregated Sponsorship Framework
            </h2>
            <p className="text-white/50 mt-3 text-sm">All sponsorship activity is organized at the platform level — not by individual teams.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div>
              <div className="bg-navy-mid border-2 border-orange rounded-sm p-6 mb-4 text-center">
                <p className="text-white font-display font-bold text-sm uppercase tracking-widest">AGGREGATED SPONSORSHIP PLATFORM</p>
                <p className="text-white/50 text-xs mt-1">(League or Association Level)</p>
              </div>
              <div className="grid grid-cols-3 gap-3">
                {['QSR / Family Dining', 'Financial Services', 'Automotive', 'Grocery / Food Retail', 'Apparel & Lifestyle', 'Telecom / Tech'].map(cat => (
                  <div key={cat} className="bg-navy-dark border border-orange/20 rounded-sm p-3 text-center">
                    <p className="text-white/70 text-xs font-semibold uppercase leading-tight">{cat}</p>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-2 gap-3 mt-3">
                {['Junior A Hockey Teams', 'Minor Hockey Club Teams'].map(t => (
                  <div key={t} className="bg-navy-dark/50 border border-white/10 rounded-sm p-3 text-center">
                    <p className="text-white/40 text-xs uppercase">{t}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              {[
                { title: 'Platform-Level Categories', desc: 'Sponsorship categories are defined centrally and apply across all participating properties — not team by team.' },
                { title: 'Category Exclusivity Rules', desc: 'One sponsor per category, governed and enforced at the league or association level.' },
                { title: 'Standardized Asset Bundles', desc: 'Consistent rights, visibility, and activation opportunities across all teams and venues.' },
                { title: 'Centralized Pricing & Contracting', desc: 'One rate card. One contract structure. One commercial authority.' },
                { title: 'Multi-Year Orientation', desc: 'Preference for longer-term partnerships, prioritizing stability and renewal.' },
              ].map((item) => (
                <div key={item.title} className="bg-navy-mid border border-white/10 hover:border-orange rounded-sm p-5 flex gap-4 transition-all">
                  <div className="w-1.5 bg-orange rounded-full flex-shrink-0" />
                  <div>
                    <h4 className="font-display font-bold text-white uppercase text-sm">{item.title}</h4>
                    <p className="text-white/55 text-xs mt-1 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 py-4 text-center border-t border-white/10">
            <p className="text-orange font-display font-bold uppercase tracking-widest text-sm">One Platform. Defined Categories. Consistent Execution.</p>
          </div>
        </div>
      </section>

      {/* TARGET CATEGORIES */}
      <section className="py-24 bg-slate-custom">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="section-eyebrow">Target Sponsor Categories</div>
            <div className="accent-bar mx-auto" />
            <h2 className="section-title">Priority Sponsor Categories & Companies</h2>
            <p className="text-gray-400 text-xs mt-3 italic">*Targets shown are illustrative, based on category alignment, market presence & historic investment in Canadian hockey</p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-navy">
                  <th className="text-left px-5 py-4 text-white font-display font-bold uppercase text-sm tracking-wide border-b border-orange/30">Category</th>
                  <th className="text-left px-5 py-4 text-white font-display font-bold uppercase text-sm tracking-wide border-b border-orange/30">Ideal Profile</th>
                  <th className="text-left px-5 py-4 text-white font-display font-bold uppercase text-sm tracking-wide border-b border-orange/30">Priority Targets (Illustrative)</th>
                </tr>
              </thead>
              <tbody>
                {sponsorCategories.map((cat, i) => (
                  <tr key={cat.name} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-5 py-5 font-display font-bold text-navy text-sm align-top border-b border-gray-100 max-w-[160px]">
                      {cat.name}
                    </td>
                    <td className="px-5 py-5 align-top border-b border-gray-100">
                      <ul className="space-y-1">
                        {cat.profile.map((p) => (
                          <li key={p} className="flex items-start gap-2 text-gray-600 text-xs">
                            <span className="text-orange mt-0.5 flex-shrink-0">›</span>
                            {p}
                          </li>
                        ))}
                      </ul>
                    </td>
                    <td className="px-5 py-5 text-gray-500 text-xs align-top border-b border-gray-100">
                      {cat.name === 'Quick Service Restaurants & Family Dining' ? (
                        <div className="space-y-3">
                          <div className="grid grid-cols-4 gap-2 mb-3">
                            {[
                              { name: 'McDonalds', src: '/logos/restaurants/mcdonald\'s logo.png' },
                              { name: 'Tim Hortons', src: '/logos/restaurants/tim hortons logo.png' },
                              { name: 'Subway', src: '/logos/restaurants/subway logo.png' },
                              { name: 'Pizza Pizza', src: '/logos/restaurants/pizza pizza logo.png' },
                              { name: 'Harvey\'s', src: '/logos/restaurants/harvey\'s logo.png' },
                              { name: 'DoorDash', src: '/logos/restaurants/doordash logo.png' },
                              { name: 'Skip The Dishes', src: '/logos/restaurants/skip the dishes logo.png' },
                            ].map((logo) => (
                              <div key={logo.name} className="bg-gray-100 rounded-sm p-1.5 flex items-center justify-center h-12">
                                <img src={logo.src} alt={logo.name} className="h-8 w-auto object-contain" />
                              </div>
                            ))}
                          </div>
                          <p className="text-gray-400 text-xs italic">{cat.examples}</p>
                        </div>
                      ) : (
                        cat.examples
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* WHY FOR SPONSORS */}
      <section className="py-20 bg-navy">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="section-eyebrow">Why VSG Works for Sponsors</div>
            <div className="accent-bar mx-auto" />
            <h2 className="font-display font-black text-4xl md:text-5xl text-white uppercase leading-none">Sponsorship Built for Serious Brands</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: 'Larger, Integrated Reach', description: 'Access audiences across multiple properties simultaneously — Junior A leagues and minor hockey associations — through a single partnership.' },
              { title: 'Category Protection & Exclusivity', description: 'Your category is locked and enforced across the entire platform. No competitors. No dilution. Full category ownership.' },
              { title: 'Measurable Delivery & ROI', description: 'Standardized reporting packages provide clear proof of activation, visibility, and audience reach after every season.' },
            ].map((b) => (
              <div key={b.title} className="bg-navy-mid border border-orange/20 hover:border-orange rounded-sm p-7 transition-all">
                <div className="w-1 h-8 bg-orange mb-4" />
                <h3 className="font-display font-bold text-white uppercase text-base mb-2">{b.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{b.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        title="Explore a Platform-Level Sponsorship with VSG"
        subtitle="Connect with Michael Villani to discuss category availability, platform scope, and partnership structure."
        buttonLabel="Start the Conversation"
        buttonHref="/contact"
      />
    </>
  );
}
