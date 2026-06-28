'use client';

import { useState, type FormEvent } from 'react';
import { Button, Input } from '../atoms';

const CONTACT_EMAIL = 'lageq@unb.br';

export function ContactForm() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [empresa, setEmpresa] = useState('');
  const [mensagem, setMensagem] = useState('');

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const body = [
      `Nome: ${nome}`,
      `E-mail: ${email}`,
      telefone && `Telefone: ${telefone}`,
      empresa && `Empresa: ${empresa}`,
      '',
      mensagem,
    ]
      .filter(Boolean)
      .join('\n');

    const subject = `Contato via site${nome ? ` - ${nome}` : ''}`;
    const mailto = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;
  }

  return (
    <form className="grid gap-4 sm:grid-cols-2" onSubmit={handleSubmit}>
      <div className="sm:col-span-2">
        <Input
          label="Nome *"
          placeholder="Seu nome"
          required
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
      </div>
      <Input
        label="E-mail *"
        type="email"
        placeholder="seu@email.com"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        label="Telefone"
        type="tel"
        placeholder="(61) 99999-9999"
        value={telefone}
        onChange={(e) => setTelefone(e.target.value)}
      />
      <div className="sm:col-span-2">
        <Input
          label="Empresa"
          placeholder="Sua empresa"
          value={empresa}
          onChange={(e) => setEmpresa(e.target.value)}
        />
      </div>
      <div className="sm:col-span-2">
        <label className="block text-sm font-medium text-gray-700 mb-1">Mensagem *</label>
        <textarea
          className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white focus:ring-2 focus:ring-[var(--color-primary)] focus:border-[var(--color-primary)] outline-none transition resize-none"
          rows={4}
          placeholder="Como podemos ajudar?"
          required
          value={mensagem}
          onChange={(e) => setMensagem(e.target.value)}
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
