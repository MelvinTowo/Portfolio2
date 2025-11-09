'use client'

import Image from 'next/image';

export default function ProjectPage() {
  return (
    <div className="min-h-screen relative flex flex-col items-center justify-center px-6 lg:px-12 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/fire.jpg"
          alt="Fire background"
          fill
          className="object-cover object-center"
          priority
          quality={100}
        />
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-20 mb-6 drop-shadow-2xl">
          Projects
        </h1>
        <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed drop-shadow-lg">
          This page is currently under construction. Please check back later!
        </p>
        
        {/* Optional: Add a subtle animation or decoration */}
        <div className="mt-8 flex justify-center">
          <div className="w-16 h-1 bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500 rounded-full animate-pulse"></div>
        </div>
      </div>
    </div>
  );
}