var gulp      = require('gulp'), // Подключаем Gulp
    sass        = require('gulp-sass'), //Подключаем Sass пакет,
    browserSync = require('browser-sync'); // Подключаем Browser Sync
    var  plumber = require('gulp-plumber');
    var  notify = require('gulp-notify');

    // var gulp = require('gulp');
    // var sass = require('gulp-sass');
    // var concat = require('gulp-concat');
    // var clean = require('gulp-clean');
    

gulp.task('sass', function(){ // Создаем таск Sass
    return gulp.src('app/scss/**/*.scss') // Берем источник
        .pipe(plumber({
            errorHandler: notify.onError(err => ({
              title: 'Styles',
              message: err.message
            }))
        }))  
        .pipe(sass()) // Преобразуем Sass в CSS посредством gulp-sass
        .pipe(gulp.dest('app/dist/css')) // Выгружаем результата в папку app/css
        .pipe(browserSync.reload({stream: true})) // Обновляем CSS на странице при изменении
});

gulp.task('browser-sync', function() { // Создаем таск browser-sync
    browserSync({ // Выполняем browserSync
        server: { // Определяем параметры сервера
            baseDir: 'app' // Директория для сервера - app
        },
        port : 8100,
        notify: false // Отключаем уведомления
    });
});

gulp.task('watch', function() {
    gulp.watch('app/scss/**/*.scss', gulp.parallel('sass')); // Наблюдение за sass файлами
});
gulp.task('default', gulp.parallel('sass', 'browser-sync', 'watch'));