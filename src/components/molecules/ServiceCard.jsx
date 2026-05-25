import { Heading } from "../atoms";

export function ServiceCard({ icon, title, description, href = "#" }) {
  return (
    <a
      href={href}
      className="group block p-6 rounded-2xl bg-white border border-gray-200/80 shadow-sm hover:shadow-xl hover:border-[var(--color-primary)]/30 transition-all duration-300"
    >
      <div className="w-12 h-12 rounded-xl bg-[var(--color-primary)]/10 text-[var(--color-primary)] flex items-center justify-center mb-4 group-hover:bg-[var(--color-primary)] group-hover:text-white transition-colors">
        {icon}
      </div>
      <Heading
        as="h3"
        className="text-lg mb-2 group-hover:text-[var(--color-primary)] transition-colors"
      >
        {title}
      </Heading>
      <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
      <span className="inline-flex items-center gap-1 mt-3 text-sm font-medium text-[var(--color-primary)] group-hover:gap-2 transition-all">
        Saiba mais →
      </span>
    </a>
  );
}
