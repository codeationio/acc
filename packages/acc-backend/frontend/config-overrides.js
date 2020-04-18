const { override, addBabelPlugins } = require("customize-cra");

const babelPlugins = addBabelPlugins(
  "lodash",
);

module.exports = override(babelPlugins);
