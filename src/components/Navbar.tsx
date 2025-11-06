'use client';

import { useState, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollToPlugin);

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
  { id: 'projects', label: 'Projects', href: '/projects' },

];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScrolled(scrollPosition > 50);

      // Get all sections with their positions
      const homeSection = document.getElementById('home');
      const aboutSection = document.getElementById('about');
      const timelineSection = document.getElementById('timeline');
      const connectSection = document.getElementById('connect');

      // Define section boundaries more precisely
      const sections = [
        { id: 'home', element: homeSection },
        { id: 'about', element: aboutSection },
        { id: 'timeline', element: timelineSection },
        { id: 'connect', element: connectSection }
      ].filter(section => section.element);

      // Calculate which section we're currently in
      let activeId = 'home'; // Default to home

      for (let i = 0; i < sections.length; i++) {
        const section = sections[i];
        const nextSection = sections[i + 1];
        
        if (!section.element) continue;
        
        const sectionTop = section.element.offsetTop;
        
        // Check if we're in this section's area
        if (scrollPosition >= sectionTop - 100) {
          // If there's a next section, make sure we haven't reached it yet
          if (nextSection && nextSection.element) {
            const nextSectionTop = nextSection.element.offsetTop;
            if (scrollPosition < nextSectionTop - 100) {
              activeId = section.id;
            }
          } else {
            // This is the last section
            activeId = section.id;
          }
        }
      }

      setActiveSection(activeId);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call once to set initial state
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    
    if (!element) return;
    
    // Close mobile menu when navigating
    setIsMobileMenuOpen(false);
    
    // Simple, reliable navigation
    if (targetId === 'timeline') {
      // For timeline, just go to the start
      gsap.to(window, {
        duration: 1.5,
        scrollTo: {
          y: element,
          offsetY: 0
        },
        ease: "power2.inOut"
      });
    } else {
      // For other sections, normal scroll with navbar offset
      gsap.to(window, {
        duration: 1.2,
        scrollTo: {
          y: element,
          offsetY: 80 // Account for navbar height
        },
        ease: "power2.inOut"
      });
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav className={`hidden lg:block fixed top-6 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-500 ease-out ${
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

      {/* Mobile Navigation */}
      <nav className="lg:hidden fixed top-6 right-6 z-50">
        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className={`relative w-14 h-14 transition-all duration-300 ease-out ${
            scrolled ? 'scale-95' : 'scale-100'
          }`}
        >
          {/* Glass background with liquid effect */}
          <div className="absolute inset-0 bg-white/10 backdrop-blur-xl rounded-full border border-white/20 shadow-2xl">
            {/* Animated gradient overlay */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 animate-pulse"></div>
            {/* Liquid bubble effects */}
            <div className="absolute top-2 left-2 w-1.5 h-1.5 bg-white/30 rounded-full animate-bounce delay-100"></div>
            <div className="absolute bottom-2 right-2 w-1 h-1 bg-white/40 rounded-full animate-bounce delay-300"></div>
          </div>

          {/* Hamburger Icon */}
          <div className="relative flex flex-col items-center justify-center h-full space-y-1.5">
            <div className={`w-5 h-0.5 bg-white rounded-full transition-all duration-300 ${
              isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''
            }`}></div>
            <div className={`w-5 h-0.5 bg-white rounded-full transition-all duration-300 ${
              isMobileMenuOpen ? 'opacity-0' : ''
            }`}></div>
            <div className={`w-5 h-0.5 bg-white rounded-full transition-all duration-300 ${
              isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
            }`}></div>
          </div>
        </button>

        {/* Mobile Menu Dropdown */}
        <div className={`absolute top-16 right-0 transition-all duration-300 ease-out origin-top-right ${
          isMobileMenuOpen 
            ? 'opacity-100 scale-100 translate-y-0' 
            : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'
        }`}>
          <div className="relative min-w-[200px]">
            {/* Glass background with liquid effect */}
            <div className="absolute inset-0 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 shadow-2xl">
              {/* Animated gradient overlay */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 animate-pulse"></div>
              {/* Liquid bubble effects */}
              <div className="absolute top-3 left-3 w-2 h-2 bg-white/30 rounded-full animate-bounce delay-100"></div>
              <div className="absolute bottom-3 right-4 w-1.5 h-1.5 bg-white/40 rounded-full animate-bounce delay-300"></div>
              <div className="absolute top-1/2 right-3 w-1 h-1 bg-white/25 rounded-full animate-bounce delay-500"></div>
            </div>

            {/* Menu Items */}
            <div className="relative p-4 space-y-2">
              {navItems.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.href)}
                  className={`relative w-full text-left px-4 py-3 text-sm font-medium rounded-xl transition-all duration-300 ease-out transform hover:scale-105 ${
                    activeSection === item.id
                      ? 'text-white'
                      : 'text-white/70 hover:text-white'
                  }`}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {/* Active indicator with liquid effect */}
                  {activeSection === item.id && (
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-pink-500/30 rounded-xl animate-pulse">
                      <div className="absolute inset-0 bg-white/10 rounded-xl backdrop-blur-sm"></div>
                    </div>
                  )}
                  
                  {/* Button content */}
                  <span className="relative z-10">{item.label}</span>
                  
                  {/* Hover effect */}
                  <div className="absolute inset-0 bg-white/10 rounded-xl opacity-0 transition-opacity duration-300 hover:opacity-100"></div>
                </button>
              ))}
            </div>

            {/* Additional liquid drops for enhanced effect */}
            <div className="absolute -top-1 left-4 w-2 h-2 bg-gradient-to-br from-blue-400/30 to-transparent rounded-full animate-ping"></div>
            <div className="absolute -bottom-1 right-6 w-1.5 h-1.5 bg-gradient-to-br from-purple-400/30 to-transparent rounded-full animate-ping delay-700"></div>
          </div>
        </div>
      </nav>
    </>
  );
}