<template>
  <div class="bg-gray-200 pt-3">
    <main>
      <div class="flex justify-between grid grid-cols-3 gap-6 m-10 mb-10">
        <article v-for="(item, index) in proover" :key="item.name + index" class="container bg-white shadow-2xl rounded-2xl p-5">
          <h1 class="font-bold text-yellow-500">{{ item.name }}</h1>
          <p class="font-light text-gray-500 hover:font-bold">{{ item.description }}</p>
          <h6 class="text-sm text-gray-300 mb-5">Publisert ein elle anna dato</h6>
          <nuxt-link :to="'/tests/' + item.name" class="rounded-lg py-2 px-4 text-center text-white bg-yellow-400 hover:bg-yellow-500">Vis Prøve</nuxt-link>
        </article>
      </div>
    </main>
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
      proover: [
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
