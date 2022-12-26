module.exports = {
  "env": {
    "browser": true,
    "commonjs": true,
    "es2021": true
  },
  "extends": [
    "eslint:recommended",
//    "plugin:react/recommended"
  ],

  "overrides": [
  ],
  "parserOptions": {
    "ecmaVersion": "latest"
  },/*
  "plugins": [
    "react"
  ],*/
  "rules": {
    'indent': [
      'error',
      2
    ],
    'eqeqeq': 'error',
    'no-trailing-spaces': 'error',
    'object-curly-spacing': [
        'error', 'always'
    ],
    'arrow-spacing': [
        'error', { 'before': true, 'after': true }
    ]
  }
}
