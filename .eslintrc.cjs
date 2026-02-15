module.exports = {
  env: {
    node: true,
    jest: true,
    es2022: true
  },
  extends: ["eslint:recommended"],
  parserOptions: {
    ecmaVersion: "latest"
  },
  rules: {
    "no-unused-vars": "error",
    "no-undef": "error"
  }
};
