const MiniCssExtractPlugin = require("mini-css-extract-plugin");
var debug = process.env.NODE_ENV !== 'production';
var webpack = require('webpack');

// Set different CSS extraction for editor only and common block styles

const blocksCSSPlugin = new MiniCssExtractPlugin({
  filename: './blocks.style.build.css'
});

const editBlocksCSSPlugin = new MiniCssExtractPlugin({
  filename: './blocks.editor.build.css'
});

var plugins = [ blocksCSSPlugin, editBlocksCSSPlugin ];

// Functions
// for MiniCssExtractPlugin
function recursiveIssuer(m) {
  if (m.issuer) {
    return recursiveIssuer(m.issuer);
  } else if (m.name) {
    return m.name;
  } else {
    return false;
  }
}


module.exports = {
  context: __dirname,
  devtool: debug ? 'inline-sourcemap' : null,
  mode: debug ? 'development' : 'production',
  entry: './blocks/src/blocks.js',
  output: {
    path: __dirname + '/blocks/dist/',
    filename: 'blocks.build.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader'
          }
        ]
      },
      {
        test: /editor\.scss$/,
        exclude: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
              lineNumbers: true,
              outputStyle: 'nested',
              precision: 10
            }
          },
        ]
      },
      {
        test: /style\.scss$/,
        exclude: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
              lineNumbers: true,
              outputStyle: 'nested',
              precision: 10
            }
          },
        ]
      },
    ]
  },
  plugins: plugins
};