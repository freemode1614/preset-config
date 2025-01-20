import { resolve } from "node:path";

import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    alias: {
      "@vitg/config": resolve(process.cwd(), "."),
    },
  },
  plugins: [
    {
      name: "virtual-modules",
      resolveId(id) {
        if (id === "@vitg/config") {
          return "virtual:@vitg/config";
        }
      },
    },
  ],
});
