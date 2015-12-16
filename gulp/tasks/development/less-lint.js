var gulp     = require('gulp');
var recess = require('gulp-recess');
var config   = require('../../config').scsslint;

/**
 * Lint LESS files
 */
gulp.task('lesslint', function() {
  return gulp.src(config.src)
    .pipe(recess(config.options));
});