'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface HeroSectionProps {
  summaryText: string;
}

const stack = [
  'AWS', 'Kubernetes', 'Terraform', 'Go', 'Python', 'TypeScript',
  'PostgreSQL', 'Docker', 'GraphQL', 'gRPC', 'Kafka', 'Redis',
];

interface Star {
  id: number;
  left: number;
  top: number;
  size: number;
  opacity: number;
  delay: number;
  duration: number;
}

export default function HeroSection({ summaryText }: HeroSectionProps) {
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    const count = window.innerWidth < 768 ? 60 : 120;
    const generated: Star[] = Array.from({ length: count }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      size: Math.random() < 0.85 ? 1 : Math.random() < 0.95 ? 1.5 : 2.5,
      opacity: 0.2 + Math.random() * 0.6,
      delay: Math.random() * 4,
      duration: 2.5 + Math.random() * 3.5,
    }));
    setStars(generated);
  }, []);

  const now = new Date().toLocaleTimeString('en-US', {
    hour: '2-digit', minute: '2-digit', timeZone: 'America/Chicago', hour12: false,
  });

  return (
    <section id="home" className="relative min-h-screen pt-24 pb-16 overflow-hidden">
      {/* Stars */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        {stars.map((s) => (
          <span
            key={s.id}
            className="absolute rounded-full bg-fg star-twinkle"
            style={{
              left: `${s.left}%`,
              top: `${s.top}%`,
              width: `${s.size}px`,
              height: `${s.size}px`,
              opacity: s.opacity,
              animationDelay: `${s.delay}s`,
              animationDuration: `${s.duration}s`,
            }}
          />
        ))}
        {/* Soft glow top-right */}
        <div className="absolute -top-20 -right-20 w-[32rem] h-[32rem] rounded-full bg-accent/5 blur-3xl" />
      </div>

      {/* Meta strip */}
      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between text-[11px] font-mono uppercase tracking-widest text-fg-subtle">
        <span className="hidden sm:inline">Dallas, TX · {now} CT</span>
        <span className="sm:hidden">Dallas, TX</span>
        <span>2026 —</span>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 mt-16 lg:mt-24">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Text column */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-8 font-mono text-xs uppercase tracking-widest text-fg-muted"
            >
              <span className="w-8 h-px bg-accent" />
              Backend & Cloud Engineer
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05 }}
              className="font-serif text-[clamp(3rem,9vw,7.5rem)] leading-[0.95] tracking-tight text-fg"
            >
              Melvin
              <br />
              <span className="italic text-accent">Towo</span>
              <span className="text-accent">.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-8 max-w-xl text-base lg:text-lg text-fg-muted leading-relaxed"
            >
              {summaryText}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <a
                href="#connect"
                className="group inline-flex items-center gap-2 bg-accent text-accent-fg font-mono uppercase text-xs tracking-widest px-5 py-3 rounded-full hover:gap-3 transition-all"
              >
                Get in touch
                <span className="transition-transform group-hover:translate-x-0.5">→</span>
              </a>
              <a
                href="/project"
                className="inline-flex items-center gap-2 border border-border-strong text-fg font-mono uppercase text-xs tracking-widest px-5 py-3 rounded-full hover:bg-bg-elevated transition-colors"
              >
                See projects
              </a>
            </motion.div>

            {/* Quick stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-14 grid grid-cols-3 max-w-lg gap-6"
            >
              {[
                { k: '3+', v: 'Of experience' },
                { k: 'MS', v: 'CS @ Georgia Tech' },
                { k: 'Azure', v: 'Cloud focus' },
              ].map((s) => (
                <div key={s.v} className="border-l border-border pl-4">
                  <div className="font-serif text-2xl text-fg">{s.k}</div>
                  <div className="mt-1 text-[11px] font-mono uppercase tracking-wider text-fg-subtle">
                    {s.v}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Portrait column */}
          <div className="lg:col-span-5 order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="relative mx-auto lg:ml-auto w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[26rem] lg:h-[26rem]"
            >
              {/* Decorative rings */}
              <div className="absolute inset-0 rounded-full border border-border" />
              <div className="absolute -inset-4 rounded-full border border-border/60" />
              <div className="absolute -inset-10 rounded-full border border-border/30" />

              {/* Image */}
              <div className="absolute inset-0 overflow-hidden rounded-full border border-border bg-bg-elevated">
                <Image
                  src="/assets/Melvin.jpeg"
                  alt="Melvin Towo"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>

              {/* Floating "Currently" card */}
              <div className="absolute -bottom-2 -left-4 sm:-left-8 bg-bg-elevated border border-border rounded-2xl p-4 shadow-2xl">
                <div className="text-[10px] font-mono uppercase tracking-widest text-fg-subtle">
                  Currently
                </div>
                <div className="mt-1 text-sm text-fg whitespace-nowrap">
                  <span className="font-serif italic">Backend & Cloud</span> at{' '}
                  <span className="text-accent">Toshiba</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Marquee */}
      <div className="mt-24 lg:mt-32 border-y border-border py-4 overflow-hidden">
        <div className="flex whitespace-nowrap animate-marquee gap-10">
          {[...stack, ...stack].map((s, i) => (
            <span
              key={i}
              className="font-serif italic text-2xl text-fg-muted inline-flex items-center gap-10"
            >
              {s}
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
