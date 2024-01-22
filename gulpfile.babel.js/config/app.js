const isProd = process.argv.includes('--production');
const isDev = !isProd;

export default {
  isProd: isProd,
  isDev: isDev,

  htmlmin: {
    collapseWhitespace: isProd
  },

  rename: {suffix: '.min'},
  
  webpack: {
    mode: isProd ? 'development' : 'development'
  },

  imagemin: {
    verbose: true
  },
  
  svg: {
    mode: {
      stack: {
        sprite: '../sprite.svg',
        example: true
      }
    }
  },

  fonter: {
    formats: ['ttf', 'woff', 'eot', 'svg']
  }

};