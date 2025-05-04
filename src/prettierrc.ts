import type { Config } from "prettier";

const overrides: Config["overrides"] = [
  {
    files: [".prettierrc", ".eslintrc"],
    options: {
      parser: `json`,
    },
  },
  {
    files: ["tsconfig.json", "tsconfig.*.json"],
    options: {
      parser: `jsonc`,
    },
  },
  {
    files: ["*.md"],
    options: {
      parser: `markdown`,
    },
  },
  {
    files: ["*.yaml"],
    options: {
      parser: `yaml`,
    },
  },
];

const config: Config = {
  bracketSpacing: true,
  endOfLine: "auto",
  jsxSingleQuote: false,
  printWidth: 80,
  semi: true,
  singleAttributePerLine: false,
  singleQuote: false,
  tabWidth: 2,
  trailingComma: "all",
  useTabs: false,
  overrides,
};

export default config;
