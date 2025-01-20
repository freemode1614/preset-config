import nodeFs from "node:fs";
import nodePath from "node:path";

import { defineConfig } from "tsup";

const sourceCodeDirectory = "src";

const configs = nodeFs.readdirSync(nodePath.resolve(sourceCodeDirectory));

const production = process.env.NODE_ENV === "production";

export default defineConfig({
  entry: [
    `src/index.ts`,
    ...(configs
      .map((file) =>
        nodeFs.statSync(`${sourceCodeDirectory}/${file}`).isFile()
          ? `${sourceCodeDirectory}/${file}`
          : "",
      )
      .filter(Boolean) as string[]),
  ],
  outDir: "npm",
  format: ["esm", "cjs"],
  dts: true,
  clean: production,
  minify: production,
  sourcemap: true,
  cjsInterop: true,
  shims: true,
});
