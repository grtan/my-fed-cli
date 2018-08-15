const path = require('path')
const fse = require('fs-extra')
const inquirer = require('inquirer')
const template = require('../package.json').template
const download = require('./download')

module.exports = function (name) {
  inquirer.prompt([{
    name: 'type',
    message: '请选择项目类型',
    type: 'list',
    choices: Object.keys(template.type)
  }]).then(function (answers) {
    // console.log(answers)
    fse.emptyDirSync(path.join(process.cwd(), name))
    download(template.repository, template.type[answers.type], name)
  })
}