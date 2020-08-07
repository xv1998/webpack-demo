const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const resolve = (dir) => path.join(__dirname, '../', dir);

module.exports = {
  module:{
    rules:[
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        include: resolve('src')
      },
      {
        test: /\.js$/,
        include: resolve('src'),
        use: {
          loader: 'babel-loader',
          options: {
            cacheDiretory: true,
            preset: [[
              'env', {
                modules: false
              }
            ]]
          }
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader','css-loader','less-loader']
      },
      {
        test: /\.(jpg|png|gif)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]'
          }
        }
      },
    ]
  },
  plugins:[
    new CleanWebpackPlugin(), // 清除dist文件
    new HtmlWebpackPlugin(),  // 自动生成打包后的index.html文件
  ],
  resolve: {
    extensions: ['.tsx', '.ts', '.js' ],
  },
  externals: {
    "react": "React",
    "react-dom": "ReactDOM"
  }
}