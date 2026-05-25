import { Heading, Button } from '../atoms';

export function About() {
  return (
    <section id="sobre" className="py-20 md:py-28 bg-[var(--color-cream)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <Heading as="h2" className="text-3xl sm:text-4xl mb-6">Saiba mais sobre o LAGEQ</Heading>
            <p className="text-gray-600 leading-relaxed mb-4">
              O <strong>LAGEQ - Laboratório de Geoquímica e Qualidade Ambiental</strong> atua com foco em rigor científico, confiabilidade técnica e aplicação prática, apoiando projetos que exigem análises ambientais e interpretações qualificadas do meio físico.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Nossa atuação segue boas práticas técnicas e as normas ambientais vigentes, oferecendo suporte consistente para processos de licenciamento, monitoramento e tomada de decisão.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Contamos com uma equipe de formação acadêmica avançada e parcerias com instituições de pesquisa, garantindo atualização contínua de métodos e qualidade técnica em todas as etapas.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              Trabalhamos com transparência, responsabilidade ambiental e atendimento personalizado, contribuindo para soluções seguras, eficientes e sustentáveis.
            </p>
            <a href="#contato"><Button variant="outline">Fale com um especialista</Button></a>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { value: '+45', label: 'Anos de atuação' },
              { value: '+300', label: 'Projetos minerários' },
              { value: '+200', label: 'Projetos ambientais' },
              { value: '100%', label: 'Laudos em conformidade' },
            ].map((stat) => (
              <div key={stat.label} className="p-6 rounded-2xl bg-white border border-gray-200/80 shadow-sm">
                <p className="text-2xl md:text-3xl font-display font-bold text-[var(--color-primary)]">{stat.value}</p>
                <p className="text-sm text-gray-600 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
