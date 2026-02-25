// Our Mission page
import CtaBanner from '@/components/CtaBanner';

export default function MissionPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative rink-bg pt-40 pb-24 hero-clip overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1 orange-strip" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="section-eyebrow">About Villani Sports Group</div>
          <div className="accent-bar mx-auto" />
          <h1 className="font-display font-black text-6xl md:text-8xl text-white uppercase leading-none tracking-tight mb-6">
            Our<br />
            <span className="text-orange">Mission</span>
          </h1>
        </div>
      </section>

      {/* MISSION CONTENT */}
      <section className="py-24 bg-navy">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8 text-white">
            <div>
              <h2 className="font-display font-bold text-3xl mb-4 text-orange">Our Mission</h2>
              <p className="text-lg leading-relaxed text-white/90">
                Villani Sports Group exists to organize Canadian hockey into sponsor-ready platforms that support long-term corporate investment.
              </p>
            </div>

            <div className="border-l-4 border-orange pl-6 py-4">
              <p className="text-base leading-relaxed text-white/80">
                By aggregating leagues and associations under a centralized commercial structure, VSG simplifies sponsor engagement, enforces governance, and delivers sustainable commercial outcomes for the organizations that support the game.
              </p>
            </div>

            <div className="border-l-4 border-orange pl-6 py-4">
              <p className="text-base leading-relaxed text-white/80">
                Our mission is not to replace local hockey identity — but to organize it commercially, creating a unified, investable ecosystem that benefits sponsors, leagues, associations, and communities alike.
              </p>
            </div>

            <div className="mt-12 bg-navy-mid border-2 border-orange rounded-sm p-8">
              <p className="text-center text-white/90 text-lg italic">
                "Our goal is simple: make Canadian hockey a structured, scalable, and lucrative platform for corporate partnership"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FOUNDER SECTION */}
      <section className="py-24 bg-slate-custom">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="section-eyebrow">Leadership</div>
            <div className="accent-bar mx-auto" />
            <h2 className="section-title">Founder & Leadership</h2>
            <p className="text-gray-500 text-sm mt-3">Michael Villani</p>
          </div>

          <div className="bg-white rounded-sm overflow-hidden shadow-lg border border-gray-200">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
              <div className="md:col-span-1 bg-gradient-to-br from-navy to-navy-dark p-8 flex items-center justify-center min-h-[300px]">
                <div className="w-32 h-40 bg-white/10 rounded-sm" />
              </div>
              <div className="md:col-span-2 p-8 space-y-4">
                <h3 className="font-display font-bold text-2xl text-navy">Michael Villani</h3>
                <div className="border-l-4 border-orange pl-4 space-y-3 text-sm text-gray-700">
                  <p>
                    Michael is a senior sales and partnerships executive with over 15 years of experience building and managing large-scale commercial partnerships, combined with lifelong involvement in Canadian hockey.
                  </p>
                  <p>
                    Most recently, Michael served as National Sales Director at Carlsberg Group, where he led a national sales organization, managed over $150M in annual revenue, and negotiated multi-year corporate partnerships across retail, hospitality, sports, and entertainment.
                  </p>
                  <p>
                    His background includes league-level partnerships with organizations such as the Canadian Hockey League, Ontario Hockey League, Memorial Cup, Toronto FC, and Canada Soccer — requiring the same centralized strategy, pricing discipline, and activation governance that underpin Villani Sports Group.
                  </p>
                  <p>
                    Michael played Junior A hockey with the Brooks Bandits (AJHL) and Huntsville Wildcats (OPJHL) and remains actively involved in the game today, coaching minor hockey in the GTHL.
                  </p>
                  <p className="pt-2 italic text-gray-600">
                    Villani Sports Group is founder-led by design — ensuring execution discipline, sponsor accountability, and long-term platform thinking from day one.
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
