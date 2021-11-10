const ModuleFederationPlugin =
  require('webpack').container.ModuleFederationPlugin

module.exports = {
  lintOnSave: false,
  transpileDependencies: true,
  publicPath: '/',
  configureWebpack: {
    devtool: 'eval',
    plugins: [
      new ModuleFederationPlugin({
        name: 'shell',
        filename: 'remoteEntry.js',
        remotes: {
          accounts: 'accounts@http://localhost:8082/remoteEntry.js',
          profile: 'profile@http://localhost:8083/remoteEntry.js'
        }
      })
    ]
  },
  devServer: {
    port: 8081
  }
}
