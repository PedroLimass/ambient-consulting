const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || 'https://www.lageq.com.br';

export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}
