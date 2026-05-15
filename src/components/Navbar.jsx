import { useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { label: 'About', href: 'about' },
  { label: 'Skills', href: 'skills' },
  { label: 'Projects', href: 'projects' },
  { label: 'Achievements', href: 'achievements' },
  { label: 'Contact', href: 'contact' },
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

  // Close menu on resize to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 768) setMenuOpen(false);
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const handleNavClick = useCallback(() => {
    // Let the browser handle native hash-based scrolling natively for perfect mobile support.
    setMenuOpen(false);
  }, []);

  const handleLogoClick = (e) => {
    e.preventDefault();
    setMenuOpen(false);
    setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 10);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        style={{
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
          padding: '0 24px',
          background: scrolled || menuOpen ? 'rgba(2,4,8,0.95)' : 'transparent',
          backdropFilter: scrolled || menuOpen ? 'blur(20px)' : 'none',
          WebkitBackdropFilter: scrolled || menuOpen ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(0,212,255,0.1)' : 'none',
          transition: 'all 0.4s ease',
        }}
      >
        <div style={{
          maxWidth: 1200, margin: '0 auto',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          height: 72,
        }}>
          {/* Logo */}
          <motion.a
            href="#"
            onClick={handleLogoClick}
            whileHover={{ scale: 1.05 }}
            style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}
          >
            <div style={{
              width: 40, height: 40,
              background: 'linear-gradient(135deg, var(--accent-blue), var(--accent-purple))',
              borderRadius: '10px',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontFamily: 'Orbitron, monospace', fontWeight: 900, fontSize: '1rem',
              boxShadow: '0 0 20px rgba(0,212,255,0.4)',
              color: 'white',
            }}>
              H
            </div>
            <span style={{
              fontFamily: 'Orbitron, monospace', fontWeight: 700,
              fontSize: '1.1rem', letterSpacing: '0.1em', color: 'white',
            }}>
              HARIS <span style={{ color: 'var(--accent-blue)' }}>P M</span>
            </span>
          </motion.a>

          {/* Desktop Nav */}
          <div className="desktop-nav" style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
            {navLinks.map((link) => (
              <motion.a
                key={link.href}
                href={`#${link.href}`}
                onClick={(e) => handleNavClick(e, link.href)}
                whileHover={{ y: -2 }}
                style={{
                  padding: '8px 16px',
                  textDecoration: 'none',
                  fontFamily: 'Orbitron, monospace',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  letterSpacing: '0.1em',
                  color: activeSection === link.href ? 'var(--accent-blue)' : 'var(--text-secondary)',
                  borderRadius: '6px',
                  background: activeSection === link.href ? 'rgba(0,212,255,0.1)' : 'transparent',
                  border: activeSection === link.href ? '1px solid rgba(0,212,255,0.3)' : '1px solid transparent',
                  transition: 'all 0.3s ease',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                }}
              >
                {link.label}
              </motion.a>
            ))}
          </div>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="hamburger-btn"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            style={{
              background: 'none', border: 'none', outline: 'none',
              cursor: 'pointer',
              padding: '8px',
              display: 'flex', flexDirection: 'column', gap: '5px',
              zIndex: 1001,
              WebkitTapHighlightColor: 'transparent',
            }}
          >
            <motion.span
              animate={{
                rotate: menuOpen ? 45 : 0,
                y: menuOpen ? 7 : 0,
              }}
              transition={{ duration: 0.3 }}
              style={{ display: 'block', width: 24, height: 2, background: 'var(--accent-blue)', borderRadius: 2, transformOrigin: 'center' }}
            />
            <motion.span
              animate={{ opacity: menuOpen ? 0 : 1, scaleX: menuOpen ? 0 : 1 }}
              transition={{ duration: 0.3 }}
              style={{ display: 'block', width: 24, height: 2, background: 'var(--accent-blue)', borderRadius: 2 }}
            />
            <motion.span
              animate={{
                rotate: menuOpen ? -45 : 0,
                y: menuOpen ? -7 : 0,
              }}
              transition={{ duration: 0.3 }}
              style={{ display: 'block', width: 24, height: 2, background: 'var(--accent-blue)', borderRadius: 2, transformOrigin: 'center' }}
            />
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              key="mobile-menu"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              style={{
                position: 'absolute',
                top: '72px',
                left: 0,
                right: 0,
                background: 'rgba(2,4,8,0.98)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                borderTop: '1px solid rgba(0,212,255,0.15)',
                borderBottom: '1px solid rgba(0,212,255,0.1)',
                boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
              }}
            >
              <div style={{ padding: '8px 16px 20px' }}>
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.href}
                    href={`#${link.href}`}
                    onClick={() => setMenuOpen(false)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.07, duration: 0.3 }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      padding: '14px 16px',
                      textDecoration: 'none',
                      color: activeSection === link.href ? 'var(--accent-blue)' : 'var(--text-primary)',
                      fontFamily: 'Orbitron, monospace',
                      fontSize: '0.85rem',
                      fontWeight: 600,
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      borderRadius: '8px',
                      background: activeSection === link.href ? 'rgba(0,212,255,0.08)' : 'transparent',
                      border: activeSection === link.href ? '1px solid rgba(0,212,255,0.2)' : '1px solid transparent',
                      marginBottom: '4px',
                      cursor: 'pointer',
                      transition: 'background 0.2s ease',
                      WebkitTapHighlightColor: 'transparent',
                    }}
                  >
                    <span style={{
                      width: 6, height: 6, borderRadius: '50%',
                      background: activeSection === link.href ? 'var(--accent-blue)' : 'var(--text-muted)',
                      flexShrink: 0,
                    }} />
                    {link.label}
                  </motion.a>
                ))}

                {/* Mobile CTA */}
                <div style={{ marginTop: '12px', paddingTop: '12px', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                  <a
                    href="/HARIS_RESUME_13.05.2026.pdf"
                    download="HARIS_PM_Resume.pdf"
                    onClick={() => setMenuOpen(false)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px',
                      padding: '12px 16px',
                      background: 'linear-gradient(135deg, rgba(0,212,255,0.15), rgba(139,92,246,0.15))',
                      border: '1px solid rgba(0,212,255,0.3)',
                      borderRadius: '8px',
                      color: 'var(--accent-blue)',
                      fontFamily: 'Orbitron, monospace',
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      textDecoration: 'none',
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em',
                      cursor: 'pointer',
                      WebkitTapHighlightColor: 'transparent',
                    }}
                  >
                    ↓ Download Resume
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Backdrop overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMenuOpen(false)}
            style={{
              position: 'fixed', inset: 0,
              background: 'rgba(0,0,0,0.5)',
              zIndex: 999,
              cursor: 'pointer',
            }}
          />
        )}
      </AnimatePresence>

      <style>{`
        .desktop-nav { display: flex !important; }
        .hamburger-btn { display: none !important; }
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .hamburger-btn { display: flex !important; }
        }
      `}</style>
    </>
  );
};

export default Navbar;
