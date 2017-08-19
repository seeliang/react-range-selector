const clean = require('gulp-clean'),
  gulp = require('gulp'),
  paths = {
    dist: './dist'
  },
  replace = require('gulp-replace');


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