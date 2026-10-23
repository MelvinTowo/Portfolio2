'use client';

import { useState, useEffect, useRef } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';

interface NavItem {
  id: string;
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { id: 'home', label: 'Index', href: '#home' },
  { id: 'about', label: 'About', href: '#about' },
  { id: 'timeline', label: 'Timeline', href: '#timeline' },
  { id: 'projects', label: 'Projects', href: '/project' },
  { id: 'connect', label: 'Contact', href: '#connect' },
];

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const isManualNav = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      if (isManualNav.current || pathname !== '/') return;

      const ids = ['home', 'about', 'timeline', 'connect'];
      const y = window.scrollY + 120;
      let current = 'home';
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= y) current = id;
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname]);

  useEffect(() => {
    if (pathname === '/project') setActiveSection('projects');
    else if (pathname === '/') {
      const hash = window.location.hash.replace('#', '');
      if (hash) setActiveSection(hash);
    }
  }, [pathname]);

  const handleNav = (href: string) => {
    setIsMobileOpen(false);

    if (href.startsWith('/')) {
      router.push(href);
      return;
    }

    const id = href.replace('#', '');
    isManualNav.current = true;
    setActiveSection(id);

    if (pathname !== '/') {
      router.push(`/${href}`);
      setTimeout(() => (isManualNav.current = false), 400);
      return;
    }

    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setTimeout(() => (isManualNav.current = false), 800);
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-bg/70 backdrop-blur-xl border-b border-border'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 lg:px-10 h-16">
          <Link
            href="/"
            className="group flex items-center gap-2 font-serif italic text-xl text-fg"
            onClick={() => setActiveSection('home')}
          >
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-accent group-hover:scale-125 transition-transform" />
            Melvin Towo
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNav(item.href)}
                className={`relative px-3 py-1.5 text-[13px] font-mono uppercase tracking-wider transition-colors ${
                  activeSection === item.id ? 'text-fg' : 'text-fg-muted hover:text-fg'
                }`}
              >
                {activeSection === item.id && (
                  <span className="absolute inset-x-3 -bottom-0.5 h-px bg-accent" />
                )}
                {item.label}
              </button>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-2 text-[12px] font-mono text-fg-muted">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-accent opacity-60 animate-ping" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
            </span>
            <span className="uppercase tracking-wider">Available</span>
          </div>

          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5"
            aria-label="Toggle menu"
          >
            <span
              className={`w-5 h-px bg-fg transition-transform ${
                isMobileOpen ? 'translate-y-[3px] rotate-45' : ''
              }`}
            />
            <span
              className={`w-5 h-px bg-fg transition-transform ${
                isMobileOpen ? '-translate-y-[3px] -rotate-45' : ''
              }`}
            />
          </button>
        </div>

        <div
          className={`md:hidden overflow-hidden transition-all duration-300 border-t border-border ${
            isMobileOpen ? 'max-h-96 bg-bg' : 'max-h-0'
          }`}
        >
          <div className="px-6 py-4 flex flex-col gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNav(item.href)}
                className={`text-left px-2 py-2.5 text-sm font-mono uppercase tracking-wider transition-colors ${
                  activeSection === item.id ? 'text-accent' : 'text-fg-muted'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </header>
    </>
  );
}
