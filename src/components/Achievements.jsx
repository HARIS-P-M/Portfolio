import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaTrophy, FaMedal, FaGamepad, FaFilm, FaVideo } from 'react-icons/fa';

const achievements = [
  {
    rank: '1st',
    title: 'Hackatronics',
    event: 'Hackathon – MTS, KEC',
    icon: <FaTrophy />,
    color: '#ffd700',
    glow: 'rgba(255, 215, 0, 0.4)',
    year: '2023',
    desc: 'Won first place in the inter-college hackathon with an innovative tech solution.',
  },
  {
    rank: '2nd',
    title: 'Vision Reel',
    event: 'Reels Competition',
    icon: <FaFilm />,
    color: 'var(--accent-blue)',
    glow: 'rgba(0, 212, 255, 0.4)',
    year: '2023',
    desc: 'Secured second place in the creative vision reel competition.',
  },
  {
    rank: '1st',
    title: 'Video Editing',
    event: 'Editing Championship',
    icon: <FaVideo />,
    color: 'var(--accent-purple)',
    glow: 'rgba(139, 92, 246, 0.4)',
    year: '2024',
    desc: 'Clinched first place with exceptional video editing skills and creativity.',
  },
  {
    rank: '1st',
    title: 'NEXCODIA Esports',
    event: 'VIT Esports Championship',
    icon: <FaGamepad />,
    color: 'var(--accent-pink)',
    glow: 'rgba(236, 72, 153, 0.4)',
    year: '2024',
    desc: 'Dominated the Esports championship at VIT\'s NEXCODIA national event.',
  },
  {
    rank: '2nd',
    title: 'Reels Competition',
    event: 'Social Media Reels Making',
    icon: <FaFilm />,
    color: 'var(--accent-cyan)',
    glow: 'rgba(6, 182, 212, 0.4)',
    year: '2024',
    desc: 'Runner-up in the Reels Making Competition with viral-style creative content.',
  },
];

const leadership = [
  {
    role: 'Treasurer',
    org: 'Computer Society of India',
    chapter: 'KEC Chapter',
    color: 'var(--accent-blue)',
    icon: '🏛️',
    desc: 'Managed finances and organized technical events for the CSI KEC chapter.',
  },
  {
    role: 'Joint Secretary',
    org: 'Srinivasa Ramanujan Mathematics Club',
    chapter: 'KEC',
    color: 'var(--accent-purple)',
    icon: '🔢',
    desc: 'Coordinated mathematical olympiads and workshops promoting analytical thinking.',
  },
];

const certifications = [
  {
    title: 'Oracle Certified Professional',
    subtitle: 'Java SE 17 Developer',
    issuer: 'Oracle Corporation',
    icon: '☕',
    color: '#f89820',
    borderColor: 'rgba(248, 152, 32, 0.35)',
    bgGradient: 'linear-gradient(135deg, rgba(248,152,32,0.08), rgba(255,215,0,0.05), rgba(139,92,246,0.05))',
    iconGradient: 'linear-gradient(135deg, #f89820, #ffd700)',
    boxShadow: '0 0 40px rgba(248,152,32,0.1)',
    iconShadow: '0 0 30px rgba(248,152,32,0.5)',
    tagBg: 'rgba(248,152,32,0.12)',
    tagBorder: 'rgba(248,152,32,0.3)',
    tags: ['Java SE 17', 'OCP Certified', 'Oracle', 'Professional'],
  },
  {
    title: 'Oracle Certified Foundations Associate',
    subtitle: 'Oracle Cloud Infrastructure 2025',
    issuer: 'Oracle University',
    icon: '☁️',
    color: '#e53935',
    borderColor: 'rgba(229, 57, 53, 0.35)',
    bgGradient: 'linear-gradient(135deg, rgba(229,57,53,0.08), rgba(255,138,101,0.05), rgba(139,92,246,0.05))',
    iconGradient: 'linear-gradient(135deg, #e53935, #ff8a65)',
    boxShadow: '0 0 40px rgba(229,57,53,0.1)',
    iconShadow: '0 0 30px rgba(229,57,53,0.5)',
    tagBg: 'rgba(229,57,53,0.12)',
    tagBorder: 'rgba(229,57,53,0.3)',
    tags: ['OCI 2025', 'Cloud', 'Oracle', 'Foundations'],
  }
];

const AchievementCard = ({ achievement, index }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -6 }}
      className="glass"
      style={{
        padding: '24px',
        borderRadius: '16px',
        border: `1px solid ${achievement.glow.replace('0.4', '0.25')}`,
        background: `radial-gradient(circle at top left, ${achievement.glow.replace('0.4', '0.08')}, transparent 60%)`,
        position: 'relative',
        overflow: 'hidden',
        cursor: 'default',
        transition: 'all 0.3s ease',
      }}
    >
      {/* Rank badge */}
      <div style={{
        position: 'absolute', top: 16, right: 16,
        width: 50, height: 50, borderRadius: '50%',
        background: `${achievement.glow.replace('0.4', '0.12')}`,
        border: `2px solid ${achievement.color}`,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontFamily: 'Orbitron, monospace',
        fontWeight: 900, fontSize: '0.8rem',
        color: achievement.color,
        boxShadow: `0 0 15px ${achievement.glow}`,
      }}>
        {achievement.rank}
      </div>

      {/* Icon */}
      <div style={{
        fontSize: '2rem', color: achievement.color,
        filter: `drop-shadow(0 0 10px ${achievement.color})`,
        marginBottom: '12px',
      }}>
        {achievement.icon}
      </div>

      <div style={{ fontFamily: 'Orbitron, monospace', fontWeight: 700, fontSize: '1rem', color: 'var(--text-primary)', marginBottom: '4px' }}>
        {achievement.title}
      </div>
      <div style={{ fontSize: '0.8rem', color: achievement.color, marginBottom: '4px', fontWeight: 600 }}>
        {achievement.event}
      </div>
      <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.65rem', color: 'var(--text-muted)', marginBottom: '12px' }}>
        {achievement.year}
      </div>
      <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
        {achievement.desc}
      </p>

      {/* Animated particles */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          style={{
            position: 'absolute',
            width: 4, height: 4,
            borderRadius: '50%',
            background: achievement.color,
            left: `${20 + i * 30}%`,
            bottom: '20%',
            opacity: 0.6,
          }}
          animate={{ y: [0, -30, 0], opacity: [0.6, 0, 0.6] }}
          transition={{ duration: 2 + i * 0.5, repeat: Infinity, delay: i * 0.4 }}
        />
      ))}
    </motion.div>
  );
};

const Achievements = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="achievements" className="section-wrapper" ref={ref} style={{ background: 'rgba(5,13,26,0.5)' }}>
      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={{ marginBottom: '64px' }}
        >
          <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.8rem', color: '#ffd700', letterSpacing: '0.3em', marginBottom: '12px' }}>
            {'// 04. ACHIEVEMENTS'}
          </div>
          <h2 className="section-title" style={{ background: 'linear-gradient(135deg, #ffd700, var(--accent-orange, #f59e0b))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
            Honors & Awards
          </h2>
          <div className="section-divider" style={{ background: 'linear-gradient(90deg, #ffd700, #f59e0b)' }} />
          <p className="section-subtitle">Recognition earned through passion, creativity, and competitive excellence</p>
        </motion.div>

        {/* Achievement cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '20px', marginBottom: '64px' }}>
          {achievements.map((a, i) => (
            <AchievementCard key={a.title + i} achievement={a} index={i} />
          ))}
        </div>

        {/* Leadership Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.8rem', color: 'var(--accent-blue)', letterSpacing: '0.3em', marginBottom: '12px' }}>
            {'// 05. LEADERSHIP'}
          </div>
          <h2 className="section-title" style={{ fontSize: 'clamp(1.5rem, 4vw, 2.5rem)' }}>
            <span className="gradient-text">Positions of Responsibility</span>
          </h2>
          <div className="section-divider" />

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '20px' }}>
            {leadership.map((l, i) => (
              <motion.div
                key={l.role}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.5 + i * 0.15 }}
                whileHover={{ y: -4 }}
                className="glass"
                style={{
                  padding: '28px',
                  borderRadius: '16px',
                  border: `1px solid ${l.color}25`,
                  background: `linear-gradient(135deg, ${l.color}08, transparent)`,
                  display: 'flex', gap: '20px', alignItems: 'flex-start',
                  cursor: 'default',
                  transition: 'all 0.3s ease',
                }}
              >
                <div style={{ fontSize: '2.5rem', flexShrink: 0 }}>{l.icon}</div>
                <div>
                  <div style={{ fontFamily: 'Orbitron, monospace', fontWeight: 700, fontSize: '1rem', color: l.color, marginBottom: '4px' }}>
                    {l.role}
                  </div>
                  <div style={{ fontWeight: 600, fontSize: '0.9rem', color: 'var(--text-primary)', marginBottom: '2px' }}>{l.org}</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '12px' }}>{l.chapter}</div>
                  <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>{l.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Certification */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.7 }}
          style={{ marginTop: '64px' }}
        >
          <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.8rem', color: '#f89820', letterSpacing: '0.3em', marginBottom: '12px' }}>
            {'// 06. CERTIFICATION'}
          </div>
          <h2 className="section-title" style={{ fontSize: 'clamp(1.5rem, 4vw, 2.5rem)', background: 'linear-gradient(135deg, #f89820, #ffd700)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
            Certifications
          </h2>
          <div className="section-divider" style={{ background: 'linear-gradient(90deg, #f89820, #ffd700)' }} />

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' }}>
            {certifications.map((cert, i) => (
              <motion.div
                key={cert.title + i}
                whileHover={{ scale: 1.02, y: -4 }}
                className="glass cert-card"
                style={{
                  padding: '32px',
                  borderRadius: '20px',
                  border: `1px solid ${cert.borderColor}`,
                  background: cert.bgGradient,
                  display: 'flex',
                  gap: '24px',
                  alignItems: 'center',
                  boxShadow: cert.boxShadow,
                  cursor: 'default',
                  transition: 'all 0.3s ease',
                  flexWrap: 'wrap',
                }}
              >
                <div style={{
                  width: 70, height: 70, borderRadius: '16px', flexShrink: 0,
                  background: cert.iconGradient,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '2.2rem',
                  boxShadow: cert.iconShadow,
                }}>
                  {cert.icon}
                </div>
                <div>
                  <div style={{ fontFamily: 'Orbitron, monospace', fontWeight: 800, fontSize: '1rem', color: cert.color, marginBottom: '4px' }}>
                    {cert.title}
                  </div>
                  <div style={{ fontWeight: 600, fontSize: '0.95rem', color: 'var(--text-primary)', marginBottom: '4px' }}>
                    {cert.subtitle}
                  </div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '12px' }}>{cert.issuer}</div>
                  <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                    {cert.tags.map((tag) => (
                      <span key={tag} style={{
                        padding: '4px 10px',
                        background: cert.tagBg,
                        border: `1px solid ${cert.tagBorder}`,
                        borderRadius: '20px',
                        fontSize: '0.65rem',
                        color: cert.color,
                        fontFamily: 'JetBrains Mono, monospace',
                      }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;
