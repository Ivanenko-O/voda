import gulp from 'gulp';
import browserSync from 'browser-sync';

gulp.task('browser-sync', function() {
	return browserSync ({
		server: {
			baseDir: './dist'
		},
		open: false
	});
});