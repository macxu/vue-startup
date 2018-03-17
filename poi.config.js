module.exports = (options, req) => {
    return {
        // https://doc.webpack-china.org/concepts/entry-points/
        entry: {
            'index': './src/index.ts'
        },
        hotReload: true,
        // 编译结果放到/docs目录，可以直接在Github Pages上看到效果。
        dist: 'docs',
        // https://github.com/jantimon/html-webpack-plugin
        html: [{
            chunk: 'index',
            filename: 'index.html',
            template: './src/index.ejs',
            inject: false,
            env: {
                // 让模板能够进行编译环境识别
                // https://poi.js.org/#/home?id=modes
                development: options.mode === 'development',
                production: options.mode === 'production'
            }
        }],
        sourceMap: options.mode === 'development',
        filename: {
            js: 'assets/[name].js',
            css: 'assets/[name].css',
            // fonts: 'assets/fonts/[name].[ext]',
        },
        // 不用编译的资源放在static目录里面，例如图片
        staticFolder: "static",
        // 用代理连接服务，避免跨域调用
        devServer: {
            proxy: {
                '/apis': {
                    target: 'http://www.example.com',
                    secure: false
                }
            }
        },
        presets: [
            require('poi-preset-typescript')( /* options */ )
        ],
        port: 8080,
        // 以下为编译拓展
        webpack(config) {
            return config;
        },
        extendWebpack(config) {}
    };
};

