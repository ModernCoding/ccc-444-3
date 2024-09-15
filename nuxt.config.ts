// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig ({
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [ '~/assets/sass/app.sass' ],

  devtools: { enabled: false },

  modules: [
    "@nuxt/image",
    '@pinia/nuxt',
  ],

  pinia: {
    // import { defineStore, storeToRefs } from 'pinia'
    autoImports: [ 'defineStore', 'storeToRefs',  ],

  },

  compatibilityDate: '2024-09-15',
})