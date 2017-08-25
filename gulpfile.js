const clean = require('gulp-clean'),
  gulp = require('gulp'),
  paths = {
    src: './src/',
    dist: './dist/',
    package: './node_modules/'
  },
  replace = require('gulp-replace'),
  rename = require('gulp-rename'),
  sequence = require('run-sequence'),
  webpack = require('webpack-stream');

require('sl-gt-synclint')(gulp);

gulp.task('html', () => {
  return gulp.src('./index.html')
    .pipe(replace('.js','.min.js'))
    .pipe(replace('http://localhost:8080/dist/',''))
    .pipe(gulp.dest(paths.dist));
});

gulp.task('clean',() => {
  return gulp.src(paths.dist)
    .pipe(clean());
});

gulp.task('vendor:publish', () => {
  return gulp.src([
    paths.package + 'axios/dist/axios.min.js', // TODO: simplify this 
    paths.package + 'react/dist/react.min.js',
    paths.package + 'react-dom/dist/react-dom.min.js',
    paths.package + 'react-redux/dist/react-redux.min.js',
    paths.package + 'react-router-dom/umd/react-router-dom.min.js',
    paths.package + 'redux/dist/redux.min.js'
  ])
    .pipe(gulp.dest(paths.dist + 'js/vendor/'));
});

gulp.task('vendor:dev', () => {
  return gulp.src([
    paths.package + 'axios/dist/axios.js',
    paths.package + 'react/dist/react.js',
    paths.package + 'react-dom/dist/react-dom.js',
    paths.package + 'react-redux/dist/react-redux.js',
    paths.package + 'react-router-dom/umd/react-router-dom.js',
    paths.package + 'redux/dist/redux.js'
  ])
    .pipe(gulp.dest(paths.dist + 'js/vendor/'));
});

gulp.task('webpack',() => {
  return gulp.src(paths.src + 'js/app.js')
    .pipe(webpack(require('./webpack.config.js')))
    .pipe(gulp.dest(paths.dist + 'js/'));
});

gulp.task('js:rename', () => {
  return gulp.src(paths.dist + 'js/app.js')
    .pipe(rename('app.min.js'))
    .pipe(gulp.dest(paths.dist + 'js/'));
});

gulp.task('js:clean', () => {
  return gulp.src(paths.dist + 'js/app.js')
    .pipe(clean());
});

gulp.task('publish', () => {
  sequence(
    'clean',
    ['html','webpack','vendor:publish'],
    'js:rename',
    'js:clean'
  );
});