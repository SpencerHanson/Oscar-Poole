import React from 'react';
import { business } from '../config/business';
import SectionHeading from './ui/SectionHeading';
import Button from './ui/Button';

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <div
          className="about-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '1.05fr 1fr',
            gap: 'var(--space-64)',
            alignItems: 'center',
          }}
        >
          {/* Left Column: Image with refined framing */}
          <div
            style={{
              position: 'relative',
              borderRadius: 'var(--radius-lg)',
              overflow: 'hidden',
              boxShadow: 'var(--shadow-rest)',
              border: '1px solid var(--color-hairline)',
              aspectRatio: '4 / 3',
              backgroundColor: 'var(--color-surface-alt)',
            }}
          >
            <img
              src={business.about.image}
              alt={business.about.title}
              referrerPolicy="no-referrer"
              loading="lazy"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
          </div>

          {/* Right Column: Refined Story & Specifications */}
          <div>
            <SectionHeading
              eyebrow={business.about.eyebrow}
              title={business.about.title}
            />

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 'var(--space-16)',
                marginBottom: 'var(--space-32)',
              }}
            >
              {business.about.paragraphs.map((p, idx) => (
                <p
                  key={idx}
                  style={{
                    fontSize: '1.05rem',
                    lineHeight: 1.65,
                    color: 'var(--color-ink-muted)',
                  }}
                >
                  {p}
                </p>
              ))}
            </div>

            {/* Direct factual credentials grid (no fake stats) */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: 'var(--space-16)',
                paddingTop: 'var(--space-24)',
                borderTop: '1px solid var(--color-hairline)',
                marginBottom: 'var(--space-32)',
              }}
            >
              {business.about.details.map((item, idx) => (
                <div key={idx}>
                  <span
                    style={{
                      display: 'block',
                      fontSize: '0.78rem',
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em',
                      color: 'var(--color-secondary)',
                      fontWeight: 600,
                      marginBottom: '4px',
                      fontFamily: 'var(--font-heading)',
                    }}
                  >
                    {item.label}
                  </span>
                  <span
                    style={{
                      fontSize: '0.95rem',
                      color: 'var(--color-ink)',
                      fontWeight: 500,
                    }}
                  >
                    {item.value}
                  </span>
                </div>
              ))}
            </div>

            <div style={{ display: 'flex', gap: 'var(--space-16)' }}>
              <Button href="#contact" variant="primary" size="md">
                Contact Oscar Poole
              </Button>
              <Button href={business.brand.whatsappUrl} variant="secondary" size="md" target="_blank">
                WhatsApp Us
              </Button>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 960px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: var(--space-48) !important;
          }
        }
      `}</style>
    </section>
  );
}
