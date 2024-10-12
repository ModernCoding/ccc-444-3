// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig ({
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [ '~/assets/sass/app.sass' ],

  devtools: { enabled: false },

  modules: [
    "@nuxt/image",
    '@nuxtjs/i18n',
    '@pinia/nuxt',
  ],

  i18n: {
    vueI18n: './i18n.config.js'
  },

  pinia: {
    // import { defineStore, storeToRefs } from 'pinia'
    autoImports: [ 'defineStore', 'storeToRefs',  ],

  },

  compatibilityDate: '2024-09-15',
})