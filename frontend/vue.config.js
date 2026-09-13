module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/infovis-mnc31/' : '/',
  devServer: {
    open: true,
    port: 8080,
  },
}
