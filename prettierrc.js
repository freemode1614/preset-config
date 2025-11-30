/**
 * @type {import("prettier").Config['overrides']}
 */
const overrides = [
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
    files: [
      "**/*.tsx"
    ],
    "options": {
      parser: "typescript",
      arrowParens: "avoid",
      bracketSameLine: false,
      bracketSpacing: true,
      jsxSingleQuote: true
    }
  }
];

/**
 * @type {import("prettier").Config}
 */
const config = {
  semi: false,
  bracketSpacing: true,
  endOfLine: "auto",
  jsxSingleQuote: false,
  printWidth: 100,
  semi: true,
  singleAttributePerLine: false,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: "all",
  useTabs: false,
  trailingComma: "es5",
  overrides,
};

export default config;
