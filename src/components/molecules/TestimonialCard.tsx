type TestimonialCardProps = {
  quote: string;
  author: string;
  role: string;
  logoSrc?: string;
  logoAlt?: string;
};

export function TestimonialCard({
  quote,
  author,
  role,
  logoSrc,
  logoAlt,
}: TestimonialCardProps) {
  return (
    <div className="p-6 rounded-2xl bg-white border border-gray-200/80 shadow-sm h-full">
      <p className="text-gray-700 leading-relaxed mb-5">&ldquo;{quote}&rdquo;</p>
      <div className="mt-auto pt-2 flex items-start gap-3">
        {logoSrc ? (
          <div className="w-12 h-12 rounded-full border border-gray-200 overflow-hidden bg-white flex items-center justify-center shrink-0">
            <img
              src={logoSrc}
              alt={logoAlt || author}
              className="w-full h-full object-cover"
            />
          </div>
        ) : (
          <div className="w-12 h-12 rounded-full bg-primary/10 text-primary-dark text-sm font-semibold flex items-center justify-center shrink-0">
            {author.slice(0, 2).toUpperCase()}
          </div>
        )}
        <div>
          <p className="font-semibold text-primary-dark">{author}</p>
          <p className="text-sm text-gray-500">{role}</p>
        </div>
      </div>
    </div>
  );
}
