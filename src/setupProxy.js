const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function (app) {
  app.use(
    createProxyMiddleware('/aps', {
      target: '/xxx',
      changeOrigin: true,
      pathRewrite: {
        '^/aps': ''
      }
    }),
  )

}
