const env = require('../webpack.env')
const webpack = require('webpack');

const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');

//html页面 pagesArray
let pagesArray = require('./htmlPages');
let base_plugin = [
    new CleanWebpackPlugin(['dist'], {
        root: env.ROOT_PATH,
        verbose: true,
        dry: false,
    }),
    new webpack.optimize.CommonsChunkPlugin({
        name: "vendors",
        chunks: ["about", "price", "product"],//提取公用模块
        minChunks: Infinity
    }),
    /*js压缩*/
    new UglifyJsPlugin({
        sourceMap: true
    }),
    new ExtractTextPlugin({
        //生成css文件名
        filename: 'static/css/[name][hash].css',
        disable: false,
        allChunks: true
    })
]
/*遍历页面，添加配置*/
pagesArray.forEach((page) => {
    const htmlPlugin = new HtmlWebpackPlugin({
        template: page.template,
        filename: page.filename,
        chunks: ['vendors', page.chuckName],
        // hash:true,
        minify: {
            removeComments: true,
            collapseWhitespace: false //删除空白符与换行符
        }
    });
    base_plugin.push(htmlPlugin)
})

module.exports = base_plugin;