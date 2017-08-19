const clean = require('gulp-clean'),
  gulp = require('gulp'),
  paths = {
    src: './src/',
    dist: './dist/',
    package: './node_modules/'
  },
  replace = require('gulp-replace'),
  sequence = require('run-sequence'),
  webpack = require('webpack-stream');

require('sl-gt-synclint')(gulp);

gulp.task('html', () => {
  return gulp.src('./index.html')
    .pipe(replace('http://localhost:8080/dist/',''))
    .pipe(gulp.dest(paths.dist));
})

gulp.task('clean',() => {
  return gulp.src(paths.dist)
  .pipe(clean());
})

gulp.task('vendor', () => {
  return gulp.src([
    paths.package + 'react/dist/react.min.js',
    paths.package + 'react-dom/dist/react-dom.min.js',
    ])
    .pipe(gulp.dest(paths.dist + 'js/vendor/'))
});

gulp.task('webpack',() => {
  return gulp.src(paths.src + 'js/app.js')
    .pipe(webpack(require('./webpack.config.js')))
    .pipe(gulp.dest(paths.dist + 'js/'));
});

gulp.task('publish', () => {
  sequence(
    'clean',
    ['html','webpack','vendor']
  );
});