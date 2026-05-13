import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';

const codeLines = [
  { code: 'const haris = {', type: 'keyword' },
  { code: '  name: "Haris P M",', type: 'string' },
  { code: '  role: "Full Stack Developer",', type: 'string' },
  { code: '  college: "KEC, Perundurai",', type: 'string' },
  { code: '  skills: ["React", "Node.js", "Python", "AI"],', type: 'array' },
  { code: '  passion: () => "Building the future 🚀",', type: 'function' },
  { code: '  coffee: Infinity,', type: 'number' },
  { code: '};', type: 'keyword' },
  { code: '', type: 'empty' },
  { code: 'haris.passion(); // "Building the future 🚀"', type: 'comment' },
];

const typeColors = {
  keyword: '#c678dd',
  string: '#98c379',
  array: '#e5c07b',
  function: '#61afef',
  number: '#d19a66',
  comment: '#5c6370',
  empty: 'transparent',
};

const Terminal = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="section-wrapper" ref={ref} style={{ paddingTop: 0 }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="glass"
          style={{
            borderRadius: '16px',
            overflow: 'hidden',
            border: '1px solid rgba(0,212,255,0.15)',
            boxShadow: '0 20px 60px rgba(0,0,0,0.4)',
            maxWidth: 700,
            margin: '0 auto',
          }}
        >
          {/* Terminal header */}
          <div style={{
            padding: '12px 16px',
            background: 'rgba(0,0,0,0.4)',
            borderBottom: '1px solid rgba(255,255,255,0.05)',
            display: 'flex', alignItems: 'center', gap: '8px',
          }}>
            <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#ff5f57' }} />
            <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#febc2e' }} />
            <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#28c840' }} />
            <span style={{ marginLeft: '8px', fontFamily: 'JetBrains Mono, monospace', fontSize: '0.7rem', color: 'var(--text-muted)' }}>
              haris@portfolio:~$ node developer.js
            </span>
          </div>

          {/* Code content */}
          <div style={{ padding: '24px', fontFamily: 'JetBrains Mono, monospace', fontSize: '0.85rem', lineHeight: 1.8 }}>
            {codeLines.map((line, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: i * 0.08 + 0.3 }}
                style={{ display: 'flex', gap: '16px' }}
              >
                <span style={{ color: 'rgba(255,255,255,0.15)', userSelect: 'none', minWidth: '24px', textAlign: 'right' }}>
                  {line.type !== 'empty' ? i + 1 : ''}
                </span>
                <span style={{ color: typeColors[line.type] || 'var(--text-primary)' }}>
                  {line.code}
                  {i === codeLines.length - 1 && <span className="type-cursor" />}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Terminal;
