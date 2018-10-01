var gulp         = require('gulp');
var config       = require('../../config');

/**
 * Start browsersync task and then watch files for changes
 */
// gulp.task('watch', ['browsersync'], function() {
  // gulp.watch(config.jekyll,  ['jekyll-rebuild']);
  // gulp.watch(config.less,    ['less', 'lesslint']);
  // gulp.watch(config.scripts, ['scripts', 'jshint']);
  // gulp.watch(config.images,  ['images']);



gulp.task('watch',  ['browsersync'], function () {
  gulp.watch('source/_includes/**/*.{html,xml}', ['jekyll-rebuild']);
  gulp.watch('source/_layouts/*.html,xml', ['jekyll-rebuild']);
  gulp.watch('source/_assets/stylesheets/**/*.less', ['less']);
  gulp.watch('source/_assets/javascripts/**/*.less', ['jekyll-rebuild']);
});
