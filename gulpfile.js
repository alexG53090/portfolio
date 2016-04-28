var gulp = require("gulp")
var sass = require('gulp-sass')
var browserSync = require('browser-sync').create()
var useref = require('gulp-useref')
var uglify = require('gulp-uglify')
var gulpIf = require('gulp-if')
var cssnano = require('gulp-cssnano')
var imagemin = require('gulp-imagemin')
var cache = require('gulp-cache')
var del = require('del')
var runSequence = require('run-sequence')
var babel = require('gulp-babel');

gulp.task('useref', () => {
  return gulp.src('public/**/**')
    .pipe(useref())
    .pipe(gulpIf('*.js', uglify()))
    .pipe(gulpIf('*.css', cssnano()))
    .pipe(gulp.dest('dist'))
})

gulp.task('browserSync', () => {
  browserSync.init({
    server: {
      baseDir: 'public'
    }
  })
})

gulp.task('sass', () => {
  return gulp.src('public/scss/*.scss')
  .pipe(sass())
  .pipe(gulp.dest('public/css'))
  .pipe(browserSync.reload({
    stream: true
  }))
})

gulp.task('imagemin', () => {
  return gulp.src('public/images/**/*.+(png|jpg|gif|svg)')
  .pipe(cache(imagemin({
    interlaced: true
  })))
  .pipe(gulp.dist('dist/images'))
})

gulp.task('watch', ["browserSync", "sass"], () => {
  gulp.watch('public/scss/*.scss', ["sass"], () => {
  })
})

gulp.task('clean:dist', () => {
  return del.sync('dist')
})

gulp.task('cache:clear', () => {
  return cache.clearAll()
})

gulp.task('default', () => {
  runSequence('clean:dist',
  ['sass','useref','browserSync', 'watch'], () => {
    console.log('finishing tasks');
  })
})
