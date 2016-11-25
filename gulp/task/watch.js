import gulp from 'gulp';

gulp.task('watch', function() {
	gulp.watch('./app/resources/**/*', ['copy']);
	gulp.watch('./app/styles/**/*.scss', ['styles']);
	gulp.watch('./app/scripts/**/*.js', ['scripts']);
});