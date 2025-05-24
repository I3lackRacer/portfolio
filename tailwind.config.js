/** @type {import('tailwindcss').Config} */
module.exports = {
  // ... other config
  theme: {
    extend: {
      keyframes: {
        'scale-up': {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        }
      },
      animation: {
        'scale-up': 'scale-up 0.2s ease-out',
      }
    }
  }
} 