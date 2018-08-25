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
gulp.task('server', function() {
    browserSync.init({
        server: {
            baseDir: "dest/"
        },
        files: ['dest/**/*.html','dest/*.css','dest/*.js','build/img/*.*']
    });
});

gulp.task('sass', function () {
	return gulp.src('src/sass/**/*.sass')
        .pipe(sass())
    	.pipe(postcss(plugins))
        .pipe(gulp.dest('dest/css'))
        .pipe(browserSync.stream()); 
});

gulp.task('watch', function() {
    gulp.watch('src/sass/**/*.sass', ['sass']); 
    
});





