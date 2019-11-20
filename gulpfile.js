const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();
const autoprefixer = require('gulp-autoprefixer');
const gulpStylelint = require('gulp-stylelint');

gulp.task('autoprefixer', function (done) {
    gulp.src('css/*.css')
        .pipe(autoprefixer({
            cascade: false
        }))
        .pipe(gulp.dest("css"));

    done();
})

function style() {
    return gulp.src('./scss/**/*style.scss')
        .pipe(sass())
        .pipe(autoprefixer())
        .pipe(gulp.dest('./css'))
        .pipe(browserSync.stream())
}

function lintCss() {
    return src('./scss/**/*.scss')
        .pipe(gulpStylelint({
            reporters: [{
                formatter: 'string',
                console: true
            }]
        }));
}

function watch() {
    browserSync.init({
        server: {
            baseDir: './'
        }
    })
    gulp.watch('./scss/**/*.scss', style);
    gulp.watch('./*.html').on('change', browserSync.reload);
}
exports.autoprefixer = autoprefixer;
exports.style = style;
exports.lintCss = lintCss;
exports.watch = watch;