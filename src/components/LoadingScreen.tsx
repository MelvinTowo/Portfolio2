'use client';

import { useState, useEffect } from 'react';

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsComplete(true);
            setTimeout(onComplete, 500);
          }, 300);
          return 100;
        }
        return Math.min(prev + Math.random() * 4 + 2, 100);
      });
    }, 50);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-[100] bg-bg flex flex-col items-center justify-center transition-opacity duration-500 ${
        isComplete ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <div className="max-w-md w-full px-8">
        <div className="font-mono text-[10px] uppercase tracking-widest text-fg-subtle mb-4">
          Portfolio / loading
        </div>

        <div className="font-serif italic text-6xl md:text-7xl text-fg mb-8">
          Melvin<span className="text-accent">.</span>
        </div>

        {/* Progress bar */}
        <div className="relative h-px bg-border overflow-hidden">
          <div
            className="absolute inset-y-0 left-0 bg-accent transition-all duration-100 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="mt-4 flex items-center justify-between font-mono text-[11px] uppercase tracking-widest text-fg-muted">
          <span>Loading</span>
          <span className="text-fg tabular-nums">{Math.floor(progress).toString().padStart(3, '0')}%</span>
        </div>
      </div>
    </div>
  );
}
