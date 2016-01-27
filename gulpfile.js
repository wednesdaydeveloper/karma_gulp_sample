var gulp = require('gulp'),
    webpack = require('gulp-webpack-build'),
    karma = require('karma').server,
    WEBPACK_CONFIG = __dirname + '/webpack.conf.js',
    KARMA_CONFIG = __dirname + '/karma.conf.js';

gulp.task('webpack-build', function () {
  return gulp.src(WEBPACK_CONFIG)
      .pipe(webpack.run())
      .pipe(gulp.dest(''));
});

gulp.task('karma-test', function () {
  karma.start({configFile: KARMA_CONFIG});
});