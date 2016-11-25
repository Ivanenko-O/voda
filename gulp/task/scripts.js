import gulp from 'gulp';
import concat from 'gulp-concat';
import uglify from 'gulp-uglify';
import browserSync from 'browser-sync';

gulp.task('scripts', function() {
	return gulp.src([
			'app/resources/libs/jquery-3.0.0.min.js',
			'app/scripts/**/*.js'
		])
		.pipe(concat('bundle.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest('./dist/scripts'))
		.pipe(browserSync.reload({stream: true}));
});