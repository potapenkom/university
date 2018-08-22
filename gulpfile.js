var gulp = require('gulp');
var sass = require('gulp-sass');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var cssnano = require('cssnano');
var browserSync = require('browser-sync').create();

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

gulp.task('browser-sync', function() { 
    browserSync({ 
        server: { 
            baseDir: 'dest' 
        },
        notify: false 
    });
});

gulp.task('watch', ['browser-sync', 'sass'], function() {
    gulp.watch('src/sass/**/*.sass', ['sass']); 
    
});




