'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About VSG' },
  { href: '/solution', label: 'Solution' },
  { href: '/sponsors', label: 'Sponsors' },
  { href: '/leagues', label: 'Leagues & Associations' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-navy shadow-xl py-2' : 'bg-navy/90 backdrop-blur-sm py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <Image
              src="/vsg logo.png"
              alt="VSG Logo"
              width={80}
              height={48}
              className="object-contain"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="nav-link text-white/80 hover:text-white text-sm font-medium uppercase tracking-wider transition-colors duration-150"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="btn-primary text-xs px-5 py-2.5"
            >
              Get Started
            </Link>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <div className={`w-6 h-0.5 bg-white mb-1.5 transition-all ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <div className={`w-6 h-0.5 bg-white mb-1.5 transition-all ${menuOpen ? 'opacity-0' : ''}`} />
            <div className={`w-6 h-0.5 bg-white transition-all ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-white/10">
            <nav className="flex flex-col gap-1 mt-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-white/80 hover:text-orange px-2 py-2.5 text-sm font-medium uppercase tracking-wider transition-colors border-b border-white/5"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setMenuOpen(false)}
                className="btn-primary text-center mt-3 text-xs"
              >
                Get Started
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}