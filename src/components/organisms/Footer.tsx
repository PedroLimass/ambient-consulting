import { Logo } from '../atoms';

const links = [
  { href: '#inicio', label: 'Início' },
  { href: '#servicos', label: 'Serviços' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#clientes', label: 'Clientes' },
  { href: '#contato', label: 'Contato' },
];

export function Footer() {
  return (
    <footer className="bg-[var(--color-primary-dark)] text-white py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div>
            <Logo light />
            <p className="mt-4 text-white/80 text-sm max-w-xs">Laboratório de Geoquímica. Análises, licenciamento e consultoria em meio ambiente.</p>
          </div>
          <nav className="flex flex-wrap gap-4">
            {links.map((item) => (
              <a key={item.href} href={item.href} className="text-white/80 hover:text-white text-sm font-medium">{item.label}</a>
            ))}
          </nav>
        </div>
        <div className="mt-12 pt-8 border-t border-white/20 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <p className="text-white/60 text-sm">© {new Date().getFullYear()} LAGEQ - Laboratório de Geoquímica. Todos os direitos reservados.</p>
          {/* WhatsApp temporariamente desabilitado — reativar no futuro
          <a href="https://wa.me/5561995842992" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-white/80 hover:text-white text-sm">
            Fale pelo WhatsApp
          </a>
          */}
        </div>
      </div>
    </footer>
  );
}
