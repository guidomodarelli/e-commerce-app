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
        "@typescript-eslint/restrict-template-expressions": "off",
        "@typescript-eslint/no-non-null-assertion": "off",
        "@typescript-eslint/no-empty-function": "off",
        "unicorn/no-array-reduce": "off",
        "unicorn/no-useless-undefined": "off",
        "unicorn/no-null": "off",
        "unicorn/switch-case-braces": "off",
        "@typescript-eslint/no-unnecessary-condition": "off",
        "@typescript-eslint/no-misused-promises": "off",
        "no-empty-pattern": [
          "off",
          {
            allowObjectPatternsAsParameters: true,
          },
        ],
        "@typescript-eslint/no-empty-interface": "off",
        "react/prop-types": "off",
        "react-refresh/only-export-components": "off",
        "unicorn/prevent-abbreviations": [
          2,
          {
            checkProperties: false,
            checkVariables: true,
            checkDefaultAndNamespaceImports: "internal",
            checkShorthandImports: "internal",
            checkShorthandProperties: false,
            checkFilenames: true,
            extendDefaultReplacements: true,
            extendDefaultAllowList: true,
            replacements: {
              v: {
                value: true,
              },
            },
            ignore: ["i", "env", "props", "Props", "ref", "db"],
          },
        ],
        "unicorn/prefer-module": "off",
        "unicorn/filename-case": "off",
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
