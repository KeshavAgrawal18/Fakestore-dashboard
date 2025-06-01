module.exports = {
  presets: [
    ["@babel/preset-env", { targets: { node: "current" } }],
    "@babel/preset-env", // Transpile modern JS
    "@babel/preset-react", // Transpile JSX
  ],
};
