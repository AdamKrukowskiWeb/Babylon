var gulp = require('gulp');
var webserver = require('gulp-webserver');


gulp.task('webserver', function() {
  gulp.src('./')
    .pipe(webserver({
      livereload: true,
      open: true,
      directoryListing: {
    enable:true,
    path: 'app'}
    }));
});


gulp.task('default',['webserver']);
