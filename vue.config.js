// const CompressionWebpackPlugin = require('compression-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
// const productionGzipExtensions = ['js', 'css']

module.exports = {
    publicPath: process.env.NODE_ENV == 'production'?'/html/':'/',
    outputDir: 'html',
    productionSourceMap:false,
    devServer: {
        // https:true,
        // proxy:{
        //     '/api': {
        //         target: 'http://192.168.1.3:3000', // 设置你调用的接口域名和端口号
        //         changeOrigin: true
        //     }
        // }
    },
    chainWebpack: config => {
        config.plugin('html').tap(args => {

            let http = 'https://mall.xvfin.com/html/js/',
                cssHttp = 'https://mall.xvfin.com/html/css/';
            
            args[0].cdnJs = [];
            args[0].cdnCss = [
                `${cssHttp}bulma.min.css`,
                `${cssHttp}swiper.min.css`
            ];
            
            

            if(process.env.NODE_ENV == 'production') {
                args[0].cdnJs.push(`${http}axios.min.js`);
                args[0].cdnJs.push(`${http}vue.min.js`);
                args[0].cdnJs.push(`${http}vue-router.min.js`);
                args[0].cdnJs.push(`${http}vuex.min.js`);
                args[0].cdnJs.push(`${http}vue-translator.min.js`);
                args[0].cdnJs.push(`${http}swiper.min.js`);
                args[0].cdnJs.push(`${http}vue-awesome-swiper.js`);
                args[0].cdnJs.push(`${http}vee-validate.min.js`);
                // args[0].cdnJs.push('./js/print.min.js');
            }


            if(process.env.NODE_ENV == 'development') {
                
            }
            

            args[0].cdnJs.push(`${http}lodash.min.js`);
            args[0].cdnJs.push(`${http}print.min.js`);

            

            return args
        })
    },
    configureWebpack: config => {
        if(process.env.NODE_ENV == 'production') {
            
            // 删除console.log
            config.optimization.minimizer[0].options.terserOptions.compress.warnings = false
            config.optimization.minimizer[0].options.terserOptions.compress.drop_console = true
            config.optimization.minimizer[0].options.terserOptions.compress.drop_debugger = true
            config.optimization.minimizer[0].options.terserOptions.compress.pure_funcs = ['console.log']


            
            return {
                plugins:[
                    // new CompressionWebpackPlugin({
                    //     algorithm: 'gzip',
                    //     test: new RegExp('\\.(' + productionGzipExtensions.join('|') + ')$'),
                    //     threshold: 10240,
                    //     minRatio: 0.8
                    // }),
                    // new BundleAnalyzerPlugin(
                    // {
                    //    analyzerMode: 'server',
                    //    analyzerHost: '127.0.0.1',
                    //    analyzerPort: 8889,
                    //    reportFilename: 'report.html',
                    //    defaultSizes: 'parsed',
                    //    openAnalyzer: true,
                    //    generateStatsFile: false,
                    //    statsFilename: 'stats.json',
                    //    statsOptions: null,
                    //    logLevel: 'info'
                    // })
                ],
                externals: {
                    'vue':'Vue',
                    'vue-router':'VueRouter',
                    'vuex': 'Vuex',
                    'vue-translator': 'VueTranslator',
                    'vue-awesome-swiper': 'VueAwesomeSwiper',
                    // 'vue-rellax': 'VueRellax',
                    'axios':'axios',
                    'vee-validate':'VeeValidate '
                }
            }
        }
    }
}