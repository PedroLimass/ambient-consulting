# LAGEQ — Laboratório de Geoquímica

Site institucional do **LAGEQ** (Laboratório de Geoquímica). Inspirado em [Soloquímica](https://www.soloquimica.com.br), [Norden Consultoria](https://www.nordenconsultoria.com) e [Ambientare](https://ambientare.com.br). Foco em análises agrícolas e ambientais, licenciamento e consultoria em mineração e meio ambiente.

## Stack

- **React 19** + **Vite 7**
- **Tailwind CSS 4**
- **Atomic Design**: `atoms` → `molecules` → `organisms` → `templates` → `pages`

## Estrutura

```
src/
├── components/a
│   ├── atoms/       # Button, Logo, Input, Heading
│   ├── molecules/   # NavLink, ServiceCard, TestimonialCard, ContactForm
│   ├── organisms/   # Header, Hero, Services, About, Testimonials, Contact, Footer
│   └── templates/   # MainLayout
├── pages/           # HomePage
├── App.jsx
├── main.jsx
└── index.css
```

## Como rodar

```bash
npm install
npm run dev
```

Build:

```bash
npm run build
npm run preview
```

## Scripts

| Comando    | Descrição                |
|-----------|---------------------------|
| `npm run dev`    | Sobe o servidor de desenvolvimento |
| `npm run build`  | Gera build de produção    |
| `npm run preview`| Preview do build          |
| `npm run lint`   | Roda o ESLint             |
