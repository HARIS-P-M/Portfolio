import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload, FaArrowRight, FaCode } from 'react-icons/fa';
import { SiReact, SiNodedotjs, SiMongodb, SiPython, SiJavascript, SiThreedotjs } from 'react-icons/si';

const floatingIcons = [
  { Icon: SiReact, color: '#61dafb', style: { top: '15%', left: '8%' } },
  { Icon: SiNodedotjs, color: '#68a063', style: { top: '25%', right: '10%' } },
  { Icon: SiMongodb, color: '#47a248', style: { bottom: '30%', left: '6%' } },
  { Icon: SiPython, color: '#3776ab', style: { top: '60%', right: '8%' } },
  { Icon: SiJavascript, color: '#f7df1e', style: { bottom: '20%', right: '15%' } },
  { Icon: SiThreedotjs, color: '#ffffff', style: { top: '40%', left: '4%' } },
];

const socialLinks = [
  { Icon: FaGithub, href: 'https://github.com/haris-p-m', label: 'GitHub', color: 'var(--text-primary)' },
  { Icon: FaLinkedin, href: 'https://linkedin.com/in/haris-p-m', label: 'LinkedIn', color: '#0a66c2' },
  { Icon: FaEnvelope, href: 'mailto:harispm@email.com', label: 'Email', color: 'var(--accent-pink)' },
];

const Hero = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handle = (e) => setMousePos({ x: e.clientX / window.innerWidth - 0.5, y: e.clientY / window.innerHeight - 0.5 });
    window.addEventListener('mousemove', handle);
    return () => window.removeEventListener('mousemove', handle);
  }, []);

  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        paddingTop: '72px',
      }}
    >
      {/* Animated background orbs */}
      <div className="orb orb-blue" style={{
        top: '10%', left: '5%',
        transform: `translate(${mousePos.x * -30}px, ${mousePos.y * -20}px)`,
        transition: 'transform 0.3s ease',
      }} />
      <div className="orb orb-purple" style={{
        bottom: '10%', right: '5%',
        transform: `translate(${mousePos.x * 20}px, ${mousePos.y * 15}px)`,
        transition: 'transform 0.3s ease',
      }} />
      <div className="orb orb-pink" style={{
        top: '50%', left: '50%',
        transform: `translate(-50%, -50%) translate(${mousePos.x * 10}px, ${mousePos.y * 10}px)`,
        transition: 'transform 0.3s ease',
      }} />

      {/* Grid overlay */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: `
          linear-gradient(rgba(0,212,255,0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0,212,255,0.03) 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px',
        pointerEvents: 'none',
      }} />

      {/* Floating tech icons */}
      {floatingIcons.map(({ Icon, color, style }, i) => (
        <motion.div
          key={i}
          style={{
            position: 'absolute',
            color,
            fontSize: '2rem',
            opacity: 0.2,
            filter: `drop-shadow(0 0 8px ${color})`,
            ...style,
          }}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 10, -10, 0],
            opacity: [0.15, 0.3, 0.15],
          }}
          transition={{
            duration: 4 + i * 0.5,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: i * 0.4,
          }}
        >
          <Icon />
        </motion.div>
      ))}

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr auto',
          gap: '48px',
          alignItems: 'center',
        }}>
          {/* Left - Text Content */}
          <div>
            {/* Status badge */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '8px 16px',
                background: 'rgba(0,212,255,0.08)',
                border: '1px solid rgba(0,212,255,0.25)',
                borderRadius: '50px',
                marginBottom: '24px',
              }}
            >
              <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#22c55e', boxShadow: '0 0 8px #22c55e', animation: 'pulse-glow 2s infinite' }} />
              <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.75rem', color: 'var(--accent-blue)', letterSpacing: '0.1em' }}>
                AVAILABLE FOR OPPORTUNITIES
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              style={{ fontFamily: 'Orbitron, monospace', fontWeight: 900, lineHeight: 1.1, marginBottom: '8px' }}
            >
              <span style={{ display: 'block', fontSize: 'clamp(1rem, 3vw, 1.5rem)', fontWeight: 400, color: 'var(--text-secondary)', letterSpacing: '0.3em', marginBottom: '8px' }}>
                HELLO, I&apos;M
              </span>
              <span className="gradient-text" style={{ fontSize: 'clamp(2.5rem, 7vw, 5rem)', display: 'block' }}>
                HARIS P M
              </span>
            </motion.h1>

            {/* Role - Typing animation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              style={{ marginBottom: '24px' }}
            >
              <div style={{ fontSize: 'clamp(1rem, 2.5vw, 1.5rem)', fontWeight: 600, color: 'var(--text-primary)' }}>
                <TypeAnimation
                  sequence={[
                    'Full Stack Developer',
                    2000,
                    'AI-Powered Web Developer',
                    2000,
                    'Creative Problem Solver',
                    2000,
                    'React.js Enthusiast',
                    2000,
                    'CSE Student @ KEC',
                    2000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                  style={{ color: 'var(--accent-cyan)' }}
                />
              </div>
              <p style={{ marginTop: '16px', fontSize: '1.05rem', color: 'var(--text-secondary)', maxWidth: '540px', lineHeight: 1.8 }}>
                Building <span style={{ color: 'var(--accent-blue)' }}>AI-powered</span> and{' '}
                <span style={{ color: 'var(--accent-purple)' }}>interactive web experiences</span> that push the boundaries of modern development.
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginBottom: '48px' }}
            >
              <a href="#projects" className="btn-primary" onClick={(e) => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }); }}>
                <FaCode /> View Projects
              </a>
              <a href="/HARIS_RESUME_13.05.2026.pdf" className="btn-secondary" download="HARIS_PM_Resume.pdf">
                <FaDownload /> Download Resume
              </a>
              <a href="#contact" className="btn-outline" onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}>
                Contact Me <FaArrowRight />
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              style={{ display: 'flex', gap: '16px', alignItems: 'center' }}
            >
              <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.75rem', color: 'var(--text-muted)', letterSpacing: '0.2em' }}>CONNECT</span>
              <div style={{ width: 40, height: 1, background: 'rgba(255,255,255,0.15)' }} />
              {socialLinks.map(({ Icon, href, label, color }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  whileHover={{ y: -4, scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  style={{
                    width: 44, height: 44,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    borderRadius: '10px',
                    color,
                    fontSize: '1.2rem',
                    textDecoration: 'none',
                    transition: 'all 0.3s ease',
                  }}
                >
                  <Icon />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Right - Profile Avatar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4, type: 'spring', stiffness: 100 }}
            style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
            className="hero-avatar-container"
          >
            <div style={{ position: 'relative', width: 300, height: 300 }}>
              {/* Rotating rings */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
                style={{
                  position: 'absolute', inset: -20,
                  border: '2px dashed rgba(0,212,255,0.25)',
                  borderRadius: '50%',
                }}
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                style={{
                  position: 'absolute', inset: -40,
                  border: '1px dashed rgba(139,92,246,0.2)',
                  borderRadius: '50%',
                }}
              />

              {/* Profile image placeholder */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                style={{
                  width: '100%', height: '100%',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, rgba(0,212,255,0.15), rgba(139,92,246,0.2), rgba(236,72,153,0.1))',
                  border: '3px solid rgba(0,212,255,0.4)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '6rem',
                  boxShadow: '0 0 60px rgba(0,212,255,0.3), 0 0 120px rgba(139,92,246,0.2), inset 0 0 60px rgba(0,212,255,0.05)',
                  overflow: 'hidden',
                  position: 'relative',
                }}
              >
                {/* Holographic overlay */}
                <div style={{
                  position: 'absolute', inset: 0,
                  background: 'linear-gradient(135deg, transparent 30%, rgba(0,212,255,0.05) 50%, transparent 70%)',
                  animation: 'shimmer 3s infinite linear',
                  backgroundSize: '200% 100%',
                }} />
                <span style={{ fontSize: '7rem', filter: 'grayscale(0.3)', zIndex: 1, userSelect: 'none' }}>👨‍💻</span>
              </motion.div>

              {/* Floating badges */}
              {[
                { label: 'CSE Student', top: '0%', right: '-15%', color: 'var(--accent-blue)' },
                { label: 'KEC', bottom: '10%', left: '-20%', color: 'var(--accent-purple)' },
                { label: 'Full Stack', bottom: '0%', right: '-10%', color: 'var(--accent-pink)' },
              ].map(({ label, color, ...pos }) => (
                <motion.div
                  key={label}
                  style={{
                    position: 'absolute',
                    ...pos,
                    padding: '6px 14px',
                    background: 'rgba(2,4,8,0.9)',
                    border: `1px solid ${color}`,
                    borderRadius: '20px',
                    fontSize: '0.7rem',
                    fontFamily: 'Orbitron, monospace',
                    color,
                    whiteSpace: 'nowrap',
                    boxShadow: `0 0 12px ${color}40`,
                  }}
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 3 + Math.random(), repeat: Infinity, ease: 'easeInOut' }}
                >
                  {label}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          style={{
            position: 'absolute', bottom: -60, left: '50%', transform: 'translateX(-50%)',
            display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px',
          }}
        >
          <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.65rem', color: 'var(--text-muted)', letterSpacing: '0.3em' }}>SCROLL</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            style={{ width: 1, height: 40, background: 'linear-gradient(180deg, var(--accent-blue), transparent)' }}
          />
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .hero-avatar-container { display: none !important; }
        }
      `}</style>
    </section>
  );
};

export default Hero;
