module.exports = {
  presets: ['next/babel'],
  plugins: [['styled-components', { ssr: true }]],
  env: {
    production: {
      plugins: [
        'babel-plugin-root-import',
        {
          rootPathPrefix: '@',
          rootPathSuffix: 'src',
        },
      ],
    },
  },
}
