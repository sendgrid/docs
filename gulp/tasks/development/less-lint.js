var gulp     = require('gulp');
var recess = require('gulp-recess');
var config   = require('../../config').lesslint;

/**
 * Lint LESS files
 */
gulp.task('lesslint', function() {
  return gulp.src(config.lesslint.src)
    .pipe(recess(config.lesslint.options));
});
