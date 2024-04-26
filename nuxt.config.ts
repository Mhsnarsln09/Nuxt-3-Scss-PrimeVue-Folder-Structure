// https://nuxt.com/docs/api/configuration/nuxt-config
export default {
  devtools: { enabled: true },
  typescript: { strict: true },
  modules: ['@pinia/nuxt', 'nuxt-primevue'],
  css: ['~/assets/scss/main.scss'],
  components: true,
  pages: true,
  app: {
    pageTransition: { name: 'bounce', mode: 'out-in' },
    layoutTransition: { name: 'default', mode: 'out-in' },
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    },
  },
  meta: [
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1',
    },
    {
      charset: 'utf-8',
    },
  ],
}
