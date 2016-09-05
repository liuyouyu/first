//AMD  A async
//属于CMD
var webpack = require("webpack");
var HtmlWebpackPlugin = require("html-webpack-plugin");
//分离js和css的插件
var ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
	plugins : [
		//打包所有css或者less文件到bundle.css里
		new ExtractTextPlugin("bundle.css"),
		new HtmlWebpackPlugin({
			template : "./index.html"
		})
	], 
	//条目，或者页面入口配置
	entry : {
		index : "./main.js"
	},

	//输出配置
	output : {
		path : "dist",
		filename : "all.js"
	},
	module : {
		loaders : [
		//针对不同文件类型后缀，指定相应的加载器
			// {
			// 	test : /\.(css|less)/,
			// 	loader : "style!css!less"
			// }
			{
				test : /\.(css|less)/,
				loader : ExtractTextPlugin.extract(["css","less"])
			},
			{
				test : /\.(jpg|gif|png)/,
				loader : "file?name=imgs/[name].[ext]"
			},
			{
				test : /\.(ttf|wof)/,
				loader : "file?name=fonts/[name].[ext]"
			}
		]
	}
}