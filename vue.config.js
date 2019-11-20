module.exports = {
    baseUrl: './',
    lintOnSave: false,
    // assetsDir: 'EMDY',
    outputDir: 'dist/ysgzAna',
    productionSourceMap: false,
    devServer: {
        open: true,
        hot: true,
        compress: true,//服务器压缩
        // before: function (app, server) {
        //     app.get('/', function (req, res) {   
        //         res.redirect('/IMapManagement.html');
        //     });        // }
        historyApiFallback: {
            rewrites: [
                { from: /^\/$/, to: '/index.html' },
            ]
        }
    },
    pages: {
        'index': {
            entry: 'src/zqtjIndex/index/index.js',
            template: 'src/zqtjIndex/index/index.html',
            filename: 'index.html'
        },
        'emergency': {
            entry: 'src/zqtjIndex/emergency/emergency.js',
            template: 'src/zqtjIndex/emergency/emergency.html',
            filename: 'emergency.html'
        },
        'zqtjIndex': {
            entry: 'src/zqtjIndex/zqtjIndex/zqtjIndex.js',
            template: 'src/zqtjIndex/zqtjIndex/zqtjIndex.html',
            filename: 'disasterAna.html'
        },
        'calledAna': {
            entry: 'src/zqtjIndex/calledAna/calledAna.js',
            template: 'src/zqtjIndex/calledAna/calledAna.html',
            filename: 'calledAna.html'
        },
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