import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);
      const sections = ['contact', 'achievements', 'projects', 'skills', 'about'];
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = () => {
    setMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
        padding: '0 24px',
        background: scrolled ? 'rgba(2,4,8,0.85)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(0,212,255,0.1)' : 'none',
        transition: 'all 0.4s ease',
      }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 72 }}>
        {/* Logo */}
        <motion.a
          href="#"
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          whileHover={{ scale: 1.05 }}
          style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px' }}
        >
          <div style={{
            width: 40, height: 40,
            background: 'linear-gradient(135deg, var(--accent-blue), var(--accent-purple))',
            borderRadius: '10px',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontFamily: 'Orbitron, monospace', fontWeight: 900, fontSize: '1rem',
            boxShadow: '0 0 20px rgba(0,212,255,0.4)'
          }}>
            H
          </div>
          <span style={{ fontFamily: 'Orbitron, monospace', fontWeight: 700, fontSize: '1.1rem', letterSpacing: '0.1em', color: 'white' }}>
            HARIS <span style={{ color: 'var(--accent-blue)' }}>P M</span>
          </span>
        </motion.a>

        {/* Desktop Nav */}
        <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }} className="desktop-nav">
          {navLinks.map((link) => (
            <motion.a
              key={link.href}
              href={link.href}
              onClick={handleNav}
              whileHover={{ y: -2 }}
              style={{
                padding: '8px 16px',
                textDecoration: 'none',
                fontFamily: 'Orbitron, monospace',
                fontSize: '0.75rem',
                fontWeight: 600,
                letterSpacing: '0.1em',
                color: activeSection === link.href.replace('#', '') ? 'var(--accent-blue)' : 'var(--text-secondary)',
                borderRadius: '6px',
                background: activeSection === link.href.replace('#', '') ? 'rgba(0,212,255,0.1)' : 'transparent',
                border: activeSection === link.href.replace('#', '') ? '1px solid rgba(0,212,255,0.3)' : '1px solid transparent',
                transition: 'all 0.3s ease',
                textTransform: 'uppercase',
              }}
            >
              {link.label}
            </motion.a>
          ))}
        </div>

        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            display: 'none', background: 'none', border: 'none', outline: 'none',
            WebkitTapHighlightColor: 'transparent',
            cursor: 'pointer', flexDirection: 'column', gap: '5px', padding: '8px'
          }}
          className="hamburger-btn"
          aria-label="Toggle menu"
        >
          {[0, 1, 2].map(i => (
            <motion.div
              key={i}
              animate={{
                rotate: menuOpen && i === 0 ? 45 : menuOpen && i === 2 ? -45 : 0,
                y: menuOpen && i === 0 ? 10 : menuOpen && i === 2 ? -10 : 0,
                opacity: menuOpen && i === 1 ? 0 : 1,
              }}
              style={{ width: 24, height: 2, background: 'var(--accent-blue)', borderRadius: 2 }}
            />
          ))}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            style={{
              background: 'rgba(2,4,8,0.98)',
              backdropFilter: 'blur(20px)',
              borderTop: '1px solid rgba(0,212,255,0.1)',
              padding: '16px 24px',
              display: 'flex', flexDirection: 'column', gap: '8px'
            }}
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleNav}
                style={{
                  padding: '12px 0',
                  textDecoration: 'none',
                  color: 'var(--text-primary)',
                  fontFamily: 'Orbitron, monospace',
                  fontSize: '0.85rem',
                  borderBottom: '1px solid rgba(255,255,255,0.05)',
                  display: 'block'
                }}
              >
                {link.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .hamburger-btn { display: flex !important; }
        }
      `}</style>
    </motion.nav>
  );
};

export default Navbar;
