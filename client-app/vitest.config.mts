import react from "@vitejs/plugin-react";
import path from "path";
import { loadEnv } from "vite";
import { defineConfig } from "vitest/config";

export default defineConfig({
  plugins: [react()],
  test: {
    env: loadEnv("", "./.env.local", ""),
    environment: "jsdom",
    coverage: {
      include: ["**/*.test.tsx"],
      exclude: ["components/ui"],
    },
    alias: {
      "@": path.resolve(__dirname, "./"),
    },
  },
});
