<template>
  <div>
    <form class="bg-gray-200 shadow border-gray-300 border text-white rounded-2xl p-5 mx-2">
      <h1 class="text-xl font-bold mb-3 text-gray-900">Har du ett forslag?</h1>
      <label
        for="default-search"
        class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300"
        >Forslag</label
      >
      <div class="relative">
        <textarea
          type="search"
          v-model="search"
          id="default-search"
          class="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500  dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Ditt forslag..."
          rows="8"
        >
        </textarea>
      </div>
      <button
        type="submit"
        class="rounded py-2 px-4 text-center text-light mt-3 bg-imdb_gray-700 hover:bg-imdb_gray-600"
      >
        Send Inn
      </button>
    </form>
  </div>
</template>

<script>
export default {
  template: "suggestions",
  transition: "slide-bottom",
  async asyncData({ params, route }) {
    return {
      params: params,
      route: route,
    };
  },
  computed: {
    search() {
      return '';
    },
  },
};
</script>

<style scoped></style>
