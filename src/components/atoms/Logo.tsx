type LogoProps = {
  className?: string;
  compact?: boolean;
  light?: boolean;
};

export function Logo({ className = '', light = false }: LogoProps) {
  const img = (
    <img
      src="/logo-lageq.png"
      alt="LAGEQ - Laboratório de Geoquímica e Qualidade Ambiental"
      className={`h-14 sm:h-16 w-auto ${className}`}
    />
  );

  if (light) {
    return (
      <span className="inline-flex items-center rounded-xl bg-white px-4 py-2 shadow-sm">
        {img}
      </span>
    );
  }

  return img;
}
