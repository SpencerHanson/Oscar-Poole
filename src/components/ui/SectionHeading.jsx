import React from 'react';

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  className = '',
  light = false,
}) {
  const isCenter = align === 'center';

  return (
    <div
      className={className}
      style={{
        textAlign: isCenter ? 'center' : 'left',
        marginBottom: 'var(--space-48)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: isCenter ? 'center' : 'flex-start',
      }}
    >
      {eyebrow && (
        <span
          className="section-eyebrow"
          style={{
            color: light ? '#e58e26' : 'var(--color-secondary)',
          }}
        >
          {eyebrow}
        </span>
      )}
      <h2
        style={{
          color: light ? '#ffffff' : 'var(--color-ink)',
          marginBottom: description ? 'var(--space-16)' : '0',
          maxWidth: '30ch',
        }}
      >
        {title}
      </h2>
      {description && (
        <p
          style={{
            color: light ? 'rgba(255, 255, 255, 0.78)' : 'var(--color-ink-muted)',
            fontSize: '1.05rem',
            lineHeight: 1.6,
            maxWidth: '56ch',
            margin: isCenter ? '0 auto' : '0',
          }}
        >
          {description}
        </p>
      )}
    </div>
  );
}
