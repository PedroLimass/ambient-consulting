export function Heading({ as = "h2", children, className = "", gradient }) {
  const Tag = as;
  const base = "font-display font-bold text-[var(--color-primary-dark)]";
  const gradientClass = gradient
    ? "bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] bg-clip-text text-transparent"
    : "";
  return (
    <Tag className={`${base} ${gradientClass} ${className}`}>{children}</Tag>
  );
}
