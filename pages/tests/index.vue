<template>
  <div>
    <form class="mb-3">   
      <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">Search</label>
      <div class="relative">
        <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
          <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        </div>
        <input type="search" v-model="search" id="default-search" class="block p-4 pl-10 w-full text-sm text-gray-900 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Søk prøver...">
      </div>
    </form>
    <div class="grid grid-rows-1 md:grid-cols-3">
      <article v-for="item in filteredCards" :key="item.id" class="bg-imdb_gray-700 shadow text-white rounded-2xl p-5 mx-2">
        <h1 class="font-bold">
          {{ item.title }}
        </h1>
        <p class="font-light">
          {{ item.description }}
        </p>
        <h2 class="text-sm mb-5">
          Publisert: {{ item.createdAt }}
        </h2>
        <nuxt-link :to="'/tests/' + item.slug"
          class="rounded py-2 px-4 text-center text-black hover:bg-gray-300">
          Vis Prøve
        </nuxt-link>
      </article>
    </div>  
  </div>
</template>

<script>
export default {
  head: {
    title: "IMDB - Prøver",
    meta: [
      {
        hid: "description",
        name: "description",
        content: "Tests page",
      },
    ],
  },
  data() {
    return {
      search: "",
    }
  },
  async asyncData({ $content, $http }) {
    const cards = await $content("tests").fetch();

    return { cards };
  },
  computed: {
    filteredCards() {
      return this.cards.filter((post) => post.title.toLowerCase().includes(this.search.toLowerCase()));
    },
  },
};
</script>
