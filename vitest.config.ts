import { defineConfig, defaultExclude } from "vitest/config";

export default defineConfig({
  test: {
    exclude: ["node_modules", "dist/test"],
  },
  server: {
    watch: {
      ignored: [],
    },
  },
});
