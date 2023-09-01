export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/main.scss', 'aos/dist/aos.css'],

  modules: ['@nuxtjs/tailwindcss', '@nuxt/image-edge'],

  router: {
    options: {},
  },

  plugins: [{ src: '~/plugins/aos', ssr: false }],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    configPath: '~~/tailwind.config',
    exposeConfig: false,
    exposeLevel: 2,
    config: {},
    injectPosition: 'first',
    viewer: true,
  },

  vue: {
    compilerOptions: {
      isCustomElement: (tag) => tag === 'iconify-icon',
    },
  },
});
