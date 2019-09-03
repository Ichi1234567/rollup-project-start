module.exports = {
  presets: [
    [ '@babel/preset-env', {
        targets: {
          browsers: [
            "cover 99.5%",
          ],
        },
      },
    ],
    '@babel/preset-typescript',
  ],
  plugins: [
    "@babel/plugin-proposal-class-properties",
  ],
  env: {
    production: {
      presets: ['minify'],
    },
  },
};
