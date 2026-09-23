import React from 'react';
import { business } from '../config/business';
import SectionHeading from './ui/SectionHeading';

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="section section-alt">
      <div className="container">
        <SectionHeading
          eyebrow={business.whyChooseUs.eyebrow}
          title={business.whyChooseUs.title}
          align="center"
        />

        <div
          className="why-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: 'var(--space-24)',
          }}
        >
          {business.whyChooseUs.points.map((pt) => (
            <div
              key={pt.number}
              style={{
                backgroundColor: 'var(--color-surface)',
                padding: 'var(--space-32) var(--space-24)',
                borderRadius: 'var(--radius-lg)',
                border: '1px solid var(--color-hairline)',
                boxShadow: 'var(--shadow-rest)',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              {/* Human editorial numeral */}
              <span
                className="tabular"
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1.75rem',
                  fontWeight: 700,
                  color: 'var(--color-secondary)',
                  marginBottom: 'var(--space-16)',
                  lineHeight: 1,
                }}
              >
                {pt.number}
              </span>

              <h3
                style={{
                  fontSize: '1.15rem',
                  lineHeight: 1.3,
                  color: 'var(--color-ink)',
                  marginBottom: 'var(--space-8)',
                }}
              >
                {pt.title}
              </h3>

              <p
                style={{
                  fontSize: '0.92rem',
                  lineHeight: 1.55,
                  color: 'var(--color-ink-muted)',
                }}
              >
                {pt.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .why-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: var(--space-24) !important;
          }
        }
        @media (max-width: 600px) {
          .why-grid {
            grid-template-columns: 1fr !important;
            gap: var(--space-16) !important;
          }
        }
      `}</style>
    </section>
  );
}
