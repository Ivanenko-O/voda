import gulp from 'gulp';
import run from 'run-sequence';

gulp.task('serve', ['clean'], function(callback){
	run(['copy', 'styles', 'scripts', 'browser-sync'], 'watch', callback);
});
