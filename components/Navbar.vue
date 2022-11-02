<template>
  <nav class="bg-gray-100 flex flex-row items-center justify-between p-5 h-fit sm:h-20 border-b-2 border-gray-500">
    <div class="flex flex-col items-center text-4xl font-extralight sm:flex-row">
      <nuxt-img src="/faviconV2.png" preload format="webp" alt="IMDB Logo" width="256px" height="256px" class="w-16 ml-5" />
      <h1 class="pl-5 sm:pl-0">
        IMDB
      </h1>
    </div>
    <div class="flex flex-col sm:flex-row sm:ml-6">
      <nuxt-link to="/" :class="String($nuxt.$route.path) == '/' ? 'bg-gray-200' : 'hover:bg-gray-300'"
        class="py-2 px-3 m-1 rounded-md text-sm font-medium">
        Him
      </nuxt-link>
      <nuxt-link to="/about" :class="String($nuxt.$route.path) == '/about' ? 'bg-gray-200' : 'hover:bg-gray-300'"
        class="py-2 px-3 m-1 rounded-md text-sm font-medium">
        Ka e IMDB?
      </nuxt-link>
      <nuxt-link to="/tests" :class="String($nuxt.$route.path).startsWith('/tests') ? 'bg-gray-200' : 'hover:bg-gray-300'"
        class="py-2 px-3 m-1 rounded-md text-sm font-medium">
        Prøver
      </nuxt-link>
      <nuxt-link to="/memes" :class="String($nuxt.$route.path).startsWith('/memes') ? 'bg-gray-200' : 'hover:bg-gray-300'"
        class="py-2 px-3 m-1 rounded-md text-sm font-medium">
        Memes
      </nuxt-link>
      <nuxt-link to="/chat" :class="String($nuxt.$route.path).startsWith('/chat') ? 'bg-gray-200' : 'hover:bg-gray-300'"
        class="py-2 px-3 m-1 rounded-md text-sm font-medium">
        Chat
      </nuxt-link>
      <nuxt-link to="/fordypning" :class="String($nuxt.$route.path).startsWith('/fordypning') ? 'bg-gray-200' : 'hover:bg-gray-300'"
        class="py-2 px-3 m-1 rounded-md text-sm font-medium">
        Fordypning
      </nuxt-link>
    </div>
  </nav>
  <!-- <nav class="bg-white border-gray-200 dark:border-gray-600 dark:bg-gray-900">
    <div
      class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-2.5"
    >
      <a href="#" class="flex items-center">
        <img src="/faviconV2.png" class="mr-3 h-6 sm:h-9" alt="IMDB Logo" />
        <span
          class="self-center text-xl font-semibold whitespace-nowrap dark:text-white"
          >IMDB</span
        >
      </a>
      <div
        class="hidden justify-between items-center w-full md:flex md:w-auto md:order-1"
      >
        <ul
          class="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"
        >
          <li>
            <nuxt-link
              to="/"
              :class="
                String($nuxt.$route.path) == '/'
                  ? 'text-white'
                  : 'text-gray-700'
              "
              class="block py-2 pr-4 pl-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
            >
              Him
            </nuxt-link>
          </li>
          <li>
            <nuxt-link
              to="/about"
              :class="
                String($nuxt.$route.path) == '/about'
                  ? 'text-white'
                  : 'text-gray-700'
              "
              class="block py-2 pr-4 pl-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
            >
              Ka e IMDB?
            </nuxt-link>
          </li>
          <li>
            <nuxt-link
              to="/tests"
              :class="
                String($nuxt.$route.path).startsWith('/tests')
                  ? 'text-white'
                  : 'text-gray-700'
              "
              class="block py-2 pr-4 pl-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
            >
              Prøver
            </nuxt-link>
          </li>
          <li>
            <nuxt-link
              to="/memes"
              :class="
                String($nuxt.$route.path).startsWith('/memes')
                  ? 'text-white'
                  : 'text-gray-700'
              "
              class="block py-2 pr-4 pl-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
            >
              Memes
            </nuxt-link>
            >
          </li>
          <li>
            <nuxt-link
              to="/chat"
              :class="
                String($nuxt.$route.path).startsWith('/chat')
                  ? 'text-white'
                  : 'text-gray-700'
              "
              class="block py-2 pr-4 pl-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
            >
              Chat
            </nuxt-link>
          </li>
          <li>
            <nuxt-link
              to="/fordypning"
              :class="
                String($nuxt.$route.path).startsWith('/fordypning')
                  ? 'text-white'
                  : 'text-gray-700'
              "
              class="block py-2 pr-4 pl-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
            >
              Fordypning
            </nuxt-link>
          </li>
        </ul>
      </div>
    </div>
  </nav> -->
</template>

<script>
export default {
  template: "navbar",
  transition: "slide-bottom",
  async asyncData({ params, route }) {
    return {
      params: params,
      route: route,
    };
  },
};
</script>

<style scoped></style>
