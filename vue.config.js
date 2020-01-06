module.exports = {
    baseUrl: './',
    lintOnSave: false,
    // assetsDir: 'EMDY',
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
        // 第二版使用的首页（暂时不用）
        // 'index': {
        //     entry: 'src/zqtjIndex/index/index.js',
        //     template: 'src/zqtjIndex/index/index.html',
        //     filename: 'index.html'
        // },
        // 应急救援二级页面
        'emergency': {
            entry: 'src/zqtjIndex/emergency/emergency.js',
            template: 'src/zqtjIndex/emergency/emergency.html',
            filename: 'emergency.html'
        },
        // 第一版使用的首页
        // 'zqtjIndex': {
        //     entry: 'src/zqtjIndex/zqtjIndex/zqtjIndex.js',
        //     template: 'src/zqtjIndex/zqtjIndex/zqtjIndex.html',
        //     filename: 'disasterAna.html'
        // },
        // 市级表格页面
        'calledAna': {
            entry: 'src/zqtjIndex/calledAna/calledAna.js',
            template: 'src/zqtjIndex/calledAna/calledAna.html',
            filename: 'calledAna.html'
        },
        // 亡人火灾页面
        'namesFire': {
            entry: 'src/zqtjIndex/namesFire/namesFire.js',
            template: 'src/zqtjIndex/namesFire/namesFire.html',
            filename: 'namesFire.html'
        },
        // 火灾综合报告页面
        'fireReport': {
            entry: 'src/zqtjIndex/fireReport/fireReport.js',
            template: 'src/zqtjIndex/fireReport/fireReport.html',
            filename: 'fireReport.html'
        },
        // 详情三级页面
        'detailAna': {
            entry: 'src/zqtjIndex/detailAna/detailAna.js',
            template: 'src/zqtjIndex/detailAna/detailAna.html',
            filename: 'detailAna.html'
        },
        'copterData': {
            entry: 'src/zqtjIndex/copterData/copterData.js',
            template: 'src/zqtjIndex/copterData/copterData.html',
            filename: 'copterData.html'
        },
    }
}