module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'next/core-web-vitals', // Next.js recommended settings
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended', // Enables Prettier rules
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    // Custom rules can go here
  },
};
