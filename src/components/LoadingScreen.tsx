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
  const [isComplete, setIsComplete] = useState(false);
  const [particles, setParticles] = useState<Particle[]>([]);

  // Generate particles on client-side only to avoid hydration mismatch
  useEffect(() => {
    const particleCount = typeof window !== 'undefined' && window.innerWidth < 768 ? 25 : 40;
    const generatedParticles = Array.from({ length: particleCount }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      animationDelay: Math.random() * 2,
      animationDuration: 3 + Math.random() * 2,
    }));
    
    // Use requestAnimationFrame to avoid synchronous state update
    requestAnimationFrame(() => {
      setParticles(generatedParticles);
    });
  }, []);

  useEffect(() => {
    // Faster loading progression for better UX
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          // Start reveal animation immediately when progress reaches 100
          setTimeout(() => {
            setIsRevealing(true);
            // Complete loading after reveal animation
            setTimeout(() => {
              setIsComplete(true);
              setTimeout(onComplete, 300);
            }, 1200);
          }, 300);
          return 100;
        }
        // Smoother, more consistent loading progression
        const increment = Math.random() * 2 + 1.5;
        return Math.min(prev + increment, 100);
      });
    }, 60);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className={`fixed inset-0 z-[100] overflow-hidden transition-opacity duration-500 ${
      isComplete ? 'opacity-0 pointer-events-none' : 'opacity-100'
    }`}>
      {/* Loading Screen Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        {/* Animated Background Particles */}
        <div className="absolute inset-0">
          {particles.map((particle) => (
            <div
              key={particle.id}
              className="absolute w-1 h-1 bg-white/30 rounded-full"
              style={{
                left: `${particle.left}%`,
                top: `${particle.top}%`,
                animation: `float ${particle.animationDuration}s ${particle.animationDelay}s infinite ease-in-out`,
              }}
            />
          ))}
        </div>

        {/* Loading Content */}
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
          {/* Loading Icon - Responsive sizing */}
          <div className="relative mb-8 md:mb-12">
            {/* Outer Ring */}
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-full border-2 border-white/20">
              <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-emerald-400 animate-spin" 
                   style={{ animationDuration: '1.5s' }}></div>
            </div>
            
            {/* Inner Ring */}
            <div className="absolute inset-3 md:inset-4 w-18 h-18 md:w-24 md:h-24 rounded-full border border-white/30" 
                 style={{ 
                   animation: 'spin 2.5s linear infinite reverse',
                 }}>
              <div className="absolute inset-0 rounded-full border border-transparent border-b-purple-400 animate-spin"
                   style={{ animationDuration: '1.2s' }}></div>
            </div>
            
            {/* Center Glow - Responsive */}
            <div className="absolute inset-6 md:inset-8 w-12 h-12 md:w-16 md:h-16 rounded-full bg-gradient-to-r from-emerald-500 to-purple-600 animate-pulse opacity-60"></div>
            <div className="absolute inset-8 md:inset-10 w-8 h-8 md:w-12 md:h-12 rounded-full bg-white/20 animate-ping"></div>
          </div>

          {/* Progress Counter */}
          <div className="text-center max-w-sm mx-auto">
            <div className="text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-emerald-400 via-blue-500 to-purple-500 bg-clip-text text-transparent mb-4">
              {Math.floor(progress)}%
            </div>
            
            {/* Progress Bar - Mobile responsive */}
            <div className="w-64 md:w-80 h-1 bg-white/20 rounded-full overflow-hidden mx-auto">
              <div 
                className="h-full bg-gradient-to-r from-emerald-500 via-blue-500 to-purple-500 rounded-full transition-all duration-200 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>
            
            <p className="text-white/70 mt-4 md:mt-6 text-base md:text-lg">
              {progress < 25 && "Initializing..."}
              {progress >= 25 && progress < 50 && "Loading assets..."}
              {progress >= 50 && progress < 75 && "Preparing experience..."}
              {progress >= 75 && progress < 95 && "Almost ready..."}
              {progress >= 95 && "Welcome!"}
            </p>
          </div>
        </div>
      </div>

      {/* Reveal Animation */}
      {isRevealing && (
        <div className="absolute inset-0 z-20">
          {/* Center Line Effect */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className={`h-px bg-gradient-to-r from-transparent via-emerald-400 to-transparent transition-all duration-800 ease-out ${
              isRevealing ? 'w-full opacity-100' : 'w-0 opacity-0'
            }`}></div>
          </div>
          
          {/* Top Curtain */}
          <div 
            className={`absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 transition-transform duration-1200 ease-in-out ${
              isRevealing ? '-translate-y-full' : 'translate-y-0'
            }`} 
            style={{ 
              clipPath: 'polygon(0 0, 100% 0, 100% 50%, 0 50%)',
              transformOrigin: 'center top'
            }}
          />
          
          {/* Bottom Curtain */}
          <div 
            className={`absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 transition-transform duration-1200 ease-in-out ${
              isRevealing ? 'translate-y-full' : 'translate-y-0'
            }`}
            style={{ 
              clipPath: 'polygon(0 50%, 100% 50%, 100% 100%, 0 100%)',
              transformOrigin: 'center bottom'
            }}
          />
          
          {/* Expanding Light Effect */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className={`bg-gradient-to-r from-emerald-400/20 via-white/30 to-purple-400/20 rounded-full transition-all duration-1000 ease-out ${
              isRevealing ? 'w-96 h-96 md:w-[32rem] md:h-[32rem] opacity-100' : 'w-0 h-0 opacity-0'
            }`}></div>
          </div>
        </div>
      )}
    </div>
  );
}