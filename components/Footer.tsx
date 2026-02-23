import Link from 'next/link';

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About VSG' },
  { href: '/solution', label: 'Solution' },
  { href: '/sponsors', label: 'Sponsors' },
  { href: '/leagues', label: 'Leagues & Associations' },
  { href: '/contact', label: 'Contact' },
];

export default function Footer() {
  return (
    <footer className="bg-navy-dark border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <svg width="36" height="36" viewBox="0 0 100 100" fill="none">
                <path d="M10 10 L40 70 L70 10 L55 10 L40 45 L25 10 Z" fill="#f36b21"/>
              </svg>
              <div>
                <div className="font-display font-black text-lg text-orange tracking-wide">VILLANI</div>
                <div className="text-white/50 text-xs uppercase tracking-[0.15em]">Sports Group</div>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed max-w-xs">
              Aggregated Sponsorship. Centralized Governance. Scalable Revenue.
            </p>
            <p className="text-white/40 text-xs mt-4 leading-relaxed">
              Organizing and aggregating Canadian hockey into centralized, sponsor-ready platforms that enable scalable, long-term corporate investment.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-semibold uppercase tracking-widest text-xs mb-5 text-orange">Navigation</h4>
            <ul className="space-y-3">
              {links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white/60 hover:text-orange text-sm transition-colors uppercase tracking-wide">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold uppercase tracking-widest text-xs mb-5 text-orange">Contact</h4>
            <p className="text-white/60 text-sm mb-4 leading-relaxed">
              Ready to explore a partnership? Start the conversation today.
            </p>
            <Link href="/contact" className="btn-primary text-xs px-5 py-2.5">
              Schedule a Discussion
            </Link>
            <div className="mt-6 space-y-2">
              <p className="text-white/40 text-xs">Michael Villani, Founder</p>
              <p className="text-white/40 text-xs">Villani Sports Group</p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-white/30 text-xs">
            © {new Date().getFullYear()} Villani Sports Group. All rights reserved.
          </p>
          <p className="text-white/20 text-xs uppercase tracking-widest">
            Aggregated Sponsorship · Centralized Governance · Scalable Revenue
          </p>
        </div>
      </div>
    </footer>
  );
}
