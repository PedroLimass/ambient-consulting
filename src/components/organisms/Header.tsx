'use client';

import { useState } from 'react';
import { Logo } from '../atoms';
import { NavLink } from '../molecules';

const navItems = [
  { href: '#inicio', label: 'Início' },
  { href: '#servicos', label: 'Serviços' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#clientes', label: 'Clientes' },
  { href: '#contato', label: 'Contato' },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[var(--color-cream)]/95 backdrop-blur border-b border-gray-200/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a href="#inicio" className="flex-shrink-0">
            <Logo />
          </a>
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <NavLink key={item.href} href={item.href}>{item.label}</NavLink>
            ))}
          </nav>
          {/* WhatsApp temporariamente desabilitado — reativar no futuro
          <div className="hidden md:flex items-center gap-3">
            <a href="https://wa.me/5561995842992" target="_blank" rel="noreferrer">
              <Button variant="primary" size="sm">WhatsApp</Button>
            </a>
          </div>
          */}
          <button
            type="button"
            className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {open ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>
        {open && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col gap-1">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className="px-3 py-2 rounded-lg text-gray-700 hover:bg-[var(--color-primary)]/5" onClick={() => setOpen(false)}>{item.label}</a>
              ))}
              {/* WhatsApp temporariamente desabilitado — reativar no futuro
              <a href="https://wa.me/5561995842992" target="_blank" rel="noreferrer" className="mt-2" onClick={() => setOpen(false)}>
                <Button variant="primary" size="md" className="w-full">WhatsApp</Button>
              </a>
              */}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
