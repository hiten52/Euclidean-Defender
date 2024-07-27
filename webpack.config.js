const path = require("path");

module.exports = {
  mode: "production",
  entry: "./build/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "build"),
  },
};
