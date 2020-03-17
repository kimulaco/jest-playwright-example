module.exports = {
  extends: ['eslint:recommended'],
  env: {
    browser: true,
    node: true,
    jest: true
  },
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module'
  },
  rules: {
    indent: [2, 2]
  }
}
