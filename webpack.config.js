const path = require('path');
const SRC_DIR = path.join(__dirname, '/react-client/src');
const DIST_DIR = path.join(__dirname, '/react-client/dist');

module.exports = {
  entry: `${SRC_DIR}/index.jsx`,
  mode: 'development',
  output: {
    path: DIST_DIR,
    filename: 'bundle.js',
    publicPath: '/'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.css']
  },
  devServer: {
      contentBase: DIST_DIR,
      compress: true,
      port: 8080,
      watchContentBase: true,
      progress: true,
      historyApiFallback: true,
  },
  module : {
    rules : [
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.png$/,
        loader: 'url-loader?limit=100000&minetype=image/png'
      },
      {
        test: /\.jpg/,
        loader: 'file-loader'
      },
      {
        test : /\.(js|jsx)$/,
        include : SRC_DIR,
        exclude: /node_modules/,
        use: ['babel-loader'],
      }
    ]
  },

};
