/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,jsx}"],
  theme: {
    fontSize: {
      "80px": "80px",
    },
    // extend: {},
  },
  plugins: [
    require("@tailwindcss/forms")({
      strategy: "class", // only generate classes
    }),
    // ...
  ],
};
