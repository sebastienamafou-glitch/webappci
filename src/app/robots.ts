import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/'], // Bloque l'indexation de tes routes API
    },
    sitemap: 'https://www.webappci.com/sitemap.xml',
  };
}
