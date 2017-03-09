module.exports = {
  globals: {
    DEBUG: true
  },
  env: {
    browser: true,
    es6: true,
    jasmine: true
  },
  extends: [
    './.eslintRules/possible-errors',
    './.eslintRules/best-practices',
    './.eslintRules/strict-mode',
    './.eslintRules/variables',
    './.eslintRules/node-js-and-common-js',
    './.eslintRules/stylistic',
    './.eslintRules/es6',
    './.eslintRules/react',
    './.eslintRules/import',
  ].map(require.resolve),
  ecmaFeatures: {
    arrowFunctions: true,
    blockBindings: true,
    classes: true,
    defaultParams: true,
    destructuring: true,
    jsx: true,
    modules: true,
    objectLiteralShorthandMethods: true,
    objectLiteralShorthandProperties: true,
    spread: true,
    templateStrings: true,
    experimentalObjectRestSpread: true
  },
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module',
    ecmaFeatures: {
      arrowFunctions: true,
      blockBindings: true,
      classes: true,
      defaultParams: true,
      destructuring: true,
      jsx: true,
      modules: true,
      objectLiteralShorthandMethods: true,
      objectLiteralShorthandProperties: true,
      spread: true,
      templateStrings: true,
      experimentalObjectRestSpread: true
    },
  },
  rules: {
  }
}