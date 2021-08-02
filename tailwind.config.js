module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    screens: {
      sm: "460px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      '2xl': "1440px"
    },
    colors: {
      transparent: 'transparent',
      current: "currentColor",
      grey: {
        light: "#D1D5DB",
        DEFAULT: "#9CA3AF",
        dark: "#4B5563"
      },
      red: {
        light: "#FCA5A5",
        DEFAULT: "#F87171",
        dark: "#DC2626"
      },
      yellow: {
        light: "#FCD34D",
        DEFAULT: "#FBBF24",
        dark: "#D97706"
      },
      green: {
        light: "#6EE7B7",
        DEFAULT: "#34D399",
        dark: "#059669"
      },
      blue: {
        light: "#93C5FD",
        DEFAULT: "#60A5FA",
        dark: "#2563EB"
      },
      indigo: {
        light: "#A5B4FC",
        DEFAULT: "#818CF8",
        dark: "#4F46E5"
      },
      purple: {
        light: "#C4B5FD",
        DEFAULT: "#A78BFA",
        dark: "#7C3AED"
      },
      pink: {
        light: "#F9A8D4",
        DEFAULT: "#F472B6",
        dark: "#DB2777"
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
