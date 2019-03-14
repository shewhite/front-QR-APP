const pkg = require("./package");
import path from "path";
import fs from "fs";

const environment = {
  API_URL: "http://192.168.0.104:8000/api"
};
console.log(environment.API_URL);
module.exports = {
  mode: "spa",

  /*
   ** Headers of the page
   */
  head: {
    title: pkg.name,
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: pkg.description }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        type: "text/css",
        href:
          "https://fonts.googleapis.com/css?family=Hind+Guntur:300,400,500,600,700&subset=latin-ext"
      }
    ]
  },
  server: {
    port: 3000, // default: 3000
    host: "0.0.0.0", // default: localhost
    https: {
      key: fs.readFileSync(path.resolve(__dirname, "server.key")),
      cert: fs.readFileSync(path.resolve(__dirname, "server.crt"))
    }
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },

  /*
   ** Global CSS
   */
  css: ["@/assets/global.css"],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],

  /*
   ** Nuxt.js modules
   */
  modules: ["@nuxtjs/axios"],
  axios: {
    baseURL: environment.API_URL,
    credentials: false,
    proxy: false,
    proxyHeaders: false,
    debug: true,
    retry: {
      retries: 3
    }
  },
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
};
