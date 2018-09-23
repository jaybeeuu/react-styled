process.env.BABEL_ENV = "development";
process.env.NODE_ENV = "development";

const chalk = require("chalk");
const webpack = require("webpack");
const WebpackDevServer = require("webpack-dev-server");

const config = require("../config/webpack.config.dev");

const readyForReloadConfig = {
  ...config,
  entry: [
    require.resolve("webpack-dev-server/client") + "?/",
    require.resolve("webpack/hot/dev-server"),
    ...config.entry
  ],
  plugins: [
    ...config.plugins,
    new webpack.HotModuleReplacementPlugin()
  ]
};

const compiler = webpack(readyForReloadConfig);

const serverConfig = require("../config/webpackDevServer.config");

const devServer = new WebpackDevServer(compiler, serverConfig);

const PORT = parseInt(process.env.PORT, 10) || 3000;
const HOST = process.env.HOST || "0.0.0.0";
const asFriendlyUrl = (host) => host === "0.0.0.0" ? "localhost" : host;

devServer.listen(PORT, HOST, (err) => {
  if (err) {
    return console.log(err);
  }

  console.log(chalk.cyan(`Starting the development server...\nhttp://${asFriendlyUrl(HOST)}:${PORT}/`));
});

["SIGINT", "SIGTERM"].forEach(function (sig) {
  process.on(sig, function () {
    devServer.close();
    process.exit();
  });
});