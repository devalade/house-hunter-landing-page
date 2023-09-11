/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      white: '#FFF',
      black: '#000',
      transparent: '#FFFFFF00',
      neutral: {
        DEFAULT: '#F0F3FD',
        200: '#F0F3FD',
        300: '#E0E3EB',
        500: '#888B97',
        700: '#3C4563',
      },
      red: {
        100: '#FEE2E2',
        500: '#EF4444',
      },
      brandGreen: {
        100: '#D1FAE5',
        500: '#10B981',
        700: '#047857',
      },
      brandBlue: {
        100: '#626687',
        700: '#1B1C57',
      },
      brandYellow: {
        500: '#F59E0B',
      },
    },
    extend: {
      content: ['Lexend'],

      animation: {
        reveal: 'reveal 0.8s forwards',
      },
      keyframes: {
        reveal: {
          '0%': {
            transform: 'translatey(100%)',
          },
          '100%': {
            transform: 'translatey(0)',
          },
        },
        slideDownAndFade: {
          from: { opacity: 0, transform: 'translateY(-2px)' },
          to: { opacity: 1, transform: 'translateY(0)' },
        },
        slideLeftAndFade: {
          from: { opacity: 0, transform: 'translateX(2px)' },
          to: { opacity: 1, transform: 'translateX(0)' },
        },
        slideUpAndFade: {
          from: { opacity: 0, transform: 'translateY(2px)' },
          to: { opacity: 1, transform: 'translateY(0)' },
        },
        slideRightAndFade: {
          from: { opacity: 0, transform: 'translateX(-2px)' },
          to: { opacity: 1, transform: 'translateX(0)' },
        },
      },

      animation: {
        slideDownAndFade:
          'slideDownAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
        slideLeftAndFade:
          'slideLeftAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
        slideUpAndFade: 'slideUpAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
        slideRightAndFade:
          'slideRightAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
};
