const gulp = require('gulp');
const zip = require('gulp-zip');

const config = require('./mod/config.json')

gulp.task('zipFiles', () => {
    return gulp.src('mod/**')
        .pipe(zip(`${config.id}-${config.version}.zip`))
        .pipe(gulp.dest('dist'));
});

gulp.task('default', gulp.series('zipFiles'));
