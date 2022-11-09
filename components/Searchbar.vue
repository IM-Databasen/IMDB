<template>
  <form class="mb-3">
    <label
      for="default-search"
      class="mb-2 text-sm font-medium text-gray-900 sr-only"
      >Search {{ value }}</label
    >
    <div class="relative">
      <div
        class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none"
      >
        <Icon name="search" class="w-5 h-5 text-gray-500" />
      </div>
      <input
        type="search"
        @input="handleInput"
        v-model="search"
        id="default-search"
        class="block p-4 pl-10 w-full text-sm text-gray-900 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
        placeholder="Søk..."
      />
    </div>
  </form>
</template>

<script>
import Icon from "./Icon.vue";
export default {
  props: {
    value: String,
  },
  data() {
    return {
      search: this.value,
    };
  },
  methods: {
    async handleInput(e) {
      this.$emit("input", this.search);
    },
  },
  components: {
    Icon,
  },
};
</script>
