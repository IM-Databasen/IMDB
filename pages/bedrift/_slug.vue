<template>
  <div class="bg-white">
    <Card class="mb-3">
      <div class="max-w-md mx-auto space-y-6">
        <h2 class="flex flex-row flex-nowrap items-center my-8">
          <span
            class="flex-grow block border-t border-black"
            aria-hidden="true"
            role="presentation"
          ></span>
          <span
            class="flex-none block mx-4 px-4 py-2.5 text-xs leading-none font-medium uppercase text-black"
          >
            {{ company.name }}
          </span>
          <span
            class="flex-grow block border-t border-black"
            aria-hidden="true"
            role="presentation"
          ></span>
        </h2>
      </div>
    </Card>
    <div v-if="company" class="flex flex-row gap-3">
      <div class="basis-8/12 p-5">
        <p class="mt-6 text-gray-600">
          {{ company.description }}
        </p>
      </div>
      <div class="basis-4/12">
        <img
          preload
          :src="company.image"
          :alt="company.name"
          width="650px"
          height="550px"
        />
      </div>
    </div>
    <div class="relative flex flex-row mt-2 items-center">
      <span
        v-for="(technology, technologyindex) in company.technologies"
        :key="technologyindex + technology"
        class="bg-gray-100 text-gray-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300"
        >{{ technology }}</span
      >
    </div>
  </div>
</template>

<script>
import Card from "~/components/Card.vue";

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
  components: { Card },
};
</script>
