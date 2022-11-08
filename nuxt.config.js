module.exports = {
  // Global page headers: https://go.nuxtjs.dev/config-head
  target: "static",
  ssr: true,

  head: {
    title: "IMDB",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
      {
        hid: "description",
        name: "description",
        content: "A website for AKS students",
      },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/faviconV1.ico" }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["./assets/css/main.scss"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    // { src: "~/plugins/socket.client.js" }
    { src: "~/plugins/notifier.js" },
    { src: "~/plugins/modal.js" },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    "@nuxt/typescript-build",
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxt/http",
    "@nuxt/content",
    "@nuxt/image",
    // "~/io" // socket io
  ],

  // env: {
  //   WS_URL: 'https://im-databasen.netlify.app' || "http://localhost:3000",
  // },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
  // buildDir: "dist",
  generate: {
    fallback: true,
  },

  serverMiddleware: {
    "/api": "~/middleware/auth.js",
  },

  image: {
    domains: ["avatars.githubusercontent.com"],
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
      "2xl": 1536,
    },
    presets: {
      avatar: { modifiers: { format: "webp", width: 600, height: 600 } },
    },
  },
  pageTransition: "page",
};
