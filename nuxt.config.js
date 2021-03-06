import path from 'path'

const dataPath = path.join(__dirname, process.env.repoDataPath || 'data.json')
const frameworks = require(dataPath)

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'CSS Frameworks',
    titleTemplate: '%s - CSS Frameworks',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Compare CSS frameworks.' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Lato' }
    ]
  },
  css: ['~/assets/css/main.scss'],

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#685143' },
  /*
  ** Build configurationwebpack
  */
  build: {
    /*
    ** Run ESLINT on save
    */
    extend (config, ctx) {
      if (ctx.dev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  env: {
    frameworks
  },
  plugins: ['~/plugins/font-awesome']
}
