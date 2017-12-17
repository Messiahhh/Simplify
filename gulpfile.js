const gulp = require('gulp')
const stylus = require('gulp-stylus')
const browserSync = require('browser-sync').create()
// const imagemin = require('gulp-imagemin')

// gulp.task('imagemin', () => {
//     gulp.src('static/src/image/*')
//         .pipe(imagemin())
//         .pipe(gulp.dest('static/dist/image'))
// })

gulp.task('stylus', () => {
    return gulp.src('assets/css/src/*')
        .pipe(stylus())
        .pipe(gulp.dest('assets/css/dist'))
})

gulp.task('reload', function () {
    browserSync.reload()
})


gulp.task('browser-sync', function() {
    browserSync.init({
        proxy: "localhost:2368"
    })
    gulp.watch(['assets/css/src/*', '*.hbs', './partials/*.hbs'], ['stylus', 'reload'])
});





gulp.task('default', ['stylus', 'browser-sync'])
