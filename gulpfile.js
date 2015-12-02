
'use strict';
var gulp = require('gulp');
var webpack = require('gulp-webpack');
var webpackConfig = require("./webpack.config.js");
var webpackBuildConfig = require("./webpack.build.config.js");
gulp.task("webpack", function(callback) {
    var myConfig = Object.create(webpackConfig);
    // run webpack
    return gulp.src('index')
        .pipe(webpack(myConfig))
        .pipe(gulp.dest('./static'));
});
gulp.task('clean', require('del').bind(null, ['dist']));
gulp.task('stylus', function() {
    return gulp.src(ASSSET.indexStyl)
        .pipe($.sourcemaps.init())
        .pipe($.stylus())
        .pipe($.sourcemaps.write("."))
        .pipe(gulp.dest(ASSSET.cssdir));
});

gulp.task('default', ['clean'], function() {
    gulp.start('build');
});
gulp.task('serve', function() {
    gulp.watch("./src/components/*.vue", ['webpack']);
});
gulp.task('build', ['clean','webpack'], function() {
     gulp.start('build');
});