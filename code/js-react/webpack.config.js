const path = require('path')

module.exports = {
    mode: 'development',
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
      },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    }, 

    devServer: {
        static: path.resolve(__dirname, 'dist'),
        historyApiFallback: true,
        compress: false,
        proxy: {
            '/api': 'http://localhost:9000 '
         }  
    }
};