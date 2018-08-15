const util = require('util')
const colors = require('colors')
const spawn = require('child_process').spawn
// const exec = util.promisify(require('child_process').exec)

module.exports = async function (repository, branch, dir) {
  console.log('开始下载模板'.green)
  console.log(`repository：${repository}`.rainbow.green)
  console.log(`branch：${branch}`.green)
  const sub = spawn('git', ['clone', '-b', branch, repository, dir], {
    stdio: 'inherit'
  })

  process.stdout.on('data', (data) => {
    console.log(`输出：${data}`)
  })

  process.stderr.on('data', (data) => {
    console.log(`错误：${data}`)
  })

  process.on('close', (code) => {
    console.log(`子进程退出码：${code}`)
  })
}