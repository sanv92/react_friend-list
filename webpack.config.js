var path = require('path');
var webpack = require('webpack');
 
module.exports = {
    entry: "./public/app/index.js",
    output: {
        path: "./public/build",
        filename: "app.js"
    },
	module: {
    	loaders: [{
        	test: /.jsx?$/,
        	loader: 'babel-loader',
        	exclude: /(node_modules|bower_components)/,
        	query: {
        		presets: ['es2015', 'react']
        	}
    	}]
	}
};