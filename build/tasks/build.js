var gulp = require('gulp');
var runSequence = require('run-sequence');
var changed = require('gulp-changed');
var paths = require('../paths');
var exec = require('child_process').exec;
var install = require("gulp-install");


gulp.task('copy-appgyver-gulp-task', function (cb) {
  exec('cp ' + paths.appgyverGulpTask + ' ' + paths.aureliaGulpTasks, function (err) {
    console.log(err);
    // cb(err);
  });
});

gulp.task('clone-git', function (cb) {
  exec('git clone "' + paths.aureliaSkeletonUrl + '" ../app', function (err) {
    console.log(err);
    // cb(err);
  });
});

gulp.task('npm-install', function() {
  console.log('installing packages..');

  gulp.src('../app/package.json')
      .pipe(install());
});


  // exec('gulp build', function (ierr) {
  //   console.log(ierr);
  //   // cb(ierr);
  // });
// });

gulp.task('jspm-install', function () {
  exec('jspm install -y', function (ierr) {
    console.log(ierr);
    // cb(ierr);
  });
});

gulp.task('clean', function () {
  // gulp.del()
});

gulp.task('build', function(callback) {
  return runSequence('clean', 'build-git', 'npm-install', 'jspm-install', 'copy-appgyver-gulp-task', callback);
});
