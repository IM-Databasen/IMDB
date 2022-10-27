<template>
  <nav class="bg-gray-100 flex flex-row items-center justify-between p-5 h-fit sm:h-20">
    <div class="flex flex-col items-center text-4xl font-extralight sm:flex-row">
      <img src="../static/faviconV2.avif" alt="IMDB Logo" class="w-16 ml-5" />
      <h1 class="pl-5 sm:pl-0">IMDB</h1>
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
      <nuxt-link to="/tests" :class="String($nuxt.$route.path) == '/tests' ? 'bg-gray-200' : 'hover:bg-gray-300'"
        class="py-2 px-3 m-1 rounded-md text-sm font-medium">
        Prøver
      </nuxt-link>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style scoped>

</style>