module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'CSS Frameworks',
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
  css: [{
    src: '~assets/css/main.scss',
    lang: 'scss'
  }],
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
    },
    vendor: [
      '~/assets/js/shared.js'
    ]
  }
}
