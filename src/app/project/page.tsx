'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function ProjectPage() {
  return (
    <main className="min-h-screen pt-24 flex flex-col">
      <section className="flex-1 flex items-center">
        <div className="max-w-5xl mx-auto px-6 lg:px-10 py-24 w-full">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-8 font-mono text-xs uppercase tracking-widest text-fg-muted"
          >
            <span className="w-8 h-px bg-accent" />
            Projects
            <span className="w-1 h-1 rounded-full bg-fg-subtle" />
            <span className="text-fg-subtle">In the kitchen</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="font-serif text-6xl md:text-7xl lg:text-8xl leading-[0.95] text-fg"
          >
            Under <span className="italic text-accent">construction</span>.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8 max-w-xl text-lg text-fg-muted leading-relaxed"
          >
            I&apos;m sorting through what&apos;s shippable, what&apos;s shelved, and what&apos;s
            still cooking. Come back soon — this page gets the full treatment next.
          </motion.p>

          {/* Status strip */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl"
          >
            {[
              { label: 'Status', value: 'Drafting' },
              { label: 'Updated', value: 'Oct 2026' },
              { label: 'ETA', value: 'Soon' },
            ].map((s) => (
              <div
                key={s.label}
                className="rounded-2xl border border-border bg-bg-elevated p-5"
              >
                <div className="font-mono text-[10px] uppercase tracking-widest text-fg-subtle mb-2">
                  {s.label}
                </div>
                <div className="font-serif text-xl text-fg">{s.value}</div>
              </div>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-16 flex flex-wrap items-center gap-4"
          >
            <Link
              href="/"
              className="group inline-flex items-center gap-2 bg-accent text-accent-fg font-mono uppercase text-xs tracking-widest px-5 py-3 rounded-full hover:gap-3 transition-all"
            >
              <span className="transition-transform group-hover:-translate-x-0.5">←</span>
              Back home
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
