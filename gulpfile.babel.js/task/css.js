import gulp from 'gulp';

// Конфигурация
import path from '../config/path.js';
import app from '../config/app.js';

// Плагины 
import plumber from 'gulp-plumber';
import notify from 'gulp-notify';
import concat from 'gulp-concat';
import cssimport from 'gulp-cssimport';
import autoprefixer from 'gulp-autoprefixer';
import csso from 'gulp-csso';
import rename from 'gulp-rename';
import groupCssMediaQueries from 'gulp-group-css-media-queries';
import webpCssFixed from 'gulp-webp-css-fixed';
import shorthand from 'gulp-shorthand';


// Обработка CSS
export default () => {
  return gulp.src(path.css.src, {sourcemaps: app.isDev})
    .pipe(plumber({
      errorHandler: notify.onError(error => ({
        title: 'CSS',
        message: error.message
      }))
    }))
    .pipe(concat('main.css'))
    .pipe(cssimport())
    .pipe(webpCssFixed())
    .pipe(autoprefixer())
    .pipe(groupCssMediaQueries())
    .pipe(shorthand())
    .pipe(gulp.dest(path.css.dest, {sourcemaps: app.isDev}))
    .pipe(rename(app.rename))
    .pipe(csso())
    .pipe(gulp.dest(path.css.dest, {sourcemaps: app.isDev}));
};

