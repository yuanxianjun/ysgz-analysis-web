module.exports = {
    baseUrl: './',
    lintOnSave: false,
    // assetsDir: 'EMDY',
    outputDir: 'dist/ysgzAna',
    devServer: {
        open: true,
        compress: true,//服务器压缩
        // before: function (app, server) {
        //     app.get('/', function (req, res) {   
        //         res.redirect('/IMapManagement.html');
        //     });        // }
        historyApiFallback: {
            rewrites: [
                { from: /^\/$/, to: '/disasterAna.html' },

            ]
        }
    },
    pages: {
        'zqtjIndex': {
            entry: 'src/zqtjIndex/zqtjIndex/zqtjIndex.js',
            template: 'src/zqtjIndex/zqtjIndex/zqtjIndex.html',
            filename: 'disasterAna.html'
        },
        'calledAna': {
            entry: 'src/zqtjIndex/calledAna/calledAna.js',
            template: 'src/zqtjIndex/calledAna/calledAna.html',
            filename: 'calledAna.html'
        }
    }
}