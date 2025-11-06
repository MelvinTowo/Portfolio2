
'use client';

import Navbar from '@/components/Navbar';
import Timeline from '@/components/Timeline';
import LoadingScreen from '@/components/LoadingScreen';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import { useState } from 'react';

const aboutMeText = `
  I'm a passionate developer who loves creating beautiful and functional digital experiences. 
  With a focus on modern web technologies and user-centered design, I bring ideas to life 
  through clean code and innovative solutions.
`;

const summaryText = `
  Currently based in Dallas Texas, I'm a backend and cloud infrastructure engineer.
  I am also enrolled at Georgia's Institute of Technology pursuing a computer science masters degree with a focus in machine learning.
`;

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <>
      {isLoading && <LoadingScreen onComplete={handleLoadingComplete} />}
      <Navbar />
      
      <main className={`relative transition-opacity duration-1000 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
        {/* Home Section */}
        <HeroSection summaryText={summaryText} />

        {/* About Me Section */}
        <AboutSection aboutText={aboutMeText} />

        {/* Timeline Section */}
        <Timeline />

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
