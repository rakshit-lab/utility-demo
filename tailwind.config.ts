import type { Config } from 'tailwindcss'

export default {
  // 1. Path to all components so Tailwind knows which classes to generate
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // 2. COLORS: Mapping your 'brand' utilities
      colors: {
        brand: {
          // Deep blue for primary actions
          primary: '#2563eb', 
          // Darker blue for hover states
          secondary: '#1d4ed8',
        },
        // Slate is great for the 'Module' text and borders in your image
        slate: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          700: '#334155',
          900: '#0f172a',
        }
      },
      // 3. SPACING & SHADOWS: Fine-tuning the "Premium" look
      boxShadow: {
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)',
        'card-hover': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      },
      // 4. BORDER RADIUS: Matches the smooth corners in your dashboard
      borderRadius: {
        'xl': '0.75rem',
        '2xl': '1rem',
      },
      // 5. ANIMATION: Ensuring the hover effects feel "snappy"
      transitionDuration: {
        '200': '200ms',
      }
    },
  },
  plugins: [],
} satisfies Config