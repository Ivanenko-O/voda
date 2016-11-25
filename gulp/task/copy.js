import gulp from 'gulp';
import changed from 'gulp-changed';
import browserSync from 'browser-sync';

gulp.task('copy', function () {
	return gulp.src('./app/resources/**/*')
		.pipe(changed('./dist'))
		.pipe(gulp.dest('./dist'))
		.pipe(browserSync.reload({stream: true}));
});