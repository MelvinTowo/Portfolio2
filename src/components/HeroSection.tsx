'use client';

import Image from 'next/image';

interface HeroSectionProps {
  summaryText: string;
}

export default function HeroSection({ summaryText }: HeroSectionProps) {
  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-black-900 via-blue-900 to-black-900 relative overflow-hidden">
      {/* Background Patterns */}
      
      {/* Top Left Circles - Responsive */}
      <div className="absolute top-10 left-4 lg:top-20 lg:left-10 opacity-10">
        <div className="w-40 h-40 md:w-60 md:h-60 lg:w-80 lg:h-80 border border-white/20 rounded-full"></div>
        <div className="absolute top-4 left-4 md:top-6 md:left-6 lg:top-8 lg:left-8 w-32 h-32 md:w-48 md:h-48 lg:w-64 lg:h-64 border border-white/10 rounded-full"></div>
        <div className="absolute top-8 left-8 md:top-12 md:left-12 lg:top-16 lg:left-16 w-24 h-24 md:w-36 md:h-36 lg:w-48 lg:h-48 border border-white/5 rounded-full"></div>
      </div>

      {/* Bottom Right Geometric - Responsive */}
      <div className="absolute bottom-10 right-6 lg:bottom-16 lg:right-12 opacity-8">
        <div className="w-20 h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 border border-emerald-400/20 rotate-45"></div>
        <div className="absolute top-2 left-2 md:top-3 md:left-3 lg:top-4 lg:left-4 w-16 h-16 md:w-18 md:h-18 lg:w-24 lg:h-24 border border-cyan-500/15 rotate-12"></div>
        <div className="absolute top-4 left-4 md:top-6 md:left-6 lg:top-8 lg:left-8 w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 border border-blue-500/10 -rotate-12"></div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 lg:px-12 h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center w-full">
          {/* Left Content */}
          <div className="space-y-6 lg:space-y-8 text-center lg:text-left order-2 lg:order-1">
            {/* Greeting */}
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight">
                Hello! 
              </h1>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold">
                <span className="text-white">I&apos;m </span>
                <span className="relative">
                  <span className="bg-gradient-to-r from-emerald-400 via-cyan-500 to-blue-500 bg-clip-text text-transparent">
                    Melvin Towo
                  </span>
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 md:h-1 bg-gradient-to-r from-emerald-400 via-cyan-500 to-blue-500"></div>
                </span>
                <span className="text-white">.</span>
              </h2>
            </div>

            {/* Description */}
            <p className="text-base md:text-lg lg:text-xl text-gray-100 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              {summaryText}
            </p>

            {/* Contact Me Button */}
            <div className="pt-4 lg:pt-6">
              <button className="group relative inline-flex items-center px-0 py-2 text-emerald-400 font-semibold text-base lg:text-lg hover:text-emerald-300 transition-colors duration-300">
                <span className="relative z-10">CONTACT ME</span>
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-emerald-400 group-hover:bg-emerald-300 transition-colors duration-300"></div>
              </button>
            </div>
          </div>

          {/* Right Content - Profile Area */}
          <div className="relative flex justify-center order-1 lg:order-2 lg:justify-end mb-8 lg:mb-0">
            {/* Profile Container with Decorative Circle */}
            <div className="relative">
              {/* Decorative Circle - Properly aligned with image */}
              <div className="absolute inset-0 w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-80 lg:h-80 xl:w-96 xl:h-96 border border-white/10 rounded-full animate-pulse"></div>
              
              {/* Profile Image */}
              <div className="relative z-10 w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-80 lg:h-80 xl:w-96 xl:h-96 bg-gradient-to-br from-slate-800 to-slate-700 rounded-full border-4 lg:border-3 border-white/40 flex items-center justify-center shadow-2xl overflow-hidden">
                <Image
                  src="/assets/Melvin.jpeg"
                  alt="Melvin's headshot"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Floating Elements - Responsive positioning */}
              <div className="absolute -top-2 -right-2 md:top-2 md:right-2 lg:top-4 lg:right-4 w-2 h-2 md:w-3 md:h-3 bg-emerald-400 rounded-full animate-bounce"></div>
              <div className="absolute -bottom-4 -left-4 md:bottom-4 md:left-4 lg:bottom-6 lg:left-6 w-1.5 h-1.5 md:w-2 md:h-2 bg-blue-400 rounded-full animate-bounce delay-300"></div>
              <div className="absolute top-8 -left-2 md:top-12 md:left-0 lg:top-16 lg:left-2 w-1 h-1 md:w-1.5 md:h-1.5 bg-cyan-400 rounded-full animate-ping"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Social Links - Mobile left, Desktop right */}
      <div className="absolute top-4 left-4 md:top-6 md:left-6 lg:top-8 lg:right-8 lg:left-auto flex space-x-2 md:space-x-3 lg:space-x-4">
        <a href="#" className="w-8 h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 bg-white/10 backdrop-blur-lg rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 hover:scale-110">
          <svg className="w-4 h-4 md:w-4.5 md:h-4.5 lg:w-5 lg:h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
        </a>
        <a href="#" className="w-8 h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 bg-white/10 backdrop-blur-lg rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 hover:scale-110">
          <svg className="w-4 h-4 md:w-4.5 md:h-4.5 lg:w-5 lg:h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
        </a>
        <a href="#" className="w-8 h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 bg-white/10 backdrop-blur-lg rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 hover:scale-110">
          <svg className="w-4 h-4 md:w-4.5 md:h-4.5 lg:w-5 lg:h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
          </svg>
        </a>
      </div>
    </section>
  );
}