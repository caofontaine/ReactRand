var config = {
  entry: './app.js',
	
  output: {
    path:'C:\\Node\\ReactRand',
    filename: 'app.compiled.js',
  },
	
  devServer: {
    inline: true,
    port: 8080
  },
	
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
				
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  }
}

module.exports = config;