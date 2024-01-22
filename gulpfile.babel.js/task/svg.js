import gulp from 'gulp';

// Конфигурация
import path from '../config/path.js';
import app from '../config/app.js';

// Плагины 
import plumber from 'gulp-plumber';
import notify from 'gulp-notify';
import svg from 'gulp-svg-sprite';

// Обработка SvgSprite
export default () => {
  return gulp.src(path.svgSprite.src)
    .pipe(plumber({
      errorHandler: notify.onError(error => ({
        title: 'SVG',
        message: error.message
      }))
    }))
    .pipe(svg(app.svg))
    .pipe(gulp.dest(path.svgSprite.dest));
};
