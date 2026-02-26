import Link from 'next/link';
import Image from 'next/image';

const links = [
  { href: '/', label: 'Home' },
  { href: '/mission', label: 'Mission' },
  { href: '/what-we-do', label: 'What We Do' },
  { href: '/why-vsg', label: 'Why VSG' },
  { href: '/value-proposition', label: 'Value Proposition' },
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
              <Image
                src="/vsg-logo.png"
                alt="VSG Logo"
                width={80}
                height={80}
                className="object-contain"
              />
            </div>
            <p className="text-white/60 text-base leading-relaxed max-w-xs">
              Aggregated Sponsorship. Centralized Governance. Scalable Revenue.
            </p>
            <p className="text-white/40 text-sm mt-4 leading-relaxed">
              Organizing and aggregating Canadian hockey into centralized, sponsor-ready platforms that enable scalable, long-term corporate investment.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-semibold uppercase tracking-widest text-xs mb-5 text-orange">Navigation</h4>
            <ul className="space-y-3">
              {links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white/60 hover:text-orange text-sm transition-colors uppercase tracking-wide pb-1 border-b-2 border-transparent hover:border-orange">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold uppercase tracking-widest text-xs mb-5 text-orange">Contact</h4>
            <p className="text-white/60 text-base mb-4 leading-relaxed">
              Ready to explore a partnership? Start the conversation today.
            </p>
            <div className="space-y-3 mb-6">
              <a href="mailto:michael@villanisportsgroup.com" className="text-orange hover:text-orange/80 text-base font-semibold transition-colors">
                michael@villanisportsgroup.com
              </a>
              <div className="text-white/40 text-sm">
                <p>Michael Villani, Founder</p>
                <p>Villani Sports Group</p>
              </div>
            </div>
            <Link href="/contact" className="btn-primary text-xs px-5 py-2.5">
              Schedule a Discussion
            </Link>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-white/30 text-xs">
            © {new Date().getFullYear()} Villani Sports Group. All rights reserved.
          </p>
          <p className="text-white font-display font-black uppercase tracking-widest text-sm">
            Focused<span className="text-orange">.</span> Governed<span className="text-orange">.</span> Built to Scale<span className="text-orange">.</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
