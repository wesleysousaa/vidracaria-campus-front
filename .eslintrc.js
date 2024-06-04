module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'plugin:react-hooks/recommended', 'plugin:react/recommended', 'standard-with-typescript', 'prettier', 'plugin:storybook/recommended'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', '@typescript-eslint', 'react', 'prettier'], // Adiciona o plugin do Prettier
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    // Adicione suas regras específicas aqui, se necessário
    'import/order': [
      'error',
      { 'newlines-between': 'always', alphabetize: { order: 'asc' } },
    ],
    'unused-imports/no-unused-imports-ts': 'error',
    'prettier/prettier': 'error', // Ativa as regras do Prettier
  },
  overrides: [
    // Adicione configurações específicas para sobreposições (overrides) se necessário
    {
      files: ['*.css'], // Aplica as regras para arquivos CSS
      processor: 'stylelint-processor-styled-components', // Pode variar dependendo do seu setup
    },
    {
      files: ['*.ts', '*.tsx'], // Aplica as regras para arquivos TypeScript
      extends: [
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'prettier/@typescript-eslint', // Ativa as regras do Prettier para TypeScript
      ],
    },
  ],
};
