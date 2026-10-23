
'use client';

import { useEffect, useState } from 'react';
import Timeline from '@/components/Timeline';
import LoadingScreen from '@/components/LoadingScreen';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import LetsConnect from '@/components/LetsConnect';

const aboutMeText = `
  I'm a passionate Software Engineer who enjoys creating new tools to help solve problems and improve efficiency.
  I love learning about new technologies and applying them to real-world scenarios.
  And on my off time, I love visiting new places, working out and learning about film and videography.
`;

const summaryText = `
  Currently based in Dallas Texas, I'm a backend and cloud infrastructure engineer.
  I am also a masters student at Georgia's Institute of Technology pursuing a computer science degree with a focus in machine learning.
`;

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const hasShown = sessionStorage.getItem('portfolio-loading-shown');
    if (!hasShown) setIsLoading(true);
  }, []);

  const handleLoadingComplete = () => {
    sessionStorage.setItem('portfolio-loading-shown', 'true');
    setIsLoading(false);
  };

  return (
    <>
      {isLoading && <LoadingScreen onComplete={handleLoadingComplete} />}

      <main
        className={`relative transition-opacity duration-700 ${
          isLoading ? 'opacity-0' : 'opacity-100'
        }`}
      >
        <HeroSection summaryText={summaryText} />
        <AboutSection aboutText={aboutMeText} />
        <Timeline />
        <LetsConnect />
      </main>
    </>
  );
}
