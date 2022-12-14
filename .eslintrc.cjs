module.exports = {
  "env": {
    "browser": true,
    "es2021": true,
    "amd": true,
    "node": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  "overrides": [
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "plugins": [
    "react",
    "@typescript-eslint"
  ],
  "rules": {
    "indent": [
      "error",
      2
    ],
    "react/react-in-jsx-scope": "off",
    "linebreak-style": [
      "error",
      "windows"
    ],
    "quotes": [
      "error",
      "double"
    ],
    "semi": [
      "error",
      "always"
    ]
  },
  "react": {
    "pragma": "React",  // Pragma to use, default to "React"
    "fragment": "Fragment",  // Fragment to use (may be a property of <pragma>), default to "Fragment"
    "version": "detect", // React version. "detect" automatically picks the version you have installed.e
  },
    
};
