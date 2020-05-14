// gulpfile6.js 调用node.js API 相关例子
var gulp = require('gulp')
const { EventEmitter } = require('events')
const { exec } = require('child_process')
const os = require('os')
// const process = require('process') // NODE.JS 全局变量, 可不显示引用

gulp.task('exec', function (cb) {
  return exec('dir > a.txt')
})

gulp.task('check-os', function (cb) {
  // console.log(os.platform() + ',' + os.hostname())
  console.log(os.platform() + `, ${os.hostname()}`)
  
  console.log('你好世界')
  // 打印到 stdout: 你好世界
  console.log('你好%s', '世界')
  // 打印到 stdout: 你好世界
  const name = '描述'
  console.warn(`警告${name}`)
  console.error(new Error('这是手动抛出的错误信息'))
  // 打印到 stderr: [Error: 这是手动抛出的错误信息]

  cb()
})

gulp.task('check-process', function (cb) {
  console.log(process.env)
  cb()
})
