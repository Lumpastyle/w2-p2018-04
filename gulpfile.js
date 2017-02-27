var gulp = require('gulp'),
    sass = require('gulp-sass'),
    sync = require('browser-sync').create();
    svgSprite = require("gulp-svg-sprites");
    image = require('gulp-image');


// --- images
gulp.task('image', function () {
    gulp.src('./app/assets/img/*')
        .pipe(image())
        .pipe(gulp.dest(__dirname + '/dist/assets/img/'));
});

gulp.task('default', ['image']);

// --- SVG to Sprite


gulp.task('sprites', function () {
    return gulp.src('app/assets/svg/*')
        .pipe(svgSprite())
        .pipe(gulp.dest("/dist/assets/svg"));
});

gulp.task('html', function() {
    gulp.src('app/index.html')
        .pipe(gulp.dest('dist'))
        .pipe(sync.stream());
});

gulp.task('scss', function() {
    return gulp.src('app/scss/style.scss')
        .pipe(sass())
        .pipe(gulp.dest('dist/css'))
        .pipe(sync.stream());
});

gulp.task('watch', function() {
  gulp.watch(['./app/scss/**/*.scss'], ['scss']);
  gulp.watch(['./app/index.html'], ['html']);
});

gulp.task('sync', ['html', 'scss', 'watch'], function() {
    sync.init({
        server: __dirname + '/dist'
    });
});

gulp.task('default', ['sync'], function() {});

