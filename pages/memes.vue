<template>
  <div>
    <Searchbar
      v-model="search"
      :selected="selected"
      @selected="selected = $event"
      :categories="categories"
    />
    <div class="grid grid-rows-1 gap-2 md:grid-cols-3">
      <Card v-for="meme in filteredMemes" class="p-5" :key="meme.pathShort">
        <div
          class="w-full max-w-5xl p-5 pb-10 mx-auto mb-10 gap-5 columns-3 space-y-5 text-black"
        >
          <!-- <p>{{ meme.category }}</p> -->
          <nuxt-img :src="meme.pathShort" :alt="meme.name" />
        </div>
      </Card>
    </div>
  </div>
</template>

<script>
import Searchbar from "~/components/Searchbar.vue";
import Card from "~/components/Card.vue";
export default {
  head: {
    title: "IMDB - Memes",
    meta: [
      {
        hid: "description",
        name: "description",
        content: "Memes page",
      },
    ],
  },
  data() {
    return {
      memes: [],
      search: "",
      categories: [],
      selected: [],
    };
  },
  mounted() {
    // this.$modal.showModal({
    //   header: "Github Stats",
    //   content: "Have you ever wondered why your github profile looks boring? No? Well, wonder no more! Devco has the solution for you! Stats for YOUR github profile! Customizable in all 10 millons colors! Buy now!",
    //   image: "/memes/githubstatsAd.png",
    //   link: "https://github.com/ArvidWedtstein/Github-Embed-Generator",
    // });
  },
  computed: {
    filteredMemes() {
      return this.memes.filter(
        (meme) =>
          meme.name.toLowerCase().includes(this.search.toLowerCase()) &&
          (this.selected.length === 0 ||
            this.selected.find((cat) => cat.name === meme.category))
      );
    },
  },
  methods: {
    getCategory(path) {
      let cat = String(path.replace(/\/[^/]*$/, "")).replace(/(\.\/|\.)/g, "");
      if (this.categories.find((cat) => cat.name === cat) || cat === "") {
        return;
      }
      this.categories.push({
        id: this.categories.length,
        name: cat,
      });
      return cat;
    },
    importAll(r) {
      r.keys().forEach((key) =>
        this.memes.push({
          name: key.replaceAll(/\.(\/|jpg|jpeg|png|webp|gif)/g, ""),
          pathShort: key,
          category: this.getCategory(key),
          pathLong: r(key),
        })
      );
    },
  },
  created() {
    this.importAll(
      require.context("~/static/memes/", true, /\.(jpe?g|png|webp|gif|jpeg)$/i)
    );
  },
  watch: {
    selected() {
      // console.log(this.selected);
    },
  },
  components: {
    Searchbar,
    Card,
  },
};
</script>
