module.exports = {
  entry: './app/app.jsx',
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    root: __dirname,
    alias: {
      Main: 'app/components/Main.jsx',
      Images: 'app/components/Images.jsx',
      Favorites: 'app/components/Favorites.jsx',
      Nav: 'app/components/Nav.jsx',
      getApi: 'app/api/getApi.jsx',
      ImagesInput: 'app/components/ImagesInput.jsx',
      ImagesDisplay: 'app/components/ImagesDisplay.jsx'
    },
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0']
      },
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
      },
      {
          test: /\.scss$/,
          loaders: ['style', 'css', 'sass']
      }
    ]
  }
};
