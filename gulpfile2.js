var gulp = require('gulp')
var browserify = require('browserify') // 由Node.js环境移到浏览器环境里, 把所有模块捆绑成一个JavaScript文件。
var source  = require('vinyl-source-stream') // vinyl-source-stream会将Browserify的输出文件适配成gulp能够解析的格式.
var tsify = require('tsify') // tsify是Browserify的一个插件，就像gulp-typescript一样，它能够访问TypeScript编译器。
var path = {
  pages: ['src/*.html']
}

gulp.task('copy-html', function () {
  return gulp.src(path.pages).pipe(gulp.dest('dist'))
})

// gulp -v, 查看全局gulp 和本地项目的gulp版本.
// gulp 4中依赖任务列表写法发生变化

gulp.task('default', gulp.series('copy-html', function () {
  return browserify({
    basedir: '.',
    debug: true, // 让 tsify在输出文件里生成source maps。可以在浏览器的sources面板下调试源代码
    entries: ['src/main.ts'],
    cache: {},
    packageCache: {}
  })
  .plugin(tsify)
  .bundle()
  .pipe(source('bundle.js'))
  .pipe(gulp.dest('dist'))
}))

