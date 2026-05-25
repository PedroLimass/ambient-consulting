import { Heading } from '../atoms';
import { ServiceCard } from '../molecules';

const IconFlask = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
  </svg>
);

const IconShield = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>
);

const IconGlobe = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
  </svg>
);

const IconBeaker = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
  </svg>
);

const IconMap = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0h.5a2.5 2.5 0 002.5-2.5V3.935M12 12a2 2 0 104 0 2 2 0 00-4 0z" />
  </svg>
);

const services = [
  { title: 'Análise de Solo', description: 'Fertilidade, macro e micronutrientes, física e química. Laudos alinhados à Embrapa com interpretação e gráficos.', icon: <IconFlask /> },
  { title: 'Análise de Água', description: 'Potabilidade, irrigação, efluentes. Atendemos poços, cisternas, indústrias e conforme portarias vigentes.', icon: <IconFlask /> },
  { title: 'Licenciamento Ambiental', description: 'Da prospecção à operação. Estudos de viabilidade, EIA/RIMA, gestão de processos junto a órgãos ambientais.', icon: <IconShield /> },
  { title: 'Consultoria em Mineração', description: 'Prospecção, pesquisa, avaliação e exploração. Gestão de processos na ANM e coordenação de projetos minerários.', icon: <IconGlobe /> },
  { title: 'Bromatológica e Rações', description: 'Análise sedimentológica de solo, sedimento e material particulado por granulometria a laser', icon: <IconBeaker /> },
  { title: 'Programas Ambientais', description: 'Monitoramento, recuperação de áreas, educação ambiental. Soluções para implantação e operação de projetos.', icon: <IconMap /> },
];

export function Services() {
  return (
    <section id="servicos" className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <Heading as="h2" className="text-3xl sm:text-4xl mb-4">O que oferecemos</Heading>
          <p className="text-gray-600 text-lg">Análises certificadas, licenciamento e consultoria para agricultura, mineração e meio ambiente.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => <ServiceCard key={s.title} {...s} />)}
        </div>
      </div>
    </section>
  );
}
