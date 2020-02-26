const {
    override,
    disableEsLint,
    addDecoratorsLegacy,
    addBabelPlugins
} = require('customize-cra')

module.exports = override(
    // enable legacy decorators babel plugin
  addDecoratorsLegacy(),

  // disable eslint in webpack
  disableEsLint(),

  // addBabelPreset('mobx')

  ...addBabelPlugins(
    // ["@babel/plugin-proposal-decorators", { "legacy": true }],
    ["@babel/plugin-proposal-class-properties", { "loose": true }]
  )
)