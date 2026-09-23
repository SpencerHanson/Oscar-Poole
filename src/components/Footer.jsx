import React from 'react';
import { business } from '../config/business';

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: '#0c0f14',
        color: '#ffffff',
        paddingTop: 'var(--space-64)',
        paddingBottom: 'var(--space-48)',
        borderTop: '1px solid rgba(255, 255, 255, 0.12)',
      }}
    >
      <div className="container">
        <div
          className="footer-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '1.4fr 1fr 1fr 1.2fr',
            gap: 'var(--space-48)',
            marginBottom: 'var(--space-48)',
          }}
        >
          {/* Brand & Trade Name Column */}
          <div>
            <span
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.35rem',
                fontWeight: 700,
                letterSpacing: '-0.02em',
                color: '#ffffff',
                display: 'block',
                marginBottom: 'var(--space-12)',
              }}
            >
              {business.brand.name}
            </span>
            <p
              style={{
                color: 'rgba(255, 255, 255, 0.65)',
                fontSize: '0.9rem',
                lineHeight: 1.6,
                marginBottom: 'var(--space-16)',
              }}
            >
              {business.footer.legalNote}
            </p>
            <p
              style={{
                color: 'var(--color-secondary)',
                fontSize: '0.85rem',
                fontWeight: 600,
              }}
            >
              {business.brand.serviceArea}
            </p>
          </div>

          {/* Quick Links Column */}
          <div>
            <span
              style={{
                display: 'block',
                fontFamily: 'var(--font-heading)',
                fontSize: '0.85rem',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                color: 'rgba(255, 255, 255, 0.45)',
                fontWeight: 600,
                marginBottom: 'var(--space-16)',
              }}
            >
              {business.footer.quickLinksTitle}
            </span>
            <ul
              style={{
                listStyle: 'none',
                display: 'flex',
                flexDirection: 'column',
                gap: 'var(--space-8)',
              }}
            >
              {business.navigation.links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    style={{
                      fontSize: '0.9rem',
                      color: 'rgba(255, 255, 255, 0.75)',
                      transition: 'color var(--transition-speed)',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#ffffff')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255, 255, 255, 0.75)')}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Contact Column */}
          <div>
            <span
              style={{
                display: 'block',
                fontFamily: 'var(--font-heading)',
                fontSize: '0.85rem',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                color: 'rgba(255, 255, 255, 0.45)',
                fontWeight: 600,
                marginBottom: 'var(--space-16)',
              }}
            >
              {business.footer.contactTitle}
            </span>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 'var(--space-8)',
                fontSize: '0.9rem',
              }}
            >
              <a
                href={business.brand.phoneTel}
                style={{ color: '#ffffff', fontWeight: 500 }}
                className="tabular"
              >
                {business.brand.phoneDisplay}
              </a>
              <a
                href={business.brand.emailMailto}
                style={{ color: 'rgba(255, 255, 255, 0.75)' }}
              >
                {business.brand.email}
              </a>
              {business.brand.whatsapp && (
                <a
                  href={business.brand.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: 'rgba(255, 255, 255, 0.75)' }}
                >
                  WhatsApp Consultation
                </a>
              )}
            </div>
          </div>

          {/* Hours & Base Column */}
          <div>
            <span
              style={{
                display: 'block',
                fontFamily: 'var(--font-heading)',
                fontSize: '0.85rem',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                color: 'rgba(255, 255, 255, 0.45)',
                fontWeight: 600,
                marginBottom: 'var(--space-16)',
              }}
            >
              {business.footer.hoursTitle}
            </span>
            <p
              style={{
                fontSize: '0.88rem',
                color: 'rgba(255, 255, 255, 0.75)',
                marginBottom: 'var(--space-8)',
              }}
            >
              {business.contact.hours}
            </p>
            <p
              style={{
                fontSize: '0.84rem',
                color: 'rgba(255, 255, 255, 0.55)',
                lineHeight: 1.5,
              }}
            >
              {business.brand.displayAddress}
            </p>
          </div>
        </div>

        {/* Quiet Bottom Copyright Bar */}
        <div
          style={{
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            paddingTop: 'var(--space-24)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: 'var(--space-16)',
            fontSize: '0.82rem',
            color: 'rgba(255, 255, 255, 0.5)',
          }}
        >
          <span>{business.footer.copyright}</span>
          <span>{business.brand.styleName}</span>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .footer-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: var(--space-32) !important;
          }
        }
        @media (max-width: 540px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
            gap: var(--space-32) !important;
          }
        }
      `}</style>
    </footer>
  );
}
