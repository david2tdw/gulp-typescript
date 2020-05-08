// gulpfile3.js
var gulp  = require('gulp')
var browserify = require('browserify')
var source  = require('vinyl-source-stream') // 用于把打包的 stream 连接到 gulp 管道中。
var watchify = require('watchify')
var tsify = require('tsify')
var chalk = require('chalk')
var paths = {
  pages: ['src/*.html']
} 

var watchedBrowserify = watchify(browserify({
  basedir: '.',
  debug:true,
  entries: ['src/main.ts'],
})).plugin(tsify)


gulp.task('copy-html', function () {
  return gulp.src(paths.pages).pipe(gulp.dest('dist'))
})

function bundle () {
  // console.log(chalk.blue('Hello world!'))
  return watchedBrowserify.bundle().pipe(source('bundle.js')).pipe(gulp.dest('dist'))
}

function logger (message) {
  console.log(chalk.blueBright.bgYellow.bold(message))
}
gulp.task('default', gulp.series('copy-html', bundle))

watchedBrowserify.on('update', bundle)
watchedBrowserify.on('log', logger)
