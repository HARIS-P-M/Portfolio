import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt, FaPaperPlane, FaCheck } from 'react-icons/fa';
import toast, { Toaster } from 'react-hot-toast';

// ─── Google Apps Script URL ───────────────────────────────────────────────
// Paste your deployed Apps Script Web App URL here (see setup guide below)
const APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzvhuQ25NU4eUyI3-G42N0t_XnH72R9mRjJthQ_uAFxPMjX-9LZw6GnpVqxVo-cfBvJtA/exec';

// ─────────────────────────────────────────────────────────────────────────

const HARIS_EMAIL = 'harispm.23cse@kongu.edu';

const contactInfo = [
  { Icon: FaEnvelope, label: 'Email', value: HARIS_EMAIL, href: `mailto:${HARIS_EMAIL}`, color: 'var(--accent-pink)' },
  { Icon: FaGithub, label: 'GitHub', value: 'github.com/haris-p-m', href: 'https://github.com/haris-p-m', color: 'var(--text-primary)' },
  { Icon: FaLinkedin, label: 'LinkedIn', value: 'linkedin.com/in/haris-p-m', href: 'https://linkedin.com/in/haris-p-m', color: '#0a66c2' },
  { Icon: FaMapMarkerAlt, label: 'Location', value: 'Perundurai, Tamil Nadu', href: null, color: 'var(--accent-cyan)' },
];

const Contact = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (sent) setSent(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      toast.error('Please fill in all fields!', {
        style: { background: 'var(--bg-card)', color: 'var(--text-primary)', border: '1px solid rgba(236,72,153,0.3)' },
      });
      return;
    }

    if (APPS_SCRIPT_URL === 'YOUR_APPS_SCRIPT_URL') {
      toast.error('Apps Script URL not set — see console.', {
        style: { background: '#0a1428', color: 'var(--text-primary)', border: '1px solid rgba(236,72,153,0.3)' },
      });
      console.warn('⚠️  Paste your Google Apps Script URL into APPS_SCRIPT_URL in Contact.jsx');
      return;
    }

    setSending(true);

    try {
      // POST JSON to Google Apps Script — no-cors because GAS doesn't send CORS headers on redirect
      // The email IS sent successfully even though we can't read the response body
      await fetch(APPS_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
        }),
      });

      // no-cors always returns opaque response — treat reaching here as success
      toast.success("Message sent! I'll get back to you soon 🚀", {
        style: { background: '#0a1428', color: 'var(--text-primary)', border: '1px solid rgba(0,212,255,0.3)' },
      });
      setForm({ name: '', email: '', message: '' });
      setSent(true);
      setTimeout(() => setSent(false), 5000); // Revert back after 5s
    } catch (err) {
      console.error('Fetch error:', err);
      toast.error('Failed to send — please email me directly!', {
        style: { background: '#0a1428', color: 'var(--text-primary)', border: '1px solid rgba(236,72,153,0.3)' },
      });
    } finally {
      setSending(false);
    }
  };

  const inputStyle = {
    width: '100%', padding: '14px 16px',
    background: 'rgba(255,255,255,0.04)',
    border: '1px solid rgba(255,255,255,0.08)',
    borderRadius: '10px', color: 'var(--text-primary)',
    fontSize: '0.95rem', outline: 'none',
    fontFamily: 'Inter, sans-serif',
    transition: 'border-color 0.3s ease',
  };

  return (
    <section id="contact" className="section-wrapper" ref={ref}>
      <Toaster position="top-right" />
      <div className="container">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={{ marginBottom: '64px' }}
        >
          <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.8rem', color: 'var(--accent-pink)', letterSpacing: '0.3em', marginBottom: '12px' }}>
            {'// 07. CONTACT'}
          </div>
          <h2 className="section-title" style={{ background: 'linear-gradient(135deg, var(--accent-pink), var(--accent-purple))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
            Let&apos;s Connect
          </h2>
          <div className="section-divider" style={{ background: 'linear-gradient(90deg, var(--accent-pink), var(--accent-purple))' }} />
          <p className="section-subtitle">I&apos;m always open to new opportunities and collaborations</p>
        </motion.div>

        <div className="contact-grid">

          {/* ── Left – Info ──────────────────────────────── */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
              style={{ marginBottom: '32px' }}
            >
              <h3 style={{ fontFamily: 'Orbitron, monospace', fontSize: '1.2rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '16px' }}>
                Get In Touch
              </h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, fontSize: '0.95rem' }}>
                Whether you have a project idea, job opportunity, or just want to say hi —
                my inbox is always open. I&apos;ll try my best to get back to you!
              </p>
            </motion.div>

            {/* Contact info cards */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {contactInfo.map(({ Icon, label, value, href, color }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, x: -30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
                  whileHover={{ x: 8 }}
                  className="glass"
                  style={{ padding: '16px 20px', borderRadius: '12px', transition: 'all 0.3s ease' }}
                >
                  {href ? (
                    <a href={href} target={href.startsWith('mailto') ? undefined : '_blank'} rel="noopener noreferrer"
                      style={{ display: 'flex', alignItems: 'center', gap: '16px', textDecoration: 'none', width: '100%' }}>
                      <div style={{ width: 40, height: 40, borderRadius: '10px', background: `${color}15`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                        <Icon style={{ color, fontSize: '1.1rem', filter: `drop-shadow(0 0 6px ${color})` }} />
                      </div>
                      <div>
                        <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.65rem', color: 'var(--text-muted)', letterSpacing: '0.1em' }}>{label.toUpperCase()}</div>
                        <div style={{ fontSize: '0.9rem', color: 'var(--text-primary)', fontWeight: 500 }}>{value}</div>
                      </div>
                    </a>
                  ) : (
                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                      <div style={{ width: 40, height: 40, borderRadius: '10px', background: `${color}15`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                        <Icon style={{ color, fontSize: '1.1rem', filter: `drop-shadow(0 0 6px ${color})` }} />
                      </div>
                      <div>
                        <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.65rem', color: 'var(--text-muted)', letterSpacing: '0.1em' }}>{label.toUpperCase()}</div>
                        <div style={{ fontSize: '0.9rem', color: 'var(--text-primary)', fontWeight: 500 }}>{value}</div>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Social icons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.7, delay: 0.7 }}
              style={{ marginTop: '32px', display: 'flex', gap: '12px' }}
            >
              {[
                { Icon: FaGithub, href: 'https://github.com/haris-p-m', color: 'var(--text-primary)', bg: 'rgba(255,255,255,0.05)' },
                { Icon: FaLinkedin, href: 'https://linkedin.com/in/haris-p-m', color: '#0a66c2', bg: 'rgba(10,102,194,0.1)' },
                { Icon: FaEnvelope, href: `mailto:${HARIS_EMAIL}`, color: 'var(--accent-pink)', bg: 'rgba(236,72,153,0.1)' },
              ].map(({ Icon, href, color, bg }, i) => (
                <motion.a
                  key={i}
                  href={href}
                  target={href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  whileHover={{ y: -4, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  style={{
                    width: 50, height: 50,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    background: bg, border: '1px solid rgba(255,255,255,0.08)',
                    borderRadius: '12px', color, fontSize: '1.3rem',
                    textDecoration: 'none', transition: 'all 0.3s ease',
                  }}
                >
                  <Icon />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* ── Right – Form ─────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="glass"
            style={{ padding: '36px', borderRadius: '20px', border: '1px solid rgba(236,72,153,0.15)' }}
          >
            <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.75rem', color: 'var(--accent-pink)', marginBottom: '24px' }}>
              {'<send-message />'}
            </div>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>

              <div>
                <label style={{ display: 'block', fontFamily: 'JetBrains Mono, monospace', fontSize: '0.72rem', color: 'var(--text-muted)', letterSpacing: '0.1em', marginBottom: '8px' }}>YOUR NAME</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  required
                  style={inputStyle}
                  onFocus={(e) => (e.target.style.borderColor = 'rgba(236,72,153,0.5)')}
                  onBlur={(e) => (e.target.style.borderColor = 'rgba(255,255,255,0.08)')}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontFamily: 'JetBrains Mono, monospace', fontSize: '0.72rem', color: 'var(--text-muted)', letterSpacing: '0.1em', marginBottom: '8px' }}>EMAIL ADDRESS</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  required
                  style={inputStyle}
                  onFocus={(e) => (e.target.style.borderColor = 'rgba(236,72,153,0.5)')}
                  onBlur={(e) => (e.target.style.borderColor = 'rgba(255,255,255,0.08)')}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontFamily: 'JetBrains Mono, monospace', fontSize: '0.72rem', color: 'var(--text-muted)', letterSpacing: '0.1em', marginBottom: '8px' }}>
                  MESSAGE
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project or just say hello..."
                  rows={5}
                  required
                  style={{ ...inputStyle, resize: 'vertical' }}
                  onFocus={(e) => (e.target.style.borderColor = 'rgba(236,72,153,0.5)')}
                  onBlur={(e) => (e.target.style.borderColor = 'rgba(255,255,255,0.08)')}
                />
              </div>

              <motion.button
                type="submit"
                disabled={sending || sent}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                className="btn-primary"
                style={{
                  width: '100%', justifyContent: 'center', padding: '16px',
                  fontSize: '0.85rem',
                  background: sending
                    ? 'rgba(236,72,153,0.15)'
                    : sent
                      ? 'rgba(16, 185, 129, 0.15)' // Green background for success
                      : 'linear-gradient(135deg, rgba(236,72,153,0.2), rgba(139,92,246,0.2))',
                  borderColor: sent ? '#10b981' : 'var(--accent-pink)',
                  color: sent ? '#10b981' : 'var(--accent-pink)',
                }}
              >
                {sending ? (
                  <>
                    <motion.span
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                      style={{ display: 'inline-block', width: 16, height: 16, border: '2px solid var(--accent-pink)', borderTopColor: 'transparent', borderRadius: '50%' }}
                    />
                    Sending…
                  </>
                ) : sent ? (
                  <>
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
                    >
                      <FaCheck /> Message Sent
                    </motion.div>
                  </>
                ) : (
                  <><FaPaperPlane /> Send Message</>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>

      <style>{`
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1.4fr;
          gap: 48px;
          align-items: start;
        }
        @media (max-width: 900px) {
          .contact-grid {
            grid-template-columns: 1fr;
            gap: 32px;
          }
        }
      `}</style>
    </section>
  );
};

export default Contact;
