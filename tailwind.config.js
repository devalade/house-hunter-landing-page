/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    extend: {
      'content': ['Lexend'],
      colors: {
        white: "#FFF",
        neutral: "#F0F3FD",
        blurColor: "#82FFD2",
        brandGreen: {
          "100": "#D1FAE5",
          "500": "#10B981",
          "700": "#047857",
        },
        brandBlue: {
          "100": "626687",
          "700": "#1B1C57"
        },
        brandGray: {
          "500": "#888B97"
        },
        brandYellow: {
          "500": "#F59E0B"
        }
      },
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
      },
    },
  },
  plugins: [],
}
