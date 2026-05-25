import { Heading } from '../atoms';
import { ContactForm } from '../molecules';

export function Contact() {
  return (
    <section id="contato" className="py-20 md:py-28 bg-[var(--color-cream)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          <div>
            <Heading as="h2" className="text-3xl sm:text-4xl mb-6">
              Entre em contato
            </Heading>
            <p className="text-gray-600 mb-8">
              Quer saber mais sobre o LAGEQ? Fale com um especialista. Atendemos consultores ambientais, empresas,
              comércios, indústrias e residências com soluções confiáveis e certificadas.
            </p>
            <div className="space-y-4">
              <a href="tel:+5561995842992" className="flex items-center gap-3 text-gray-700 hover:text-[var(--color-primary)]">
                <span className="w-10 h-10 rounded-lg bg-[var(--color-primary)]/10 flex items-center justify-center text-[var(--color-primary)]">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </span>
                (61) 99584-2992 / (61) 99837-0030
              </a>
              <a href="mailto:myller@unb.br" className="flex items-center gap-3 text-gray-700 hover:text-[var(--color-primary)]">
                <span className="w-10 h-10 rounded-lg bg-[var(--color-primary)]/10 flex items-center justify-center text-[var(--color-primary)]">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </span>
                myller@unb.br
              </a>
              <div className="flex items-start gap-3 text-gray-700">
                <span className="w-10 h-10 rounded-lg bg-[var(--color-primary)]/10 flex items-center justify-center text-[var(--color-primary)] flex-shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </span>
                <span>
                  Instituto de Geociências, Universidade de Brasília Campus Universitário Darcy Ribeiro ICC - Ala Central
                  <br />
                  Laboratório de Geoquímica - LAGEQ CSS 402 Subsolo
                  <br />
                  CEP 70.910-900 - Brasília DF
                </span>
              </div>
            </div>
          </div>
          <div className="p-8 rounded-2xl bg-white border border-gray-200/80 shadow-sm">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
