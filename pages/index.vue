<template>
  <div>
    <div class="py-16 bg-white">
      <div class="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <div class="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
          <div class="md:5/12 lg:w-5/12">
            <img src="../static/images/placeholder650_550.webp" alt="image" width="650px" height="550px">
          </div>
          <div class="md:7/12 lg:w-6/12">
            <h2 class="text-2xl text-gray-900 font-bold md:text-4xl">
              IMDB - Få svarene te dine prøver
            </h2>
            <p class="mt-6 text-gray-600">
              Yes. vetkje ka eg ska stappa her.
            </p>
            <p class="mt-4 text-gray-600">
              Hmm ja. Her kan du då altså få svar te prøvene du har på IM.
            </p>
            <p class="mt-4 text-gray-600">
              Bildet te venstre e iallefall ikkje stjåle fra ei elle anna random nettsida
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head: {
    title: "IMDB - Home",
    meta: [
      {
        hid: "description",
        name: "description",
        content: "Home page",
      },
    ],
  },
  name: "Index",
  transition: "slide-bottom",
  components: {},
  data() {
    return {};
  },
  methods: {},
  async mounted() { },
  computed: {},
};
</script>
