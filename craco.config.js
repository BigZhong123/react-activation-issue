const name = require('./package.json').name

module.exports = {
    devServer: {
        headers: {
            'Access-Control-Allow-Origin': '*'
        },
        historyApiFallback : true,
        hot : false,
        watchContentBase : false,
        liveReload : false,
    },
    webpack: {
        configure: (config) => {
            config.output.library = 'son';
            config.output.libraryTarget = 'umd';
            config.output.jsonpFunction = `webpackJsonp_${name}`;
            config.output.globalObject = 'window';
        
            return config;
        },
    }
}