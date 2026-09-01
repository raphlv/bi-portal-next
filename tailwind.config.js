/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bi: {
          'blue-950': '#001428',
          'blue-900': '#001D38',
          'blue-850': '#002642',
          'blue-800': '#002B49',
          'blue-700': '#003F87', // Official Primary BI Blue
          'blue-600': '#0054A6',
          'blue-500': '#0072CE', // Active Dynamic Blue
          'blue-400': '#3894E6',
          'blue-200': '#BAE0FD',
          'blue-100': '#E5F1FC',
          'blue-50': '#F0F6FC',
          'gold-700': '#8E6D27',
          'gold-600': '#A68037',
          'gold-500': '#C5A059', // Official Gold Accent
          'gold-400': '#D8B365',
          'gold-300': '#E7CB8E',
          'gold-100': '#F9F4E8',
          'gold-50': '#FDFBF5',
          'slate-bg': '#F4F6F9',
          'card': '#FFFFFF',
          'text-dark': '#0F172A',
          'text-muted': '#475569',
          'text-light': '#94A3B8',
          'emerald': '#059669',
          'rose': '#E11D48',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'sans-serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
      },
      boxShadow: {
        'bi-sm': '0 1px 3px rgba(0, 43, 73, 0.08), 0 1px 2px rgba(0, 43, 73, 0.04)',
        'bi-md': '0 4px 14px -2px rgba(0, 43, 73, 0.08), 0 2px 6px -1px rgba(0, 43, 73, 0.04)',
        'bi-lg': '0 12px 24px -4px rgba(0, 43, 73, 0.12), 0 4px 8px -2px rgba(0, 43, 73, 0.04)',
        'bi-glow': '0 0 20px rgba(0, 114, 206, 0.25)',
        'bi-gold-glow': '0 0 20px rgba(197, 160, 89, 0.3)',
      },
      backgroundImage: {
        'gradient-bi-hero': 'linear-gradient(135deg, #001D38 0%, #002B49 50%, #003F87 100%)',
        'gradient-bi-card': 'linear-gradient(180deg, #FFFFFF 0%, #F8FAFC 100%)',
        'gradient-bi-gold': 'linear-gradient(135deg, #C5A059 0%, #E7CB8E 50%, #A68037 100%)',
        'gradient-bi-badge': 'linear-gradient(135deg, #E5F1FC 0%, #F0F6FC 100%)',
      }
    },
  },
  plugins: [],
};
