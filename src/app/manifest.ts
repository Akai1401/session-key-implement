export default function manifest() {
  return {
    name: 'Nextjs Base Resource',
    short_name: 'Nextjs Base',
    description: 'Nextjs Base Resource',
    start_url: '/',
    display: 'standalone',
    background_color: '#fff',
    theme_color: '#fff',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  };
}
