var gulp = require('gulp');
var sass = require('gulp-sass');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var cssnano = require('cssnano');


var plugins = [
	autoprefixer({browsers: ['last 2 version']}),
	cssnano()
]
 
gulp.task('sass', function () {
	return gulp.src('src/sass/**/*.sass')
        .pipe(sass())
    	.pipe(postcss(plugins))
    	.pipe(gulp.dest('dest/css'));
});

gulp.task('watch', function() {
    gulp.watch('src/sass/**/*.sass', ['sass']); 
    
});

