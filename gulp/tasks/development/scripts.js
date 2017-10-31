var gulp         = require('gulp');
var concat       = require('gulp-concat');
var config       = require('../../config');

gulp.task('scripts', function() {
  return gulp.src(config.scripts.src)
    .pipe(concat('app.js'))
    .pipe(gulp.dest(config.scripts.dest));
});
