<template>
  <div class="body">
    <Navbar />
    <Nuxt />
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
