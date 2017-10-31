var gulp         = require('gulp');
var browsersync  = require('browser-sync');
var less         = require('gulp-less');
var gulpFilter   = require('gulp-filter');
var prefix       = require('gulp-autoprefixer');
var config       = require('../../config');
var handleErrors = require('../../util/handleErrors');

gulp.task('less', function () {
  return gulp.src(config.less.src)
    .pipe(less())
    .on('error', handleErrors)
    .pipe(prefix(config.autoprefixer))
    .pipe(gulp.dest(config.less.dest))
    .pipe(browsersync.reload({stream:true}));
});
