const ModuleFederationPlugin =
  require("webpack").container.ModuleFederationPlugin;

module.exports = {
  transpileDependencies: true,
  lintOnSave: false,
  publicPath: "http://localhost:8082/",
  configureWebpack: {
    plugins: [
      new ModuleFederationPlugin({
        name: "accounts",
        filename: "remoteEntry.js",
        exposes:{
          "./accountsApp": "./src/bootstrap.js"
        }
      }),
    ],
  },
  devServer: {
    port: 8082,
  }
}