import type { ElementType, ReactNode } from 'react';

type HeadingProps = {
  as?: ElementType;
  children: ReactNode;
  className?: string;
  gradient?: boolean;
};

export function Heading({
  as = 'h2',
  children,
  className = '',
  gradient,
}: HeadingProps) {
  const Tag = as;
  const base = 'font-display font-bold text-[var(--color-primary-dark)]';
  const gradientClass = gradient
    ? 'bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] bg-clip-text text-transparent'
    : '';

  return <Tag className={`${base} ${gradientClass} ${className}`}>{children}</Tag>;
}
