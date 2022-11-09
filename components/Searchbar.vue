<template>
  <form class="mb-3">
    <label
      for="default-search"
      class="mb-2 text-sm font-medium text-gray-900 sr-only"
      >Search {{ value }}</label
    >
    <div class="relative">
      <button
        v-if="useFilter"
        @click="showResults = !showResults"
        type="button"
        class="flex absolute left-0 inset-y-0 items-center pl-3"
      >
        <Icon name="filter" class="w-5 h-5 text-gray-500" />
      </button>
      <input
        type="search"
        @input="handleInput"
        v-model="search"
        id="default-search"
        class="block p-4 w-full text-sm text-gray-900 rounded-lg pl-10 border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
        placeholder="Søk..."
      />
      <div
        class="flex absolute inset-y-0 items-center pointer-events-none"
        :class="useFilter ? 'right-0 pr-3' : 'left-0 pl-3'"
      >
        <Icon name="search" class="w-5 h-5 text-gray-500" />
      </div>
    </div>
    <div
      v-if="showResults"
      class="absolute max-h-60 w-96 overflow-y-scroll bg-white z-50 shadow-sm rounded-md border border-gray-300"
    >
      <div
        class="p-2 group cursor-pointer flex items-center hover:bg-blue-600 hover:text-white"
        v-for="(category, categoryIdx) in categories"
        :key="category.id"
        :class="{
          'bg-blue-600': selectedCategories.includes(category),
          'text-white': selectedCategories.includes(category),
        }"
        @click="selectCategory(categoryIdx)"
      >
        <svg
          v-show="category.parent_id"
          :class="{
            'fill-white': activeIndex == categoryIdx,
            'fill-gray-500': activeIndex != categoryIdx,
          }"
          class="ml-5 mr-1 group-hover:fill-white"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="16"
          height="16"
          viewBox="0 0 32 32"
        >
          <path
            d="M 5 5 L 5 22 L 24.0625 22 L 19.78125 26.28125 L 21.21875 27.71875 L 27.21875 21.71875 L 27.90625 21 L 27.21875 20.28125 L 21.21875 14.28125 L 19.78125 15.71875 L 24.0625 20 L 7 20 L 7 5 Z"
          ></path>
        </svg>
        {{ category.name }}
      </div>
    </div>
  </form>
</template>

<script>
import Icon from "./Icon.vue";
/**
 * Use v-model to bind to the search value
 * 
 * Use :selected="selected" and
      @selected="selected = $event" to bind to the selected categories
 * 
 */
export default {
  name: "Search",
  props: {
    value: String,
    selected: Array,
    categories: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      search: this.value,
      useFilter: this.categories.length > 0,
      showResults: false,
      showResults: false,
      activeIndex: 0,
      selectedCategories: [],
    };
  },
  methods: {
    async handleInput(e) {
      this.$emit("input", this.search);
    },
    selectCategory(index = null) {
      if (
        !this.selectedCategories.includes(
          this.categories[index || this.activeIndex]
        )
      ) {
        this.selectedCategories.push(
          this.categories[index || this.activeIndex]
        );
      } else {
        this.selectedCategories.splice(
          this.selectedCategories.indexOf(
            this.categories[index || this.activeIndex]
          ),
          1
        );
      }

      this.activeIndex = 0;
      this.showResults = false;
      this.$emit("selected", this.selectedCategories);
    },
  },
  components: {
    Icon,
  },
};
</script>
