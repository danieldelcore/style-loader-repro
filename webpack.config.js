const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader",
            options: {
              injectType: "lazyStyleTag",
            },
          },
          {
            loader: require.resolve("css-loader"),
          },
        ],
      },
    ],
  },
};
