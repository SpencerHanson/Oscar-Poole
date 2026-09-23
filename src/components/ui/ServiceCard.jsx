import React, { useState } from 'react';

export default function ServiceCard({
  service,
  onSelectService,
  contactHref = '#contact',
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      style={{
        backgroundColor: 'var(--color-surface)',
        borderRadius: 'var(--radius-lg)',
        border: '1px solid var(--color-hairline)',
        boxShadow: isHovered ? 'var(--shadow-hover)' : 'var(--shadow-rest)',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        transition: 'transform var(--transition-speed), box-shadow var(--transition-speed), border-color var(--transition-speed)',
        transform: isHovered ? 'translateY(-4px)' : 'translateY(0)',
        borderColor: isHovered ? 'var(--color-hairline-strong)' : 'var(--color-hairline)',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container with fixed aspect ratio */}
      <div
        style={{
          width: '100%',
          aspectRatio: '16 / 10',
          overflow: 'hidden',
          backgroundColor: 'var(--color-surface-alt)',
          position: 'relative',
        }}
      >
        <img
          src={service.image}
          alt={service.title}
          referrerPolicy="no-referrer"
          loading="lazy"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: 'transform 350ms cubic-bezier(0.16, 1, 0.3, 1)',
            transform: isHovered ? 'scale(1.05)' : 'scale(1.0)',
          }}
        />
        {service.highlight && (
          <div
            style={{
              position: 'absolute',
              top: '12px',
              left: '12px',
              backgroundColor: 'rgba(12, 15, 20, 0.85)',
              color: '#ffffff',
              fontSize: '0.72rem',
              fontWeight: 600,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              padding: '4px 10px',
              borderRadius: '4px',
              backdropFilter: 'blur(4px)',
            }}
          >
            Priority Service
          </div>
        )}
      </div>

      {/* Card Content */}
      <div
        style={{
          padding: 'var(--space-24)',
          display: 'flex',
          flexDirection: 'column',
          flex: 1,
          justifyContent: 'space-between',
        }}
      >
        <div>
          <h3
            style={{
              fontSize: '1.25rem',
              lineHeight: 1.3,
              marginBottom: 'var(--space-8)',
              color: 'var(--color-ink)',
            }}
          >
            {service.title}
          </h3>
          <p
            style={{
              fontSize: '0.92rem',
              lineHeight: 1.55,
              color: 'var(--color-ink-muted)',
              marginBottom: 'var(--space-16)',
            }}
          >
            {service.description}
          </p>
        </div>

        <div
          style={{
            paddingTop: 'var(--space-16)',
            borderTop: '1px solid var(--color-hairline)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <a
            href={contactHref}
            onClick={() => onSelectService && onSelectService(service.title)}
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '0.85rem',
              fontWeight: 600,
              color: isHovered ? 'var(--color-secondary)' : 'var(--color-ink)',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              transition: 'color var(--transition-speed)',
            }}
          >
            <span>Request Repair</span>
            <span style={{ fontSize: '1.1rem', lineHeight: 1 }}>→</span>
          </a>

          <span
            style={{
              fontSize: '0.75rem',
              color: 'var(--color-ink-subtle)',
              fontFamily: 'var(--font-heading)',
            }}
          >
            Brighton & Local
          </span>
        </div>
      </div>
    </div>
  );
}
