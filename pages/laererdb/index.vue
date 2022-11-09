<template>
  <div>
    <Searchbar v-model="search" />
    <div class="grid grid-rows-1 md:grid-cols-3">
      <article
        v-for="item in filteredCards"
        :key="item.id"
        class="bg-imdb_gray-700 shadow text-white rounded-2xl p-5 mx-2"
      >
        <h1 class="font-bold">
          {{ item.name }}
        </h1>
        <p class="font-light">
          {{ item.name }}
        </p>
        <h2 class="text-sm mb-5">Publisert: {{ item.createdAt }}</h2>
        <nuxt-link
          :to="'/laererdb/' + item.slug"
          class="rounded py-2 px-4 text-center text-black hover:bg-gray-300"
        >
          Vis lærer
        </nuxt-link>
      </article>
    </div>
  </div>
</template>

<script>
import Searchbar from "~/components/Searchbar.vue";
export default {
  head() {
    return {
      title: "IMDB - Lærere",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Tests page",
        },
      ],
    };
  },
  data() {
    return {
      search: "",
    };
  },
  async asyncData({ $content, $http }) {
    const cards = await $content("laerere").fetch();

    return { cards };
  },
  components: {
    Searchbar,
  },
  computed: {
    filteredCards() {
      return this.cards.filter((laerer) =>
        laerer.name.toLowerCase().includes(this.search.toLowerCase())
      );
    },
  },
};
</script>
