const path = require("path");

const webpackConfig = {
  devtool: 'source-map',
  entry: path.resolve(__dirname, 'src/index.ts'),
  externals: {
    '@astrouxds/react': '@astrouxds/react',
    'react': 'react',
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.(ts)x?$/,
        use: [
          {
            loader: 'ts-loader',
          }
        ]
      },
      {
        test: /\.css$/i,
        use: [
          'style-loader',
          'css-loader',
        ]
      }
    ]
  },
  output: {
    filename: 'index.umd.js',
    globalObject: 'this',
    library: {
      name: 'acl',
      type: 'umd',
    },
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  }

};

module.exports = webpackConfig;
