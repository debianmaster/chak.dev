const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---node-modules-gatsby-theme-dox-src-templates-doc-js": hot(preferDefault(require("/Users/chakradharrao/chak.dev/node_modules/gatsby-theme-dox/src/templates/doc.js")))
}

