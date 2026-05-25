'use client';

import { Button, Input } from '../atoms';

export function ContactForm() {
  return (
    <form className="grid gap-4 sm:grid-cols-2" onSubmit={(e) => e.preventDefault()}>
      <div className="sm:col-span-2">
        <Input label="Nome *" placeholder="Seu nome" required />
      </div>
      <Input label="E-mail *" type="email" placeholder="seu@email.com" required />
      <Input label="Telefone" type="tel" placeholder="(61) 99999-9999" />
      <div className="sm:col-span-2">
        <Input label="Empresa" placeholder="Sua empresa" />
      </div>
      <div className="sm:col-span-2">
        <label className="block text-sm font-medium text-gray-700 mb-1">Mensagem *</label>
        <textarea
          className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white focus:ring-2 focus:ring-[var(--color-primary)] focus:border-[var(--color-primary)] outline-none transition resize-none"
          rows={4}
          placeholder="Como podemos ajudar?"
          required
        />
      </div>
      <div className="sm:col-span-2">
        <Button type="submit" size="lg" className="w-full sm:w-auto">
          Enviar mensagem
        </Button>
      </div>
    </form>
  );
}
