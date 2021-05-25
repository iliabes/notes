const path = require('path');

module.exports = {
  mode: 'development',
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000,
  },
  module: {
    rules: [   //загрузчик для jsx
      {
        test: /\.jsx?$/, // определяем тип файлов
        exclude: /(node_modules)/,  // исключаем из обработки папку node_modules
        loader: "babel-loader",   // определяем загрузчик
        options: {
          presets: ["@babel/preset-env", "@babel/preset-react"]    // используемые плагины
        }
      },
      {
        test: /\.s[ac]ss$/i,
        use: [

          "style-loader",

          "css-loader",

          "sass-loader",
sass-loader
        ],
      }
    ]
  }
};