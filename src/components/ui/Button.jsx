import React from 'react';

/**
 * Universal Button component complying with spatial math:
 * - horizontal padding ~ 2x vertical padding
 * - single-line label with whitespace-nowrap
 * - clean hover elevation / tone shift
 */
export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  type = 'button',
  className = '',
  disabled = false,
  target,
  rel,
  ...props
}) {
  const baseStyles = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    fontFamily: 'var(--font-heading)',
    fontWeight: 600,
    textDecoration: 'none',
    whiteSpace: 'nowrap',
    borderRadius: 'var(--radius-sm)',
    transition: 'all var(--transition-speed)',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.6 : 1,
    lineHeight: 1,
    letterSpacing: '-0.01em',
  };

  const sizes = {
    sm: {
      padding: '10px 18px',
      fontSize: '0.85rem',
    },
    md: {
      padding: '13px 26px',
      fontSize: '0.95rem',
    },
    lg: {
      padding: '16px 32px',
      fontSize: '1.05rem',
    },
  };

  const variants = {
    primary: {
      backgroundColor: 'var(--color-primary)',
      color: '#ffffff',
      border: '1px solid var(--color-primary)',
      boxShadow: 'var(--shadow-rest)',
    },
    accent: {
      backgroundColor: 'var(--color-secondary)',
      color: '#ffffff',
      border: '1px solid var(--color-secondary)',
      boxShadow: 'var(--shadow-rest)',
    },
    secondary: {
      backgroundColor: '#ffffff',
      color: 'var(--color-ink)',
      border: '1px solid var(--color-hairline-strong)',
      boxShadow: 'var(--shadow-rest)',
    },
    outline: {
      backgroundColor: 'transparent',
      color: '#ffffff',
      border: '1px solid rgba(255, 255, 255, 0.4)',
    },
    ghost: {
      backgroundColor: 'transparent',
      color: 'var(--color-ink)',
      border: '1px solid transparent',
    },
  };

  const currentSize = sizes[size] || sizes.md;
  const currentVariant = variants[variant] || variants.primary;

  const combinedStyles = {
    ...baseStyles,
    ...currentSize,
    ...currentVariant,
  };

  const handleMouseEnter = (e) => {
    if (disabled) return;
    if (variant === 'primary') {
      e.currentTarget.style.backgroundColor = 'var(--color-primary-hover)';
      e.currentTarget.style.transform = 'translateY(-1px)';
      e.currentTarget.style.boxShadow = 'var(--shadow-hover)';
    } else if (variant === 'accent') {
      e.currentTarget.style.backgroundColor = 'var(--color-secondary-hover)';
      e.currentTarget.style.transform = 'translateY(-1px)';
      e.currentTarget.style.boxShadow = 'var(--shadow-hover)';
    } else if (variant === 'secondary') {
      e.currentTarget.style.backgroundColor = 'var(--color-surface-alt)';
      e.currentTarget.style.borderColor = 'var(--color-ink)';
      e.currentTarget.style.transform = 'translateY(-1px)';
      e.currentTarget.style.boxShadow = 'var(--shadow-hover)';
    } else if (variant === 'outline') {
      e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.12)';
      e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.9)';
    } else if (variant === 'ghost') {
      e.currentTarget.style.backgroundColor = 'var(--color-hairline)';
    }
  };

  const handleMouseLeave = (e) => {
    if (disabled) return;
    e.currentTarget.style.transform = 'translateY(0)';
    if (variant === 'primary') {
      e.currentTarget.style.backgroundColor = 'var(--color-primary)';
      e.currentTarget.style.boxShadow = 'var(--shadow-rest)';
    } else if (variant === 'accent') {
      e.currentTarget.style.backgroundColor = 'var(--color-secondary)';
      e.currentTarget.style.boxShadow = 'var(--shadow-rest)';
    } else if (variant === 'secondary') {
      e.currentTarget.style.backgroundColor = '#ffffff';
      e.currentTarget.style.borderColor = 'var(--color-hairline-strong)';
      e.currentTarget.style.boxShadow = 'var(--shadow-rest)';
    } else if (variant === 'outline') {
      e.currentTarget.style.backgroundColor = 'transparent';
      e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.4)';
    } else if (variant === 'ghost') {
      e.currentTarget.style.backgroundColor = 'transparent';
    }
  };

  if (href) {
    return (
      <a
        href={href}
        style={combinedStyles}
        className={className}
        target={target}
        rel={rel || (target === '_blank' ? 'noopener noreferrer' : undefined)}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      style={combinedStyles}
      className={className}
      onClick={onClick}
      disabled={disabled}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      {children}
    </button>
  );
}
