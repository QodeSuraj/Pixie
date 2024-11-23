/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        social: "#1d1d1d",
        title: "#333333",
        link: "#16a085",
        btn_color: "#1abc9c",
        boder: "#ddd",
        content: "#999",
        small_text: "#666",
        input_focus: "#bbb",
        btn_hover: "#16a085",
        dashboard_border: "#EAEAEA",
        black: "#000",
        app_nav_color: "#3d3d3d",
        storage_color: "#f4faf6",
      },

      fontFamily: {
        monsterrat: ["Montserrat", "sans-serif"],
      },
      gridTemplateColumns: {
        gridDashboard: "300px minmax(0, 1fr)", // Sidebar (300px) + Main Content (remaining space)
      },
    },
  },
  plugins: [],
};
