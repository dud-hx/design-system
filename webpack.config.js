const path = require('path');

module.exports = {
  entry: './src/index.ts', // point to the main TypeScript file instead of JavaScript
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'design-system.js',
    library: 'designSystem',
    libraryTarget: 'umd',
    globalObject: 'this',
    umdNamedDefine: true
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },  
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /(node_modules)/,
        use: 'ts-loader',

      }
    ]
  }
};


