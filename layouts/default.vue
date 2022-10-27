<template>
  <div>
    <Navbar />
    <Nuxt class="overflow-hidden py-10 px-5 sm:px-20 lg:px-48 2xl:px-96" />
  </div>
</template>

<script lang="ts">
import Navbar from "~/components/Navbar.vue";
export default {
  components: {
    Navbar,
  },
}
</script>
