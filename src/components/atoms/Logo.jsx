export function Logo({ className = "", compact = false, light = false }) {
  const textClass = light
    ? "font-display font-bold text-2xl sm:text-3xl text-white"
    : "font-display font-bold text-2xl sm:text-3xl text-[var(--color-primary-dark)]";
  const accentClass = light
    ? "text-[var(--color-sand)]"
    : "text-[var(--color-accent)]";
  const subtitleClass = `font-normal text-sm leading-tight ${light ? "text-white/80" : "text-gray-600"}`;
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-[var(--color-primary)] flex items-center justify-center shadow-lg flex-shrink-0">
        <img src="/logo-lageq.svg" alt="Logo" className="w-6 h-6 sm:w-7 sm:h-7" />
      </div>
      {!compact && (
        <div className="flex flex-col items-start justify-center gap-0.5">
          <span className={`${textClass} leading-tight`}>
            LA<span className={accentClass}>GEQ</span>
          </span>
          <span className={`${subtitleClass} hidden sm:block`}>
            Laboratório de Geoquímica
          </span>
        </div>
      )}
    </div>
  );
}
