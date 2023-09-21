/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,jsx}"],
  theme: {},
  plugins: [
    require("@tailwindcss/forms")({
      strategy: "class", // only generate classes
    }),
    // ...
  ],
};
