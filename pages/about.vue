<template>
  <div>
    <div class="py-16 bg-white">
      <div class="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <div class="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
          <div class="md:5/12 lg:w-5/12">
            <img src="../static/images/placeholder650_550.webp" alt="image" loading="lazy" width="" height="">
          </div>
          <div class="md:7/12 lg:w-6/12">
            <h1 class="text-2xl text-gray-900 font-bold md:text-4xl">Nuxt development is carried out by passionate
              developers</h1>
            <p class="mt-6 text-gray-600">Yes. vetkje ka eg ska stappa her.</p>
            <p class="mt-4 text-gray-600"> Nobis minus voluptatibus pariatur dignissimos libero quaerat iure expedita
              at? Asperiores nemo possimus nesciunt dicta veniam aspernatur quam mollitia.</p>
          </div>
        </div>
      </div>
    </div>
    <div id="services" class="section relative pt-20 pb-8 md:pt-16 md:pb-0 bg-white">
      <div class="container xl:max-w-6xl mx-auto px-4">
        <!-- Heading start -->
        <header class="text-center mx-auto mb-12 lg:px-20">
          <h2 class="text-2xl leading-normal mb-2 font-bold text-black">Koffår bruka IMDB?</h2>
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"
            y="0px" viewBox="0 0 100 60" style="margin: 0 auto;height: 35px;" xml:space="preserve">
            <circle cx="50.1" cy="30.4" r="5" class="stroke-primary"
              style="fill: transparent;stroke-width: 2;stroke-miterlimit: 10;"></circle>
            <line x1="55.1" y1="30.4" x2="100" y2="30.4" class="stroke-primary"
              style="stroke-width: 2;stroke-miterlimit: 10;"></line>
            <line x1="45.1" y1="30.4" x2="0" y2="30.4" class="stroke-primary"
              style="stroke-width: 2;stroke-miterlimit: 10;"></line>
          </svg>
          <p class="text-gray-500 leading-relaxed font-light text-xl mx-auto pb-2">Gå aldri på en smell igjen med IMDB.
            Me vet svarene på Rune.</p>
        </header>
      </div>
    </div>
    <div class="py-20 bg-gray-50">
      <div class="container mx-auto px-6 md:px-12 xl:px-32">
        <div class="mb-16 text-center">
          <h1 class="mb-4 text-center text-2xl text-gray-900 font-bold md:text-4xl">IMDB</h1>
          <p class="text-gray-600 lg:w-8/12 lg:mx-auto">Beskrivelse om ka IMDB e komme</p>
        </div>
        <div class="grid gap-12 items-center md:grid-cols-3">
          <div class="space-y-4 text-center">
            <img class="w-64 h-64 mx-auto object-cover rounded-xl md:w-40 md:h-40 lg:w-64 lg:h-64"
              src="https://avatars.githubusercontent.com/u/89910775?v=4" alt="theo" loading="lazy" width="640"
              height="667">
            <div>
              <h2 class="text-2xl">Theo</h2>
              <span class="block text-sm text-gray-500">Tittel</span>
            </div>
          </div>
          <div class="space-y-4 text-center">
            <img class="w-64 h-64 mx-auto object-cover rounded-xl md:w-48 md:h-64 lg:w-64 lg:h-64"
              src="https://avatars.githubusercontent.com/u/89910638?v=4" alt="lartrags" loading="lazy" width="1000"
              height="667">
            <div>
              <h2 class="text-2xl">Lars Erik</h2>
              <span class="block text-sm text-gray-500">Tittel</span>
            </div>
          </div>
          <div class="space-y-4 text-center">
            <img class="w-64 h-64 mx-auto object-cover rounded-xl md:w-40 md:h-40 lg:w-64 lg:h-64"
              src="https://avatars.githubusercontent.com/u/71834553?v=4" alt="arvid" loading="lazy" width="1000"
              height="667">
            <div>
              <h2 class="text-2xl">Arvid</h2>
              <span class="block text-sm text-gray-500">Tittel</span>
            </div>
          </div>
          <div class="space-y-4 text-center">
            <img class="w-64 h-64 mx-auto object-cover rounded-xl md:w-40 md:h-40 lg:w-64 lg:h-64"
              src="https://avatars.githubusercontent.com/u/78083291?v=4" alt="erling" loading="lazy" width="1000"
              height="667">
            <div>
              <h2 class="text-2xl">Erling</h2>
              <span class="block text-sm text-gray-500">Tittel</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  head: {
    title: "IMDB - About",
    meta: [
      {
        hid: "description",
        name: "description",
        content: "About section",
      },
    ],
  },
});
</script>
