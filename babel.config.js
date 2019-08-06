module.exports = {
  presets: [
    [ '@babel/preset-env', { targets: { node: 'current' } } ],
    '@babel/preset-typescript',
  ],
  env: {
    production: {
      presets: ['minify'],
    },
  },
};
