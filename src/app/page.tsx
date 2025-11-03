
'use client';

import LiquidGlassNavbar from '@/components/LiquidGlassNavbar';
import LoadingScreen from '@/components/LoadingScreen';
import { useState } from 'react';

const aboutMeText = `
  I'm a passionate developer who loves creating beautiful and functional digital experiences. 
  With a focus on modern web technologies and user-centered design, I bring ideas to life 
  through clean code and innovative solutions.
`;

const summaryText = `
  Currently based in Dallas Texas, I'm a backend and cloud infrastructure engineer.
  I am also enrolled at Georgias Institute of Technology pursuing a computer science masters degree with a focus in machine learning.
`;

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <>
      {isLoading && <LoadingScreen onComplete={handleLoadingComplete} />}
      <LiquidGlassNavbar />
      
      <main className={`relative transition-opacity duration-1000 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
        {/* Home Section */}
        <section id="home" className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute top-20 left-10 opacity-10">
            <div className="w-80 h-80 border border-white/20 rounded-full"></div>
            <div className="absolute top-8 left-8 w-64 h-64 border border-white/10 rounded-full"></div>
            <div className="absolute top-16 left-16 w-48 h-48 border border-white/5 rounded-full"></div>
          </div>

          {/* Main Content */}
          <div className="container mx-auto px-6 lg:px-12 h-screen flex items-center">
            <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
              {/* Left Content */}
              <div className="space-y-8">
                {/* Greeting */}
                <div className="space-y-2">
                  <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                    Hello! 
                  </h1>
                  <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold">
                    <span className="text-white">I&apos;m </span>
                    <span className="relative">
                      <span className="bg-gradient-to-r from-emerald-400 via-cyan-500 to-blue-500 bg-clip-text text-transparent">
                        Melvin Towo
                      </span>
                      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-400 via-cyan-500 to-blue-500"></div>
                    </span>
                    <span className="text-white">.</span>
                  </h2>
                </div>

                {/* Description */}
                <p className="text-lg md:text-l text-gray-100 leading-relaxed max-w-2xl">
                  {summaryText}
                </p>

                {/* Contact Me Button */}
                <div className="pt-6">
                  <button className="group relative inline-flex items-center px-0 py-2 text-emerald-400 font-semibold text-lg hover:text-emerald-300 transition-colors duration-300">
                    <span className="relative z-10">CONTACT ME</span>
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-emerald-400 group-hover:bg-emerald-300 transition-colors duration-300"></div>
                  </button>
                </div>
              </div>

              {/* Right Content - Profile Area */}
              <div className="relative flex justify-center lg:justify-end">
                {/* Decorative Circle */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 lg:w-96 lg:h-96 border border-white/10 rounded-full animate-pulse"></div>
                
                {/* Profile Placeholder/Avatar */}
                <div className="relative z-10 w-64 h-64 lg:w-80 lg:h-80 bg-gradient-to-br from-slate-800 to-slate-700 rounded-full border-4 border-white/10 flex items-center justify-center shadow-2xl">
                  {/* Inner gradient circle */}
                  <div className="w-48 h-48 lg:w-60 lg:h-60 bg-gradient-to-br from-emerald-400/20 to-blue-500/20 rounded-full flex items-center justify-center">
                    <div className="text-6xl lg:text-7xl text-white/60 font-light">MT</div>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute top-12 right-12 w-3 h-3 bg-emerald-400 rounded-full animate-bounce"></div>
                <div className="absolute bottom-20 left-8 w-2 h-2 bg-blue-400 rounded-full animate-bounce delay-300"></div>
                <div className="absolute top-32 left-4 w-1 h-1 bg-cyan-400 rounded-full animate-ping"></div>
              </div>
            </div>
          </div>

          {/* Social Links - Top Right */}
          <div className="absolute top-8 right-8 flex space-x-4">
            <a href="#" className="w-10 h-10 bg-white/10 backdrop-blur-lg rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 hover:scale-110">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a href="#" className="w-10 h-10 bg-white/10 backdrop-blur-lg rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 hover:scale-110">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a href="#" className="w-10 h-10 bg-white/10 backdrop-blur-lg rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 hover:scale-110">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
            </a>
          </div>
        </section>

        {/* About Me Section */}
        <section id="about" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-800 via-blue-900 to-slate-800">
          <div className="max-w-4xl mx-auto text-center text-white px-6">
            <h2 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              About Me
            </h2>
            <p className="text-lg md:text-xl text-white/80 leading-relaxed">
              I&apos;m a passionate developer who loves creating beautiful and functional digital experiences. 
              With a focus on modern web technologies and user-centered design, I bring ideas to life 
              through clean code and innovative solutions.
            </p>
          </div>
        </section>

        {/* Timeline Section */}
        <section id="timeline" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900">
          <div className="max-w-4xl mx-auto text-center text-white px-6">
            <h2 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
              My Journey
            </h2>
            <div className="space-y-8">
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
                <h3 className="text-2xl font-semibold mb-2">2024 - Present</h3>
                <p className="text-white/80">Building amazing projects and expanding my skillset</p>
              </div>
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
                <h3 className="text-2xl font-semibold mb-2">2023</h3>
                <p className="text-white/80">Started my journey in web development</p>
              </div>
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
                <h3 className="text-2xl font-semibold mb-2">Earlier</h3>
                <p className="text-white/80">Discovering my passion for technology</p>
              </div>
            </div>
          </div>
        </section>

        {/* Let's Connect Section */}
        <section id="connect" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-800 via-purple-900 to-slate-800">
          <div className="max-w-4xl mx-auto text-center text-white px-6">
            <h2 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
              Let&apos;s Connect
            </h2>
            <p className="text-lg md:text-xl text-white/80 mb-8">
              Ready to collaborate or just want to say hello? I&apos;d love to hear from you!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full font-semibold hover:scale-105 transition-transform duration-300">
                Email Me
              </button>
              <button className="px-8 py-3 bg-white/10 backdrop-blur-lg border border-white/20 rounded-full font-semibold hover:bg-white/20 transition-all duration-300">
                LinkedIn
              </button>
              <button className="px-8 py-3 bg-white/10 backdrop-blur-lg border border-white/20 rounded-full font-semibold hover:bg-white/20 transition-all duration-300">
                GitHub
              </button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
