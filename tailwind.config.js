export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#325BAA',
        accent: '#EA6624',
        bg: '#FAFAFA',
        surface: '#F0F4FB',
        text: '#1A1A2E',
        muted: '#6B7280',
        border: '#E2E8F0',
        dark: '#0D2A5E',
      },
      boxShadow: {
        soft: '0 24px 60px rgba(15, 23, 42, 0.08)',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'hero-dots': "radial-gradient(circle at top left, rgba(50, 91, 170, 0.14), transparent 24%), radial-gradient(circle at bottom right, rgba(234, 102, 36, 0.12), transparent 20%)",
      },
    },
  },
  plugins: [],
}
