module.exports = {
    baseUrl: './',
    lintOnSave: false,
    outputDir: 'dist/ysgzAna',
    productionSourceMap: false,
    devServer: {
        open: true,
        hot: true,
        compress: true, //服务器压缩
        // before: function (app, server) {
        //     app.get('/', function (req, res) {   
        //         res.redirect('/IMapManagement.html');
        //     });        // }
        historyApiFallback: {
            rewrites: [{
                from: /^\/$/,
                to: '/indexAna.html'
            },
            {
                from: /^\/index/,
                to: "/indexAna.html"
            },
            ]
        }
    },
    pages: {
        // 第三版首页
        'indexAna': {
            entry: 'src/zqtjIndex/indexAna/indexAna.js',
            template: 'src/zqtjIndex/indexAna/indexAna.html',
            filename: 'indexAna.html'
        },

    }
}