'use client';

import * as Three from 'three';
import { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

// Timeline item interface for type safety
interface TimelineItem {
  id: number;
  image: string;
  year: string;
  title: string;
  description: string;
  category?: string; // Optional category for grouping
  skills?: string[]; // Optional skills/technologies used
  highlight?: boolean; // Optional highlight for important milestones
}

// Timeline configuration
const timelineConfig = {
  itemsPerRow: {
    desktop: 4, // Number of items per row on desktop
    mobile: 1   // Always 1 for mobile (vertical layout)
  },
  animation: {
    duration: 0.3,
    stagger: 0.1
  }
};

// Timeline data - easily expandable by adding new items to this array
const timelineData: TimelineItem[] = [
  {
    id: 1,
    image: '/assets/flight.jpeg',
    year: '2019',
    title: 'Moving to the US',
    description: 'I left my origin country of Tanzania to pursue my education in the US',
    category: 'Personal',
    skills: ['AWS', 'Node.js', 'Docker', 'Kubernetes'],
    highlight: true
  },
  {
    id: 2,
    image: '/assets/bonfire.jpeg',
    year: '2021',
    title: 'Joined UNT',
    description: 'I transfer to UNT for my undergraduate degree in Computer Science',
    category: 'Education',
    skills: ['Machine Learning', 'Algorithms', 'System Design'],
    highlight: true
  },
  {
    id: 3,
    image: '/assets/untlight.webp',
    year: '2022',
    title: 'First Job',
    description: 'Started working at UNT as a student specialist at the New College',
    category: 'Career',
    skills: ['React', 'Python', 'PostgreSQL']
  },
  {
    id: 4,
    image: '/assets/toshiba.jpeg',
    year: '2023',
    title: 'Joined Toshiba',
    description: 'Started my journey in through the clouds at Toshiba as a cloud engineer',
    category: 'Career',
    skills: ['HTML', 'CSS', 'JavaScript']
  },
  
  
  {
    id: 5,
    image: '/assets/gtech.jpg',
    year: '2025',
    title: 'Joined GTECH',
    description: 'Started my masters of science in Computer Science focusing on machine learning',
    category: 'Education',
    skills: ['Skill1', 'Skill2'],
    highlight: false
  },

  {
    id: 6,
    image: '/assets/future.jpg',
    year: '20..?',
    title: 'The future',
    description: 'The future? im not sure *yet*, but what I do know is its going to be bright.',
    category: 'Personal',
    skills: ['Skill1', 'Skill2'],
    highlight: false
  }

];

export default function Timeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let scene: Three.Scene;
    let camera: Three.PerspectiveCamera;
    let renderer: Three.WebGLRenderer;
    let particles: Three.Points;
    let lineGeometry: Three.BufferGeometry;
    let line: Three.Line;
    let animationFrameId: number;

    const init = () => {
      const width = container.clientWidth;
      const height = container.clientHeight;

      // Scene setup
      scene = new Three.Scene();
      camera = new Three.PerspectiveCamera(75, width / height, 0.1, 1000);
      camera.position.z = 5;

      renderer = new Three.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setSize(width, height);
      renderer.setClearColor(0x000000, 0);
      container.appendChild(renderer.domElement);

      // Create animated timeline line
      const linePoints = [];
      const particleCount = 100;
      
      for (let i = 0; i < particleCount; i++) {
        const x = (i / particleCount) * 8 - 4; // Spread across screen
        linePoints.push(new Three.Vector3(x, 0, 0));
      }

      lineGeometry = new Three.BufferGeometry().setFromPoints(linePoints);
      const lineMaterial = new Three.LineBasicMaterial({ 
        color: 0x10b981, 
        transparent: true, 
        opacity: 0.8 
      });
      line = new Three.Line(lineGeometry, lineMaterial);
      scene.add(line);

      // Create floating particles
      const particleGeometry = new Three.BufferGeometry();
      const particlePositions = new Float32Array(particleCount * 3);
      const particleColors = new Float32Array(particleCount * 3);

      for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3;
        particlePositions[i3] = (Math.random() - 0.5) * 10;
        particlePositions[i3 + 1] = (Math.random() - 0.5) * 6;
        particlePositions[i3 + 2] = (Math.random() - 0.5) * 2;

        // Color gradient based on position
        const color = new Three.Color();
        color.setHSL(0.5 + (i / particleCount) * 0.2, 0.8, 0.6);
        particleColors[i3] = color.r;
        particleColors[i3 + 1] = color.g;
        particleColors[i3 + 2] = color.b;
      }

      particleGeometry.setAttribute('position', new Three.BufferAttribute(particlePositions, 3));
      particleGeometry.setAttribute('color', new Three.BufferAttribute(particleColors, 3));

      const particleMaterial = new Three.PointsMaterial({
        size: 0.05,
        vertexColors: true,
        transparent: true,
        opacity: 0.6,
        blending: Three.AdditiveBlending
      });

      particles = new Three.Points(particleGeometry, particleMaterial);
      scene.add(particles);

      // Animation loop
      const animate = () => {
        animationFrameId = requestAnimationFrame(animate);

        // Rotate particles slowly
        particles.rotation.z += 0.001;
        
        // Animate timeline line
        line.rotation.z = Math.sin(Date.now() * 0.0005) * 0.1;

        // Update particle positions
        const positions = particles.geometry.attributes.position.array as Float32Array;
        for (let i = 0; i < positions.length; i += 3) {
          positions[i + 1] += Math.sin(Date.now() * 0.001 + positions[i]) * 0.001;
        }
        particles.geometry.attributes.position.needsUpdate = true;

        renderer.render(scene, camera);
      };
      animate();

      // Handle resize
      const handleResize = () => {
        const width = container.clientWidth;
        const height = container.clientHeight;
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        renderer.setSize(width, height);
      };

      window.addEventListener('resize', handleResize);

      // Scroll animation - adapts to timeline length
      const scrollTrigger = ScrollTrigger.create({
        trigger: container,
        start: 'top 80%',
        end: 'bottom 20%',
        scrub: timelineConfig.animation.duration,
        onUpdate: (self) => {
          const progress = self.progress;
          setScrollProgress(progress);
          
          // Update timeline based on scroll - ensure we reach all items
          const maxIndex = timelineData.length - 1;
          // Use a more generous calculation to ensure we reach the last item
          const index = Math.round(progress * maxIndex);
          setCurrentIndex(Math.min(index, maxIndex));

          // Animate camera based on scroll - adjust movement based on item count
          const cameraRange = Math.min(timelineData.length * 0.3, 2);
          camera.position.x = (progress - 0.5) * cameraRange;
          (line.material as Three.LineBasicMaterial).opacity = 0.3 + progress * 0.7;
        }
      });

      return () => {
        cancelAnimationFrame(animationFrameId);
        scrollTrigger.kill();
        window.removeEventListener('resize', handleResize);
        scene.clear();
        renderer.dispose();
        if (container && renderer.domElement) {
          container.removeChild(renderer.domElement);
        }
      };
    };

    init();
  }, []);

  return (
    <section id="timeline" className="relative min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 overflow-hidden">
      {/* Title */}
      <div className="absolute top-8 left-1/2 transform -translate-x-1/2 z-20 text-center">
        {/* <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
          My Journey
        </h2> */}
      </div>

      {/* Three.js Background */}
      <div ref={containerRef} className="absolute inset-0 top-24" />

      {/* Timeline Content */}
      <div className="relative z-10 min-h-screen flex items-center py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 ">
              My Journey
            </h2>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              Key milestones and experiences that shaped my career
            </p>
          </div>

          {/* Desktop Timeline */}
          <div className="hidden md:block relative">
            {/* Horizontal line */}
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-emerald-500 via-blue-500 to-purple-500 transform -translate-y-1/2" />
            
            {/* Progress indicator */}
            <div 
              className="absolute top-1/2 left-0 h-1 bg-gradient-to-r from-emerald-400 to-blue-400 transform -translate-y-1/2 transition-all duration-300 rounded-full"
              style={{ width: `${scrollProgress * 100}%` }}
            />

            {/* Timeline Items - Dynamic grid based on number of items */}
            <div className={`grid gap-8 ${
              timelineData.length <= 2 ? 'grid-cols-1 lg:grid-cols-2' :
              timelineData.length <= 3 ? 'grid-cols-1 lg:grid-cols-3' :
              timelineData.length <= 4 ? 'grid-cols-1 lg:grid-cols-2 xl:grid-cols-4' :
              timelineData.length <= 6 ? 'grid-cols-1 lg:grid-cols-2 xl:grid-cols-3' :
              'grid-cols-1 lg:grid-cols-2 xl:grid-cols-4'
            }`}>
              {timelineData.map((item, index) => (
                <div key={item.id} className="relative">
                  {/* Timeline dot */}
                  <div 
                    className={`absolute top-0 left-1/2 w-4 h-4 rounded-full border-4 transform -translate-x-1/2 -translate-y-2 transition-all duration-300 ${
                      index <= currentIndex 
                        ? 'bg-emerald-400 border-emerald-300 shadow-lg shadow-emerald-400/50 scale-125' 
                        : 'bg-slate-600 border-slate-500'
                    } ${item.highlight ? 'ring-2 ring-yellow-400/50' : ''}`}
                  />
                  
                  {/* Content card */}
                  <div 
                    className={`mt-8 p-6 rounded-2xl border transition-all duration-500 ${
                      index === currentIndex
                        ? 'bg-white/10 border-emerald-400/50 backdrop-blur-lg shadow-2xl scale-105'
                        : item.highlight 
                        ? 'bg-white/8 border-yellow-400/30 backdrop-blur-sm'
                        : 'bg-white/5 border-white/10 backdrop-blur-sm'
                    }`}
                  >
                    {/* Category badge */}
                    {item.category && (
                      <div className="absolute -top-2 -right-2 bg-gradient-to-r from-emerald-500 to-blue-500 text-white text-xs px-2 py-1 rounded-full font-medium">
                        {item.category}
                      </div>
                    )}
                    
                    {/* Image */}
                    <div className="relative w-full h-32 mb-4 rounded-lg overflow-hidden bg-gradient-to-br from-slate-700 to-slate-800">
                      <Image 
                        src={item.image} 
                        alt={item.title}
                        fill
                        className="object-cover opacity-80"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      />
                    </div>
                    
                    {/* Content */}
                    <div className="text-center">
                      <div className={`text-2xl font-bold mb-2 transition-colors duration-300 ${
                        index === currentIndex ? 'text-emerald-400' : 'text-white/60'
                      }`}>
                        {item.year}
                      </div>
                      <h3 className={`text-lg font-semibold mb-2 transition-colors duration-300 ${
                        index === currentIndex ? 'text-white' : 'text-white/70'
                      }`}>
                        {item.title}
                      </h3>
                      <p className={`text-sm leading-relaxed mb-3 transition-colors duration-300 ${
                        index === currentIndex ? 'text-white/90' : 'text-white/50'
                      }`}>
                        {item.description}
                      </p>
                      
                      {/* Skills tags */}
                      {/* {item.skills && item.skills.length > 0 && (
                        <div className="flex flex-wrap gap-1 justify-center">
                          {item.skills.map((skill, skillIndex) => (
                            <span 
                              key={skillIndex}
                              className={`text-xs px-2 py-1 rounded-full transition-colors duration-300 ${
                                index === currentIndex 
                                  ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30' 
                                  : 'bg-white/10 text-white/60 border border-white/20'
                              }`}
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      )} */}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Timeline - Simple Vertical Layout */}
          <div className="md:hidden space-y-8">
            {timelineData.map((item, index) => (
              <div key={item.id} className="relative">
                {/* Vertical line for mobile */}
                {index < timelineData.length - 1 && (
                  <div className="absolute left-6 top-16 w-0.5 h-full bg-gradient-to-b from-emerald-500 to-blue-500 z-0" />
                )}
                
                <div className="flex items-start space-x-4">
                  {/* Year badge */}
                  <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-sm z-10 ${
                    item.highlight 
                      ? 'bg-gradient-to-br from-yellow-500 to-orange-500 ring-2 ring-yellow-400/50' 
                      : 'bg-gradient-to-br from-emerald-500 to-blue-500'
                  }`}>
                    {item.year.slice(-2)}
                  </div>
                  
                  {/* Content card */}
                  <div className={`flex-1 backdrop-blur-lg rounded-xl p-4 border relative ${
                    item.highlight 
                      ? 'bg-white/12 border-yellow-400/30' 
                      : 'bg-white/10 border-white/20'
                  }`}>
                    {/* Category badge */}
                    {item.category && (
                      <div className="absolute -top-2 -right-2 bg-gradient-to-r from-emerald-500 to-blue-500 text-white text-xs px-2 py-1 rounded-full font-medium">
                        {item.category}
                      </div>
                    )}
                    
                    {/* Image */}
                    <div className="relative w-full h-24 mb-3 rounded-lg overflow-hidden bg-gradient-to-br from-slate-700 to-slate-800">
                      <Image 
                        src={item.image} 
                        alt={item.title}
                        fill
                        className="object-cover opacity-80"
                        sizes="100vw"
                      />
                    </div>
                    
                    {/* Content */}
                    <div>
                      <h3 className="text-white font-semibold text-lg mb-1">
                        {item.title}
                      </h3>
                      <p className="text-emerald-400 font-medium text-sm mb-2">
                        {item.year}
                      </p>
                      <p className="text-white/70 text-sm leading-relaxed mb-3">
                        {item.description}
                      </p>
                      
                      {/* Skills tags for mobile */}
                      {item.skills && item.skills.length > 0 && (
                        <div className="flex flex-wrap gap-1">
                          {item.skills.map((skill, skillIndex) => (
                            <span 
                              key={skillIndex}
                              className="text-xs px-2 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Progress Indicator - Only show on desktop with animated timeline */}
      <div className="hidden md:block absolute bottom-8 right-8 z-20">
        <div className="bg-white/10 backdrop-blur-lg rounded-full px-4 py-2 border border-white/20">
          <div className="text-center text-white text-sm font-medium">
            {Math.round(scrollProgress * 100)}%
          </div>
        </div>
      </div>
    </section>
  );
}