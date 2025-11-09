'use client';

import { useState } from 'react';

export default function LetsConnect() {
  const [showModal, setShowModal] = useState(false);
  const [visitorName, setVisitorName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleNotifyClick = () => {
    setShowModal(true);
    setSubmitMessage('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!visitorName.trim()) return;

    setIsSubmitting(true);
    try {
      const response = await fetch('/api/visitor-notification', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: visitorName.trim(),
          timestamp: new Date().toISOString(),
        }),
      });

      if (response.ok) {
        setSubmitMessage('Thanks for letting me know you were here! 🎉');
        setVisitorName('');
        setTimeout(() => {
          setShowModal(false);
          setSubmitMessage('');
        }, 2000);
      } else {
        setSubmitMessage('Oops! Something went wrong. Please try again.');
      }
    } catch {
      setSubmitMessage('Oops! Something went wrong. Please try again.');
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
      <section id="connect" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-800 via-purple-900 to-slate-800">
        <div className="max-w-4xl mx-auto text-center text-white px-6">
          <h2 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
            Let&apos;s Connect
          </h2>
          <p className="text-lg md:text-xl text-white/80 mb-8">
            Ready to collaborate or just want to say hello? I&apos;d love to hear from you!
          </p>
          
          {/* Contact Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <button 
              onClick={() => window.open('mailto:melvintowo@gmail.com', '_self')}
              className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full font-semibold hover:scale-105 transition-transform duration-300"
            >
              Email Me
            </button>
            <button 
              onClick={() => window.open('https://www.linkedin.com/in/melvintowo/', '_blank')}
              className="px-8 py-3 bg-white/10 backdrop-blur-lg border border-white/20 rounded-full font-semibold hover:bg-white/20 transition-all duration-300"
            >
              LinkedIn
            </button>
            <button 
              onClick={() => window.open('https://github.com/melvintowo', '_blank')}
              className="px-8 py-3 bg-white/10 backdrop-blur-lg border border-white/20 rounded-full font-semibold hover:bg-white/20 transition-all duration-300"
            >
              GitHub
            </button>
          </div>

          {/* Visitor Notification Section */}
          <div className="border-t border-white/20 pt-8">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              Let me know you were here!
            </h3>
            <p className="text-white/70 mb-6">
              Just visiting? Drop your name and I&apos;ll get a notification that you stopped by.
            </p>
            <button 
              onClick={handleNotifyClick}
              className="px-8 py-3 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full font-semibold hover:scale-105 transition-transform duration-300 text-white shadow-lg shadow-yellow-500/25"
            >
              👋 Say Hi!
            </button>
          </div>
        </div>
      </section>

      {/* Modal Overlay */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-slate-800 rounded-2xl p-8 max-w-md w-full border border-white/20 shadow-2xl relative">
            {/* Close button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 rounded-full transition-all duration-200"
              aria-label="Close modal"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>

            <div className="text-center">
              <h3 className="text-2xl font-bold text-white mb-2">
                Howdy! 
              </h3>
              <p className="text-white/70 mb-6">
                Whats ur name? 
              </p>
              
              {submitMessage ? (
                <div className={`p-4 rounded-lg mb-4 ${
                  submitMessage.includes('Thanks') 
                    ? 'bg-green-500/20 text-green-300 border border-green-500/30' 
                    : 'bg-red-500/20 text-red-300 border border-red-500/30'
                }`}>
                  {submitMessage}
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <input
                    type="text"
                    value={visitorName}
                    onChange={(e) => setVisitorName(e.target.value)}
                    placeholder="Enter your name"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                    maxLength={50}
                    required
                  />
                  <div className="flex gap-3">
                    <button
                      type="button"
                      onClick={closeModal}
                      className="flex-1 px-6 py-3 bg-white/10 border border-white/20 rounded-lg text-white hover:bg-white/20 transition-all duration-300"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      disabled={isSubmitting || !visitorName.trim()}
                      className="flex-1 px-6 py-3 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg text-white font-semibold hover:scale-105 transition-transform duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                    >
                      {isSubmitting ? 'Notifying...' : 'Notify'}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}