<template>
  <div>
    <div class="py-20 bg-gray-50">
      <div class="container mx-auto px-6 md:px-12 xl:px-32">
        <div class="mb-16 text-center">
          <h2 class="mb-4 text-center text-2xl text-gray-900 font-bold md:text-4xl">IMDB</h2>
          <p class="text-gray-600 lg:w-8/12 lg:mx-auto">Beskrivelse om ka IMDB e komme</p>
        </div>
        <div class="grid gap-12 items-center md:grid-cols-3">
          <div class="space-y-4 text-center">
            <img class="w-64 h-64 mx-auto object-cover rounded-xl md:w-40 md:h-40 lg:w-64 lg:h-64"
              src="https://avatars.githubusercontent.com/u/89910775?v=4" alt="theo" loading="lazy"
              width="640" height="805">
            <div>
              <h4 class="text-2xl">Theo</h4>
              <span class="block text-sm text-gray-500">Tittel</span>
            </div>
          </div>
          <div class="space-y-4 text-center">
            <img class="w-64 h-64 mx-auto object-cover rounded-xl md:w-48 md:h-64 lg:w-64 lg:h-80"
              src="https://avatars.githubusercontent.com/u/89910638?v=4" alt="lartrags" loading="lazy"
              width="1000" height="667">
            <div>
              <h4 class="text-2xl">Lars Erik</h4>
              <span class="block text-sm text-gray-500">Tittel</span>
            </div>
          </div>
          <div class="space-y-4 text-center">
            <img class="w-64 h-64 mx-auto object-cover rounded-xl md:w-40 md:h-40 lg:w-64 lg:h-64"
              src="https://avatars.githubusercontent.com/u/71834553?v=4" alt="arvid" loading="lazy"
              width="1000" height="667">
            <div>
              <h4 class="text-2xl">Arvid</h4>
              <span class="block text-sm text-gray-500">Tittel</span>
            </div>
          </div>
          <div class="space-y-4 text-center">
            <img class="w-64 h-64 mx-auto object-cover rounded-xl md:w-40 md:h-40 lg:w-64 lg:h-64"
              src="https://avatars.githubusercontent.com/u/78083291?v=4" alt="erling" loading="lazy"
              width="1000" height="667">
            <div>
              <h4 class="text-2xl">Erling</h4>
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
