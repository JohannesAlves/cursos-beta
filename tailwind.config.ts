import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/templates/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  screens: {
    '4xl': { max: '2000px' },
    // => @media (max-width: 2000px) { ... }
    '3xl': { max: '1850px' },
    // => @media (max-width: 1850px) { ... }
    '2xl': { max: '1535px' },
    // => @media (max-width: 1535px) { ... }
    xl: { max: '1281px' },
    // => @media (max-width: 1279px) { ... }
    lg: { max: '1024px' },
    // => @media (max-width: 1024px) { ... }
    md: { max: '767px' },
    // => @media (max-width: 767px) { ... }
    sm: { max: '639px' },
    // => @media (max-width: 639px) { ... }
    smx: { max: '460px' },
    // => @media (max-width: 460px) { ... }
  },
  plugins: [],
};
export default config;
