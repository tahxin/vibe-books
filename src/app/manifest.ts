import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  const appName = process.env.NEXT_PUBLIC_APP_NAME || 'Book Vibe';
  const appDesc =
    process.env.NEXT_PUBLIC_APP_DESCRIPTION ||
    'Discover, curate, and track your favorite books effortlessly.';

  return {
    name: appName,
    short_name: appName,
    description: appDesc,
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#23BE0A',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  };
}
