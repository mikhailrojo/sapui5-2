var gulp = require('gulp'),
    browserSync= require('browser-sync');

gulp.task('default', function(){
    browserSync.init({
        server: {
            baseDir: './webApp/'
        }
    });
    browserSync.watch('./webApp/**/**.*').on("change", browserSync.reload);
})
