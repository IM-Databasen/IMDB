<template>
  <div class="text-black">
    <Searchbar
      v-model="search"
      :selected="selected"
      @selected="selected = $event"
      :categories="categories"
    />
    <div class="grid grid-cols-2">
      <div
        v-for="(company, index) in filteredCompanies"
        class="group flex flex-col m-5 shadow-xl bg-white leading-snug overflow-hidden rounded odd:lg:flex-row even:lg:flex-row-reverse lg:max-w-screen-md"
      >
        <div class="relative h-52 lg:h-auto lg:basis-2/5 meta">
          <div
            v-if="company.image"
            class="absolute top-0 bottom-0 left-0 right-0 bg-cover bg-center transition-transform group-hover:rotate-[3deg] group-hover:scale-[1.2]"
            :style="{ 'background-image': 'url(' + company.image + ')' }"
          ></div>
          <div
            v-else
            class="absolute top-0 bottom-0 left-0 right-0 bg-cover bg-center transition-transform group-hover:rotate-[3deg] group-hover:scale-[1.2] bg-[url('https://storage.googleapis.com/chydlx/codepen/blog-cards/image-1.jpg')]"
          ></div>
          <ul
            class="flex flex-col list-style-none absolute top-0 bottom-0 -left-full w-full p-[10px] bg-imdb_gray-900 bg-opacity-60 text-imdb_white text-sm transition-[left] group-[.alt]:pl-6 group-hover:left-0"
          >
            <li class="inline-block before:mr-2.5">
              Tar lærlinger: {{ company.apprenticeCompany ? "Ja" : "Nei" }}
            </li>
            <li
              v-if="company.technologies.length > 0"
              class="inline-block before:mr-2.5"
            >
              <ul class="inline-block">
                <li class="text-sm font-bold">Teknologier:</li>
                <li
                  v-for="(technology, tindex) in company.technologies.slice(
                    0,
                    5
                  )"
                  :key="tindex"
                  class="mr-0.5"
                >
                  <a href="#">{{ technology }}</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div
          class="relative bg-imdb_white p-4 z-10 lg:basis-3/5 lg:before:-skew-x-3 lg:before:bg-imdb_white lg:before:w-7 lg:before:absolute lg:before:-left-2.5 lg:before:z-10 group-[.alt]:before:-right-2.5 before:group-[.alt]:left-[inherit] before:group-[.alt]:skew-x-3"
        >
          <a
            :href="company.website"
            target="_blank"
            class="leading-none m-0 text-2xl text-imdb_gray-900"
            >{{ company.name }}</a
          >
          <h2
            class="text-base font-light uppercase mt-1.5 text-imdb_text_tertiary"
          >
            {{ company.slogan || ":-)" }}
          </h2>
          <div class="relative flex flex-row mt-2">
            <span
              v-for="(type, typeindex) in company.type"
              :key="typeindex + type"
              class="bg-imdb_gray-200 text-imdb_gray-700 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-imdb_gray-500 dark:text-imdb_text_secondary"
              >{{ type }}</span
            >
          </div>
          <p
            class="relative mt-4 first-of-type:mt-5 before:absolute before:h-1 before:w-9 before:bg-imdb_green_500 before:-top-3 before:rounded"
          >
            {{ company.description }}
          </p>
          <p class="relative mt-4 text-right first-of-type:mt-5 read-more">
            <a
              class="underline decoration-dotted text-imdb_green_500 inline-block relative after:content-['👉'] after:ml-2.5 after:align-middle after:opacity-0 after:transition-[margin,opacity] hover:after:opacity-100 hover:after:ml-1.5"
              :href="'/bedrift/' + company.name"
              >Les mer</a
            >
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Searchbar from "~/components/Searchbar.vue";
export default {
  head: {
    title: "IMDB - Bedrifer",
    meta: [
      {
        hid: "description",
        name: "description",
        content: "Bedrifter page",
      },
    ],
  },
  data() {
    return {
      search: "",
      selected: [],
      categories: [],
    };
  },
  async asyncData({ $content, $http }) {
    const companies = await $content("bedrifter").fetch();

    return {
      companies: companies.companies,
      categories: [
        {
          id: 0,
          name: "IT-Utvikling",
        },
        {
          id: 1,
          name: "IT-Drift",
        },
      ],
    };
  },
  computed: {
    filteredCompanies() {
      return this.companies.filter(
        (company) =>
          company.name.toLowerCase().includes(this.search.toLowerCase()) &&
          (this.selected.length === 0 ||
            this.selected.find((cat) => company.type.includes(cat.name)))
      );
    },
  },
  components: {
    Searchbar,
  },
};
</script>
