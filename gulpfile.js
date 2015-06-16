var gulp = require('gulp');
var jasmine = require('gulp-jasmine');
var ts = require('gulp-typescript');

gulp.task('default', function() {
    gulp.src('./app/**/*.js')
    .pipe(gulp.dest('./build'));

    gulp.src('./app/**/*.css')
    .pipe(gulp.dest('./build'));

    gulp.src('./app/**/*.ico')
    .pipe(gulp.dest('./build'));

    gulp.src('./app/pages/*.html')
    .pipe(gulp.dest('./build'));

    gulp.src('./vendor/**/*.js')
    .pipe(gulp.dest('./build/vendor'));
});

function nop(){};

function test(){
    return gulp.src('./spec/**/*.js')
    .pipe(jasmine({
        verbose: true,
        includeStackTrace: true
    }));
}

function assemble(){
    gulp.src('./app/**/*.css')
    .pipe(gulp.dest('./build'));

    gulp.src('./app/**/*.ico')
    .pipe(gulp.dest('./build'));

    gulp.src('./app/pages/**/*.html')
    .pipe(gulp.dest('./build'));

    gulp.src('./vendor/**/*.js')
    .pipe(gulp.dest('./build/vendor'));
}

function compile() {
    var tsResult = gulp.src('app/src/**/*.ts')
    .pipe(ts());

    return tsResult.js.pipe(gulp.dest('build/js'));
}

gulp.task('test', ['compile'], test);

gulp.task('compile', compile);
gulp.task('assemble', assemble);

gulp.on('err', function(e) {
  console.log(e.err.stack);
});
