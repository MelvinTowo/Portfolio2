'use client';

import Image from 'next/image';
import { ReactElement } from 'react';

interface AboutSectionProps {
  aboutText: string;
}

interface AboutItem {
  id: string;
  title: string;
  description: string;
  imagePath: string;
  imageAlt: string;
  placeholderIcon: ReactElement;
  gradientFrom: string;
  gradientTo: string;
  borderHover: string;
  doodleComponent: ReactElement;
}

// About items data
const aboutItems: AboutItem[] = [
  {
    id: 'graduation',
    title: 'Computer Science',
    description: 'I graduated with a Bachelor of Science in Computer Science from the University of North Texas in 2023. My focuses include Software engineering, Algorithms, and Internet/cloud programming',
    imagePath: '/assets/graduation.jpeg',
    imageAlt: "Melvin's graduation",
    placeholderIcon: (
      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
        <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/>
      </svg>
    ),
    gradientFrom: 'from-yellow-500/20',
    gradientTo: 'to-orange-500/20',
    borderHover: 'hover:border-yellow-400/30',
    doodleComponent: (
      <svg width="60" height="60" viewBox="0 0 60 60" className="absolute -top-4 -right-4 text-yellow-400 animate-bounce">
        <path
          d="M30 15 L45 20 L30 25 L15 20 Z M30 25 L30 35 M25 37 L30 35 L35 37"
          stroke="currentColor"
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="animate-pulse"
        />
        <circle cx="35" cy="37" r="2" fill="currentColor" className="animate-ping" />
      </svg>
    )
  },
  {
    id: 'office',
    title: 'Professional Life',
    description: 'I currently work at Toshiba as a Backend and Cloud Infrastructure Engineer. I get to handle all things cloud, backend, DevOps, AI/CV and data engineering.',
    imagePath: '/assets/work.jpeg',
    imageAlt: 'Melvin at office',
    placeholderIcon: (
      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd"/>
        <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"/>
      </svg>
    ),
    gradientFrom: 'from-blue-500/20',
    gradientTo: 'to-cyan-500/20',
    borderHover: 'hover:border-blue-400/30',
    doodleComponent: (
      <svg width="60" height="60" viewBox="0 0 60 60" className="absolute -top-4 -left-4 text-blue-400 animate-spin-slow">
        <path
          d="M30 20 L32 15 L38 15 L40 20 L45 22 L45 28 L40 30 L38 35 L32 35 L30 30 L25 28 L25 22 Z"
          stroke="currentColor"
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="30" cy="25" r="4" stroke="currentColor" strokeWidth="2.5" fill="none" />
        <circle cx="30" cy="25" r="1.5" fill="currentColor" className="animate-pulse" />
      </svg>
    )
  },
  {
    id: 'interests',
    title: 'Hobbies & Interests',
    description: 'Film, videography and traveling are some of my favorite hobbies. I love traveling, learning about the history and culture of different places, and filming what I see along the way.',
    imagePath: '/assets/beach.jpeg',
    imageAlt: 'Santa monica pier ',
    placeholderIcon: (
      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"/>
      </svg>
    ),
    gradientFrom: 'from-purple-500/20',
    gradientTo: 'to-pink-500/20',
    borderHover: 'hover:border-purple-400/30',
    doodleComponent: (
      <svg width="80" height="60" viewBox="0 0 80 60" className="absolute -top-6 -right-6 text-purple-400">
        <g className="animate-pulse">
          <path d="M20 15 L22 20 L27 20 L23 24 L25 29 L20 26 L15 29 L17 24 L13 20 L18 20 Z" fill="currentColor" />
          <path d="M50 10 L51 13 L54 13 L52 16 L53 19 L50 17 L47 19 L48 16 L46 13 L49 13 Z" fill="currentColor" className="animate-bounce" />
          <path d="M65 20 L66 22 L68 22 L67 24 L68 26 L65 25 L63 26 L64 24 L62 22 L64 22 Z" fill="currentColor" />
        </g>
        <circle cx="35" cy="8" r="1" fill="currentColor" className="animate-ping" />
        <circle cx="15" cy="8" r="1.5" fill="currentColor" className="animate-pulse" />
      </svg>
    )
  }
];

export default function AboutSection({ aboutText }: AboutSectionProps) {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-800 via-blue-900 to-slate-800 py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main heading */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-lg md:text-xl text-white/80 leading-relaxed max-w-4xl mx-auto">
            {aboutText}
          </p>
        </div>

        {/* Photo gallery with doodles */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 mt-16">
          {aboutItems.map((item) => (
            <div key={item.id} className="relative group">
              <div className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${item.gradientFrom} ${item.gradientTo} p-6 backdrop-blur-sm border border-white/10 ${item.borderHover} transition-all duration-300 hover:scale-105`}>
                {item.doodleComponent}
                
                <div className="relative w-full h-64 md:h-72 rounded-xl overflow-hidden mb-6 bg-gradient-to-br from-slate-700 to-slate-800 border-4 border-white/20">
                  {/* Placeholder for image */}
                  <div className="absolute inset-0 flex items-center justify-center text-white/60">
                    <div className="text-center">
                      <div className={`w-16 h-16 mx-auto mb-3 rounded-full bg-gradient-to-br ${item.gradientFrom.replace('/20', '')} ${item.gradientTo.replace('/20', '')} flex items-center justify-center`}>
                        {item.placeholderIcon}
                      </div>
                      <p className="text-sm font-medium">{item.title}</p>
                    </div>
                  </div>
                  {/* Replace with actual image when ready */}
                  <Image
                    src={item.imagePath}
                    alt={item.imageAlt}
                    fill
                    className="object-cover"
                  />
                </div>
                
                <div className="text-center">
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-white/70 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}