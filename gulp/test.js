var gulp = require('gulp');
var jasmine = require('gulp-jasmine');

module.exports = function(){
    return gulp.src('./spec/**/*.js')
    .pipe(jasmine({
        verbose: true,
        includeStackTrace: true
    }));
};
