var gulp = require("gulp");
var jsHint = require('gulp-jshint');
var nodemon = require('gulp-nodemon');

var jsFiles = ['*.js', 'src/**/*/.js'];

gulp.task('style', function(){
    console.log("gulp style task");
    return gulp.src(jsFiles)
        .pipe(jsHint());
});

//gulp.task('default',['style']);


gulp.task('inject', function() {
    var wiredep = require("wiredep").stream;
    var options = {
        bowerJson: require('./bower.json'),
        directory:'./bower_components',
        ignorePath: '../../bower_components/'
    };
    
    var inject = require("gulp-inject");
    var injectSrc = gulp.src(['./public/css/*.css', './public/js/*.js']);
    var injectOptions = {
        ignorePath: '/public'
    };
    
    return gulp.src('./src/views/*.html')
    .pipe(wiredep(options))
    .pipe(inject(injectSrc, injectOptions))
    .pipe(gulp.dest('./src/views'));
});

gulp.task('serve', ['style', 'inject'], function(){
    var options = {
        script: 'app.js',
        delayTime: 1,
        watch: jsFiles
    };
    
    return nodemon(options)
        .on('restart', function(ev){
            console.log("Restarting server...");
        });
})