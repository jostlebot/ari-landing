/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Warm, grounded palette
        'warm-white': '#FDFCFA',
        'warm-gray': '#F5F3F0',
        'soft-gray': '#E8E4DF',
        'text-primary': '#2D2A26',
        'text-secondary': '#5C5752',
        'accent-warm': '#8B7355',
        'accent-deep': '#4A6741',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-crimson)', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}
