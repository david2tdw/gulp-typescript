// gulpfile1.js
var gulp = require('gulp')
var ts = require('gulp-typescript')
var tsProject = ts.createProject('tsconfig.json')
var del = require('del')

gulp.task('clean', function () {
  return del(['dist/*'])
})

gulp.task(
  'default',
  gulp.series('clean', function () {
    return tsProject.src().pipe(tsProject()).js.pipe(gulp.dest('dist'))
  })
)
