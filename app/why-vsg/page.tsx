// Why VSG page
import Link from 'next/link';
import Image from 'next/image';
import ServiceCard from '@/components/ServiceCard';
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
                title: 'CENTRALIZED',
                description: 'One strategy, one pricing framework, one governance structure',
              },
              {
                title: 'ALIGNED',
                description: 'Revenue tied directly to sponsor performance and renewal',
              },
              {
                title: 'DISCIPLINED',
                description: 'Expansion gated by results, not ambition',
              },
              {
                title: 'SCALABLE',
                description: 'Growth driven by aggregation, not complexity',
              },
            ].map((pillar, idx) => (
              <ServiceCard key={pillar.title} number={idx + 1} title={pillar.title} description={pillar.description} />
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
            <div className="flex items-center justify-center bg-navy overflow-hidden h-[350px] md:h-[700px] p-8 md:p-12">
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
                  <div className="border-l-4 border-orange pl-6 space-y-5 text-base text-gray-700 leading-relaxed">
                    <p>
                      Michael is a senior sales and partnerships executive with over <span className="font-bold text-navy">15 years of experience</span> building and managing large-scale commercial partnerships, combined with <span className="font-bold text-orange">lifelong involvement in Canadian hockey</span>.
                    </p>
                    <p>
                      Most recently, Michael served as <span className="font-bold text-navy">National Sales Director at Carlsberg Group</span>, where he led a national sales organization and oversaw a broad, multi-market revenue portfolio while negotiating high-value, multi-year corporate partnerships across retail, hospitality, sports, and entertainment.
                    </p>
                  </div>
                  <div className="border-l-4 border-orange pl-6 space-y-5 text-base text-gray-700 leading-relaxed">
                    <p>
                      His background includes league-level partnerships with organizations such as the <span className="font-bold text-navy">Canadian Hockey League, Ontario Hockey League, Memorial Cup, Toronto FC, and Canada Soccer</span> — requiring the same <span className="font-bold text-orange">centralized strategy, pricing discipline, and activation governance</span> that underpin Villani Sports Group.
                    </p>
                    <p>
                      Michael played Junior A hockey with the <span className="font-bold text-navy">Brooks Bandits (AJHL) and Huntsville Wildcats (OPJHL)</span> and remains actively involved in the game today, coaching minor hockey in the <span className="font-bold text-orange">GTHL</span>.
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="group relative bg-navy rounded-sm p-8 text-white hover:shadow-2xl hover:shadow-orange/20 transition-all duration-300 overflow-hidden border border-orange/20 hover:border-orange/50">
                    {/* Animated background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-orange/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-orange to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                    
                    <div className="relative">
                      <h4 className="font-display font-bold text-2xl text-orange mb-3 group-hover:scale-105 transition-transform duration-300">15+ Years</h4>
                      <p className="text-base text-white/80 leading-relaxed group-hover:text-white transition-colors duration-300">
                        National sales & commercial partnership expertise across sports, retail & hospitality.
                      </p>
                    </div>
                  </div>
                  <div className="group relative bg-navy rounded-sm p-8 text-white hover:shadow-2xl hover:shadow-orange/20 transition-all duration-300 overflow-hidden border border-orange/20 hover:border-orange/50">
                    {/* Animated background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-orange/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-orange to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                    
                    <div className="relative">
                      <h4 className="font-display font-bold text-2xl text-orange mb-3 group-hover:scale-105 transition-transform duration-300">Multi-Market Portfolio</h4>
                      <p className="text-base text-white/80 leading-relaxed group-hover:text-white transition-colors duration-300">
                        Broad revenue portfolio spanning retail, hospitality, sports, and entertainment.
                      </p>
                    </div>
                  </div>
                  <div className="group relative bg-navy rounded-sm p-8 text-white hover:shadow-2xl hover:shadow-orange/20 transition-all duration-300 overflow-hidden border border-orange/20 hover:border-orange/50">
                    {/* Animated background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-orange/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-orange to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                    
                    <div className="relative">
                      <h4 className="font-display font-bold text-2xl text-orange mb-3 group-hover:scale-105 transition-transform duration-300">Hockey First</h4>
                      <p className="text-base text-white/80 leading-relaxed group-hover:text-white transition-colors duration-300">
                        Former Junior A player, active coach and community advocate.
                      </p>
                    </div>
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
