// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  modules: [
    '@nuxtjs/tailwindcss',
    'shadcn-nuxt',
    '@nuxt/icon'
  ],

  shadcn: {
    prefix: '',
  },

  compatibilityDate: '2024-04-03',

  //componentDir: './components/ui',

  devtools: { enabled: true }
})
