const ModuleFederationPlugin =
  require("webpack").container.ModuleFederationPlugin;

module.exports = {
  transpileDependencies: true,
  lintOnSave: false,
  publicPath: "http://localhost:8083/",
  configureWebpack: {
    plugins: [
      new ModuleFederationPlugin({
        name: "profile",
        filename: "remoteEntry.js",
        exposes:{
          "./profileApp": "./src/bootstrap.js"
        },        
        shared: require("./package.json").dependencies,
      }),
    ],
  },
  devServer: {
    port: 8083,
  }
}