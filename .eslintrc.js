module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false
  },
  extends: [
    '@nuxtjs',
     'prettier/vue',
    'plugin:nuxt/recommended'
  ],
  plugins: [
    'prettier'
  ],
  // add your custom rules here
  rules: {
    'prettier/prettier': 'error',
    'no-console': 0,
    'vue/html-self-closing': 0,
    'vue/no-v-html': 0,
    'vue/valid-v-slot': 0,
    'vue/valid-template-root': 0,
    'vue/multi-word-component-names': 0,
    'vue/attributes-order': 0,
    'vue/script-indent': 0,
    'vue/require-default-prop': 0
  }
}
