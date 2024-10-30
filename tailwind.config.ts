import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      backgroundColor: {
        'layer-primary': '#000',
      },
      color: {
        primary: '#000',
      },
      fontFamily: {
        montserrat: ['var(--font-montserrat)'],
      },
    },
  },
  plugins: [],
};
export default config;
