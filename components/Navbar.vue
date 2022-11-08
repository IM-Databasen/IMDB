<template>
  <nav
    class="flex flex-row items-center justify-between p-5 h-fit sm:h-20 border-b-2 df"
  >
    <div
      class="flex flex-col items-center text-black text-4xl font-extralight sm:flex-row"
    >
      <nuxt-img
        src="/faviconV2.png"
        preload
        format="webp"
        alt="IMDB Logo"
        width="256px"
        height="256px"
        class="w-16 ml-5"
      />
      <h1 class="pl-5 sm:pl-0 text-black">IMDB</h1>
    </div>
    <div class="flex flex-col sm:flex-row sm:ml-6 border-b-2 border-gray-900">
      <nuxt-link
        to="/"
        :class="
          String($nuxt.$route.path) == '/'
            ? 'border-gray-900 text-gray-900'
            : 'border-transparent text-gray-600 hover:text-gray-800'
        "
        class="py-2 px-3 m-1 text-sm font-medium border-t-2 flex flex-row"
      >
        Him
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6 ml-1"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
          />
        </svg>
      </nuxt-link>
      <nuxt-link
        to="/about"
        :class="
          String($nuxt.$route.path) == '/about'
            ? 'border-gray-900 text-gray-900'
            : 'border-transparent text-gray-600 hover:text-gray-800'
        "
        class="py-2 px-3 m-1 text-sm font-medium border-t-2 flex flex-row"
      >
        Ka e IMDB?
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6 ml-1"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 01.9 2.7m0 0a3 3 0 01-3 3m0 3h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008z"
          />
        </svg>
      </nuxt-link>
      <nuxt-link
        to="/tests"
        :class="
          String($nuxt.$route.path).startsWith('/tests')
            ? 'border-gray-900 text-gray-900'
            : 'border-transparent text-gray-600 hover:text-gray-800'
        "
        class="py-2 px-3 m-1 text-sm font-medium border-t-2 flex flex-row"
      >
        Prøvar
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6 ml-1"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3.75 9.776c.112-.017.227-.026.344-.026h15.812c.117 0 .232.009.344.026m-16.5 0a2.25 2.25 0 00-1.883 2.542l.857 6a2.25 2.25 0 002.227 1.932H19.05a2.25 2.25 0 002.227-1.932l.857-6a2.25 2.25 0 00-1.883-2.542m-16.5 0V6A2.25 2.25 0 016 3.75h3.879a1.5 1.5 0 011.06.44l2.122 2.12a1.5 1.5 0 001.06.44H18A2.25 2.25 0 0120.25 9v.776"
          />
        </svg>
      </nuxt-link>
      <nuxt-link
        to="/memes"
        :class="
          String($nuxt.$route.path).startsWith('/memes')
            ? 'border-gray-900 text-gray-900'
            : 'border-transparent text-gray-600 hover:text-gray-800'
        "
        class="py-2 px-3 m-1 text-sm font-medium border-t-2 flex flex-row"
      >
        Memes
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6 ml-1"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
          />
        </svg>
      </nuxt-link>
      <nuxt-link
        to="/chat"
        :class="
          String($nuxt.$route.path).startsWith('/chat')
            ? 'border-gray-900 text-gray-900'
            : 'border-transparent text-gray-600 hover:text-gray-800'
        "
        class="py-2 px-3 m-1 text-sm font-medium border-t-2 flex flex-row"
      >
        Chat
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6 ml-1"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.068.157 2.148.279 3.238.364.466.037.893.281 1.153.671L12 21l2.652-3.978c.26-.39.687-.634 1.153-.67 1.09-.086 2.17-.208 3.238-.365 1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
          />
        </svg>
      </nuxt-link>
      <nuxt-link
        to="/fordypning"
        :class="
          String($nuxt.$route.path).startsWith('/fordypning')
            ? 'border-gray-900 text-gray-900'
            : 'border-transparent text-gray-600 hover:text-gray-800'
        "
        class="py-2 px-3 m-1 text-sm font-medium border-t-2 flex flex-row"
      >
        Fordypning
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6 ml-1"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25"
          />
        </svg>
      </nuxt-link>
      <nuxt-link
        to="/bedrift"
        :class="
          String($nuxt.$route.path).startsWith('/bedrift')
            ? 'border-gray-900 text-gray-900'
            : 'border-transparent text-gray-600 hover:text-gray-800'
        "
        class="py-2 px-3 m-1 text-sm font-medium border-t-2 flex flex-row"
      >
        Bedriftar
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6 ml-1"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605"
          />
        </svg>
      </nuxt-link>
      <nuxt-link
        to="/laererdb"
        :class="
          String($nuxt.$route.path).startsWith('/laererdb')
            ? 'border-gray-900 text-gray-900'
            : 'border-transparent text-gray-600 hover:text-gray-800'
        "
        class="py-2 px-3 m-1 text-sm font-medium border-t-2 flex flex-row"
      >
        Lærere
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6 ml-1"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
          />
        </svg>
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

<style scoped>
.df {
  box-shadow: 0 4vmin #0b0b0b, -2vmin 5vmin 4vmin #0a0a0a;
}
</style>
