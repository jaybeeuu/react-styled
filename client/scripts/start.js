process.env.BABEL_ENV = "development";
process.env.NODE_ENV = "development";

const fs = require("fs");
const chalk = require("chalk");
const webpack = require("webpack");
const WebpackDevServer = require("webpack-dev-server");

const config = require("../config/webpack.config.dev");
const serverConfig = require("../config/webpackDevServer.config");

// Tools like Cloud9 rely on this.
const PORT = parseInt(process.env.PORT, 10) || 3000;
const HOST = "0.0.0.0";

if (PORT == null) {
  // We have not found a port.
  return;
}

const compiler = webpack(config);

const devServer = new WebpackDevServer(compiler, serverConfig);

devServer.listen(PORT, HOST, (err) => {
  if (err) {
    return console.log(err);
  }

  console.log(chalk.cyan("Starting the development server...\n"));
});

["SIGINT", "SIGTERM"].forEach(function (sig) {
  process.on(sig, function () {
    devServer.close();
    process.exit();
  });
});