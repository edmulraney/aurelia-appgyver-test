var gulp = require('gulp');
var runSequence = require('run-sequence');
var changed = require('gulp-changed');
var paths = require('../paths');

gulp.task('copy-indexhtml', function () {
  return gulp.src('index.html')
    .pipe(gulp.dest(paths.appgyverRoot));
});

gulp.task('copy-bundle', function () {
    return gulp.src([paths.appBuild, paths.appAurelia])
    .pipe(changed(paths.appgyverSource))
    .pipe(gulp.dest(paths.appgyverSource));
});

gulp.task('copy-dist', function () {
  return gulp.src(paths.output + '**/*')
    .pipe(changed(paths.appgyverSource))
    .pipe(gulp.dest(paths.appgyverSource));
});

gulp.task('copy-configjs', function () {
  return gulp.src('config.js')
    .pipe(gulp.dest(paths.appgyverRoot));
});

gulp.task('copy-styles', function () {
  return gulp.src(paths.style)
    .pipe(gulp.dest(paths.appgyverRoot + 'styles'));
});

gulp.task('copy-jspm', function () {
  return gulp.src(paths.jspm + '**/*')
    .pipe(changed(paths.appgyverRoot + paths.jspm))
    .pipe(gulp.dest(paths.appgyverRoot));
});
