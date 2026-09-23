import React from 'react';
import { business } from '../config/business';
import Button from './ui/Button';

export default function Hero() {
  return (
    <section
      style={{
        position: 'relative',
        minHeight: '92vh',
        display: 'flex',
        alignItems: 'center',
        paddingTop: 'calc(var(--header-height) + var(--space-48))',
        paddingBottom: 'var(--space-64)',
        backgroundColor: '#0c0f14',
        overflow: 'hidden',
      }}
    >
      {/* Background Image with Single Tonal Overlay for Optimal Contrast */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 1,
        }}
      >
        <img
          src={business.hero.backgroundImage}
          alt={business.hero.title}
          referrerPolicy="no-referrer"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center 40%',
          }}
        />
        {/* Single Tonal Scrim for Legibility without Murkiness */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(105deg, rgba(12, 15, 20, 0.94) 0%, rgba(12, 15, 20, 0.88) 45%, rgba(12, 15, 20, 0.65) 100%)',
          }}
        />
      </div>

      {/* Hero Content Container */}
      <div
        className="container"
        style={{
          position: 'relative',
          zIndex: 2,
        }}
      >
        <div
          style={{
            maxWidth: '780px',
          }}
        >
          {/* Eyebrow */}
          <span
            className="section-eyebrow"
            style={{
              color: 'var(--color-secondary)',
              marginBottom: 'var(--space-16)',
              display: 'inline-block',
            }}
          >
            {business.hero.eyebrow}
          </span>

          {/* H1 Headline */}
          <h1
            style={{
              color: '#ffffff',
              marginBottom: 'var(--space-24)',
              fontWeight: 700,
            }}
          >
            {business.hero.title}
          </h1>

          {/* Supporting Line */}
          <p
            style={{
              color: 'rgba(255, 255, 255, 0.82)',
              fontSize: '1.2rem',
              lineHeight: 1.6,
              marginBottom: 'var(--space-32)',
              maxWidth: '58ch',
            }}
          >
            {business.hero.supportingLine}
          </p>

          {/* Primary CTA + Secondary CTA */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: 'var(--space-16)',
              marginBottom: 'var(--space-48)',
            }}
          >
            <Button
              href={business.hero.primaryCta.href}
              variant="accent"
              size="lg"
            >
              {business.hero.primaryCta.label}
            </Button>
            <Button
              href={business.hero.secondaryCta.href}
              variant="outline"
              size="lg"
            >
              {business.hero.secondaryCta.label}
            </Button>
          </div>

          {/* Quiet Trust Line */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              paddingTop: 'var(--space-24)',
              borderTop: '1px solid rgba(255, 255, 255, 0.15)',
              fontSize: '0.88rem',
              color: 'rgba(255, 255, 255, 0.70)',
              fontFamily: 'var(--font-heading)',
            }}
          >
            <span
              style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                backgroundColor: 'var(--color-secondary)',
                display: 'inline-block',
                flexShrink: 0,
              }}
            />
            <span>{business.hero.trustLine}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
