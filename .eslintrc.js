module.exports = {
  "env": {
      "es6": true,
      "node": true
  },
  "extends": [
      "airbnb-base",
      // "tsline:latest",
      // "tsline-config-prettier"
  ],
  "globals": {
      "Atomics": "readonly",
      "SharedArrayBuffer": "readonly"
  },
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
      "ecmaVersion": 2018,
      "sourceType": "module"
  },
  "plugins": [
      "@typescript-eslint"
  ],
  "rules": {
      "indent": [
          "error",
          4
      ],
      "quotes": [
          "error",
          "double"
      ],
      "semi": [
          "error",
          "always"
      ]

  }
}