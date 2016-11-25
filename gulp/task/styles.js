import gulp from 'gulp';
import sass from 'gulp-sass';
import browserSync from 'browser-sync';

gulp.task('styles', function() {
	return gulp.src('./app/styles/**/*.scss')
		.pipe(sass.sync().on('error', sass.logError))
		.pipe(gulp.dest('./dist/styles'))
		.pipe(browserSync.reload({ stream: true }));
});