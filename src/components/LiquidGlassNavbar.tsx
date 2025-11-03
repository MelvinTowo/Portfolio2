'use client';

import { useState, useEffect } from 'react';

interface NavItem {
  id: string;
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { id: 'home', label: 'Home', href: '#home' },
  { id: 'about', label: 'About me', href: '#about' },
  { id: 'timeline', label: 'Timeline', href: '#timeline' },
  { id: 'connect', label: "Let's connect", href: '#connect' },
];

export default function LiquidGlassNavbar() {
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScrolled(scrollPosition > 50);

      // Find which section is currently in view
      const sections = navItems.map(item => document.getElementById(item.id.replace('#', '')));
      const sectionOffsets = sections.map(section => ({
        id: section?.id || '',
        offsetTop: section?.offsetTop || 0,
        offsetHeight: section?.offsetHeight || 0,
      }));

      const currentSection = sectionOffsets.find((section, index) => {
        const nextSection = sectionOffsets[index + 1];
        return (
          scrollPosition >= section.offsetTop - 100 &&
          (!nextSection || scrollPosition < nextSection.offsetTop - 100)
        );
      });

      if (currentSection) {
        setActiveSection(currentSection.id);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call once to set initial state
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const offsetTop = element.offsetTop - 80; // Account for navbar height
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <nav className={`fixed top-6 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-500 ease-out ${
      scrolled ? 'scale-95' : 'scale-100'
    }`}>
      <div className="relative">
        {/* Glass background with liquid effect */}
        <div className="absolute inset-0 bg-white/10 backdrop-blur-xl rounded-full border border-white/20 shadow-2xl">
          {/* Animated gradient overlay */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 animate-pulse"></div>
          {/* Liquid bubble effects */}
          <div className="absolute top-2 left-4 w-2 h-2 bg-white/30 rounded-full animate-bounce delay-100"></div>
          <div className="absolute bottom-2 right-6 w-1 h-1 bg-white/40 rounded-full animate-bounce delay-300"></div>
          <div className="absolute top-3 right-12 w-1.5 h-1.5 bg-white/25 rounded-full animate-bounce delay-500"></div>
        </div>

        {/* Navigation content */}
        <div className="relative flex items-center px-8 py-4 space-x-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.href)}
              className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 ease-out transform hover:scale-105 ${
                activeSection === item.id
                  ? 'text-white'
                  : 'text-white/70 hover:text-white'
              }`}
            >
              {/* Active indicator with liquid effect */}
              {activeSection === item.id && (
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full opacity-80 animate-pulse">
                  <div className="absolute inset-0 bg-white/20 rounded-full backdrop-blur-sm"></div>
                </div>
              )}
              
              {/* Button content */}
              <span className="relative z-10">{item.label}</span>
              
              {/* Hover effect */}
              <div className="absolute inset-0 bg-white/10 rounded-full opacity-0 transition-opacity duration-300 hover:opacity-100"></div>
            </button>
          ))}
        </div>

        {/* Additional liquid drops for enhanced effect */}
        <div className="absolute -top-1 left-8 w-3 h-3 bg-gradient-to-br from-blue-400/30 to-transparent rounded-full animate-ping"></div>
        <div className="absolute -bottom-1 right-8 w-2 h-2 bg-gradient-to-br from-purple-400/30 to-transparent rounded-full animate-ping delay-700"></div>
      </div>
    </nav>
  );
}