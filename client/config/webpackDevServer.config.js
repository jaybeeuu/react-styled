const config = require("./webpack.config.dev");
const paths = require("./paths");

module.exports = {
  compress: true,
  contentBase: paths.appPublic,
  watchContentBase: true,
  hot: true,
  open: true,
  overlay: {
    warnings: true,
    errors: true
  }
};
