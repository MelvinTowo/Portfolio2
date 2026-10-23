'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface Project {
  id: string;
  title: string;
  tagline: string;
  year: string;
  role: string;
  stack: string[];
  image?: string;
  href?: string;
  status: 'live' | 'wip' | 'archived';
}

const projects: Project[] = [
  {
    id: 'volt',
    title: 'Volt',
    tagline: 'A charging-network aggregator that surfaces the nearest, cheapest, actually-working plug.',
    year: '2026',
    role: 'Solo — design, backend, infra',
    stack: ['Next.js', 'Go', 'PostgreSQL', 'AWS', 'Terraform'],
    image: '/assets/toshiba.jpeg',
    status: 'wip',
  },
  {
    id: 'toshiba-pipeline',
    title: 'Vision Data Pipeline',
    tagline: 'A cloud-native pipeline that turns raw retail camera feeds into structured signals for downstream ML models.',
    year: '2024',
    role: 'Backend & cloud engineer @ Toshiba',
    stack: ['Python', 'Kafka', 'AWS Lambda', 'S3', 'Docker'],
    status: 'live',
  },
  {
    id: 'infra-tf',
    title: 'Multi-account Terraform',
    tagline: 'A reusable Terraform module set that made spinning up a new team environment a one-command affair.',
    year: '2023',
    role: 'Infra lead',
    stack: ['Terraform', 'AWS', 'GitHub Actions'],
    status: 'live',
  },
  {
    id: 'unt-student-tools',
    title: 'UNT Student Tools',
    tagline: 'Internal utilities I built during my time as a student specialist at UNT — small, but used every day.',
    year: '2022',
    role: 'Student specialist',
    stack: ['React', 'Python', 'PostgreSQL'],
    status: 'archived',
  },
];

const publications = [
  {
    title: 'Notes on running cost-conscious ML pipelines on AWS',
    date: 'Coming soon',
    kind: 'Essay',
  },
  {
    title: 'From monolith to modules: how we untangled a legacy retail service',
    date: 'Coming soon',
    kind: 'Case study',
  },
  {
    title: 'Videography as debugging: what I learned about attention',
    date: 'Coming soon',
    kind: 'Essay',
  },
];

const statusStyles: Record<Project['status'], string> = {
  live: 'text-accent',
  wip: 'text-fg',
  archived: 'text-fg-subtle',
};

export default function ProjectPage() {
  return (
    <main className="pt-24">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 pt-16 lg:pt-24 pb-24">
        <div className="flex items-center gap-3 mb-6 font-mono text-xs uppercase tracking-widest text-fg-muted">
          <span className="w-8 h-px bg-accent" />
          Projects & writing
        </div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="font-serif text-6xl md:text-7xl lg:text-8xl leading-[0.95] text-fg max-w-4xl"
        >
          Things I&apos;ve <span className="italic text-accent">built</span>, and things I&apos;m <span className="italic">writing</span>.
        </motion.h1>
        <p className="mt-8 max-w-2xl text-lg text-fg-muted leading-relaxed">
          A running index of work from Toshiba, side projects, and whatever I&apos;m tinkering with
          on nights and weekends. Some are live, some are in progress, some just live in a
          repo somewhere.
        </p>
      </section>

      {/* Projects list */}
      <section className="border-t border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-4">
          <div className="grid grid-cols-12 items-center py-3 font-mono text-[10px] uppercase tracking-widest text-fg-subtle">
            <div className="col-span-1">#</div>
            <div className="col-span-4 md:col-span-3">Project</div>
            <div className="hidden md:block md:col-span-4">Description</div>
            <div className="hidden md:block md:col-span-2">Stack</div>
            <div className="col-span-4 md:col-span-1 text-right">Year</div>
            <div className="col-span-3 md:col-span-1 text-right">Status</div>
          </div>
        </div>

        <div className="border-t border-border">
          {projects.map((p, i) => (
            <ProjectRow key={p.id} project={p} index={i} />
          ))}
        </div>
      </section>

      {/* Featured project — Volt */}
      <section className="border-t border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-24 lg:py-32">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6">
              <div className="flex items-center gap-3 mb-6 font-mono text-xs uppercase tracking-widest text-fg-muted">
                <span className="w-8 h-px bg-accent" />
                Featured / In progress
              </div>
              <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[0.95] text-fg">
                Check out <span className="italic text-accent">Volt</span>.
              </h2>
              <p className="mt-6 text-lg text-fg-muted leading-relaxed max-w-lg">
                My current side project — an EV charging companion that treats charging like the
                real infrastructure problem it is. Live data, actual pricing, honest availability.
              </p>
              <div className="mt-10 flex flex-wrap gap-3">
                <a
                  href="#"
                  className="group inline-flex items-center gap-2 bg-accent text-accent-fg font-mono uppercase text-xs tracking-widest px-6 py-3 rounded-full hover:gap-3 transition-all"
                >
                  Visit Volt
                  <span className="transition-transform group-hover:translate-x-0.5">→</span>
                </a>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 border border-border-strong text-fg font-mono uppercase text-xs tracking-widest px-6 py-3 rounded-full hover:bg-bg-elevated transition-colors"
                >
                  Read notes
                </a>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative aspect-[5/4] rounded-3xl overflow-hidden border border-border bg-bg-elevated">
                <div className="absolute inset-0 grid grid-cols-6 grid-rows-6">
                  {Array.from({ length: 36 }).map((_, i) => (
                    <div key={i} className="border border-border/40" />
                  ))}
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="font-serif italic text-accent text-8xl md:text-9xl">V</div>
                    <div className="mt-2 font-mono text-[10px] uppercase tracking-widest text-fg-muted">
                      Volt — 2026
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 flex items-center gap-2 bg-bg/80 backdrop-blur-md border border-border rounded-full px-3 py-1.5">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="absolute inline-flex h-full w-full rounded-full bg-accent opacity-60 animate-ping" />
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-accent" />
                  </span>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-fg">
                    In development
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Publications */}
      <section className="border-t border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-24 lg:py-32">
          <div className="grid lg:grid-cols-12 gap-10 mb-16">
            <div className="lg:col-span-4">
              <div className="flex items-center gap-3 mb-6 font-mono text-xs uppercase tracking-widest text-fg-muted">
                <span className="w-8 h-px bg-accent" />
                Writing
              </div>
              <h2 className="font-serif text-5xl lg:text-6xl leading-[1.05] text-fg">
                Notes & <span className="italic">essays</span>.
              </h2>
            </div>
            <p className="lg:col-span-6 lg:col-start-6 self-end text-lg text-fg-muted leading-relaxed">
              A place to think out loud about backend systems, cloud economics, and everything in
              between. Coming soon — I&apos;m drafting the first few now.
            </p>
          </div>

          <div className="divide-y divide-border border-y border-border">
            {publications.map((pub) => (
              <div
                key={pub.title}
                className="group grid grid-cols-12 gap-4 py-6 items-center hover:bg-bg-elevated/60 transition-colors px-4 -mx-4 rounded-lg"
              >
                <div className="col-span-2 md:col-span-1 font-mono text-[10px] uppercase tracking-widest text-fg-subtle">
                  {pub.kind}
                </div>
                <div className="col-span-7 md:col-span-8 font-serif text-xl md:text-2xl text-fg">
                  {pub.title}
                </div>
                <div className="col-span-3 text-right font-mono text-[11px] uppercase tracking-widest text-fg-subtle">
                  {pub.date}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <section className="border-t border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <div className="font-mono text-[10px] uppercase tracking-widest text-fg-subtle mb-2">
              Want to work together?
            </div>
            <div className="font-serif text-3xl text-fg">
              Say <Link href="/#connect" className="italic text-accent underline decoration-accent/40 underline-offset-4">hello</Link>.
            </div>
          </div>
          <Link
            href="/"
            className="font-mono text-xs uppercase tracking-widest text-fg-muted hover:text-fg transition-colors"
          >
            ← Back home
          </Link>
        </div>
      </section>
    </main>
  );
}

function ProjectRow({ project, index }: { project: Project; index: number }) {
  const content = (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.4, delay: index * 0.04 }}
      className="group grid grid-cols-12 gap-4 items-center px-6 lg:px-10 py-6 border-b border-border hover:bg-bg-elevated/60 transition-colors"
    >
      <div className="col-span-1 font-mono text-[11px] text-fg-subtle tabular-nums">
        {String(index + 1).padStart(2, '0')}
      </div>
      <div className="col-span-4 md:col-span-3">
        <div className="font-serif text-2xl md:text-3xl text-fg group-hover:text-accent transition-colors">
          {project.title}
        </div>
        <div className="mt-1 font-mono text-[10px] uppercase tracking-widest text-fg-subtle">
          {project.role}
        </div>
      </div>
      <div className="hidden md:block md:col-span-4 text-fg-muted leading-relaxed">
        {project.tagline}
      </div>
      <div className="hidden md:flex md:col-span-2 flex-wrap gap-1">
        {project.stack.slice(0, 3).map((s) => (
          <span
            key={s}
            className="text-[10px] font-mono uppercase tracking-wider text-fg-muted border border-border rounded-full px-2 py-0.5"
          >
            {s}
          </span>
        ))}
      </div>
      <div className="col-span-4 md:col-span-1 text-right font-mono text-sm text-fg-muted tabular-nums">
        {project.year}
      </div>
      <div className={`col-span-3 md:col-span-1 text-right font-mono text-[10px] uppercase tracking-widest ${statusStyles[project.status]}`}>
        {project.status}
      </div>
    </motion.div>
  );

  return project.href ? (
    <Link href={project.href}>{content}</Link>
  ) : (
    content
  );
}
