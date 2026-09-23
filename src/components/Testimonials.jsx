import React from 'react';
import { business } from '../config/business';
import SectionHeading from './ui/SectionHeading';

/**
 * Rendered ONLY if testimonials exist in business configuration.
 * Otherwise returns null cleanly without taking up any space or rendering placeholders.
 */
export default function Testimonials() {
  if (!business.testimonials || business.testimonials.length === 0) {
    return null;
  }

  return (
    <section id="testimonials" className="section">
      <div className="container">
        <SectionHeading
          eyebrow="Client Feedback"
          title="What Local Homeowners Say"
          align="center"
        />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 'var(--space-32)',
          }}
        >
          {business.testimonials.map((item, idx) => (
            <div
              key={idx}
              style={{
                backgroundColor: 'var(--color-surface)',
                padding: 'var(--space-32)',
                borderRadius: 'var(--radius-lg)',
                border: '1px solid var(--color-hairline)',
                boxShadow: 'var(--shadow-rest)',
              }}
            >
              <p
                style={{
                  fontSize: '1rem',
                  lineHeight: 1.6,
                  color: 'var(--color-ink)',
                  fontStyle: 'italic',
                  marginBottom: 'var(--space-16)',
                }}
              >
                "{item.quote}"
              </p>
              <div
                style={{
                  fontSize: '0.88rem',
                  fontWeight: 600,
                  color: 'var(--color-ink)',
                }}
              >
                {item.author}
              </div>
              {item.location && (
                <div
                  style={{
                    fontSize: '0.8rem',
                    color: 'var(--color-ink-subtle)',
                  }}
                >
                  {item.location}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
