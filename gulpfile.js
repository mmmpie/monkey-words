// external modules
var gulp = require('gulp');
var jasmine = require('gulp-jasmine');
var ts = require('gulp-typescript');

//internal modules
var test = require('./gulp/test.js');
var build = require('./gulp/build.js');

function nop(){}

gulp.task('default', ['compile','assemble']);

gulp.task('test', ['compile'], test);

gulp.task('compile', build.compile);
gulp.task('assemble', build.assemble);

gulp.on('err', function(e) {
  console.log(e.err.stack);
});
