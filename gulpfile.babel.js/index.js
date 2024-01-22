import gulp from 'gulp';
import browserSync from 'browser-sync';

// Конфигурация
import path from'./config/path.js';
import app from'./config/app.js';

// Импорт задач
import clear from'./task/clear.js';
import html from'./task/html.js';
// import css from'./task/css.js';
import scss from'./task/scss.js';
import js from'./task/js.js';
import img from'./task/img.js';
import svgSprite from'./task/svg.js';
import font from'./task/font.js';

// Сервер
const server = () => {
  browserSync.init({
    server: {
      baseDir: path.root
    }
  });
};

// Наблюдатель
const watcher = () => {
  gulp.watch(path.html.watch, html).on('change', browserSync.reload);
  // gulp.watch(path.css.watch, css).on('change', browserSync.reload);
  gulp.watch(path.scss.watch, scss).on('change', browserSync.reload);
  gulp.watch(path.js.watch, js).on('change', browserSync.reload);
  gulp.watch(path.img.watch, img).on('change', browserSync.reload);
  gulp.watch(path.svgSprite.watch, svgSprite).on('change', browserSync.reload);
  gulp.watch(path.font.watch, font).on('change', browserSync.reload);
};

const build = gulp.series(
  clear,
  gulp.parallel(html, scss, js, img, svgSprite, font)
);

const dev = gulp.series(
  build, 
  gulp.parallel(watcher, server)
);

// Задачи
export {html};
// export {css};
export {scss};
export {js};
export {img};
export {svgSprite};
export {font};

// Сборка
export default app.isProd
  ? build
  : dev;
