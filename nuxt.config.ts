export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  pages: true,
  modules: ["@nuxt/content", "@nuxt/image"],
  components: true,
  app: {
    head: {
      titleTemplate: `%s %separator %siteName %separator %class`,
      templateParams: {
        siteName: 'Tarea 3',
        class: 'Arquitectura de Información',
        separator: '|',
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'Meta description' }
      ],
      link: [
        { rel: 'stylesheet', href: 'http://fonts.googleapis.com/css?family=Raleway:400,300,600' },
        { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css', integrity: "sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH", crossorigin: 'anonymous' },
        { rel: 'icon', type: "image/png", href: '/images/favicon.ico' },
        { rel: 'stylesheet', href: 'https://cdn.snipcart.com/themes/v3.0.31/default/snipcart.css' }
      ],
      script: [
        { src: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js", integrity: "sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz", crossorigin: "anonymous" },
        { src: 'https://cdn.snipcart.com/themes/v3.0.31/default/snipcart.js', async: true, defer: true }
      ]
    },
  }
});
