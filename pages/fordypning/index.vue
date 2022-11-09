<template>
  <div>
    <Searchbar v-model="search" />
    <div class="grid grid-rows-1 md:grid-cols-3 gap-2">
      <Card v-for="item in filteredTemaer" :key="item.id" class="p-5">
        <h1 class="font-bold">
          {{ item.title[0] }}
        </h1>
        <p class="font-light">
          {{ item.description[0] }}
        </p>
        <h2 class="text-sm mb-3">Publisert: {{ item.createdAt }}</h2>
        <nuxt-link
          :to="'/fordypning/' + item.$.prop"
          class="rounded py-2 px-4 text-center text-black bg-gray-200 hover:bg-gray-300"
        >
          Lær mer
        </nuxt-link>
      </Card>
    </div>
  </div>
</template>

<script>
import Searchbar from "~/components/Searchbar.vue";
import Card from "~/components/Card.vue";
export default {
  head: {
    title: "IMDB - Fordypning",
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
    };
  },
  async asyncData({ $content, $http }) {
    const cards = await $content("fordypningstemaer").fetch();
    return { temaer: cards.body.xml.tema };
  },
  computed: {
    filteredTemaer() {
      return this.temaer.filter((tema) =>
        tema.title[0].toLowerCase().includes(this.search.toLowerCase())
      );
    },
  },
  components: {
    Searchbar,
    Card,
  },
};
</script>
