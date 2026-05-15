import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart, FaCode } from 'react-icons/fa';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer" style={{
      borderTop: '1px solid rgba(0,212,255,0.1)',
      background: 'rgba(2,4,8,0.9)',
      backdropFilter: 'blur(20px)',
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div className="footer-content">
          {/* Logo */}
          <motion.div className="footer-logo" whileHover={{ scale: 1.05 }} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{
              width: 36, height: 36,
              background: 'linear-gradient(135deg, var(--accent-blue), var(--accent-purple))',
              borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontFamily: 'Orbitron, monospace', fontWeight: 900, fontSize: '0.9rem',
              boxShadow: '0 0 15px rgba(0,212,255,0.3)',
            }}>H</div>
            <span style={{ fontFamily: 'Orbitron, monospace', fontWeight: 700, fontSize: '0.95rem', color: 'white' }}>
              HARIS<span style={{ color: 'var(--accent-blue)' }}> P M</span>
            </span>
          </motion.div>

          {/* Center */}
          <div className="footer-center" style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '6px', justifyContent: 'center' }}>
              Built with <FaHeart style={{ color: 'var(--accent-pink)' }} /> and <FaCode style={{ color: 'var(--accent-blue)' }} /> by Haris P M
            </div>
            <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.7rem', color: 'var(--text-muted)', marginTop: '4px' }}>
              © {year} — All rights reserved
            </div>
          </div>

          {/* Social */}
          <div className="footer-social" style={{ display: 'flex', gap: '12px' }}>
            {[
              { Icon: FaGithub, href: 'https://github.com/haris-p-m', label: 'GitHub' },
              { Icon: FaLinkedin, href: 'https://linkedin.com/in/haris-p-m', label: 'LinkedIn' },
              { Icon: FaEnvelope, href: 'mailto:harispm.23cse@kongu.edu', label: 'Email' },
            ].map(({ Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target={href.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
                aria-label={label}
                whileHover={{ y: -3, scale: 1.15 }}
                style={{
                  width: 38, height: 38,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.06)',
                  borderRadius: '8px', color: 'var(--text-secondary)',
                  fontSize: '1rem', textDecoration: 'none',
                  transition: 'all 0.3s ease',
                }}
              >
                <Icon />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Divider line */}
        <div style={{ marginTop: '24px', height: 1, background: 'linear-gradient(90deg, transparent, rgba(0,212,255,0.2), transparent)' }} />

        {/* Tech credits */}
        <div style={{ marginTop: '16px', textAlign: 'center', display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
          {['React.js', 'Framer Motion', 'MongoDB', 'Express.js', 'Node.js'].map((tech) => (
            <span key={tech} style={{
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: '0.65rem', color: 'var(--text-muted)',
              padding: '2px 8px',
              border: '1px solid rgba(255,255,255,0.05)',
              borderRadius: '4px',
            }}>
              {tech}
            </span>
          ))}
        </div>
      </div>
      <style>{`
        .footer {
          padding: 40px 24px;
        }
        .footer-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 24px;
        }
        @media (max-width: 768px) {
          .footer {
            padding: 24px 20px !important;
          }
          .footer-content {
            flex-direction: column !important;
            align-items: center !important;
            gap: 16px !important;
          }
          .footer-logo, .footer-center, .footer-social {
            display: flex !important;
            justify-content: center !important;
            align-items: center !important;
            width: 100% !important;
          }
          .footer-center {
            flex-direction: column !important;
          }
          .footer-logo, .footer-social {
            flex-direction: row !important;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
