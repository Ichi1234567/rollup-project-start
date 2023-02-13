module.exports = {
  presets: [
    [ '@babel/preset-env', {
        modules: 'commonjs',
        spec: true,
        forceAllTransforms: true,
        useBuiltIns: 'usage',
        corejs: 3,
        targets: {
          browsers: [
            'cover 99.5%',
          ],
        },
      },
    ],
    '@babel/preset-typescript',
  ],
  plugins: [
    '@babel/plugin-proposal-class-properties',
  ],
  env: {
    production: {
      presets: ['minify'],
    },
  },
};
