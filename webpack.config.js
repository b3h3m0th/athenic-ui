const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = [
  {
    mode: "development",
    entry: {
      app: path.join(__dirname, "src", "index.tsx"),
    },
    watch: false,
    target: "web",
    resolve: {
      extensions: [".ts", ".tsx", ".js"],
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: "ts-loader",
          exclude: [
            "/node_modules/",
            "/examples/",
            path.join(__dirname, "jest.config.ts"),
          ],
        },
        {
          test: /\.s?css$/,
          use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
        },
        {
          test: /\.(png|jpe?g|gif)$/i,
          use: [
            {
              loader: "file-loader",
            },
          ],
        },
      ],
    },
    output: {
      filename: "index.dev.js",
      path: path.resolve(__dirname, "dist"),
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.join(__dirname, "src", "index.html"),
      }),
      new MiniCssExtractPlugin({
        filename: "index.css",
        chunkFilename: "index.chunk.css",
      }),
    ],
  },
  {
    mode: "production",
    entry: {
      app: path.join(__dirname, "src", "index.ts"),
    },
    watch: false,
    target: "web",
    resolve: {
      extensions: [".ts", ".tsx", ".js"],
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: "ts-loader",
          exclude: [
            "/node_modules/",
            "/examples/",
            path.join(__dirname, "jest.config.ts"),
          ],
        },
        {
          test: /\.s?css$/,
          use: ["style-loader", "css-loader", "sass-loader"],
        },
        {
          test: /\.(png|jpe?g|gif)$/i,
          use: [
            {
              loader: "file-loader",
              options: {
                outputPath: "assets/img",
              },
            },
          ],
        },
      ],
    },
    output: {
      filename: "index.js",
      path: path.resolve(__dirname, "dist"),
      libraryTarget: "umd",
      library: "athenic-ui",
    },
    plugins: [],
    externals: {
      react: "react",
      "react-dom": "react-dom",
    },
  },
];
