import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import '../src/index.css';

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || 'https://www.lageq.com.br';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'LAGEQ - Laboratório de Geoquímica e Qualidade Ambiental',
    template: '%s | LAGEQ',
  },
  description:
    'Soluções ambientais com rigor científico, análises laboratoriais e suporte técnico para monitoramento, licenciamento e tomada de decisão.',
  keywords: [
    'LAGEQ',
    'geoquímica',
    'qualidade ambiental',
    'análises laboratoriais',
    'monitoramento ambiental',
    'licenciamento ambiental',
    'análise de solo',
    'análise de água',
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: '/',
    siteName: 'LAGEQ',
    title: 'LAGEQ - Laboratório de Geoquímica e Qualidade Ambiental',
    description:
      'Soluções ambientais com rigor científico, análises laboratoriais e suporte técnico para monitoramento, licenciamento e tomada de decisão.',
    images: [
      {
        url: '/landScape.jpg',
        width: 1200,
        height: 630,
        alt: 'Paisagem representando atuação ambiental e científica do LAGEQ',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LAGEQ - Laboratório de Geoquímica e Qualidade Ambiental',
    description:
      'Soluções ambientais com rigor científico, análises laboratoriais e suporte técnico para monitoramento, licenciamento e tomada de decisão.',
    images: ['/landScape.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
