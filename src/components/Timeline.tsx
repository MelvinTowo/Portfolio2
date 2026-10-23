'use client';

import { motion } from 'framer-motion';

interface TimelineItem {
  id: number;
  year: string;
  title: string;
  description: string;
  category: string;
  location?: string;
}

const timelineData: TimelineItem[] = [
  {
    id: 1,
    year: '2019',
    title: 'Moved to the US',
    description: 'Left Tanzania to pursue my education in the United States.',
    category: 'Personal',
    location: 'DAR → USA',
  },
  {
    id: 2,
    year: '2021',
    title: 'Joined UNT',
    description: 'Transferred to the University of North Texas for my undergrad in Computer Science.',
    category: 'Education',
    location: 'Denton, TX',
  },
  {
    id: 3,
    year: '2022',
    title: 'First job',
    description: 'Started as a student specialist at UNT — my first real taste of building for users.',
    category: 'Career',
    location: 'Denton, TX',
  },
  {
    id: 4,
    year: '2023',
    title: 'Joined Toshiba',
    description: 'Started my journey through the cloud at Toshiba as a backend & cloud engineer.',
    category: 'Career',
    location: 'Irvine, CA',
  },
  {
    id: 5,
    year: '2025',
    title: 'Georgia Tech',
    description: 'Began my MS in Computer Science, focused on machine learning.',
    category: 'Education',
    location: 'Atlanta, GA',
  },
  {
    id: 6,
    year: '20—?',
    title: 'What comes next',
    description: 'Not sure yet — but it will be bright.',
    category: 'Personal',
  },
];

// Bento layout per entry — pure typographic rhythm
const layouts = [
  'md:col-span-4', // 2019 — featured
  'md:col-span-2', // 2021
  'md:col-span-2', // 2022
  'md:col-span-2', // 2023
  'md:col-span-2', // 2025
  'md:col-span-6', // future — full width
] as const;

export default function Timeline() {
  return (
    <section id="timeline" className="relative py-32 lg:py-40 border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="grid lg:grid-cols-12 gap-10 mb-20">
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-6 font-mono text-xs uppercase tracking-widest text-fg-muted">
              <span className="w-8 h-px bg-accent" />
              Timeline
            </div>
            <h2 className="font-serif text-5xl lg:text-6xl leading-[1.05] text-fg">
              The <span className="italic">journey</span> so far.
            </h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 lg:col-start-6 self-end text-lg lg:text-xl text-fg-muted leading-relaxed"
          >
            A handful of moments — some planned, most not — that shaped where I stand today.
          </motion.p>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-4 lg:gap-5">
          {timelineData.map((item, i) => (
            <TimelineBentoCard
              key={item.id}
              item={item}
              index={i}
              className={layouts[i] ?? 'md:col-span-2'}
              isFinal={i === timelineData.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

interface TimelineBentoCardProps {
  item: TimelineItem;
  index: number;
  className?: string;
  isFinal: boolean;
}

function TimelineBentoCard({ item, index, className = '', isFinal }: TimelineBentoCardProps) {
  const label = `${String(index + 1).padStart(2, '0')} — ${item.category}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5 }}
      className={`group relative overflow-hidden rounded-2xl border bg-bg-elevated transition-colors ${
        isFinal
          ? 'border-dashed border-border-strong hover:border-accent'
          : 'border-border hover:border-border-strong'
      } ${className}`}
    >
      <div className="relative p-6 lg:p-8">
        <div className="flex items-center justify-between gap-2 mb-4 font-mono text-[10px] uppercase tracking-widest text-fg-subtle">
          <span>{label}</span>
          {item.location && <span>{item.location}</span>}
        </div>

        <div className="font-serif italic text-accent text-base mb-2">{item.year}</div>

        <h3
          className={`font-serif text-fg mb-3 leading-tight ${
            isFinal ? 'text-4xl lg:text-5xl' : 'text-2xl lg:text-3xl'
          }`}
        >
          {isFinal ? (
            <>
              What <span className="italic">comes next</span>
            </>
          ) : (
            item.title
          )}
        </h3>

        <p
          className={`text-fg-muted leading-relaxed ${
            isFinal ? 'text-base lg:text-lg max-w-2xl' : 'text-sm'
          }`}
        >
          {item.description}
        </p>
      </div>
    </motion.div>
  );
}
