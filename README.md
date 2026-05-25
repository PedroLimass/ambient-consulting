# LAGEQ — Laboratório de Geoquímica

Site institucional do **LAGEQ** (Laboratório de Geoquímica e Qualidade Ambiental). Inspirado em [Soloquímica](https://www.soloquimica.com.br), [Norden Consultoria](https://www.nordenconsultoria.com) e [Ambientare](https://ambientare.com.br). Foco em análises agrícolas e ambientais, licenciamento e consultoria em mineração e meio ambiente.

## Stack

- **Next.js 15** (App Router)
- **React 19**
- **TypeScript 6**
- **Tailwind CSS 4**
- **Atomic Design**: `atoms` → `molecules` → `organisms` → `templates` → `views`

## Estrutura

```
app/
├── layout.tsx        # Layout raiz + metadata (SEO/OG/Twitter)
├── page.tsx          # Home (renderiza src/views/HomePage)
├── robots.ts         # robots.txt dinâmico
└── sitemap.ts        # sitemap.xml dinâmico

src/
├── components/
│   ├── atoms/        # Button, Logo, Input, Heading
│   ├── molecules/    # NavLink, ServiceCard, TestimonialCard, ContactForm
│   ├── organisms/    # Header, Hero, Services, About, Testimonials, Contact, Footer
│   └── templates/    # MainLayout
├── views/            # HomePage
├── globals.d.ts      # Declarações de tipos globais
└── index.css         # Tema Tailwind (cores LAGEQ, fontes Outfit/DM Sans)

public/               # Logos e imagens estáticas (servidas em /)
```

> Caminhos absolutos: o alias `@/*` aponta para `src/*` (configurado em `tsconfig.json`).

## Como rodar

```bash
npm install
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000).

Build de produção:

```bash
npm run build
npm start
```

## Scripts

| Comando            | Descrição                              |
| ------------------ | -------------------------------------- |
| `npm run dev`      | Sobe o servidor Next em modo dev       |
| `npm run build`    | Gera build de produção (.next)         |
| `npm run start`    | Roda o build de produção               |
| `npm run preview`  | Alias para `next start`                |
| `npm run lint`     | Roda o ESLint                          |

## Variáveis de ambiente

| Variável                | Padrão                      | Descrição                                        |
| ----------------------- | --------------------------- | ------------------------------------------------ |
| `NEXT_PUBLIC_SITE_URL`  | `https://www.lageq.com.br`  | URL canônica usada em metadata, sitemap e robots |
