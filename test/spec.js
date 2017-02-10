const { transform, transformFile, transformFileSync, transformFromAst } = require('babel-core')
const { types } = require('babel-types')
const plugin = require('../lib/index.js')
const { resolve, join } = require('path')
const filename = resolve(join(__dirname, './index.js'))

let {code, ast, map} = transformFileSync(filename, {
  babelrc: true,
  plugins: [plugin]
})

console.log(code)

