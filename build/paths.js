var path = require('path');

var appreliaRoot = 'src/';
var appgyverRoot = '../www/'
var aureliaRoot = '../app/';

module.exports = {
  root: appreliaRoot,
  aureliaAppRoot: aureliaRoot,
  styles: 'styles/**/*.css',
  output: appgyverRoot,
  appgyverDist: appgyverRoot + 'dist/',
  aureliaSkeleton: 'http://github.com/aurelia/skeleton-navigation.git',
  aureliaGulpTasks: aureliaRoot + '/build/tasks/',
  appgyverGulpTask: 'src/'
};
