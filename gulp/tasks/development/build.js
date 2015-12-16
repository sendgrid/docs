// var gulp        = require('gulp');
// var runSequence = require('run-sequence');

// *
//  * Run all tasks needed for a build in defined order
 
// gulp.task('build', function(callback) {
//   runSequence('delete',
//   [
//     'jekyll',
//     'less',
//     // 'scripts'
//   ], callback);
// });

var gulp        = require('gulp');
var runSequence = require('run-sequence');

/**
 * Run all tasks needed for a build in defined order
 */
gulp.task('build', function(callback) {
  runSequence('delete',
  [
    'jekyll',
    'less'
  ],
  [
    'optimize:css'
    // 'optimize:js',
  ],
  'revision',
  'rev:collect',
  callback);
});