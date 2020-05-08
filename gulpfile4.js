// 压缩代码
var gulp = require('gulp')
var browserify = require('browserify')
var source = require('vinyl-source-stream')
// var watchify = require('watchify')
var tsify = require('tsify')
// var gutil = require('gulp-util')
// new plugins
var uglify = require('gulp-uglify')
var buffer = require('vinyl-buffer')
var sourcemaps = require('gulp-sourcemaps')

var paths = {
  pages: ['src/*.html'],
}

gulp.task('copy-html', function () {
  return gulp.src(paths.pages).pipe(gulp.dest('dist'))
})

gulp.task(
  'default',
  gulp.series('copy-html', function () {
    return browserify({
      basedir: '.',
      debug: true,
      entries: ['src/main.ts'],
    })
      .plugin(tsify)
      .bundle()
      .pipe(source('bundle.js'))
      .pipe(buffer())
      .pipe(
        sourcemaps.init({
          loadMaps: true,
        })
      )
      .pipe(uglify())
      .pipe(sourcemaps.write('./'))
      .pipe(gulp.dest('dist'))
  })
)
