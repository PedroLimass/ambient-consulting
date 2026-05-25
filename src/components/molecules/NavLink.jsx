export function NavLink({ href, children, active }) {
  return (
    <a
      href={href}
      className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
        active
          ? "text-[var(--color-primary)] bg-[var(--color-primary)]/10"
          : "text-gray-700 hover:text-[var(--color-primary)] hover:bg-[var(--color-primary)]/5"
      }`}
    >
      {children}
    </a>
  );
}
