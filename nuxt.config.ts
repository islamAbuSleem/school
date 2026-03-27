// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  future: {
    compatibilityVersion: 4,
  },
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  css: ['@/assets/css/main.css'],
  nitro: {
    output: {
      dir: '.output-new'
    }
  },
  tailwindcss: {
    config: {
      theme: {
        extend: {
          colors: {
            accent: {
              DEFAULT: '#6366F1',
              hover: '#4F46E5',
              glow: 'rgba(99, 102, 241, 0.25)',
            },
            primary: '#0F172A',
          }
        }
      }
    }
  },
  app: {
    head: {
      title: 'Editorial Admin - Prestige Academy',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ]
    }
  }
})
