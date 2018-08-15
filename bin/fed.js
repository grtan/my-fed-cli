#!/usr/bin/env node
const program = require('commander')
const init = require('../src/init')

program.version(require('../package.json').version)

program.command('init <project-name>')
  .description('初始化项目')
  .action(init)

// 没有参数时输出help信息
if (process.argv.length < 3) {
  program.outputHelp()
} else {
  program.parse(process.argv)
}