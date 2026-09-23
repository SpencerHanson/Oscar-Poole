import React, { useState } from 'react';
import { business } from '../config/business';
import SectionHeading from './ui/SectionHeading';
import ServiceCard from './ui/ServiceCard';

export default function Services({ onSelectService }) {
  const [filter, setFilter] = useState('all');

  const categories = [
    { id: 'all', label: 'All Services' },
    { id: 'emergency', label: 'Repairs & Emergency' },
    { id: 'opener', label: 'Openers & Motors' },
    { id: 'install', label: 'Install & Panels' },
  ];

  const filteredItems = business.services.items.filter((item) => {
    if (filter === 'all') return true;
    if (filter === 'emergency') {
      return (
        item.id === 'repair' ||
        item.id === 'springs' ||
        item.id === 'cables' ||
        item.id === 'tracks' ||
        item.id === 'emergency'
      );
    }
    if (filter === 'opener') {
      return (
        item.id === 'opener-repair' ||
        item.id === 'opener-install' ||
        item.id === 'remotes' ||
        item.id === 'maintenance'
      );
    }
    if (filter === 'install') {
      return (
        item.id === 'installation' ||
        item.id === 'replacement' ||
        item.id === 'panels'
      );
    }
    return true;
  });

  return (
    <section id="services" className="section section-alt">
      <div className="container">
        {/* Section Heading */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            marginBottom: 'var(--space-32)',
          }}
        >
          <SectionHeading
            eyebrow={business.services.eyebrow}
            title={business.services.title}
            description={business.services.supportingText}
          />

          {/* Interactive Filter Tabs compliant with Skill: functional buttons */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: 'var(--space-8)',
              marginTop: 'calc(-1 * var(--space-24))',
              marginBottom: 'var(--space-32)',
            }}
          >
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setFilter(cat.id)}
                style={{
                  padding: '8px 18px',
                  borderRadius: 'var(--radius-sm)',
                  fontSize: '0.85rem',
                  fontFamily: 'var(--font-heading)',
                  fontWeight: 600,
                  transition: 'all var(--transition-speed)',
                  backgroundColor: filter === cat.id ? 'var(--color-primary)' : 'var(--color-surface)',
                  color: filter === cat.id ? '#ffffff' : 'var(--color-ink)',
                  border: filter === cat.id ? '1px solid var(--color-primary)' : '1px solid var(--color-hairline-strong)',
                  boxShadow: filter === cat.id ? 'var(--shadow-rest)' : 'none',
                }}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* 3 Across on Desktop, 1 on Mobile */}
        <div
          className="services-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 'var(--space-32)',
          }}
        >
          {filteredItems.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              onSelectService={onSelectService}
            />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .services-grid {
            grid-templateColumns: repeat(2, 1fr) !important;
            gap: var(--space-24) !important;
          }
        }
        @media (max-width: 680px) {
          .services-grid {
            grid-templateColumns: 1fr !important;
            gap: var(--space-24) !important;
          }
        }
      `}</style>
    </section>
  );
}
