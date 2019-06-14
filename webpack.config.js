const path = require("path");

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, 'client'),
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devServer: {
    historyApiFallback: true
  },
  module: {
    rules: [{
      test: /\.jsx?/,
      loader: 'babel-loader',
      exclude: /node_modules/
    }]
  }
}
