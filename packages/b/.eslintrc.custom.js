const baseConfig = require("./.eslintrc.js");

module.exports = {
  ...baseConfig,
  rules: {
    ...baseConfig.rules,
    "no-delete-var": "off"
  }
}
