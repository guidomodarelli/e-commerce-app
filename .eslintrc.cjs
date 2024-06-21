module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    requireConfigFile: false,
  },
  overrides: [
    {
      files: ["src/**/*.{ts,tsx}"],
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        project: ["./tsconfig.json", "./tsconfig.node.json"],
        tsconfigRootDir: __dirname,
      },
      extends: [
        "eslint:recommended",
        // https://typescript-eslint.io/users/configs#recommended-configurations
        "plugin:@typescript-eslint/strict-type-checked",
        "plugin:@typescript-eslint/stylistic-type-checked",
        "plugin:react-hooks/recommended",
        // https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules
        "plugin:react/recommended",
        // This rule should be after react/recommended
        "plugin:react/jsx-runtime",
        "plugin:unicorn/recommended",
        // Add plugin:prettier/recommended as the last item in the extends array in your .eslintrc* config file, so that
        // eslint-config-prettier has the opportunity to override other configs
        "plugin:prettier/recommended",
      ],
      plugins: ["react-refresh", "unicorn"],
      rules: {
        "@typescript-eslint/no-empty-interface": "off",
        "react/prop-types": "off",
        "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
        "unicorn/prevent-abbreviations": [
          2,
          {
            checkProperties: true,
            checkVariables: true,
            checkDefaultAndNamespaceImports: "internal",
            checkShorthandImports: "internal",
            checkShorthandProperties: true,
            checkFilenames: true,
            extendDefaultReplacements: true,
            extendDefaultAllowList: true,
            replacements: {
              v: {
                value: true,
              },
            },
            ignore: ["i", "env", "props", "Props", "ref"],
          },
        ],
        "unicorn/prefer-module": "off",
        "unicorn/filename-case": [
          "error",
          {
            case: "pascalCase",
            ignore: [
              "main"
            ]
          },
        ],
      },
    },
    {
      files: ["src/**/utils/**/*.{ts,tsx}", "src/**/types/**/*.{ts,tsx}"],
      rules: {
        "unicorn/filename-case": [
          "error",
          {
            case: "kebabCase",
          },
        ],
      }
    },
    {
      files: ["src/**/hooks/**/*.{ts,tsx}"],
      rules: {
        "unicorn/filename-case": [
          "error",
          {
            case: "camelCase",
          },
        ],
      },
    },
    {
      files: ["**/*.json"],
      plugins: ["json-format"],
      settings: {
        "json/sort-package-json": "standard",
        "json/json-with-comments-files": ["**/tsconfig.json", ".vscode/**"],
      },
    },
  ],
};
