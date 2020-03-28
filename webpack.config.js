const path = require('path');

module.exports = {
    entry:{
        bundle: path.resolve(__dirname, 'src', 'index.js'),
    },
    output:{
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                use:{
                    loader: 'babel-loader',
                    options:{
                        presets:[
                            '@babel/preset-env',
                        ]
                    }
                }
            },
            {
                test:/\.css$/,
                use:["style-loader","css-loader"]
            },
            {
                test:/\.html$/,
                use:[
                    {
                        loader:'html-loader',
                    }
                ]
            }
        ]
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'build'),
        inline: true,
        hot: true,
        host: "localhost",
        port: 9000
    },
}
