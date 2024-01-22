// Плагины 
import del from 'del';

// Конфигурация
import path from '../config/path.js';

// Удаление директори
export default () => {
  return del(path.root);
};
