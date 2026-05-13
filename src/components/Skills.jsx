import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  SiHtml5, SiCss, SiJavascript, SiReact,
  SiNodedotjs, SiExpress, SiMongodb, SiMysql,
  SiPython, SiGit, SiGithub, SiBlender,
  SiThreedotjs,
} from 'react-icons/si';
import { FaJava, FaCode, FaAws } from 'react-icons/fa';

const skillCategories = [
  {
    title: 'Frontend',
    color: 'var(--accent-blue)',
    skills: [
      { name: 'HTML5', Icon: SiHtml5, color: '#e34f26', level: 95 },
      { name: 'CSS3', Icon: SiCss, color: '#1572b6', level: 90 },
      { name: 'JavaScript', Icon: SiJavascript, color: '#f7df1e', level: 90 },
      { name: 'React.js', Icon: SiReact, color: '#61dafb', level: 88 },
      { name: 'Three.js', Icon: SiThreedotjs, color: '#ffffff', level: 70 },
    ],
  },
  {
    title: 'Backend',
    color: 'var(--accent-purple)',
    skills: [
      { name: 'Node.js', Icon: SiNodedotjs, color: '#68a063', level: 85 },
      { name: 'Express.js', Icon: SiExpress, color: '#ffffff', level: 83 },
    ],
  },
  {
    title: 'Database',
    color: 'var(--accent-cyan)',
    skills: [
      { name: 'MongoDB', Icon: SiMongodb, color: '#47a248', level: 82 },
      { name: 'MySQL', Icon: SiMysql, color: '#4479a1', level: 75 },
    ],
  },
  {
    title: 'Languages',
    color: 'var(--accent-pink)',
    skills: [
      { name: 'Java', Icon: FaJava, color: '#f89820', level: 88 },
      { name: 'Python', Icon: SiPython, color: '#3776ab', level: 80 },
      { name: 'C', Icon: FaCode, color: '#a8b9cc', level: 75 },
    ],
  },
  {
    title: 'Tools & Platforms',
    color: '#f59e0b',
    skills: [
      { name: 'Git', Icon: SiGit, color: '#f05032', level: 85 },
      { name: 'GitHub', Icon: SiGithub, color: '#ffffff', level: 88 },
      { name: 'Blender', Icon: SiBlender, color: '#f5792a', level: 65 },
      { name: 'AWS', Icon: FaAws, color: '#ff9900', level: 60 },
    ],
  },
];

const SkillCard = ({ name, Icon, color, level, delay }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -6, scale: 1.05 }}
      className="glass"
      style={{
        padding: '16px 12px',
        borderRadius: '12px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '8px',
        cursor: 'default',
        transition: 'all 0.3s ease',
        position: 'relative',
        overflow: 'hidden',
      }}
      data-hover
    >
      {/* Glow bg */}
      <div style={{
        position: 'absolute', inset: 0,
        background: `radial-gradient(circle at 50% 0%, ${color}15, transparent 70%)`,
        borderRadius: '12px',
      }} />

      <div style={{ fontSize: '2rem', color, filter: `drop-shadow(0 0 8px ${color})`, zIndex: 1 }}>
        <Icon />
      </div>
      <div style={{ fontWeight: 600, fontSize: '0.75rem', color: 'var(--text-primary)', textAlign: 'center', zIndex: 1 }}>{name}</div>

      {/* Progress bar */}
      <div style={{ width: '100%', height: 3, background: 'rgba(255,255,255,0.05)', borderRadius: 2, zIndex: 1 }}>
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1.2, delay: delay + 0.3, ease: 'easeOut' }}
          style={{
            height: '100%',
            background: `linear-gradient(90deg, ${color}, ${color}aa)`,
            borderRadius: 2,
            boxShadow: `0 0 6px ${color}80`,
          }}
        />
      </div>
      <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.6rem', color, zIndex: 1 }}>{level}%</div>
    </motion.div>
  );
};

const Skills = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" className="section-wrapper" ref={ref} style={{ background: 'rgba(5,13,26,0.5)' }}>
      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={{ marginBottom: '64px' }}
        >
          <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.8rem', color: 'var(--accent-purple)', letterSpacing: '0.3em', marginBottom: '12px' }}>
            {'// 02. SKILLS & TECH STACK'}
          </div>
          <h2 className="section-title" style={{ background: 'linear-gradient(135deg, var(--accent-purple), var(--accent-pink))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
            Tech Arsenal
          </h2>
          <div className="section-divider" style={{ background: 'linear-gradient(90deg, var(--accent-purple), var(--accent-pink))' }} />
          <p className="section-subtitle">Technologies I work with to bring ideas to life</p>
        </motion.div>

        {/* Categories */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
          {skillCategories.map((cat, ci) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: ci * 0.1 }}
            >
              {/* Category header */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px' }}>
                <div style={{
                  padding: '6px 16px',
                  background: `${cat.color}15`,
                  border: `1px solid ${cat.color}40`,
                  borderRadius: '20px',
                  fontFamily: 'Orbitron, monospace',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  color: cat.color,
                  letterSpacing: '0.1em',
                }}>
                  {cat.title.toUpperCase()}
                </div>
                <div style={{ flex: 1, height: 1, background: `linear-gradient(90deg, ${cat.color}30, transparent)` }} />
              </div>

              {/* Skills grid */}
              <div className="skills-grid">
                {cat.skills.map((skill, si) => (
                  <SkillCard key={skill.name} {...skill} delay={ci * 0.05 + si * 0.08} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Orbit-style center decoration */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, delay: 0.5 }}
          style={{ textAlign: 'center', marginTop: '64px' }}
        >
          <div className="glass" style={{ display: 'inline-block', padding: '20px 40px', borderRadius: '16px' }}>
            <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
              <span style={{ color: 'var(--accent-blue)' }}>const</span>{' '}
              <span style={{ color: 'var(--accent-purple)' }}>developer</span> = {'{'}
              <span style={{ color: 'var(--accent-cyan)' }}> skills: 20+, passion: Infinity </span>
              {'}'}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
