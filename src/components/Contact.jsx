import React, { useState, useEffect } from 'react';
import { business } from '../config/business';
import SectionHeading from './ui/SectionHeading';
import Button from './ui/Button';

export default function Contact({ initialSelectedService }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: initialSelectedService || business.services.items[0]?.title || '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (initialSelectedService) {
      setFormData((prev) => ({ ...prev, service: initialSelectedService }));
    }
  }, [initialSelectedService]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) {
      errs.name = 'Please provide your name.';
    }
    if (!formData.phone.trim()) {
      errs.phone = 'Please provide a contact phone number.';
    }
    if (formData.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Please provide a valid email address.';
    }
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setSubmitted(true);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      phone: '',
      email: '',
      service: business.services.items[0]?.title || '',
      message: '',
    });
    setSubmitted(false);
    setErrors({});
  };

  return (
    <section id="contact" className="section section-alt">
      <div className="container">
        <SectionHeading
          eyebrow={business.contact.eyebrow}
          title={business.contact.title}
          description={business.contact.supportingText}
        />

        <div
          className="contact-layout"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1.3fr',
            gap: 'var(--space-48)',
            alignItems: 'start',
          }}
        >
          {/* Left Column: Direct Contact Details & Action Hub */}
          <div
            style={{
              backgroundColor: 'var(--color-surface)',
              borderRadius: 'var(--radius-lg)',
              border: '1px solid var(--color-hairline)',
              padding: 'var(--space-32)',
              boxShadow: 'var(--shadow-rest)',
            }}
          >
            <h3
              style={{
                fontSize: '1.25rem',
                marginBottom: 'var(--space-24)',
                color: 'var(--color-ink)',
              }}
            >
              Direct Communication
            </h3>

            {/* Direct Action Hub */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 'var(--space-12)',
                marginBottom: 'var(--space-32)',
              }}
            >
              <Button href={business.brand.phoneTel} variant="primary" size="md">
                Call {business.brand.phoneDisplay}
              </Button>

              {business.brand.whatsapp && (
                <Button
                  href={business.brand.whatsappUrl}
                  variant="accent"
                  size="md"
                  target="_blank"
                >
                  Message on WhatsApp
                </Button>
              )}

              <Button href={business.brand.emailMailto} variant="secondary" size="md">
                Email {business.brand.email}
              </Button>

              <Button
                href={business.brand.googleMapsUrl}
                variant="secondary"
                size="md"
                target="_blank"
              >
                {business.brand.directionsLabel}
              </Button>
            </div>

            {/* Address & Hours Information */}
            <div
              style={{
                borderTop: '1px solid var(--color-hairline)',
                paddingTop: 'var(--space-24)',
                display: 'flex',
                flexDirection: 'column',
                gap: 'var(--space-16)',
              }}
            >
              <div>
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
                  Service Base & Address
                </span>
                <p style={{ fontSize: '0.92rem', color: 'var(--color-ink)' }}>
                  {business.brand.fullAddress}
                </p>
                <p style={{ fontSize: '0.85rem', color: 'var(--color-ink-subtle)', marginTop: '4px' }}>
                  Coverage: {business.brand.serviceArea}
                </p>
              </div>

              <div>
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
                  Operating Hours
                </span>
                <p style={{ fontSize: '0.92rem', color: 'var(--color-ink)' }}>
                  {business.contact.hours}
                </p>
                <p style={{ fontSize: '0.85rem', color: 'var(--color-secondary)', fontWeight: 500, marginTop: '2px' }}>
                  {business.contact.emergencyHours}
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Styled Usable Contact Form */}
          <div
            style={{
              backgroundColor: 'var(--color-surface)',
              borderRadius: 'var(--radius-lg)',
              border: '1px solid var(--color-hairline)',
              padding: 'var(--space-32)',
              boxShadow: 'var(--shadow-rest)',
            }}
          >
            {submitted ? (
              <div
                style={{
                  padding: 'var(--space-32) var(--space-16)',
                  textAlign: 'center',
                }}
              >
                <div
                  style={{
                    width: '56px',
                    height: '56px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(194, 94, 0, 0.1)',
                    color: 'var(--color-secondary)',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.75rem',
                    marginBottom: 'var(--space-16)',
                  }}
                >
                  ✓
                </div>
                <h3
                  style={{
                    fontSize: '1.4rem',
                    color: 'var(--color-ink)',
                    marginBottom: 'var(--space-8)',
                  }}
                >
                  {business.contact.form.successTitle}
                </h3>
                <p
                  style={{
                    fontSize: '1rem',
                    color: 'var(--color-ink-muted)',
                    marginBottom: 'var(--space-24)',
                    marginInline: 'auto',
                  }}
                >
                  {business.contact.form.successMessage}
                </p>
                <Button onClick={handleReset} variant="secondary" size="md">
                  {business.contact.form.sendAnother}
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(2, 1fr)',
                    gap: 'var(--space-16)',
                    marginBottom: 'var(--space-16)',
                  }}
                  className="form-grid-2"
                >
                  {/* Name field */}
                  <div>
                    <label
                      htmlFor="form-name"
                      style={{
                        display: 'block',
                        fontSize: '0.85rem',
                        fontWeight: 600,
                        color: 'var(--color-ink)',
                        marginBottom: '6px',
                        fontFamily: 'var(--font-heading)',
                      }}
                    >
                      {business.contact.form.nameLabel} *
                    </label>
                    <input
                      id="form-name"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder={business.contact.form.namePlaceholder}
                      required
                      style={{
                        width: '100%',
                        padding: '12px 14px',
                        borderRadius: 'var(--radius-sm)',
                        border: errors.name ? '1px solid #dc2626' : '1px solid var(--color-hairline-strong)',
                        backgroundColor: '#ffffff',
                        fontSize: '0.95rem',
                        color: 'var(--color-ink)',
                      }}
                    />
                    {errors.name && (
                      <span style={{ fontSize: '0.78rem', color: '#dc2626', marginTop: '4px', display: 'block' }}>
                        {errors.name}
                      </span>
                    )}
                  </div>

                  {/* Phone field */}
                  <div>
                    <label
                      htmlFor="form-phone"
                      style={{
                        display: 'block',
                        fontSize: '0.85rem',
                        fontWeight: 600,
                        color: 'var(--color-ink)',
                        marginBottom: '6px',
                        fontFamily: 'var(--font-heading)',
                      }}
                    >
                      {business.contact.form.phoneLabel} *
                    </label>
                    <input
                      id="form-phone"
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder={business.contact.form.phonePlaceholder}
                      required
                      style={{
                        width: '100%',
                        padding: '12px 14px',
                        borderRadius: 'var(--radius-sm)',
                        border: errors.phone ? '1px solid #dc2626' : '1px solid var(--color-hairline-strong)',
                        backgroundColor: '#ffffff',
                        fontSize: '0.95rem',
                        color: 'var(--color-ink)',
                      }}
                    />
                    {errors.phone && (
                      <span style={{ fontSize: '0.78rem', color: '#dc2626', marginTop: '4px', display: 'block' }}>
                        {errors.phone}
                      </span>
                    )}
                  </div>
                </div>

                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(2, 1fr)',
                    gap: 'var(--space-16)',
                    marginBottom: 'var(--space-16)',
                  }}
                  className="form-grid-2"
                >
                  {/* Email field */}
                  <div>
                    <label
                      htmlFor="form-email"
                      style={{
                        display: 'block',
                        fontSize: '0.85rem',
                        fontWeight: 600,
                        color: 'var(--color-ink)',
                        marginBottom: '6px',
                        fontFamily: 'var(--font-heading)',
                      }}
                    >
                      {business.contact.form.emailLabel}
                    </label>
                    <input
                      id="form-email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder={business.contact.form.emailPlaceholder}
                      style={{
                        width: '100%',
                        padding: '12px 14px',
                        borderRadius: 'var(--radius-sm)',
                        border: errors.email ? '1px solid #dc2626' : '1px solid var(--color-hairline-strong)',
                        backgroundColor: '#ffffff',
                        fontSize: '0.95rem',
                        color: 'var(--color-ink)',
                      }}
                    />
                    {errors.email && (
                      <span style={{ fontSize: '0.78rem', color: '#dc2626', marginTop: '4px', display: 'block' }}>
                        {errors.email}
                      </span>
                    )}
                  </div>

                  {/* Service selector */}
                  <div>
                    <label
                      htmlFor="form-service"
                      style={{
                        display: 'block',
                        fontSize: '0.85rem',
                        fontWeight: 600,
                        color: 'var(--color-ink)',
                        marginBottom: '6px',
                        fontFamily: 'var(--font-heading)',
                      }}
                    >
                      {business.contact.form.serviceLabel}
                    </label>
                    <select
                      id="form-service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      style={{
                        width: '100%',
                        padding: '12px 14px',
                        borderRadius: 'var(--radius-sm)',
                        border: '1px solid var(--color-hairline-strong)',
                        backgroundColor: '#ffffff',
                        fontSize: '0.95rem',
                        color: 'var(--color-ink)',
                      }}
                    >
                      {business.services.items.map((svc) => (
                        <option key={svc.id} value={svc.title}>
                          {svc.title}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Message field */}
                <div style={{ marginBottom: 'var(--space-24)' }}>
                  <label
                    htmlFor="form-message"
                    style={{
                      display: 'block',
                      fontSize: '0.85rem',
                      fontWeight: 600,
                      color: 'var(--color-ink)',
                      marginBottom: '6px',
                      fontFamily: 'var(--font-heading)',
                    }}
                  >
                    {business.contact.form.messageLabel}
                  </label>
                  <textarea
                    id="form-message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder={business.contact.form.messagePlaceholder}
                    style={{
                      width: '100%',
                      padding: '12px 14px',
                      borderRadius: 'var(--radius-sm)',
                      border: '1px solid var(--color-hairline-strong)',
                      backgroundColor: '#ffffff',
                      fontSize: '0.95rem',
                      color: 'var(--color-ink)',
                      resize: 'vertical',
                    }}
                  />
                </div>

                <Button type="submit" variant="primary" size="lg" style={{ width: '100%' }}>
                  {business.contact.form.submitLabel}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 960px) {
          .contact-layout {
            grid-template-columns: 1fr !important;
            gap: var(--space-32) !important;
          }
        }
        @media (max-width: 600px) {
          .form-grid-2 {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
