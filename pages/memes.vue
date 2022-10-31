<template>
  <div>
    <div
      class="w-full max-w-5xl p-5 pb-10 mx-auto mb-10 gap-5 columns-3 space-y-5"
    >
      <nuxt-img
        preload
        v-for="meme in memes"
        :key="meme.pathShort"
        :src="meme.pathLong"
        :alt="meme.name"
      />
    </div>
  </div>
</template>

<script>
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
    };
  },
  mounted() {
    this.importAll(
      require.context("~/static/memes/", true, /\.(jpe?g|png|webp|gif|jpeg)$/i)
    );
  },
  methods: {
    importAll(r) {
      // create a global regex pattern that replace ./ and jpg, jpeg, png and webp
      r.keys().forEach((key) =>
        this.memes.push({
          name: key.replaceAll(/\.(\/|jpg|jpeg|png|webp|gif)/g, ""),
          pathLong: r(key),
          pathShort: key,
        })
      );
    },
  },
};
</script>

<style scoped></style>
