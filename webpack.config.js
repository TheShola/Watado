module.exports = {
  entry: './src/client.js',
  output: {
    path: '/Users/Shola/Documents/WATADO/Watado/public',
    filename: 'bundle.js'       
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  resolve: {  
    extensions: [' ' , '.js' , '.json']
  },
  devServer: {
    historyApiFallback: true
  }
};