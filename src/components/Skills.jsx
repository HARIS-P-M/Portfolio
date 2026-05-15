import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  SiHtml5, SiCss, SiJavascript, SiReact,
  SiNodedotjs, SiExpress, SiMongodb, SiMysql,
  SiPython, SiGit, SiGithub, SiBlender,
  SiThreedotjs,
} from 'react-icons/si';
import { FaJava, FaCode, FaAws } from 'react-icons/fa';

// ─── Data ─────────────────────────────────────────────────────────────────
// `cols` = fixed number of columns for that category's skill grid
const skillRows = [
  // Row 1: Frontend (left) | Backend (right)
  [
    {
      title: 'Frontend',
      color: '#00d4ff',
      cols: 5,
      skills: [
        { name: 'HTML5',      Icon: SiHtml5,      color: '#e34f26', level: 95 },
        { name: 'CSS3',       Icon: SiCss,        color: '#1572b6', level: 90 },
        { name: 'JavaScript', Icon: SiJavascript,  color: '#f7df1e', level: 90 },
        { name: 'React.js',   Icon: SiReact,       color: '#61dafb', level: 88 },
        { name: 'Three.js',   Icon: SiThreedotjs,  color: '#ffffff', level: 70 },
      ],
    },
    {
      title: 'Backend',
      color: '#8b5cf6',
      cols: 2,
      skills: [
        { name: 'Node.js',    Icon: SiNodedotjs, color: '#68a063', level: 85 },
        { name: 'Express.js', Icon: SiExpress,   color: '#ffffff', level: 83 },
      ],
    },
  ],
  // Row 2: Database | Languages | Tools & Platforms (all three in one row)
  [
    {
      title: 'Database',
      color: '#06b6d4',
      cols: 2,
      skills: [
        { name: 'MongoDB', Icon: SiMongodb, color: '#47a248', level: 82 },
        { name: 'MySQL',   Icon: SiMysql,   color: '#4479a1', level: 75 },
      ],
    },
    {
      title: 'Languages',
      color: '#ec4899',
      cols: 3,
      skills: [
        { name: 'Java',   Icon: FaJava,   color: '#f89820', level: 88 },
        { name: 'Python', Icon: SiPython, color: '#3776ab', level: 80 },
        { name: 'C',      Icon: FaCode,   color: '#a8b9cc', level: 75 },
      ],
    },
    {
      title: 'Tools & Platforms',
      color: '#f59e0b',
      cols: 4,
      skills: [
        { name: 'Git',     Icon: SiGit,    color: '#f05032', level: 85 },
        { name: 'GitHub',  Icon: SiGithub, color: '#ffffff', level: 88 },
        { name: 'Blender', Icon: SiBlender,color: '#f5792a', level: 65 },
        { name: 'AWS',     Icon: FaAws,    color: '#ff9900', level: 60 },
      ],
    },
  ],
];

// ─── Skill Card ────────────────────────────────────────────────────────────
const SkillCard = ({ name, Icon, color, level, delay }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.45, delay }}
      whileHover={{ y: -6, scale: 1.05 }}
      className="glass"
      style={{
        padding: '14px 10px',
        borderRadius: '12px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '8px',
        cursor: 'default',
        transition: 'all 0.3s ease',
        position: 'relative',
        overflow: 'hidden',
        minWidth: 0,         // allow flex/grid to shrink
      }}
      data-hover
    >
      {/* Glow bg */}
      <div style={{
        position: 'absolute', inset: 0,
        background: `radial-gradient(circle at 50% 0%, ${color}15, transparent 70%)`,
        borderRadius: '12px',
      }} />

      <div style={{ fontSize: '1.8rem', color, filter: `drop-shadow(0 0 8px ${color})`, zIndex: 1 }}>
        <Icon />
      </div>
      <div style={{
        fontWeight: 600, fontSize: '0.7rem',
        color: 'var(--text-primary)', textAlign: 'center',
        zIndex: 1, lineHeight: 1.3,
      }}>
        {name}
      </div>

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
      <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.58rem', color, zIndex: 1 }}>
        {level}%
      </div>
    </motion.div>
  );
};

// ─── Category Block ────────────────────────────────────────────────────────
const CategoryBlock = ({ cat, delay }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay }}
      style={{
        flex: 1,
        minWidth: 0,
        borderRadius: '16px',
        border: `1.5px solid ${cat.color}50`,
        background: `linear-gradient(160deg, ${cat.color}10 0%, rgba(5,13,26,0.85) 60%)`,
        boxShadow: `0 0 24px ${cat.color}18, inset 0 1px 0 ${cat.color}20`,
        overflow: 'hidden',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
      }}
    >
      {/* Colored header bar */}
      <div style={{
        background: `linear-gradient(90deg, ${cat.color}30, ${cat.color}08)`,
        borderBottom: `1px solid ${cat.color}35`,
        padding: '12px 18px',
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
      }}>
        {/* Color dot */}
        <div style={{
          width: 8, height: 8,
          borderRadius: '50%',
          background: cat.color,
          boxShadow: `0 0 10px ${cat.color}`,
          flexShrink: 0,
        }} />
        <span style={{
          fontFamily: 'Orbitron, monospace',
          fontSize: '0.7rem',
          fontWeight: 700,
          color: cat.color,
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
        }}>
          {cat.title}
        </span>
        {/* Trailing accent line */}
        <div style={{
          flex: 1, height: 1,
          background: `linear-gradient(90deg, ${cat.color}50, transparent)`,
        }} />
      </div>

      {/* Cards container */}
      <div style={{
        padding: '16px',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '10px',
      }}>
        {cat.skills.map((skill, si) => (
          <div key={skill.name} style={{ width: 'calc(20% - 8px)', minWidth: '95px', maxWidth: '140px', flexGrow: 1 }}>
            <SkillCard {...skill} delay={delay + si * 0.07} />
          </div>
        ))}
      </div>
    </motion.div>
  );
};


// ─── Skills Section ────────────────────────────────────────────────────────
const Skills = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" className="section-wrapper" ref={ref} style={{ background: 'rgba(5,13,26,0.5)' }}>
      <div className="container">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={{ marginBottom: '64px' }}
        >
          <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.8rem', color: 'var(--accent-purple)', letterSpacing: '0.3em', marginBottom: '12px' }}>
            {'// 02. SKILLS & TECH STACK'}
          </div>
          <h2 className="section-title" style={{
            background: 'linear-gradient(135deg, var(--accent-purple), var(--accent-pink))',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
          }}>
            Tech Arsenal
          </h2>
          <div className="section-divider" style={{ background: 'linear-gradient(90deg, var(--accent-purple), var(--accent-pink))' }} />
          <p className="section-subtitle">Technologies I work with to bring ideas to life</p>
        </motion.div>

        {/* Rows of categories */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {skillRows.map((row, ri) => (
            <div key={ri} className="skills-pair-row">
              {row.map((cat, ci) => (
                <CategoryBlock key={cat.title} cat={cat} delay={ri * 0.12 + ci * 0.08} />
              ))}
            </div>
          ))}
        </div>

        {/* Footer badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, delay: 0.5 }}
          style={{ textAlign: 'center', marginTop: '40px' }}
        >
          <div className="glass" style={{ display: 'inline-block', padding: '18px 36px', borderRadius: '14px' }}>
            <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
              <span style={{ color: 'var(--accent-blue)' }}>const</span>{' '}
              <span style={{ color: 'var(--accent-purple)' }}>developer</span> = {'{'}
              <span style={{ color: 'var(--accent-cyan)' }}> skills: 20+, passion: Infinity </span>
              {'}'}
            </div>
          </div>
        </motion.div>
      </div>

      <style>{`
        .skills-pair-row {
          display: flex;
          gap: 20px;
          align-items: stretch;
        }
        /* On tablet/mobile, each category stacks vertically */
        @media (max-width: 900px) {
          .skills-pair-row {
            flex-direction: column;
          }
        }
      `}</style>
    </section>
  );
};

export default Skills;
