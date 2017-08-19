const gulp = require('gulp');
require('sl-gt-synclint')(gulp);

gulp.task('html:copy', () => {
  gulp.src('./index.html')
    .pipe(gulp.dest('./dist/'));
})