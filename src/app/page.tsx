
'use client';

import Timeline from '@/components/Timeline';
import LoadingScreen from '@/components/LoadingScreen';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import { useState } from 'react';
import LetsConnect from '@/components/LetsConnect';

const aboutMeText = `
  I'm a passionate Software Engineer who enjoys creating new tools to help solve problems and improve efficiency.
  I love learning about new technologies and applying them to real-world scenarios.
  And on my off time, I love visiting new places, working out and learning about film and videography.
`;

const summaryText = `
  Currently based in Dallas Texas, I'm a backend and cloud infrastructure engineer.
  I am also a masters student at Georigia's Institute of Technology pursuing a computer science degree with a focus in machine learning.
`;

// Custom hook to manage loading state
function useLoadingState() {
  // Initialize state function to prevent hydration mismatch
  const [isLoading, setIsLoading] = useState(() => {
    // Always return false during SSR
    if (typeof window === 'undefined') return false;
    
    // Check session storage on client-side initialization
    const hasShownLoading = sessionStorage.getItem('portfolio-loading-shown');
    return !hasShownLoading;
  });

  const handleLoadingComplete = () => {
    if (typeof window !== 'undefined') {
      // Use sessionStorage instead of localStorage for per-browser-session persistence
      sessionStorage.setItem('portfolio-loading-shown', 'true');
    }
    setIsLoading(false);
  };

  return { isLoading, handleLoadingComplete };
}

export default function Home() {
  const { isLoading, handleLoadingComplete } = useLoadingState();

  return (
    <div suppressHydrationWarning={true}>
      {isLoading && <LoadingScreen onComplete={handleLoadingComplete} />}
      
      <main className={`relative transition-opacity duration-1000 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
        {/* Home Section */}
        <HeroSection summaryText={summaryText} />

        {/* About Me Section */}
        <AboutSection aboutText={aboutMeText} />

        {/* Timeline Section */}
        <Timeline />

        {/* Let's Connect Section */}
        <LetsConnect />
      </main>
    </div>
  );
}
