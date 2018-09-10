const config = require("./webpack.config.dev");
const paths = require("./paths");

module.exports = {
  compress: true,
  contentBase: paths.appPublic,
  watchContentBase: true,
  hot: true,
  open: true,
  publicPath: config.output.publicPath,
  overlay: {
    warnings: true,
    errors: true
  }
};
