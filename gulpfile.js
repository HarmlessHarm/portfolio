var gulp = require('gulp')
var sass = require('gulp-sass')

gulp.task('default', ['sass', 'watch'])

gulp.task('sass', function() {
	gulp.src('static/scss/styles.scss')
		.pipe(sass({outputStyle:'expanded'})
			.on('error', sass.logError))
		.pipe(gulp.dest('static/css'));
});

gulp.task('watch', function() {
	gulp.watch('static/scss/**/*.scss', ['sass']);
});
