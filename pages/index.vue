<template>
  <div>
    <div class="py-16 bg-white">
      <div class="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <div
          class="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12"
        >
          <div class="md:5/12 lg:w-5/12">
            <nuxt-img
              preload   
              src="/placeholder650_550.webp"
              alt="placeholder image"
              preload
              width="650px"
              height="550px"
              fit="cover"
            />
          </div>
          <div class="md:7/12 lg:w-6/12">
            <h1 class="text-2xl text-gray-900 font-bold md:text-4xl">
              IMDB - Få svarene te dine prøver
            </h1>
            <p class="mt-6 text-gray-600">Yes. Du hørte riktig.</p>
            <p class="mt-4 text-gray-600">
              Hmm ja. Her kan du då altså få svar te prøvene du har på IM.
            </p>
          </div>
        </div>
      </div>
    </div>
    <Suggestions />
  </div>
</template>

<script>
import Suggestions from "~/components/Suggestions.vue";

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
  components: { Suggestions },
};
</script>
