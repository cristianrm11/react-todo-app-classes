const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: "./src/index.js",
  mode: "development",
  module: {
    rules: [ // Fist rule transforming our ES6 and JSX syntax.
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/, // anything outside this directories
        loader: "babel-loader",
        options: { presets: ["@babel/env"] } // tell webpack to use babel env preset options
      },
      {
        test: /\.css$/, // rule to process css
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  resolve: { extensions: ["*", ".js", ".jsx"] }, // allow to specify which extension webpack will resolve, so we can import modules without add extensions
  output: { // where to put bundled code
    path: path.resolve(__dirname, "dist/"),
    publicPath: "/dist/", // where the bundle should go in and tells webpack-dev-server where to serve files from
    filename: "bundle.js"
  },
  devServer: { // The location we’re serving static files from
    contentBase: path.join(__dirname, "public/"),
    port: 3000,
    publicPath: "http://localhost:3000/dist/",
    hotOnly: true
  },
  plugins: [new webpack.HotModuleReplacementPlugin()]
};