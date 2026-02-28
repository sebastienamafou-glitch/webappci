import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Web App CI | Agence Premium',
    short_name: 'WebAppCI',
    description: 'Expertise en développement Web App et Mobile en Côte d’Ivoire.',
    start_url: '/',
    display: 'standalone',
    background_color: '#030712',
    theme_color: '#14b8a6',
    icons: [
      {
        src: '/favicon.png',
        sizes: 'any',
        type: 'image/x-icon',
      },
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}
