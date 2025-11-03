'use client';

import { useState, useEffect } from 'react';

interface LoadingScreenProps {
  onComplete: () => void;
}

interface Particle {
  id: number;
  left: number;
  top: number;
  animationDelay: number;
  animationDuration: number;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [isRevealing, setIsRevealing] = useState(false);
  const [showContent, setShowContent] = useState(false);

  // Generate particles once during component initialization
  const [particles] = useState<Particle[]>(() => {
    return Array.from({ length: 50 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      animationDelay: Math.random() * 3,
      animationDuration: 2 + Math.random() * 2,
    }));
  });

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          // Start the reveal animation after a brief pause
          setTimeout(() => {
            setIsRevealing(true);
            // Complete the loading after the reveal animation
            setTimeout(() => {
              setShowContent(true);
              setTimeout(() => {
                onComplete();
              }, 800);
            }, 1500);
          }, 500);
          return 100;
        }
        // Realistic loading progression with some variance
        const increment = Math.random() * 3 + 1;
        return Math.min(prev + increment, 100);
      });
    }, 80);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-[100] overflow-hidden">
      {/* Loading Screen Background */}
      <div className={`absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 transition-all duration-1000 ${
        showContent ? 'opacity-0' : 'opacity-100'
      }`}>
        {/* Animated Background Particles */}
        <div className="absolute inset-0">
          {particles.map((particle) => (
            <div
              key={particle.id}
              className="absolute w-1 h-1 bg-white/20 rounded-full animate-pulse"
              style={{
                left: `${particle.left}%`,
                top: `${particle.top}%`,
                animationDelay: `${particle.animationDelay}s`,
                animationDuration: `${particle.animationDuration}s`,
              }}
            />
          ))}
        </div>

        {/* Loading Content */}
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen">
          {/* Loading Icon */}
          <div className="relative mb-12">
            {/* Outer Ring */}
            <div className="w-32 h-32 rounded-full border-2 border-white/20 animate-spin">
              <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-white/60 animate-spin" 
                   style={{ animationDuration: '2s' }}></div>
            </div>
            
            {/* Inner Ring */}
            <div className="absolute inset-4 w-24 h-24 rounded-full border border-white/30 animate-spin" 
                 style={{ animationDirection: 'reverse', animationDuration: '3s' }}>
              <div className="absolute inset-0 rounded-full border border-transparent border-b-purple-400 animate-spin"
                   style={{ animationDuration: '1.5s' }}></div>
            </div>
            
            {/* Center Glow */}
            <div className="absolute inset-8 w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 animate-pulse opacity-80"></div>
            <div className="absolute inset-10 w-12 h-12 rounded-full bg-white/20 animate-ping"></div>
          </div>

          {/* Progress Counter */}
          <div className="text-center">
            <div className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-4">
              {Math.floor(progress)}%
            </div>
            
            {/* Progress Bar */}
            <div className="w-80 h-1 bg-white/20 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full transition-all duration-300 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>
            
            <p className="text-white/70 mt-6 text-lg">
              {progress < 30 && "Initializing..."}
              {progress >= 30 && progress < 60 && "Loading assets..."}
              {progress >= 60 && progress < 90 && "Preparing experience..."}
              {progress >= 90 && progress < 100 && "Almost ready..."}
              {progress >= 100 && "Welcome!"}
            </p>
          </div>
        </div>
      </div>

      {/* Reveal Animation */}
      {isRevealing && (
        <>
          {/* Top Half */}
          <div className={`absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 transition-transform duration-1500 ease-in-out origin-center ${
            isRevealing ? '-translate-y-full' : 'translate-y-0'
          }`} 
          style={{ clipPath: 'polygon(0 0, 100% 0, 100% 50%, 0 50%)' }}>
          </div>
          
          {/* Bottom Half */}
          <div className={`absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 transition-transform duration-1500 ease-in-out origin-center ${
            isRevealing ? 'translate-y-full' : 'translate-y-0'
          }`}
          style={{ clipPath: 'polygon(0 50%, 100% 50%, 100% 100%, 0 100%)' }}>
          </div>
          
          {/* Center Line Effect */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className={`h-0.5 bg-gradient-to-r from-transparent via-white to-transparent transition-all duration-1000 ease-out ${
              isRevealing ? 'w-full opacity-100' : 'w-0 opacity-0'
            }`}></div>
          </div>
          
          {/* Expanding Light Effect */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className={`bg-white rounded-full transition-all duration-1000 ease-out ${
              isRevealing ? 'w-96 h-96 opacity-20' : 'w-0 h-0 opacity-0'
            }`}></div>
          </div>
        </>
      )}
    </div>
  );
}