const pkg = require('./package')
import path from 'path'
import fs from 'fs'

const environment = {
  API_URL: 'http://192.168.0.100/QrAppServer/public/api'
}
console.log(environment.API_URL);
module.exports = {

  mode: 'spa',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      
    ]
  },
  server: {
    port: 3000, // default: 3000
    host: '0.0.0.0', // default: localhost
    https: {
      key: fs.readFileSync(path.resolve(__dirname, 'server.key')),
      cert: fs.readFileSync(path.resolve(__dirname, 'server.crt'))
    }
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    //'@nuxtjs/auth'
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
    //proxy: true
    //baseURL: 'http://127.0.0.1:8000/api/',
    baseURL: environment.API_URL,
    credentials : false,
    proxy: false,
    proxyHeaders: false,
    debug: true,
    retry: {
      retries: 3
    },
  },
  /*
  proxy:{
    '/api': 'http://127.0.0.1:8000/api/',
    'register': 'http://127.0.0.1:8000/api/register'
  },
  *//*
  auth: {
    strategies: {
      local: {
        endpoints: {
          login: { url: 'login', method: 'post', propertyName: 'data.token' },
          register: { url: 'register', method: 'post', propertyName: 'token' },
          user: { url: 'user', method: 'get', propertyName: 'data' },
          logout: false
        }
      }
    }
  },
  */
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      
    }
  }
}
