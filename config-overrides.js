const dirsAlias = require('./dirConfig')

const {
  override,
  disableEsLint,
  addDecoratorsLegacy,
  addBabelPlugins,
  addWebpackAlias
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
  ),
   addWebpackAlias(Object.assign({}, dirsAlias, {
    mobx: __dirname + "/node_modules/mobx/lib/mobx.es6.js"
  }))
)
