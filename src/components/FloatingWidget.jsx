import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaRobot, FaTimes, FaCode, FaGithub, FaEnvelope } from 'react-icons/fa';

const messages = [
  "👋 Hi! I'm HARIS's AI assistant.",
  "💡 Want to see my projects? Scroll to the Projects section!",
  "🏆 I've won 5+ hackathon & competition awards!",
  "⚡ Skilled in React, Node.js, Python, and more!",
  "📧 Feel free to reach out via the Contact section!",
];

const FloatingWidget = () => {
  const [open, setOpen] = useState(false);
  const [msgIndex, setMsgIndex] = useState(0);

  useEffect(() => {
    if (!open) return;
    const t = setInterval(() => setMsgIndex((i) => (i + 1) % messages.length), 3000);
    return () => clearInterval(t);
  }, [open]);

  return (
    <div style={{ position: 'fixed', bottom: 32, right: 32, zIndex: 5000 }}>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="glass"
            style={{
              position: 'absolute', bottom: '70px', right: 0,
              width: 280, padding: '20px',
              borderRadius: '16px',
              border: '1px solid rgba(0,212,255,0.2)',
              boxShadow: '0 0 30px rgba(0,212,255,0.15)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
              <div style={{
                width: 36, height: 36, borderRadius: '50%',
                background: 'linear-gradient(135deg, var(--accent-blue), var(--accent-purple))',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '1rem', boxShadow: '0 0 15px rgba(0,212,255,0.5)',
              }}>
                <FaRobot />
              </div>
              <div>
                <div style={{ fontFamily: 'Orbitron, monospace', fontSize: '0.75rem', fontWeight: 700, color: 'var(--accent-blue)' }}>AI Assistant</div>
                <div style={{ fontSize: '0.65rem', color: 'var(--text-muted)' }}>HARIS.P.M</div>
              </div>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={msgIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '16px', minHeight: 56 }}
              >
                {messages[msgIndex]}
              </motion.div>
            </AnimatePresence>

            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              {[
                { icon: <FaCode />, label: 'Projects', href: '#projects' },
                { icon: <FaGithub />, label: 'GitHub', href: 'https://github.com/harispm' },
                { icon: <FaEnvelope />, label: 'Contact', href: '#contact' },
              ].map(({ icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  onClick={(e) => {
                    if (href.startsWith('#')) {
                      e.preventDefault();
                      document.getElementById(href.replace('#', ''))?.scrollIntoView({ behavior: 'smooth' });
                      setOpen(false);
                    }
                  }}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex', alignItems: 'center', gap: '4px',
                    padding: '6px 12px',
                    background: 'rgba(0,212,255,0.1)',
                    border: '1px solid rgba(0,212,255,0.25)',
                    borderRadius: '20px',
                    fontSize: '0.7rem', color: 'var(--accent-blue)',
                    textDecoration: 'none',
                    transition: 'all 0.2s ease',
                  }}
                >
                  {icon} {label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle button */}
      <motion.button
        onClick={() => setOpen(!open)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        style={{
          width: 56, height: 56, borderRadius: '50%',
          background: 'linear-gradient(135deg, var(--accent-blue), var(--accent-purple))',
          border: 'none',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: '1.3rem', color: 'white',
          boxShadow: '0 0 20px rgba(0,212,255,0.5), 0 0 60px rgba(139,92,246,0.3)',
          cursor: 'none',
          position: 'relative',
        }}
        aria-label="AI Assistant"
      >
        <AnimatePresence mode="wait">
          <motion.span
            key={open ? 'close' : 'open'}
            initial={{ scale: 0, rotate: -90 }}
            animate={{ scale: 1, rotate: 0 }}
            exit={{ scale: 0, rotate: 90 }}
            transition={{ duration: 0.2 }}
          >
            {open ? <FaTimes /> : <FaRobot />}
          </motion.span>
        </AnimatePresence>

        {/* Pulse rings */}
        {!open && (
          <>
            <motion.div
              style={{
                position: 'absolute', inset: -8,
                border: '2px solid rgba(0,212,255,0.3)',
                borderRadius: '50%', pointerEvents: 'none',
              }}
              animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <motion.div
              style={{
                position: 'absolute', inset: -16,
                border: '1px solid rgba(0,212,255,0.15)',
                borderRadius: '50%', pointerEvents: 'none',
              }}
              animate={{ scale: [1, 1.4, 1], opacity: [0.3, 0, 0.3] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
            />
          </>
        )}
      </motion.button>
    </div>
  );
};

export default FloatingWidget;
