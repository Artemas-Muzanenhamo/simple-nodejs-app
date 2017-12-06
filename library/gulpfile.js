var gulp = require('gulp');
var jshint = require('gulp-jshint');
var jscs = require('gulp-jscs');

var jsFiles = ['*.js', 'src/**/*.js'];

// In order for gulp to do something we would need to create a task.
gulp.task('style', function() {
    return gulp.src(jsFiles) // Tells Gulp where the source of our JS is
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish', {
            verbose: true
        }))
        .pipe(jscs());
});