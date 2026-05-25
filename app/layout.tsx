import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import '../src/index.css';

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || 'https://www.lageq.com.br';

const ogImage = {
  url: '/og-image.jpg',
  secureUrl: '/og-image.jpg',
  width: 1200,
  height: 630,
  alt: 'LAGEQ - Laboratório de Geoquímica e Qualidade Ambiental',
  type: 'image/jpeg',
};

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
    images: [ogImage],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LAGEQ - Laboratório de Geoquímica e Qualidade Ambiental',
    description:
      'Soluções ambientais com rigor científico, análises laboratoriais e suporte técnico para monitoramento, licenciamento e tomada de decisão.',
    images: [ogImage.url],
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
