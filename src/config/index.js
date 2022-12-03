const development = require("./dev");
const production = require("./prod");
const test = require("./test");

const configs = {
  development,
  production,
  test,
};

const exportedConfig = configs[process.env.NODE_ENV];
console.log("[nfthost] running", process.env.NODE_ENV, "configuration");

module.exports = exportedConfig;
