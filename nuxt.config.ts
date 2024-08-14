// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig ({
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [ '~/assets/sass/app.sass' ],

  devtools: { enabled: false },
  compatibilityDate: '2024-08-14',
  modules: ["@nuxt/image"]
})