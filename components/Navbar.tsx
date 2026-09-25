"use client";
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, Menu, X } from 'lucide-react';
import { WhatsAppIcon } from './Icons';
import { profile } from '@/lib/portfolio';

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Education', href: '#education' },
  { label: 'Resume', href: '#resume' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
      const sections = navItems.map((item) => item.href.slice(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY >= el.offsetTop - 140) {
          setActive('#' + sections[i]);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on resize
  useEffect(() => {
    const handleResize = () => { if (window.innerWidth > 768) setMobileOpen(false); };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleNav = (href: string) => {
    setActive(href);
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.header
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
        style={{
          position: 'fixed',
          top: scrolled ? '16px' : '20px',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 1000,
          transition: 'top 0.3s ease',
          width: 'calc(100% - 3rem)',
          maxWidth: '1100px',
        }}
      >
        <div
          style={{
            background: scrolled ? 'rgba(255,255,255,0.94)' : 'rgba(255,255,255,0.88)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            borderRadius: '999px',
            border: '1px solid rgba(26,26,46,0.08)',
            boxShadow: scrolled ? '0 8px 32px rgba(26,26,46,0.12)' : '0 4px 16px rgba(26,26,46,0.06)',
            padding: '0.75rem 1.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            transition: 'all 0.3s ease',
          }}
        >
          {/* Brand */}
          <div
            onClick={() => handleNav('#hero')}
            style={{ display: 'flex', flexDirection: 'column', gap: '1px', cursor: 'pointer' }}
          >
            <span
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 700,
                fontSize: '1rem',
                color: '#1A1A2E',
                letterSpacing: '-0.02em',
              }}
            >
              {profile.firstName}{' '}
              <span style={{ color: '#0078D4' }}>{profile.lastName}</span>
            </span>
            <span
              style={{
                fontSize: '0.55rem',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: '#9B9BB4',
                fontWeight: 600,
              }}
            >
              D365 &amp; POWER APPS DEVELOPER
            </span>
          </div>

          {/* Desktop Nav */}
          <nav
            aria-label="Main navigation"
            style={{ display: 'flex', gap: '0.25rem', alignItems: 'center' }}
            className="desktop-nav"
          >
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => { e.preventDefault(); handleNav(item.href); }}
                style={{
                  padding: '0.4rem 0.85rem',
                  borderRadius: '999px',
                  fontSize: '0.82rem',
                  fontWeight: 500,
                  color: active === item.href ? '#0078D4' : '#5C5C7A',
                  textDecoration: 'none',
                  background: active === item.href ? 'rgba(0,120,212,0.08)' : 'transparent',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  if (active !== item.href) {
                    (e.target as HTMLElement).style.color = '#1A1A2E';
                    (e.target as HTMLElement).style.background = 'rgba(26,26,46,0.05)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (active !== item.href) {
                    (e.target as HTMLElement).style.color = '#5C5C7A';
                    (e.target as HTMLElement).style.background = 'transparent';
                  }
                }}
                aria-current={active === item.href ? 'page' : undefined}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Action Icons */}
          <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
            <a
              href={`https://wa.me/${profile.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              style={{ ...iconStyle, color: '#16A34A', background: 'rgba(22,163,74,0.08)' }}
              title="Chat on WhatsApp"
            >
              <WhatsAppIcon size={16} />
            </a>
            <a
              href={`tel:${profile.phone}`}
              aria-label="Call"
              style={iconStyle}
              title="Call Salma Shaik"
            >
              <Phone size={15} />
            </a>
            <a
              href={`mailto:${profile.email}`}
              aria-label="Email"
              style={{ ...iconStyle, background: '#0078D4', color: 'white' }}
              title="Email Salma Shaik"
            >
              <Mail size={15} />
            </a>

            {/* Hamburger for mobile */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
              style={{
                ...iconStyle,
                border: '1px solid rgba(26,26,46,0.08)',
                background: 'transparent',
                cursor: 'pointer',
              }}
              className="mobile-menu-btn"
            >
              {mobileOpen ? <X size={15} /> : <Menu size={15} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            style={{
              position: 'fixed',
              top: '90px',
              left: '1.5rem',
              right: '1.5rem',
              zIndex: 999,
              background: 'rgba(255,255,255,0.98)',
              backdropFilter: 'blur(20px)',
              borderRadius: '20px',
              border: '1px solid rgba(26,26,46,0.08)',
              boxShadow: '0 16px 48px rgba(26,26,46,0.12)',
              overflow: 'hidden',
            }}
          >
            <nav aria-label="Mobile navigation" style={{ padding: '1.25rem' }}>
              {navItems.map((item, i) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04 }}
                  onClick={(e) => { e.preventDefault(); handleNav(item.href); }}
                  style={{
                    display: 'block',
                    padding: '0.85rem 1rem',
                    borderRadius: '12px',
                    fontSize: '1rem',
                    fontWeight: 500,
                    color: '#1A1A2E',
                    textDecoration: 'none',
                    borderBottom: i < navItems.length - 1 ? '1px solid rgba(26,26,46,0.06)' : 'none',
                    transition: 'all 0.2s',
                  }}
                >
                  {item.label}
                  <span style={{ float: 'right', color: '#0078D4', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.05em' }}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </motion.a>
              ))}
              {/* Mobile action row */}
              <div style={{ display: 'flex', gap: '0.75rem', paddingTop: '1rem', borderTop: '1px solid rgba(26,26,46,0.06)', marginTop: '0.5rem' }}>
                <a
                  href={`https://wa.me/${profile.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ ...iconStyle, flex: 1, justifyContent: 'center', borderRadius: '10px', border: '1px solid rgba(26,26,46,0.08)', fontSize: '0.8rem', fontWeight: 600, gap: '0.4rem', color: '#16A34A', background: 'rgba(22,163,74,0.08)', textDecoration: 'none' }}
                >
                  <WhatsAppIcon size={15} /> WhatsApp
                </a>
                <a
                  href={`tel:${profile.phone}`}
                  style={{ ...iconStyle, flex: 1, justifyContent: 'center', borderRadius: '10px', border: '1px solid rgba(26,26,46,0.08)', fontSize: '0.8rem', fontWeight: 600, gap: '0.4rem', color: '#5C5C7A', textDecoration: 'none' }}
                >
                  <Phone size={14} /> Call
                </a>
                <a
                  href={`mailto:${profile.email}`}
                  style={{ ...iconStyle, flex: 1, justifyContent: 'center', borderRadius: '10px', background: '#0078D4', fontSize: '0.8rem', fontWeight: 600, gap: '0.4rem', color: 'white', textDecoration: 'none' }}
                >
                  <Mail size={14} /> Email
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .desktop-nav { display: flex !important; }
        .mobile-menu-btn { display: none !important; }
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </>
  );
}

const iconStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '34px',
  height: '34px',
  borderRadius: '999px',
  color: '#5C5C7A',
  background: 'rgba(26,26,46,0.05)',
  textDecoration: 'none',
  transition: 'all 0.2s ease',
};
