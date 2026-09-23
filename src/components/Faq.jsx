import React, { useState } from 'react';
import { business } from '../config/business';
import SectionHeading from './ui/SectionHeading';

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0);

  if (!business.faq || !business.faq.items || business.faq.items.length === 0) {
    return null;
  }

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section id="faq" className="section">
      <div className="container" style={{ maxWidth: '880px' }}>
        <SectionHeading
          eyebrow={business.faq.eyebrow}
          title={business.faq.title}
          align="center"
        />

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 'var(--space-16)',
          }}
        >
          {business.faq.items.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                style={{
                  backgroundColor: 'var(--color-surface)',
                  borderRadius: 'var(--radius-sm)',
                  border: '1px solid var(--color-hairline)',
                  overflow: 'hidden',
                  transition: 'border-color var(--transition-speed)',
                  borderColor: isOpen ? 'var(--color-secondary)' : 'var(--color-hairline)',
                }}
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(index)}
                  style={{
                    width: '100%',
                    padding: 'var(--space-24)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    textAlign: 'left',
                    gap: 'var(--space-16)',
                    backgroundColor: isOpen ? 'var(--color-surface-alt)' : 'var(--color-surface)',
                    transition: 'background-color var(--transition-speed)',
                  }}
                  aria-expanded={isOpen}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '1.05rem',
                      fontWeight: 600,
                      color: 'var(--color-ink)',
                      lineHeight: 1.35,
                    }}
                  >
                    {item.question}
                  </span>
                  <span
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '28px',
                      height: '28px',
                      borderRadius: '50%',
                      backgroundColor: isOpen ? 'var(--color-secondary)' : 'var(--color-hairline)',
                      color: isOpen ? '#ffffff' : 'var(--color-ink)',
                      fontSize: '1.1rem',
                      fontWeight: 600,
                      flexShrink: 0,
                      transition: 'transform var(--transition-speed), background-color var(--transition-speed)',
                      transform: isOpen ? 'rotate(45deg)' : 'none',
                    }}
                  >
                    +
                  </span>
                </button>

                {isOpen && (
                  <div
                    style={{
                      padding: 'var(--space-24)',
                      borderTop: '1px solid var(--color-hairline)',
                      backgroundColor: 'var(--color-surface)',
                    }}
                  >
                    <p
                      style={{
                        fontSize: '0.96rem',
                        lineHeight: 1.65,
                        color: 'var(--color-ink-muted)',
                      }}
                    >
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
