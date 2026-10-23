'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

const links = [
  { label: 'Email', value: 'melvintowo@gmail.com', href: 'mailto:melvintowo@gmail.com' },
  { label: 'LinkedIn', value: '/in/melvintowo', href: 'https://www.linkedin.com/in/melvintowo/' },
  { label: 'GitHub', value: '@MelvinTowo', href: 'https://github.com/MelvinTowo' },
];

export default function LetsConnect() {
  const [showModal, setShowModal] = useState(false);
  const [visitorName, setVisitorName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!visitorName.trim()) return;

    setIsSubmitting(true);
    try {
      const response = await fetch('/api/visitor-notification', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: visitorName.trim(),
          timestamp: new Date().toISOString(),
        }),
      });

      if (response.ok) {
        setSubmitMessage('Thanks for stopping by.');
        setVisitorName('');
        setTimeout(() => {
          setShowModal(false);
          setSubmitMessage('');
        }, 2000);
      } else {
        setSubmitMessage('Something went wrong — try again.');
      }
    } catch {
      setSubmitMessage('Something went wrong — try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const closeModal = () => {
    setShowModal(false);
    setVisitorName('');
    setSubmitMessage('');
  };

  return (
    <>
      <section id="connect" className="relative py-32 lg:py-40 border-t border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-10">
            {/* Left: headline */}
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3 mb-6 font-mono text-xs uppercase tracking-widest text-fg-muted">
                <span className="w-8 h-px bg-accent" />
                Contact
              </div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.7 }}
                className="font-serif text-6xl md:text-7xl lg:text-8xl leading-[0.95] text-fg"
              >
                Let&apos;s make
                <br />
                <span className="italic text-accent">something.</span>
              </motion.h2>
              <p className="mt-8 max-w-lg text-lg text-fg-muted leading-relaxed">
                Whether it&apos;s a project you want to build, a role you&apos;d like to talk about,
                or just a hello — I read every message.
              </p>

              <a
                href="mailto:melvintowo@gmail.com"
                className="mt-10 inline-flex items-center gap-3 bg-accent text-accent-fg font-mono uppercase text-xs tracking-widest px-6 py-4 rounded-full hover:gap-4 transition-all"
              >
                melvintowo@gmail.com
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </a>
            </div>

            {/* Right: links + visitor */}
            <div className="lg:col-span-5 space-y-4">
              {links.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  target={l.href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between p-5 rounded-2xl border border-border bg-bg-elevated hover:border-accent transition-colors"
                >
                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-widest text-fg-subtle mb-1">
                      {l.label}
                    </div>
                    <div className="font-serif text-lg text-fg">{l.value}</div>
                  </div>
                  <span className="text-fg-muted group-hover:text-accent transition-colors">↗</span>
                </a>
              ))}

              {/* Visitor pill */}
              <button
                onClick={() => setShowModal(true)}
                className="w-full flex items-center justify-between p-5 rounded-2xl border border-dashed border-border-strong hover:border-accent hover:bg-bg-elevated transition-all text-left"
              >
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-widest text-fg-subtle mb-1">
                    Say hi
                  </div>
                  <div className="font-serif italic text-lg text-fg">Just leave your name →</div>
                </div>
                <span className="text-accent">✦</span>
              </button>
            </div>
          </div>
        </div>

        {/* Footer strip */}
        <div className="max-w-7xl mx-auto px-6 lg:px-10 mt-24 pt-8 border-t border-border text-[11px] font-mono uppercase tracking-widest text-fg-subtle">
          © {new Date().getFullYear()} Melvin Towo
        </div>
      </section>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-[60] bg-bg/70 backdrop-blur-md flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative bg-bg-elevated border border-border rounded-3xl p-8 max-w-md w-full"
          >
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center text-fg-muted hover:text-fg"
              aria-label="Close"
            >
              ×
            </button>

            <div className="font-mono text-[10px] uppercase tracking-widest text-fg-subtle mb-2">
              Guest book
            </div>
            <h3 className="font-serif text-3xl text-fg mb-6">
              What&apos;s your <span className="italic">name?</span>
            </h3>

            {submitMessage ? (
              <div className="p-4 rounded-xl bg-accent-soft border border-accent/30 text-fg">
                {submitMessage}
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  value={visitorName}
                  onChange={(e) => setVisitorName(e.target.value)}
                  placeholder="Type your name"
                  className="w-full px-4 py-3 bg-bg border border-border rounded-xl text-fg placeholder-fg-subtle focus:outline-none focus:border-accent transition-colors"
                  maxLength={50}
                  required
                  autoFocus
                />
                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={closeModal}
                    className="flex-1 px-5 py-3 border border-border rounded-xl text-fg-muted font-mono uppercase text-xs tracking-widest hover:text-fg transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting || !visitorName.trim()}
                    className="flex-1 px-5 py-3 bg-accent text-accent-fg font-mono uppercase text-xs tracking-widest rounded-xl disabled:opacity-50 transition-opacity"
                  >
                    {isSubmitting ? 'Sending…' : 'Say hi'}
                  </button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      )}
    </>
  );
}
