'use strict'

var gulp = require('gulp');
var sass = require('gulp-sass');
var cssnano = require('gulp-cssnano');

sass.compiler = require('node-sass');

gulp.task('sass', function(){
    return gulp.src('./stylesheets/scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(cssnano())
        .pipe(gulp.dest('./stylesheets/css'))
});

gulp.task('sass:watch', function(){
    gulp.watch('./stylesheets/scss/**/*.scss', gulp.series('sass'))
});

gulp.task('default', gulp.series('sass:watch'));