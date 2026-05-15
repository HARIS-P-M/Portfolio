import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LoadingScreen = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setDone(true);
            setTimeout(onComplete, 600);
          }, 300);
          return 100;
        }
        return prev + Math.random() * 8 + 2;
      });
    }, 60);
    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="loading-screen"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          style={{ background: 'var(--bg-primary)', position: 'fixed', inset: 0, zIndex: 100000, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '32px' }}
        >
          {/* Logo / Name */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{ textAlign: 'center' }}
          >
            <div style={{ fontFamily: 'Orbitron, monospace', fontSize: 'clamp(2rem, 6vw, 4rem)', fontWeight: 900, letterSpacing: '0.1em' }}>
              <span className="gradient-text">HARIS</span>
              <span style={{ color: 'var(--accent-purple)', letterSpacing: '0.3em' }}> PM</span>
            </div>
            <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.9rem', color: 'var(--accent-blue)', letterSpacing: '0.3em', marginTop: '8px' }}>
              {'// INITIALIZING PORTFOLIO...'}
            </div>
          </motion.div>

          {/* Hexagon loader */}
          <motion.div
            style={{
              width: 80, height: 80,
              border: '2px solid var(--accent-blue)',
              borderRadius: '12px',
              position: 'relative',
              display: 'flex', alignItems: 'center', justifyContent: 'center'
            }}
            animate={{ rotate: [0, 90, 180, 270, 360] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
          >
            <motion.div
              style={{
                width: 40, height: 40,
                border: '2px solid var(--accent-purple)',
                borderRadius: '50%',
              }}
              animate={{ rotate: [360, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
            />
            <div style={{
              position: 'absolute',
              width: '100%', height: '100%',
              border: '2px solid transparent',
              borderTopColor: 'var(--accent-pink)',
              borderRadius: '12px',
              animation: 'rotate-slow 1s linear infinite'
            }} />
          </motion.div>

          {/* Progress bar */}
          <div style={{ width: 'min(320px, 80vw)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
              <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.75rem', color: 'var(--text-secondary)' }}>LOADING MODULES</span>
              <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.75rem', color: 'var(--accent-blue)' }}>{Math.min(100, Math.round(progress))}%</span>
            </div>
            <div style={{ height: '4px', background: 'rgba(255,255,255,0.05)', borderRadius: '2px', overflow: 'hidden' }}>
              <motion.div
                style={{
                  height: '100%',
                  background: 'linear-gradient(90deg, var(--accent-blue), var(--accent-purple), var(--accent-pink))',
                  borderRadius: '2px',
                  boxShadow: '0 0 10px rgba(0,212,255,0.8)',
                  width: `${Math.min(100, progress)}%`,
                  transition: 'width 0.1s ease'
                }}
              />
            </div>
            <div style={{ marginTop: '8px', display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              {['React.js', 'Three.js', 'Framer Motion', 'GSAP'].map((lib, i) => (
                <motion.span
                  key={lib}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: progress > i * 25 ? 1 : 0.2 }}
                  style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.65rem', color: 'var(--accent-cyan)', padding: '2px 6px', border: '1px solid rgba(0,212,255,0.2)', borderRadius: '4px' }}
                >
                  {lib}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
