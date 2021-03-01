
module.exports = {
    devServer: {
        port: 8081,
        open: true,
        overlay: {
            warnings: false,
            errors: true
        },
        // 配置代理 （以接口 https://www.easy-mock.com/mock/5ce2a7854c85c12abefbae0b/api 说明）
        proxy: {
            "/api": {
                target: 'https://www.zhihu.com',
                changeOrigin: true, // 是否改变域名
                ws: true
            }
        }
    }
}
