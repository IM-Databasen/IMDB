<template>
  <div class="grid grid-rows-1 md:grid-cols-3">
    <article v-for="item in cards" :key="item.id" class="shadow rounded-2xl p-5">
      <h1 class="font-bold">
        {{ item.name }}
      </h1>
      <p class="font-light">
        {{ item.description }}
      </p>
      <h2 class="text-sm mb-5">
        Publisert ein elle anna dato
      </h2>
      <nuxt-link :to="'/tests/' + item.name"
        class="rounded py-2 px-4 text-center text-white bg-gray-600 hover:bg-gray-700">
        Vis Prøve
      </nuxt-link>
    </article>
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
      cards: [
        {
          name: "Nettverk",
          image: "/images/img1.webp",
          description: "Her komme nettverkssvar",
        },
        {
          name: "Photoshop",
          image: "/images/img2.webp",
          description: "mer info komme",
        },
        {
          name: "Oktettshit",
          image: "/images/img3.webp",
          description: "mer info komme",
        },
      ],
    };
  },
  methods: {

  },
  mounted() {
  },
  computed: {},
};
</script>
