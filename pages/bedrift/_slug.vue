<template>
  <div class="py-16 bg-white">
    <div v-if="company" class="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
      <div
        class="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12"
      >
        <div class="md:7/12 lg:w-6/12">
          <h1 class="text-2xl text-gray-900 font-bold md:text-4xl">
            {{ company.name }}
          </h1>
          <p class="mt-6 text-gray-600">
            {{ company.description }}
          </p>
          <div class="relative flex flex-row mt-2">
            <span
              v-for="(technology, technologyindex) in company.technologies"
              :key="technologyindex + technology"
              class="bg-gray-100 text-gray-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300"
              >{{ technology }}</span
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ params, $content }) {
    if (!params || params === "{}" || params.slug == "") return;

    const company = await $content(`bedrifter`).fetch();

    return {
      company: company.companies.filter((item) =>
        item.name.includes(params.slug)
      )[0],
    };
  },
  mounted() {
    var coll = document.getElementsByClassName("collapsible");

    for (let i = 0; i < coll.length; i++) {
      coll[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.display === "block") {
          content.style.display = "none";
        } else {
          content.style.display = "block";
        }
      });
    }
  },
};
</script>
