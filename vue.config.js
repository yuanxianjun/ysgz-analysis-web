module.exports = {
    baseUrl: './',
    lintOnSave: false,
    // assetsDir: 'EMDY',
    outputDir: 'dist/event',
    devServer: {
        open: true,
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