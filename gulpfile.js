var gulp = require('gulp'); 
var concat = require('gulp-concat');
var rename = require('gulp-rename');

//多了JS压缩模块
var uglify = require('gulp-uglify');

// 合并、压缩文件
gulp.task('test', function() {
    gulp.src('./src/*.js')
        .pipe(concat('all.js'))
        .pipe(gulp.dest('./dist'))
        .pipe(rename('all.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./dist'));
});

gulp.task('default', function(){
    gulp.run('test');
    gulp.watch('./src/*.js', function(){
        gulp.run('test');
    });
});