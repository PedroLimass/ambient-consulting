import { Heading } from '../atoms';
import { TestimonialCard } from '../molecules';

const testimonials = [
  {
    author: 'TORCAL',
    role: 'Comércio de Produtos Profissionais e Serviços Ltda.',
    logoSrc: '/torcal-logo.jpeg',
    logoAlt: 'Logo da TORCAL',
    quote:
      'Iniciamos a parceria com o LAGEQ com o objetivo de realizar análises laboratoriais para o monitoramento da qualidade da água em nossos sistemas de tratamento, garantindo conformidade com os padrões regulatórios e a segurança operacional. Atualmente, realizamos cerca de 10 análises mensais, além de análises adicionais sob demanda. Ao longo desse período, o atendimento tem sido conduzido de forma profissional e eficiente, com boa comunicação e suporte técnico sempre disponível para esclarecimento de dúvidas. As análises são entregues dentro dos prazos e com clareza nas informações apresentadas. Os resultados têm contribuído diretamente para nossa tomada de decisão, permitindo maior controle sobre a qualidade da água tratada e maior confiabilidade nos processos adotados.',
  },
  {
    author: 'H2O',
    role: 'Caixas d’Água e Reservatórios',
    logoSrc: '/h20-logo.jpeg',
    logoAlt: 'Logo da H2O',
    quote:
      'Trabalhamos com o LAGEQ há alguns anos e, ao longo desse período, mantivemos uma experiência consistentemente positiva. A parceria teve início a partir de demandas por análises laboratoriais, e desde então o atendimento tem sido conduzido com qualidade e profissionalismo. Um dos pontos que mais se destacam é a disponibilidade da equipe, que está sempre acessível para prestar suporte técnico e esclarecer dúvidas. Esse acompanhamento faz diferença no dia a dia e contribui para maior segurança na condução das atividades.',
  },
  {
    author: 'Rural Tech',
    role: 'Geotecnologia e Levantamentos',
    logoSrc: '/rural-teach-small.png',
    logoAlt: 'Logo da Rural Tech Brasília',
    quote:
      'O atendimento do LAGEQ se destaca pela agilidade e pela qualidade do suporte ao longo das análises. Os retornos são sempre rápidos e assertivos, o que facilita o acompanhamento das demandas no dia a dia. Os resultados entregues são confiáveis e dentro de prazos adequados, contribuindo para maior segurança na utilização dos dados.',
  },
];

export function Testimonials() {
  return (
    <section id="clientes" className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <Heading as="h2" className="text-3xl sm:text-4xl mb-4">O que dizem nossos clientes</Heading>
          <p className="text-gray-600 text-lg">Confiança conquistada com qualidade técnica, rigor científico e compromisso.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 items-stretch">
          {testimonials.map((t) => <TestimonialCard key={t.author} {...t} />)}
        </div>
      </div>
    </section>
  );
}
