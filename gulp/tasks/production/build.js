var gulp        = require('gulp');
var runSequence = require('run-sequence');

/**
 * Run all tasks needed for a build in defined order
 */
gulp.task('build:production', function(callback) {
  runSequence('delete',
  [
    'jekyll:production',
    'less'
  ],
  // [
    // 'optimize:css'
    // 'optimize:js',
  // ],
  'revision',
  'rev:collect',
  callback);
});

// gulp.task('build:production', function(callback) {
//   runSequence('delete',
//   [
//     'jekyll:production',
//     'less',
//     // 'scripts'
//   ], callback);
// });