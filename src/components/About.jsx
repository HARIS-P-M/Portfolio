import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaCode, FaBrain, FaPalette, FaRocket } from 'react-icons/fa';

const passions = [
  { icon: <FaCode />, label: 'Full Stack Dev', color: 'var(--accent-blue)', desc: 'End-to-end web application development' },
  { icon: <FaBrain />, label: 'AI & ML', color: 'var(--accent-purple)', desc: 'Intelligent systems & NLP integration' },
  { icon: <FaPalette />, label: 'UI/UX Design', color: 'var(--accent-pink)', desc: 'Intuitive, beautiful interfaces' },
  { icon: <FaRocket />, label: 'Scalable Apps', color: 'var(--accent-cyan)', desc: 'Performance-optimized architecture' },
];

const stats = [
  { value: '5+', label: 'Projects Built' },
  { value: '2+', label: 'Hackathon Awards' },
  { value: '1', label: 'Oracle Certification' },
  { value: '2', label: 'Leadership Roles' },
];

const About = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
  };

  return (
    <section id="about" className="section-wrapper" ref={ref}>
      <div className="container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {/* Header */}
          <motion.div variants={itemVariants} style={{ marginBottom: '64px' }}>
            <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.8rem', color: 'var(--accent-blue)', letterSpacing: '0.3em', marginBottom: '12px' }}>
              {'// 01. ABOUT ME'}
            </div>
            <h2 className="section-title gradient-text">About Me</h2>
            <div className="section-divider" />
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'start' }}>
            {/* Left - Description */}
            <div>
              <motion.div variants={itemVariants} className="glass" style={{ padding: '32px', marginBottom: '24px', animation: 'borderGlow 4s ease-in-out infinite' }}>
                <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.75rem', color: 'var(--accent-purple)', marginBottom: '16px', letterSpacing: '0.1em' }}>
                  {'<about>'}
                </div>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.9, fontSize: '1rem', marginBottom: '16px' }}>
                  Hi! I&apos;m <span style={{ color: 'var(--accent-blue)', fontWeight: 600 }}>Haris P M</span>, a passionate Computer Science Engineering student at{' '}
                  <span style={{ color: 'var(--accent-cyan)' }}>Kongu Engineering College (KEC)</span>, Perundurai, Tamil Nadu.
                </p>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.9, fontSize: '1rem', marginBottom: '16px' }}>
                  I specialize in building <span style={{ color: 'var(--accent-purple)' }}>full-stack web applications</span> with a strong focus on clean code,
                  intuitive UI/UX, and scalable architecture. My passion lies at the intersection of{' '}
                  <span style={{ color: 'var(--accent-pink)' }}>Artificial Intelligence</span> and modern web development.
                </p>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.9, fontSize: '1rem' }}>
                  Whether it&apos;s building AI-powered resume analyzers, health trackers, or interactive 3D web experiences —
                  I bring <span style={{ color: 'var(--accent-blue)' }}>creativity, technical depth, and problem-solving</span> to every project.
                </p>
                <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.75rem', color: 'var(--accent-purple)', marginTop: '16px', letterSpacing: '0.1em' }}>
                  {'</about>'}
                </div>
              </motion.div>

              {/* Quick facts */}
              <motion.div variants={itemVariants} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                {[
                  { label: 'Location', value: 'Perundurai, Tamil Nadu' },
                  { label: 'College', value: 'Kongu Engineering College' },
                  { label: 'Degree', value: 'B.E. CSE' },
                  { label: 'Status', value: 'Open to Work' },
                ].map(({ label, value }) => (
                  <div
                    key={label}
                    className="glass"
                    style={{ padding: '12px 16px', borderRadius: '10px' }}
                  >
                    <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.65rem', color: 'var(--text-muted)', letterSpacing: '0.1em', marginBottom: '4px' }}>{label.toUpperCase()}</div>
                    <div style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-primary)' }}>{value}</div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Right - Passions + Stats */}
            <div>
              {/* Passion cards */}
              <motion.div variants={itemVariants} style={{ marginBottom: '32px' }}>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '16px', fontWeight: 500 }}>WHAT I LOVE BUILDING:</div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                  {passions.map(({ icon, label, color, desc }) => (
                    <motion.div
                      key={label}
                      className="glass"
                      whileHover={{ y: -4, borderColor: color }}
                      style={{ padding: '20px', borderRadius: '12px', cursor: 'default', transition: 'all 0.3s ease' }}
                    >
                      <div style={{ fontSize: '1.5rem', color, marginBottom: '8px', filter: `drop-shadow(0 0 8px ${color})` }}>{icon}</div>
                      <div style={{ fontWeight: 700, fontSize: '0.9rem', marginBottom: '4px', color: 'var(--text-primary)' }}>{label}</div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>{desc}</div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Stats */}
              <motion.div variants={itemVariants} className="glass" style={{ padding: '24px', borderRadius: '16px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px', textAlign: 'center' }}>
                  {stats.map(({ value, label }) => (
                    <div key={label}>
                      <div style={{ fontFamily: 'Orbitron, monospace', fontSize: '1.8rem', fontWeight: 900, background: 'linear-gradient(135deg, var(--accent-blue), var(--accent-purple))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                        {value}
                      </div>
                      <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', marginTop: '4px', lineHeight: 1.3 }}>{label}</div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Timeline */}
              <motion.div variants={itemVariants} style={{ marginTop: '24px' }}>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '16px', fontWeight: 500 }}>JOURNEY:</div>
                {[
                  { year: '2023', event: 'Started B.E. CSE at KEC', color: 'var(--accent-blue)' },
                  { year: '2024', event: 'First Hackathon Win – Hackatronics', color: 'var(--accent-purple)' },
                  { year: '2025', event: 'Built Resume Revolution AI Platform', color: 'var(--accent-pink)' },
                  { year: '2026', event: 'Oracle Java SE17 Certification', color: 'var(--accent-cyan)' },
                ].map(({ year, event, color }, i) => (
                  <div key={year} style={{ display: 'flex', gap: '16px', marginBottom: '16px', alignItems: 'flex-start' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 0 }}>
                      <div style={{ width: 10, height: 10, borderRadius: '50%', background: color, boxShadow: `0 0 10px ${color}`, flexShrink: 0, marginTop: '4px' }} />
                      {i < 3 && <div style={{ width: 1, height: 28, background: 'rgba(255,255,255,0.08)', marginTop: '4px' }} />}
                    </div>
                    <div>
                      <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.7rem', color, marginRight: '8px' }}>{year}</span>
                      <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>{event}</span>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #about .container > div > div:last-child {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};

export default About;
