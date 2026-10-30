// Morning Skate Hockey page – fonts below are loaded for this route only
import type { Metadata } from 'next';
import Image from 'next/image';
import { Kanit, Rajdhani, Red_Hat_Display } from 'next/font/google';
import { notFound } from 'next/navigation';
import { MORNING_SKATE_LIVE, MORNING_SKATE_PRICE_CAD, pillars, programFacts } from '@/content/morningSkate';
import MorningSkateRegistration from '@/components/MorningSkateRegistration';

const kanit = Kanit({ subsets: ['latin'], weight: ['800', '900'], style: 'italic', display: 'swap' });
const rajdhani = Rajdhani({ subsets: ['latin'], weight: ['500', '600', '700'], display: 'swap' });
const redHat = Red_Hat_Display({ subsets: ['latin'], weight: ['400', '500', '600'], display: 'swap' });

// metallic gradient + shadow headline text, like the program PDF
const gradientText = (colors: string): React.CSSProperties => ({
  backgroundImage: `linear-gradient(180deg, ${colors})`,
  WebkitBackgroundClip: 'text',
  backgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.65))',
});
const orangeText = gradientText('#FF9A2E 0%, #F2601F 50%, #C9360F 100%');
const silverText = gradientText('#FFFFFF 0%, #E6E7EA 45%, #9EA1A9 100%');

export const metadata: Metadata = {
  title: 'Morning Skate Hockey | Villani Sports Group',
  description:
    'Morning Skate is an early-morning, high-tempo hockey development program for competitive minor hockey players. Six sessions, six development pillars.',
};

export default function MorningSkatePage({ searchParams }: { searchParams: { registered?: string; cancelled?: string } }) {
  if (!MORNING_SKATE_LIVE) notFound();
  const price = MORNING_SKATE_PRICE_CAD.toFixed(2);

  return (
    <div className={`${redHat.className} bg-navy-dark text-white`}>
      {/* HERO */}
      <section className="relative pt-52 md:pt-64 pb-24 overflow-hidden bg-gradient-to-br from-navy-dark via-navy to-navy-dark">
        <div className="absolute top-0 left-0 right-0 h-1 bg-orange" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-[320px_1fr] gap-12 items-center">
          <Image
            src="/morning-skate-logo.png"
            alt="Morning Skate Hockey – powered by Villani Sports Group"
            width={1171}
            height={1149}
            priority
            className="w-64 lg:w-full mx-auto"
          />
          <div>
            <h1 className={`${kanit.className} uppercase leading-[0.95] text-5xl md:text-7xl`}>
              <span
                className="block"
                style={orangeText}
              >
                We skate,
              </span>
              <span
                className="block"
                style={silverText}
              >
                while they sleep.
              </span>
            </h1>
            <p className={`${rajdhani.className} uppercase tracking-[0.3em] text-white/80 text-lg mt-5 mb-6`}>
              High-Tempo Hockey Development
            </p>
            <div className="space-y-4 text-white/80 text-lg leading-relaxed max-w-2xl">
              <p>
                Morning Skate is an early-morning hockey development program designed for competitive minor hockey players
                committed to elevating their game.
              </p>
              <p>
                Built around high-tempo, continuous-flow training, each session emphasizes purposeful repetitions, game-speed
                execution and decision-making in realistic hockey situations.
              </p>
            </div>
            <a href="#register" className="btn-primary px-8 py-4 text-sm mt-8">
              Register Now
            </a>
          </div>
        </div>
      </section>

      {/* TRAINING METHODOLOGY */}
      <section className="py-24 bg-navy">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`${kanit.className} uppercase leading-[0.95] text-4xl md:text-6xl`}>
            <span className="block" style={silverText}>Six sessions.</span>
            <span className="block" style={orangeText}>Six development pillars.</span>
          </h2>
          <p className={`${rajdhani.className} uppercase tracking-[0.3em] text-white/80 mt-4 mb-6`}>
            Purposeful training. Game-speed execution.
          </p>
          <p className="text-white/75 text-base leading-relaxed max-w-3xl mb-12">
            Every Morning Skate block follows a structured six-session curriculum, with each session dedicated to a specific area
            of hockey development. Through continuous-flow drills, purposeful repetitions and game-like situations, players develop
            the skills, timing and decision-making required to execute at speed.
          </p>

          <div className="grid md:grid-flow-col md:grid-rows-3 md:grid-cols-2 border-t border-white/10">
            {pillars.map((pillar, idx) => (
              <div
                key={pillar.title}
                className={`flex items-center gap-5 sm:gap-6 py-6 border-b border-white/10 ${
                  idx >= 3 ? 'md:border-l md:pl-10' : 'md:pr-10'
                }`}
              >
                <div className={`${kanit.className} text-5xl sm:text-6xl leading-none w-[4.5rem] sm:w-24 flex-shrink-0`} style={orangeText}>
                  {String(idx + 1).padStart(2, '0')}
                </div>
                <div className="border-l border-white/20 pl-5 sm:pl-6">
                  <h3 className={`${rajdhani.className} font-bold uppercase tracking-wide text-lg leading-tight`}>{pillar.title}</h3>
                  <p className="text-white/70 text-sm leading-relaxed mt-1">{pillar.description}</p>
                </div>
              </div>
            ))}
          </div>

          <p className={`${kanit.className} uppercase text-xl md:text-2xl mt-10`}>
            One consistent curriculum. Fresh drills and challenges every block.
          </p>
          <p className="text-white/60 text-sm mt-2 max-w-3xl">
            Each block delivers the complete six-pillar experience. Rotating drill packages keep training fresh for returning
            players while allowing new players to join any block.
          </p>
        </div>
      </section>

      {/* PROGRAM OVERVIEW */}
      <section className="py-24 bg-navy-dark">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`${kanit.className} uppercase leading-[0.95] text-4xl md:text-6xl`}>
            <span className="block" style={silverText}>Built for players</span>
            <span className="block" style={orangeText}>who want more.</span>
          </h2>
          <p className={`${rajdhani.className} uppercase tracking-[0.3em] text-white/80 mt-4 mb-6`}>
            A focused, high-intensity development experience.
          </p>
          <p className="text-white/75 text-base leading-relaxed max-w-3xl mb-10">
            Morning Skate delivers small-group, high-tempo hockey training designed to maximize repetitions, maintain intensity and
            challenge players through purposeful, game-speed development.
          </p>

          <div className="grid sm:grid-cols-2 gap-4">
            {[...programFacts, { label: 'Program Investment', value: price, price: true }].map((fact) => (
              <div key={fact.label} className="relative border border-white/10 bg-white/[0.03] px-6 py-4">
                <span className="absolute left-0 top-4 bottom-4 w-1 bg-orange" aria-hidden="true" />
                <div className={`${rajdhani.className} uppercase tracking-[0.2em] text-white/70 text-sm`}>{fact.label}</div>
                <div className={`${rajdhani.className} font-bold text-xl`}>
                  {'price' in fact ? (
                    <>
                      <span className="text-orange text-2xl">${fact.value}</span> per block
                    </>
                  ) : (
                    fact.value
                  )}
                </div>
              </div>
            ))}
          </div>

          <p className={`${kanit.className} uppercase text-lg md:text-xl mt-10`}>
            Six sessions. Six development pillars. <span className="text-orange">One complete training experience.</span>
          </p>
          <p className="text-white/60 text-sm mt-2 max-w-3xl">
            Every block provides a complete development experience through a consistent curriculum and rotating drills designed to
            challenge both new and returning players.
          </p>
        </div>
      </section>

      {/* REGISTRATION */}
      <section id="register" className="py-24 bg-navy scroll-mt-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`${kanit.className} uppercase leading-[0.95] text-4xl md:text-5xl mb-4`}>Reserve a spot</h2>
          <p className="text-white/70 mb-8">
            Complete the form below, then pay securely online. ${price} per block · 12–15 skaters per group.
          </p>

          {searchParams.registered && (
            <div className="border border-orange bg-orange/10 p-6 mb-8" role="status">
              <div className={`${rajdhani.className} font-bold uppercase tracking-wide text-lg`}>You&apos;re registered</div>
              <p className="text-white/80 text-sm mt-1">
                Payment received. A confirmation will be sent to the email you provided.
              </p>
            </div>
          )}
          {searchParams.cancelled && (
            <div className="border border-white/20 bg-white/5 p-6 mb-8" role="status">
              <p className="text-white/80 text-sm">Payment was cancelled. Your spot is not reserved until payment is complete.</p>
            </div>
          )}

          <MorningSkateRegistration fontClassName={rajdhani.className} />
        </div>
      </section>
    </div>
  );
}
