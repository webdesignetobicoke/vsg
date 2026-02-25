// Why VSG page
import Link from 'next/link';
import Image from 'next/image';
import CtaBanner from '@/components/CtaBanner';

export default function WhyVSGPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative rink-bg pt-40 pb-32 hero-clip overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1 orange-strip" />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="font-display font-black text-6xl md:text-8xl text-white uppercase leading-none tracking-tight mb-6 fade-in fade-in-delay-1">
              Why<br />
              <span className="text-orange">VSG?</span>
            </h1>
            <div className="bg-orange/10 border border-orange/30 rounded-sm p-8 mb-12 fade-in fade-in-delay-2">
              <p className="text-white text-2xl md:text-3xl font-display font-semibold leading-relaxed">
                Villani Sports Group is not a transactional sponsorship agency. We are a purpose-built commercial platform designed to aggregate, govern, and scale sponsorship revenue through disciplined execution.
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

      {/* OUR MODEL */}
      <section className="py-24 bg-slate-custom">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="section-eyebrow">Our Foundation</div>
            <div className="accent-bar mx-auto" />
            <h2 className="section-title mb-4">Our Model</h2>
            <p className="text-gray-500 text-base max-w-3xl mx-auto leading-relaxed">
              Built on four pillars that define how we operate and scale.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
            ].map((pillar, idx) => (
              <div key={pillar.title} className="bg-navy rounded-sm p-8 border border-orange/20 hover:border-orange transition-all duration-200 group">
                <div className="font-display font-black text-4xl text-orange group-hover:scale-110 transition-transform mb-4">
                  {String(idx + 1).padStart(2, '0')}
                </div>
                <h3 className="font-display font-bold text-white uppercase text-base mb-3 leading-tight">
                  {pillar.title}
                </h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOUNDER SECTION */}
      <section className="py-24 bg-slate-custom">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="section-eyebrow">Leadership</div>
            <div className="accent-bar mx-auto" />
            <h2 className="section-title mb-4">Founder & Leadership</h2>
            <p className="text-gray-500 text-base max-w-3xl mx-auto leading-relaxed">
              Founder-led by design — ensuring execution discipline, sponsor accountability, and long-term platform thinking from day one.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-0">
            <div className="flex items-center justify-center bg-navy overflow-hidden h-[600px] md:h-[700px] p-8 md:p-12">
              <Image 
                src="/michael villani.png" 
                alt="Michael Villani" 
                width={600}
                height={800}
                className="object-contain w-full h-full"
                priority
              />
            </div>
            <div className="bg-white p-10 md:p-16">
              <div>
                <h3 className="font-display font-bold text-3xl md:text-4xl text-navy mb-8">Michael Villani</h3>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
                  <div className="border-l-4 border-orange pl-6 space-y-5 text-sm md:text-base text-gray-700 leading-relaxed">
                    <p>
                      Michael is a senior sales and partnerships executive with over <span className="font-bold text-navy">15 years of experience</span> building and managing large-scale commercial partnerships, combined with <span className="font-bold text-orange">lifelong involvement in Canadian hockey</span>.
                    </p>
                    <p>
                      Most recently, Michael served as <span className="font-bold text-navy">National Sales Director at Carlsberg Group</span>, where he led a national sales organization, managed over <span className="font-bold text-orange">$150M in annual revenue</span>, and negotiated multi-year corporate partnerships across retail, hospitality, sports, and entertainment.
                    </p>
                  </div>
                  <div className="border-l-4 border-orange pl-6 space-y-5 text-sm md:text-base text-gray-700 leading-relaxed">
                    <p>
                      His background includes league-level partnerships with organizations such as the <span className="font-bold text-navy">Canadian Hockey League, Ontario Hockey League, Memorial Cup, Toronto FC, and Canada Soccer</span> — requiring the same <span className="font-bold text-orange">centralized strategy, pricing discipline, and activation governance</span> that underpin Villani Sports Group.
                    </p>
                    <p>
                      Michael played Junior A hockey with the <span className="font-bold text-navy">Brooks Bandits (AJHL) and Huntsville Wildcats (OPJHL)</span> and remains actively involved in the game today, coaching minor hockey in the <span className="font-bold text-orange">GTHL</span>.
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-navy rounded-sm p-5 text-white">
                    <h4 className="font-display font-bold text-base text-orange mb-2">15+ Years</h4>
                    <p className="text-xs text-white/80 leading-relaxed">
                      Commercial partnerships expertise across sports, retail, hospitality.
                    </p>
                  </div>
                  <div className="bg-navy rounded-sm p-5 text-white">
                    <h4 className="font-display font-bold text-base text-orange mb-2">$150M+</h4>
                    <p className="text-xs text-white/80 leading-relaxed">
                      Annual revenue managed at Carlsberg Group.
                    </p>
                  </div>
                  <div className="bg-navy rounded-sm p-5 text-white">
                    <h4 className="font-display font-bold text-base text-orange mb-2">Hockey First</h4>
                    <p className="text-xs text-white/80 leading-relaxed">
                      Former Junior A player, active coach and community advocate.
                    </p>
                  </div>
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
