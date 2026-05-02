export default {
  darkMode: "media", // uses system dark mode automatically
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        // Fade in
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        // Slide du bas
        slideUp: {
          '0%':   { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        // Slide de la droite
        slideInRight: {
          '0%':   { opacity: '0', transform: 'translateX(40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        // Scale
        scaleIn: {
          '0%':   { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        // Shake
        shake: {
          '0%, 100%': { transform: 'translateX(0)' },
          '20%':      { transform: 'translateX(-8px)' },
          '40%':      { transform: 'translateX(8px)' },
          '60%':      { transform: 'translateX(-4px)' },
          '80%':      { transform: 'translateX(4px)' },
        },
        // Flip
        flipIn: {
          '0%':   { opacity: '0', transform: 'rotateX(-90deg)' },
          '100%': { opacity: '1', transform: 'rotateX(0)' },
        },
      },
      animation: {
        'fade-in':       'fadeIn 0.3s ease-out',
        'slide-up':      'slideUp 0.4s ease-out',
        'slide-in-right':'slideInRight 0.3s ease-out',
        'scale-in':      'scaleIn 0.2s ease-out',
        'shake':         'shake 0.5s ease-in-out',
        'flip-in':       'flipIn 0.4s ease-out',

        // Avec délai
        'fade-in-slow':  'fadeIn 0.6s ease-out 0.2s both',
        'slide-up-delay':'slideUp 0.4s ease-out 0.1s both',
      }, 
    },
  },
  plugins: [],
};
