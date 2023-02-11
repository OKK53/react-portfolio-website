module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
    },
    keyframes: {
      profile_animate: {
        "0%": { "border-radius": "60% 40% 30% 70%/60% 30% 70% 40% " },
        "50%": { "border-radius": "30% 60% 70% 40%/50% 60% 30% 60%" },
        "100%": { "border-radius": "60% 40% 30% 70%/60% 30% 70% 40%" },
      },
      scroll: {
        "0%": { transform: "translateY(0)" },
        "30%": { transform: "translateY(3.75rem)" },
      },
    },
    animation: {
      profile_animate: "profile_animate 8s ease-in-out infinite 1s",
      scroll: "scroll 2s ease infinite",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
