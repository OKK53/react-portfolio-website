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
      wave_animation: {
        "0%": { transform: "rotate( 0.0deg)" },
        "10%": {
          transform: "rotate(14.0deg)",
        } /* The following five values can be played with to make the waving more or less extreme */,
        "20%": { transform: "rotate(-8.0deg)" },
        "30%": { transform: "rotate(14.0deg)" },
        "40%": { transform: "rotate(-4.0deg)" },
        "50%": { transform: "rotate(10.0deg)" },
        "60%": {
          transform: "rotate( 0.0deg) ",
        } /* Reset for the last half to pause */,
        "100%": { transform: "rotate( 0.0deg)" },
      },
    },
    animation: {
      profile_animate: "profile_animate 8s ease-in-out infinite 1s",
      scroll: "scroll 2s ease infinite",
      wave_animation: "wave_animation 2.5s ease-in-out infinite ",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
