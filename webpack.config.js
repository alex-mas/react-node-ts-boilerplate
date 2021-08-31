const path = require('path');
module.exports = (env) => {
    if(!env){
        env = {};
    }
    if(!env.NODE_ENV){
        env.NODE_ENV = 'development';
    }
    const outputFolder = './bin/';
    const commonConfig = {
        mode: env.NODE_ENV,
        devtool: env.NODE_ENV === 'production' ? undefined : 'inline-source-map',
        resolve: {
            extensions: [".ts", ".tsx", ".js", ".jsx", '.json']
        },
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    loader: "ts-loader"
                }, {
                    test: /\.s?css$/,
                    use: [
                        'style-loader',
                        {
                            loader: 'css-loader',
                            options: {
                                url: false
                            }
                        },
                        'sass-loader'
                    ]
                }],
        },
    };
    const clientConfig = {
        ...commonConfig,
        target: 'web',
        entry: './src/client/app.tsx',
        output: {
            path: path.join(__dirname, outputFolder,'client'),
            filename: 'app.js'
        }
    };
    const serverConfig = {
        ...commonConfig,
        target: 'node',
        entry: './src/server/main.ts',
        output: {
            path: path.join(__dirname, outputFolder,'server'),
            filename: 'main.js'
        }
    };
    return [clientConfig, serverConfig];
}