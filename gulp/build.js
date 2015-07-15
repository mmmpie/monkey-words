var gulp = require('gulp');
var ts = require('gulp-typescript');

exports.assemble = function(){
    gulp.src('./app/**/*.css')
    .pipe(gulp.dest('./build'));

    gulp.src('./app/**/*.ico')
    .pipe(gulp.dest('./build'));

    gulp.src('./app/pages/**/*.html')
    .pipe(gulp.dest('./build'));

    gulp.src('./vendor/**/*.js')
    .pipe(gulp.dest('./build/vendor'));
};

exports.compile = function() {
    var tsResult = gulp.src('app/src/**/*.ts')
    .pipe(ts());

    return tsResult.js.pipe(gulp.dest('build/js'));
};
