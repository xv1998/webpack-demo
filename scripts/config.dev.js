const path = require('path');
const { merge } = require('webpack-merge');
const commonConfig = require('./config.common');

module.exports = merge(commonConfig, {
  mode: 'development',
  entry: '../src/index.tsx',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname,'../dist')
  },
  devServer:{
    contentBase: '../dist', // 将dist文件放到服务上运行
    compress: true,
    open: true, // 自动打开页面
  },
  devtool: 'eval-cheap-module-source-map', // 映射错误代码(开发环境)
})