'use strict'

const gulp = require('gulp');
const sass = require('gulp-sass');
const cssnano = require('gulp-cssnano');

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