import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  theme: {
    extends: {
      colors: {
        brand: "#EF700E",
      },
    },
  },
  plugins: [react(), tailwindcss()],
});
