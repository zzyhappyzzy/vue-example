
'use strict';
var gulp = require('gulp');
var ASSSET = {
    cssdir: "app/styles",
    cssfile: "app/styles/*.css",
    viewsfile: "app/views/**/*.html",
    indexStyl: "app/stylus/index.styl",
    stylusfile: "app/stylus/*.styl",
};
var webpack = require('gulp-webpack');
var webpackConfig = require("./webpack.config.js");
var webpackBuildConfig = require("./webpack.build.config.js");
var APP = "app";

gulp.task("webpack", function(callback) {
    var myConfig = Object.create(webpackConfig);
    // run webpack
    return gulp.src('./app/index')
        .pipe(webpack(myConfig))
        .pipe(gulp.dest('./app/scripts/app'));
});

gulp.task('clean', require('del').bind(null, ['dist']));

// 编译-->合并（该任务是开发时候用的）
gulp.task('styles', ['stylus', 'concatCss'], function() {

});
gulp.task('concatCss', function() {
    return gulp.src("app/vendor/*.css")
        .pipe($.concatCss("vendor.css"))
        .pipe(gulp.dest(ASSSET.cssdir));
});
gulp.task('stylus', function() {
    return gulp.src(ASSSET.indexStyl)
        .pipe($.sourcemaps.init())
        .pipe($.stylus())
        .pipe($.sourcemaps.write("."))
        .pipe(gulp.dest(ASSSET.cssdir));
});
// 该任务是开发时候用的end

gulp.task('default', ['clean'], function() {
    gulp.start('build');
});
gulp.task('watch', function() {
    gulp.watch(ASSSET.stylusfile, ['stylus']);
});
gulp.task('build', ['scripts', 'extras'], function() {
    return gulp.src('dist/**/*')
        .pipe($.size({
            title: 'build',
            gzip: true
        }))
        .pipe(gulp.dest('dist'));
});