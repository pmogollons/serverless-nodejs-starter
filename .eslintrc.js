module.exports = {
  "parser": "babel-eslint",
  "env": {
    es6: true,
    node: true
  },
  "plugins": [
    "react",
    "meteor"
  ],
  parserOptions: {
    sourceType: 'module'
  },
  "extends": [
    "eslint:recommended"
  ],
  "globals": {
    Assets: true
  },
  "rules": {
    "indent": [
      "error",
      2,
      {
        "SwitchCase": 1
      }
    ],
    "quotes": [
      "error",
      "single"
    ],
    "semi": [
      "error",
      "always"
    ],
    "no-console": [
      "error"
    ],
    "no-unused-vars": [
      "warn"
    ],
    "comma-dangle": [
      "warn",
      "never"
    ],
    "curly": [
      "error"
    ],
    "no-extra-bind": [
      "error"
    ],
    "no-multi-spaces": [
      "error"
    ],
    "comma-spacing": [
      "error",
      { "before": false, "after": true }
    ],
    "brace-style": [
      "error",
      "1tbs"
    ],
    "block-spacing": [
      "error",
      "always"
    ],
    "padded-blocks": [
      "error",
      "never"
    ],
    "keyword-spacing": [
      "error",
      { "after": true, "before": true }
    ],
    "object-curly-spacing": [
      "error",
      "always"
    ],
    "jsx-quotes": [
      "error",
      "prefer-double"
    ],
    "prefer-const": [
      "warn"
    ],
    "no-var": [
      "error"
    ]
  }
};
