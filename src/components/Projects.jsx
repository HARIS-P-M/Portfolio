import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaBrain, FaPhone, FaHeartbeat, FaUsers } from 'react-icons/fa';
import { SiReact, SiNodedotjs, SiMongodb, SiPython, SiThreedotjs, SiExpress, SiBootstrap, SiIonic } from 'react-icons/si';

const projects = [
  {
    id: 1,
    title: 'Resume Revolution',
    subtitle: 'AI Resume Analyzer',
    description: 'Built an AI-powered resume analysis platform that parses resumes, matches candidate skills with job descriptions, and provides smart feedback using an integrated chatbot. Features interactive 3D hand gesture recognition.',
    tech: [
      { name: 'React.js', Icon: SiReact, color: '#61dafb' },
      { name: 'Node.js', Icon: SiNodedotjs, color: '#68a063' },
      { name: 'Express.js', Icon: SiExpress, color: '#ffffff' },
      { name: 'MongoDB', Icon: SiMongodb, color: '#47a248' },
      { name: 'Python', Icon: SiPython, color: '#3776ab' },
      { name: 'Three.js', Icon: SiThreedotjs, color: '#ffffff' },
    ],
    icon: <FaBrain />,
    color: 'var(--accent-blue)',
    gradient: 'linear-gradient(135deg, rgba(0,212,255,0.15), rgba(139,92,246,0.15))',
    borderColor: 'rgba(0,212,255,0.3)',
    highlights: ['AI/NLP Resume Parsing', '3D Hand Gestures', 'Smart Chatbot Feedback', 'Job-Skill Matching'],
    github: 'https://github.com/haris-p-m',
    demo: '#',
    featured: false,
  },
  {
    id: 2,
    title: 'Contact Manager',
    subtitle: 'Mobile-Friendly Web App',
    description: 'Developed a fully responsive contact management web application with CRUD operations, call history tracking, dialing integration, and a clean intuitive UI optimized for both desktop and mobile.',
    tech: [
      { name: 'React.js', Icon: SiReact, color: '#61dafb' },
      { name: 'Node.js', Icon: SiNodedotjs, color: '#68a063' },
      { name: 'Express.js', Icon: SiExpress, color: '#ffffff' },
      { name: 'MongoDB', Icon: SiMongodb, color: '#47a248' },
      { name: 'Bootstrap', Icon: SiBootstrap, color: '#7952b3' },
    ],
    icon: <FaPhone />,
    color: 'var(--accent-purple)',
    gradient: 'linear-gradient(135deg, rgba(139,92,246,0.15), rgba(236,72,153,0.15))',
    borderColor: 'rgba(139,92,246,0.3)',
    highlights: ['CRUD Operations', 'Call History Tracking', 'Dialing Integration', 'Mobile-First Design'],
    github: 'https://github.com/haris-p-m',
    demo: '#',
    featured: false,
  },
  {
    id: 3,
    title: 'Health-O-Meter',
    subtitle: 'Smart Fitness & Diet Tracker',
    description: 'Created a HealthTech application for comprehensive fitness tracking, voice-based meal logging using Web Speech API, and AI-powered food image analysis for accurate nutritional insights.',
    tech: [
      { name: 'React.js', Icon: SiReact, color: '#61dafb' },
      { name: 'Node.js', Icon: SiNodedotjs, color: '#68a063' },
      { name: 'MongoDB', Icon: SiMongodb, color: '#47a248' },
    ],
    icon: <FaHeartbeat />,
    color: 'var(--accent-pink)',
    gradient: 'linear-gradient(135deg, rgba(236,72,153,0.15), rgba(0,212,255,0.15))',
    borderColor: 'rgba(236,72,153,0.3)',
    highlights: ['Voice Meal Logging', 'AI Food Recognition', 'Fitness Tracking', 'Nutritional Insights'],
    github: 'https://github.com/haris-p-m',
    demo: '#',
    featured: true,
  },
  {
    id: 4,
    title: 'DMW Employee Management',
    subtitle: 'Comprehensive Mobile HR System',
    description: 'Built a comprehensive employee management mobile application to streamline workforce operations, attendance tracking, employee records, and task management. Implemented secure authentication and real-time database integration.',
    tech: [
      { name: 'Ionic React', Icon: SiIonic, color: '#3880ff' },
      { name: 'React.js', Icon: SiReact, color: '#61dafb' },
      { name: 'Node.js', Icon: SiNodedotjs, color: '#68a063' },
      { name: 'Express.js', Icon: SiExpress, color: '#ffffff' },
      { name: 'MongoDB', Icon: SiMongodb, color: '#47a248' },
    ],
    icon: <FaUsers />,
    color: 'var(--accent-cyan)',
    gradient: 'linear-gradient(135deg, rgba(6,182,212,0.15), rgba(0,212,255,0.15))',
    borderColor: 'rgba(6,182,212,0.3)',
    highlights: ['Mobile App', 'Attendance Tracking', 'Secure Auth', 'Real-time DB'],
    github: 'https://github.com/haris-p-m',
    demo: '#',
    featured: true,
  },
];

const ProjectCard = ({ project, index }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = (e.clientX - cx) / (rect.width / 2);
    const dy = (e.clientY - cy) / (rect.height / 2);
    setTilt({ x: dy * -8, y: dx * 8 });
  };
  const resetTilt = () => { setTilt({ x: 0, y: 0 }); setHovered(false); };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.15, ease: 'easeOut' }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={resetTilt}
      style={{
        transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        transition: hovered ? 'transform 0.1s ease' : 'transform 0.5s ease',
      }}
    >
      <div
        className="glass"
        style={{
          borderRadius: '20px',
          overflow: 'hidden',
          background: project.gradient,
          border: `1px solid ${project.borderColor}`,
          height: '100%',
          transition: 'all 0.3s ease',
          boxShadow: hovered ? `0 20px 60px ${project.color}25` : 'none',
        }}
      >
        {/* Card header */}
        <div style={{ padding: '28px 28px 0', position: 'relative' }}>
          {project.featured && (
            <div style={{
              position: 'absolute', top: 20, right: 20,
              padding: '4px 10px',
              background: 'linear-gradient(135deg, var(--accent-blue), var(--accent-purple))',
              borderRadius: '20px',
              fontSize: '0.6rem',
              fontFamily: 'Orbitron, monospace',
              fontWeight: 700,
              letterSpacing: '0.1em',
            }}>
              FEATURED
            </div>
          )}

          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px', marginBottom: '20px' }}>
            <div style={{
              width: 52, height: 52, borderRadius: '14px', flexShrink: 0,
              background: `${project.color}15`,
              border: `1px solid ${project.borderColor}`,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '1.4rem', color: project.color,
              filter: `drop-shadow(0 0 8px ${project.color})`,
            }}>
              {project.icon}
            </div>
            <div>
              <div style={{ fontFamily: 'Orbitron, monospace', fontWeight: 700, fontSize: '1.1rem', color: 'var(--text-primary)', marginBottom: '4px' }}>
                {project.title}
              </div>
              <div style={{ fontSize: '0.8rem', color: project.color, fontWeight: 500 }}>{project.subtitle}</div>
            </div>
          </div>

          <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '20px' }}>
            {project.description}
          </p>

          {/* Highlights */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '20px' }}>
            {project.highlights.map((h) => (
              <span key={h} style={{
                padding: '4px 10px',
                background: `${project.color}10`,
                border: `1px solid ${project.color}30`,
                borderRadius: '20px',
                fontSize: '0.7rem',
                color: project.color,
                fontWeight: 500,
              }}>
                {h}
              </span>
            ))}
          </div>
        </div>

        {/* Tech stack */}
        <div style={{ padding: '16px 28px', borderTop: `1px solid rgba(255,255,255,0.05)`, borderBottom: `1px solid rgba(255,255,255,0.05)` }}>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
            <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.65rem', color: 'var(--text-muted)', marginRight: '4px' }}>TECH:</span>
            {project.tech.map(({ name, Icon, color }) => (
              <motion.div
                key={name}
                title={name}
                whileHover={{ scale: 1.3, y: -3 }}
                style={{ fontSize: '1.2rem', color, filter: `drop-shadow(0 0 5px ${color})`, cursor: 'default' }}
              >
                <Icon />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div style={{ padding: '20px 28px', display: 'flex', gap: '12px' }}>
          <motion.a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-secondary"
            style={{ flex: 1, justifyContent: 'center', padding: '10px', fontSize: '0.75rem' }}
          >
            <FaGithub /> GitHub
          </motion.a>
          <motion.a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary"
            style={{ flex: 1, justifyContent: 'center', padding: '10px', fontSize: '0.75rem', borderColor: project.color, color: project.color }}
          >
            <FaExternalLinkAlt /> Live Demo
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="projects" className="section-wrapper" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={{ marginBottom: '64px' }}
        >
          <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.8rem', color: 'var(--accent-cyan)', letterSpacing: '0.3em', marginBottom: '12px' }}>
            {'// 03. PROJECTS'}
          </div>
          <h2 className="section-title" style={{ background: 'linear-gradient(135deg, var(--accent-cyan), var(--accent-blue))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
            Featured Work
          </h2>
          <div className="section-divider" style={{ background: 'linear-gradient(90deg, var(--accent-cyan), var(--accent-blue))' }} />
          <p className="section-subtitle">Handcrafted projects that showcase my skills and passion</p>
        </motion.div>

        <div className="projects-grid">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
