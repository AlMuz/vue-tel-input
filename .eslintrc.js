require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    '@vue/eslint-config-airbnb',
    'plugin:jest/recommended'
  ],
  plugins: ['vue'],
  parserOptions: {
    parser: '@babel/eslint-parser'
  },
  // add your custom rules here
  rules: {
    'comma-dangle': ['error', 'never'],
    semi: 'off',
    'implicit-arrow-linebreak': 'off',
    'operator-linebreak': 'off',
    'function-paren-newline': 'off',
    // disallow reassignment of function parameters
    // disallow parameter object manipulation except for specific exclusions
    'no-param-reassign': [
      'error',
      {
        props: true,
        ignorePropertyModificationsFor: ['el']
      }
    ],
    'no-console': 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-underscore-dangle': [
      'error',
      {
        allow: ['__vueClickOutside__']
      }
    ],
    'jest/prefer-to-have-length': 'warn',
    'vuejs-accessibility/anchor-has-content': 'off',
    'vuejs-accessibility/alt-text': 'off',
    'vuejs-accessibility/click-events-have-key-events': 'off',
    'vuejs-accessibility/no-autofocus': 'off'
  }
}
