var gulp = require("gulp");
var jsHint = require('gulp-jshint');


var jsFiles = ['*.js', 'src/**/*/.js'];

gulp.task('style', function(){
    console.log("gulp style task");
    return gulp.src(jsFiles)
        .pipe(jsHint());
});

//gulp.task('default',['style']);