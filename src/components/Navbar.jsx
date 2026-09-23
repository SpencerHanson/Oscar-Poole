import React, { useState, useEffect } from 'react';
import { business } from '../config/business';
import Button from './ui/Button';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        height: 'var(--header-height)',
        backgroundColor: scrolled
          ? 'rgba(12, 15, 20, 0.96)'
          : 'rgba(12, 15, 20, 0.90)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.10)',
        transition: 'background-color 200ms ease, border-color 200ms ease',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <div
        className="container"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* Brand Zone (Single clean text wordmark in display face per Top Bar contract) */}
        <a
          href="#"
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: '1.25rem',
            fontWeight: 700,
            letterSpacing: '-0.02em',
            color: '#ffffff',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
          }}
        >
          <span>{business.brand.name}</span>
          <span
            style={{
              width: '6px',
              height: '6px',
              borderRadius: '50%',
              backgroundColor: 'var(--color-secondary)',
              display: 'inline-block',
            }}
          />
        </a>

        {/* Desktop Nav Zone (clean text navigation links) */}
        <nav
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 'var(--space-32)',
          }}
          className="desktop-nav"
        >
          {business.navigation.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '0.9rem',
                fontWeight: 500,
                color: 'rgba(255, 255, 255, 0.78)',
                letterSpacing: '-0.01em',
                transition: 'color var(--transition-speed)',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#ffffff')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255, 255, 255, 0.78)')}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Zone (1 primary action CTA + Emergency Phone link) */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 'var(--space-16)',
          }}
          className="desktop-cta"
        >
          <a
            href={business.brand.phoneTel}
            style={{
              color: '#ffffff',
              fontSize: '0.85rem',
              fontFamily: 'var(--font-heading)',
              fontWeight: 500,
              display: 'none',
              alignItems: 'center',
              gap: '6px',
            }}
            className="phone-quicklink"
          >
            <span style={{ color: 'var(--color-secondary)' }}>Call:</span>
            <span className="tabular">{business.brand.phoneDisplay}</span>
          </a>

          <Button
            href={business.navigation.primaryCta.href}
            variant="accent"
            size="sm"
          >
            {business.navigation.primaryCta.label}
          </Button>

          {/* Hamburger toggle button for mobile */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            className="mobile-toggle"
            style={{
              display: 'none',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              width: '40px',
              height: '40px',
              padding: '8px',
              borderRadius: 'var(--radius-sm)',
              color: '#ffffff',
            }}
          >
            <span
              style={{
                display: 'block',
                width: '22px',
                height: '2px',
                backgroundColor: '#ffffff',
                marginBottom: '5px',
                transition: 'transform 200ms ease',
                transform: mobileMenuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none',
              }}
            />
            <span
              style={{
                display: 'block',
                width: '22px',
                height: '2px',
                backgroundColor: '#ffffff',
                opacity: mobileMenuOpen ? 0 : 1,
                transition: 'opacity 200ms ease',
              }}
            />
            <span
              style={{
                display: 'block',
                width: '22px',
                height: '2px',
                backgroundColor: '#ffffff',
                marginTop: '5px',
                transition: 'transform 200ms ease',
                transform: mobileMenuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none',
              }}
            />
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'fixed',
            top: 'var(--header-height)',
            left: 0,
            right: 0,
            backgroundColor: '#0c0f14',
            borderBottom: '1px solid rgba(255, 255, 255, 0.15)',
            padding: 'var(--space-24) var(--space-24) var(--space-32)',
            display: 'flex',
            flexDirection: 'column',
            gap: 'var(--space-16)',
            boxShadow: '0 20px 40px rgba(0,0,0,0.5)',
          }}
        >
          {business.navigation.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              style={{
                fontSize: '1.1rem',
                fontFamily: 'var(--font-heading)',
                fontWeight: 600,
                color: '#ffffff',
                padding: 'var(--space-8) 0',
                borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
              }}
            >
              {link.label}
            </a>
          ))}

          <div style={{ marginTop: 'var(--space-16)', display: 'flex', flexDirection: 'column', gap: 'var(--space-12)' }}>
            <Button
              href={business.navigation.primaryCta.href}
              variant="accent"
              size="md"
              onClick={closeMenu}
            >
              {business.navigation.primaryCta.label}
            </Button>
            <Button
              href={business.brand.phoneTel}
              variant="outline"
              size="md"
              onClick={closeMenu}
            >
              Call {business.brand.phoneDisplay}
            </Button>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 900px) {
          .desktop-nav {
            display: none !important;
          }
          .phone-quicklink {
            display: none !important;
          }
          .mobile-toggle {
            display: flex !important;
          }
        }
        @media (min-width: 1100px) {
          .phone-quicklink {
            display: inline-flex !important;
          }
        }
      `}</style>
    </header>
  );
}
