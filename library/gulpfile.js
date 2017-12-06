var gulp = require('gulp');
var jshint = require('gulp-jshint');
var jscs = require('gulp-jscs');
var nodemon = require('gulp-nodemon');

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

gulp.task('inject', function () {
    var wiredep = require('wiredep').stream;
    var inject = require('gulp-inject');
    /**
     * 1st Param - Where your source files are located.
     * 2nd Param - Option to read all the files. In this case, No.
     */
    var injectSrc = gulp.src(['./public/css/*.css',
                            './public/js/*.js'], {read: false});
    var injectOptions = {
        ignorePath: '/public'
    };

    var options = {
        bowerJson: require('./bower.json'),
        directory: './public/lib',
        ignorePath: '../../public'
    };

    return gulp.src('./src/views/*.html')
        .pipe(wiredep(options))
        .pipe(inject(injectSrc, injectOptions))
        .pipe(gulp.dest('./src/views'));
});

gulp.task('serve', ['style', 'inject'], function () {
    var options = { // Option - Things needed in order for this task to run
        script: 'app.js', // What is it going to run.
        delayTime: 1,
        env: {
            'PORT': 3000
        },
        watch: jsFiles // The file nodemon will look for and if any changes, restart everything.
    };

    return nodemon(options)
        .on('restart', function (ev) {
            console.log('Restarting...');
        });
});