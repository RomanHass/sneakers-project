import gulp from 'gulp';

// Конфигурация
import path from '../config/path.js';
import app from '../config/app.js';

// Плагины 
import plumber from 'gulp-plumber';
import notify from 'gulp-notify';
import autoprefixer from 'gulp-autoprefixer';
import csso from 'gulp-csso';
import rename from 'gulp-rename';
import groupCssMediaQueries from 'gulp-group-css-media-queries';
import gulpSass from 'gulp-sass';
import dartSass from 'sass';
import webpCssFixed from 'gulp-webp-css-fixed';
// import shorthand from 'gulp-shorthand';

const sass = gulpSass(dartSass);

// Обработка SCSS
export default () => {
  return gulp.src(path.scss.src, {sourcemaps: app.isDev})
    .pipe(plumber({
      errorHandler: notify.onError(error => ({
        title: 'SCSS',
        message: error.message
      }))
    }))
    .pipe(sass())
    .pipe(webpCssFixed())
    .pipe(autoprefixer())
    .pipe(groupCssMediaQueries())
    // .pipe(shorthand())
    .pipe(gulp.dest(path.scss.dest, {sourcemaps: app.isDev}))
    .pipe(rename(app.rename))
    .pipe(csso())
    .pipe(gulp.dest(path.scss.dest, {sourcemaps: app.isDev}));
};
