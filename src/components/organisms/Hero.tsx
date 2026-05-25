import { Heading } from '../atoms';

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: "url('/landScape.jpg')" }}
    >
      <div className="absolute inset-0 bg-[var(--color-primary-dark)]/65" />
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary)]/35 via-[var(--color-primary-dark)]/20 to-[var(--color-accent)]/35" />
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="max-w-2xl">
          <p className="text-[var(--color-sand)] font-semibold mb-4">LAGEQ — Laboratório de Geoquímica</p>
          <Heading as="h1" className="text-4xl sm:text-5xl md:text-6xl leading-tight mb-6 font-display text-white">
            Soluções ambientais com base científica para empreendimentos responsáveis
          </Heading>
          <p className="text-lg text-white/85 mb-8 leading-relaxed">
            Tradição, qualidade e tecnologia. Análises agrícolas e ambientais, licenciamento, consultoria em mineração e gestão ambiental.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#contato">
              <span className="inline-flex items-center justify-center rounded-lg px-8 py-4 text-lg font-semibold bg-white text-[#083d21] hover:bg-white/90 transition-colors shadow-lg shadow-black/20">
                Fale conosco
              </span>
            </a>
            <a href="#servicos">
              <span className="inline-flex items-center justify-center rounded-lg px-8 py-4 text-lg font-semibold border-2 border-white text-white hover:bg-white/15 transition-colors">
                Nossos serviços
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
