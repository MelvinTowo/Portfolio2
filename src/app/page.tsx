
'use client';

import Timeline from '@/components/Timeline';
import LoadingScreen from '@/components/LoadingScreen';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import { useState, useEffect } from 'react';
import LetsConnect from '@/components/LetsConnect';

const aboutMeText = `
  I'm a passionate developer who loves creating beautiful and functional digital experiences. 
  With a focus on modern web technologies and user-centered design, I bring ideas to life 
  through clean code and innovative solutions.
`;

const summaryText = `
  Currently based in Dallas Texas, I'm a backend and cloud infrastructure engineer.
  I am also enrolled at Georgia's Institute of Technology pursuing a computer science masters degree with a focus in machine learning.
`;

// Custom hook to manage loading state
function useLoadingState() {
  const [isLoading, setIsLoading] = useState(true);
  const [shouldShowLoading, setShouldShowLoading] = useState(true);

  useEffect(() => {
    // Check if loading has already been shown in this browser session
    const checkLoadingStatus = () => {
      if (typeof window !== 'undefined') {
        const hasShownLoading = sessionStorage.getItem('portfolio-loading-shown');
        
        if (hasShownLoading) {
          setShouldShowLoading(false);
          setIsLoading(false);
        } else {
          setShouldShowLoading(true);
        }
      }
    };

    const timer = setTimeout(checkLoadingStatus, 0);
    return () => clearTimeout(timer);
  }, []);

  const handleLoadingComplete = () => {
    if (typeof window !== 'undefined') {
      // Use sessionStorage instead of localStorage for per-browser-session persistence
      sessionStorage.setItem('portfolio-loading-shown', 'true');
    }
    setIsLoading(false);
  };

  return { isLoading, shouldShowLoading, handleLoadingComplete };
}

export default function Home() {
  const { isLoading, shouldShowLoading, handleLoadingComplete } = useLoadingState();

  return (
    <>
      {shouldShowLoading && isLoading && <LoadingScreen onComplete={handleLoadingComplete} />}
      
      <main className={`relative transition-opacity duration-1000 ${(shouldShowLoading && isLoading) ? 'opacity-0' : 'opacity-100'}`}>
        {/* Home Section */}
        <HeroSection summaryText={summaryText} />

        {/* About Me Section */}
        <AboutSection aboutText={aboutMeText} />

        {/* Timeline Section */}
        <Timeline />

        {/* Let's Connect Section */}
        <LetsConnect />
      </main>
    </>
  );
}
