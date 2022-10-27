<template>
  <div class="body">
    <Navbar />
    <Nuxt class="px-5 sm:px-20 lg:px-48 2xl:px-96" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Navbar from "~/components/Navbar.vue";
export default Vue.extend({
  template: "default",
  transition: "slide-bottom",
  components: {
    Navbar,
  },
  async asyncData({ params, route }) {
    return {
      params: params,
      route: route
    }
  },

  methods: {},
  async mounted() {},
  computed: {},
});
</script>
