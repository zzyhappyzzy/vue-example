/*global -$ */
'use strict';
// generated on 2015-05-08 using generator-gulp-webapp 0.3.0
var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var browserSync = require('browser-sync');
var merge = require('merge-stream');
var reload = browserSync.reload;
var ASSSET = {
    cssdir: "app/styles",
    cssfile: "app/styles/*.css",
    viewsfile: "app/views/**/*.html",
    jsfile: "app/**/*.js",
    indexStyl: "app/stylus/index.styl",
    stylusfile: "app/stylus/*.styl",
};
var webpackfile=["app/**/*.html"]
var webpack = require('gulp-webpack');
var webpackConfig = require("./webpack.config.js");
var APP = "app";

gulp.task("webpack", function(callback) {
    var myConfig = Object.create(webpackConfig);
    // run webpack
    return gulp.src('./app/index')
        .pipe(webpack(myConfig))
        .pipe(gulp.dest('./app/scripts/app'));
});

gulp.task('html', function() {
    // 关于useref用法可以访问以下路径查看
    //https://www.npmjs.com/package/gulp-useref
    var assets = $.useref.assets({
        searchPath: ['app', '.']
    });
    return gulp.src('app/*.html')
        .pipe(assets)
        .pipe($.if('*.css', $.csso())) //css压缩-->合并
        .pipe(assets.restore())
        .pipe($.useref())
        .pipe(gulp.dest('dist'));
});
gulp.task('views', function() {
    return gulp.src(ASSSET.viewsfile)
        .pipe($.if('*.html', $.minifyHtml({
            conditionals: true,
            loose: true
        })))
        .pipe(gulp.dest("dist/views"));
});
gulp.task('scripts', function() {
    return gulp.src(ASSSET.jsfile)
        .pipe($.if('*.js', $.uglify()))
        .pipe(gulp.dest("dist/scripts"));
});
gulp.task('images', function() {
    return gulp.src("app/images/**/*")
        .pipe(gulp.dest("dist/images"));
});

gulp.task('extras', function() {
    return gulp.src([
        'app/*.*',
        '!app/*.html'
    ], {
        dot: true
    }).pipe(gulp.dest('dist'));
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

gulp.task('serve', ['stylus'], function() {
    browserSync({
        notify: false,
        port: 9000,
        server: {
            baseDir: [".", APP] //这里读取当前目录或者app目录
        },
        routes: {
            '/bower_components': 'bower_components'
        }
    });
    // watch for changes
    gulp.watch([
        APP + '/**/*.html',
        APP + '/**/*.js',
        ASSSET.cssfile,
    ]).on('change', function() {
        reload()
    });

    gulp.watch(ASSSET.stylusfile, ['stylus']);
    gulp.watch(webpackfile, ['webpack']);
});
gulp.task('build', ['html', 'images', 'views', 'scripts', 'extras'], function() {
    return gulp.src('dist/**/*')
        .pipe($.size({
            title: 'build',
            gzip: true
        }))
        .pipe(gulp.dest('dist'));
});