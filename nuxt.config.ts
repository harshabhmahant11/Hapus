// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-04-16',
  devtools: { enabled: false },

  app: {
    head: {
      title: 'Hapus - Premium Alphonso Mangoes | Pre-Order Now',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content: 'Pre-order premium Alphonso Hapus mangoes from Ratnagiri & Devgad. 100% natural, chemical-free, naturally ripened. Farm fresh to your doorstep.'
        },
        { name: 'theme-color', content: '#F59E0B' }
      ],
      link: [
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '32x32',
          href: '/images/trialClassic.jpg'
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '48x48',
          href: '/images/trialClassic.jpg'
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800&family=Inter:wght@300;400;500;600;700&display=swap'
        }
      ]
    }
  },

  css: ['~/assets/css/main.css'],

  modules: ['@nuxt/image']
})
