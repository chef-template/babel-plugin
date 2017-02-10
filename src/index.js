
const { existsSync } = require('fs')
const { join, resolve } = require('path')
/**
 * @types types是 babel-types 提供的一个接口 详情查看babel-types
 * 可以通过 https://astexplorer.net/ 查看ast 做对应的处理
 */
module.exports = ({ types }) => {
  return {
    visitor: {
      // ast起始
      Program() {
      },
      FunctionDeclaration(path, { opts }) {
      },
      // import表达式处理
      ImportDeclaration(path, { opts }) {
      },
      // 方法调用表达式
      CallExpression(path, { opts }) {

      },
      // 数字表达式
      MemberExpression(path, { opts }) {
      },

      AssignmentExpression(path, { opts }) {
      },

      ArrayExpression(path, { opts }) {
      },

      Property(path, { opts }) {
      },
      VariableDeclarator(path, { opts }) {
      },

      LogicalExpression(path, { opts }) {
      },

      ConditionalExpression(path, { opts }) {

      },

      IfStatement(path, { opts }) {
      },
    },
  }
}
