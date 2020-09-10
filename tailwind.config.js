function px(pixels) {
  return `${pixels / 16}rem`;
}

module.exports = {
  purge: ["./components/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontSize: {
      xs: px(12),
      sm: px(14),
      base: px(15),
      lg: px(18),
      xl: px(20),
      "2xl": px(24),
      "3xl": px(30),
      "4xl": px(36),
      "5xl": px(48),
      "6xl": px(64),
    },
    extend: {
      screens: {
        xs: "480px",
      },

      keyframes: {
        'wiggle': {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        'flow': {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        'slideshow': {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        'slide': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-200%)' },
        },
      },
      animation: {
        'wiggle': 'wiggle 1s ease-in-out infinite',
        'flow': 'flow 20s linear infinite',
        'slideshow': 'slideshow 40s linear infinite',
        'slideshow2': 'slideshow2 40s linear infinite'
        
      },
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/ui")],
};