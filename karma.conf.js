module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['mocha', 'chai', 'browserify'],
    files: [
      'spec/**/*.js'
    ],
    exclude: [
    ],
    preprocessors: {
      'spec/**/*.js': ['browserify']
    },
    browserify: {
      debug: true,
      transform: [require('browserify-istanbul')({
        instrumenter: require('isparta'),
        ignore: ['**/spec/**']
      }), 'babelify']
    },
    reporters: ['progress', 'coverage'],
    coverageReporter: {
      type: 'lcov'
    },
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    browsers: ['PhantomJS'],
    singleRun: true,
    concurrency: Infinity
  })
}