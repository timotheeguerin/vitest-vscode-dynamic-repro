import { defineConfig, defaultExclude } from "vitest/config";

export default defineConfig({
  test: {
    /* for example, use global to avoid globals imports (describe, test, expect): */
    // globals: true,
    exclude: ["node_modules", "dist/test"],
    // Uncomment and TS will stop being reloaded
    //forceRerunTriggers: ['src/**'],
  },
  server: {
    watch: {
      ignored: [],
    },
  },
});
