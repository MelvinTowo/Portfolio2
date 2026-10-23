'use client';

import { motion } from 'framer-motion';

interface AboutSectionProps {
  aboutText: string;
}

export default function AboutSection({ aboutText }: AboutSectionProps) {
  return (
    <section id="about" className="relative py-32 lg:py-40">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Section header */}
        <div className="grid lg:grid-cols-12 gap-10 mb-20">
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-6 font-mono text-xs uppercase tracking-widest text-fg-muted">
              <span className="w-8 h-px bg-accent" />
              About
            </div>
            <h2 className="font-serif text-5xl lg:text-6xl leading-[1.05] text-fg">
              A little <span className="italic">context</span>.
            </h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 lg:col-start-6 self-end text-lg lg:text-xl text-fg-muted leading-relaxed"
          >
            {aboutText}
          </motion.p>
        </div>

        {/* Bento grid — pure typographic */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-4 lg:gap-5">
          {/* Education — featured */}
          <BentoCard className="md:col-span-4" label="01 — Education">
            <h3 className="font-serif text-3xl lg:text-4xl text-fg mb-4 leading-tight">
              Computer Science, <span className="italic">UNT</span>
            </h3>
            <p className="text-fg-muted leading-relaxed">
              Graduated in 2023 with a focus on software engineering, algorithms, and
              internet/cloud programming. Now back in school — MS in CS at{' '}
              <span className="text-accent">Georgia Tech</span>, focused on machine learning.
            </p>
          </BentoCard>

          {/* Currently */}
          <BentoCard className="md:col-span-2" label="02 — Currently">
            <h3 className="font-serif text-2xl text-fg mb-2 leading-tight">
              At <span className="italic">Toshiba</span>
            </h3>
            <p className="text-sm text-fg-muted leading-relaxed">
              Backend & cloud infrastructure engineer — cloud, DevOps, AI/CV, and data
              engineering.
            </p>
          </BentoCard>

          {/* Based */}
          <BentoCard className="md:col-span-2" label="03 — Based">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="font-serif text-2xl text-fg leading-tight">Dallas, TX</h3>
                <p className="text-sm text-fg-muted mt-1">Originally from Tanzania 🇹🇿</p>
              </div>
              <div className="font-serif italic text-3xl text-fg-subtle whitespace-nowrap">
                32.7°N
              </div>
            </div>
          </BentoCard>

          {/* Off hours */}
          <BentoCard className="md:col-span-2" label="04 — Off hours">
            <h3 className="font-serif text-2xl text-fg mb-2 leading-tight">
              Film, travel, <span className="italic">movement</span>
            </h3>
            <p className="text-sm text-fg-muted leading-relaxed">
              Videography, new cities, and lifting — usually in that order.
            </p>
          </BentoCard>

          {/* Now */}
          <BentoCard className="md:col-span-2" label="05 — Now">
            <h3 className="font-serif text-2xl text-fg mb-3 leading-tight">
              Building <span className="italic text-accent">Volt</span>
            </h3>
            <p className="text-sm text-fg-muted leading-relaxed">
              A side project reimagining how EV charging networks surface real, trustworthy
              data to drivers.
            </p>
          </BentoCard>
        </div>
      </div>
    </section>
  );
}

interface BentoCardProps {
  children: React.ReactNode;
  className?: string;
  label: string;
}

function BentoCard({ children, className = '', label }: BentoCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5 }}
      className={`group relative overflow-hidden rounded-2xl border border-border bg-bg-elevated hover:border-border-strong transition-colors ${className}`}
    >
      <div className="relative p-6 lg:p-8">
        <div className="flex items-center gap-2 mb-4 font-mono text-[10px] uppercase tracking-widest text-fg-subtle">
          {label}
        </div>
        {children}
      </div>
    </motion.div>
  );
}
