var gulp = require('gulp');
var jasmine = require('gulp-jasmine');

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

gulp.task('test', function () {
    return gulp.src('spec/*.js')
        .pipe(jasmine());
});
