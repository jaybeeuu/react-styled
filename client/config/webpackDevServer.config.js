const config = require("./webpack.config.dev");
const paths = require("./paths");

module.exports = {
  compress: true,
  contentBase: paths.appPublic,
  watchContentBase: true,
  open: true,
  hot: true,
  publicPath: config.output.publicPath,
  overlay: true
};
