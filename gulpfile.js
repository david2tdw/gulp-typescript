// Babel

/*
https://github.com/babel/babelify
# Babel 7
$ npm install --save-dev babelify @babel/core @babel/preset-env vinyl-buffer gulp-sourcemaps

更改tsconfig.json中的 "target": "ES2015"
*/

var gulp = require('gulp')
var browserify = require('browserify')
var source = require('vinyl-source-stream')

var tsify = require('tsify')

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
      .transform('babelify', {
        presets: ['@babel/preset-env'], // babel: 7.0 版本的设置
        extensions: ['.ts'],
      })
      .bundle()
      .pipe(source('bundle.js'))
      .pipe(buffer())
      .pipe(
        sourcemaps.init({
          loadMaps: true,
        })
      )
      .pipe(sourcemaps.write('./'))
      .pipe(gulp.dest('dist'))
  })
)
