<template>
  <div>
    <form class="mb-3">
      <label
        for="default-search"
        class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300"
        >Search</label
      >
      <div class="relative">
        <div
          class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none"
        >
          <svg
            aria-hidden="true"
            class="w-5 h-5 text-gray-500 dark:text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
        </div>
        <input
          type="search"
          v-model="search"
          id="default-search"
          class="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Søk bedrift..."
        />
      </div>
    </form>
    <div class="grid grid-cols-2">
      <div
        v-for="i in 6"
        class="group flex flex-col m-5 shadow-xl bg-white leading-snug overflow-hidden rounded odd:lg:flex-row even:lg:flex-row-reverse lg:max-w-screen-md"
      >
        <div class="relative h-52 lg:h-auto lg:basis-2/5 meta">
          <div
            class="absolute top-0 bottom-0 left-0 right-0 bg-cover bg-center transition-transform bg-[url('https://storage.googleapis.com/chydlx/codepen/blog-cards/image-1.jpg')] group-hover:rotate-[3deg] group-hover:scale-[1.2]"
          ></div>
          <ul
            class="m-auto list-style-none absolute top-0 bottom-0 -left-full w-full p-[10px] bg-black bg-opacity-60 text-white text-sm transition-[left] group-[.alt]:pl-6 group-hover:left-0"
          >
            <li class="inline-block before:mr-2.5"><a href="#">John Doe</a></li>
            <li class="inline-block before:mr-2.5">Aug. 24, 2015</li>
            <li class="inline-block">
              <ul class="before:mr-2.5 first:-ml-1">
                <li class="inline-block mr-0.5"><a href="#">Learn</a></li>
                <li class="inline-block mr-0.5"><a href="#">Code</a></li>
                <li class="inline-block mr-0.5"><a href="#">HTML</a></li>
                <li class="inline-block mr-0.5"><a href="#">CSS</a></li>
              </ul>
            </li>
          </ul>
        </div>
        <div
          class="relative bg-white p-4 z-10 lg:basis-3/5 lg:before:-skew-x-3 lg:before:bg-white lg:before:w-7 lg:before:absolute lg:before:-left-2.5 lg:before:z-10 group-[.alt]:before:-right-2.5 before:group-[.alt]:left-[inherit] before:group-[.alt]:skew-x-3"
        >
          <h1 class="leading-none m-0 text-2xl">Learning to Code</h1>
          <h2 class="text-base font-light uppercase mt-1.5 text-[#a2a2a2]">
            Opening a door to the future
          </h2>
          <p
            class="relative mt-4 first-of-type:mt-5 before:absolute before:h-1 before:w-9 before:bg-[#5ad67d] before:-top-3 before:rounded"
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eum
            dolorum architecto obcaecati enim dicta praesentium, quam nobis!
            Neque ad aliquam facilis numquam. Veritatis, sit.
          </p>
          <p class="relative mt-4 text-right first-of-type:mt-5 read-more">
            <a
              class="underline decoration-dotted text-[#5ad67d] inline-block relative after:content-['👉'] after:ml-2.5 after:align-middle after:opacity-0 after:transition-[margin,opacity] hover:after:opacity-100 hover:after:ml-1.5"
              href="#"
              >Read More</a
            >
          </p>
        </div>
      </div>
      <!-- <div
        v-for="i in 6"
        class="group flex flex-col m-5 shadow-xl bg-white leading-snug overflow-hidden rounded lg:max-w-screen-md lg:flex-row-reverse alt"
      >
        <div class="relative h-52 lg:h-auto lg:basis-2/5 meta">
          <div
            class="absolute top-0 bottom-0 left-0 right-0 bg-cover bg-center transition-transform bg-[url('https://storage.googleapis.com/chydlx/codepen/blog-cards/image-2.jpg')] group-hover:rotate-[3deg] group-hover:scale-[1.2]"
          ></div>
          <ul
            class="m-auto list-style-none absolute top-0 bottom-0 -left-full w-full p-[10px] bg-black bg-opacity-60 text-white text-sm transition-[left] group-[.alt]:pl-6 group-hover:left-0"
          >
            <li class="inline-block before:mr-2.5"><a href="#">Jane Doe</a></li>
            <li class="inline-block before:mr-2.5">July. 15, 2015</li>
            <li class="inline-block">
              <ul class="before:mr-2.5 first:-ml-1">
                <li class="inline-block mr-0.5"><a href="#">Learn</a></li>
                <li class="inline-block mr-0.5"><a href="#">Code</a></li>
                <li class="inline-block mr-0.5"><a href="#">JavaScript</a></li>
              </ul>
            </li>
          </ul>
        </div>
        <div
          class="relative bg-white p-4 z-10 lg:basis-3/5 lg:before:-skew-x-3 lg:before:bg-white lg:before:w-7 lg:before:absolute lg:before:-left-2.5 lg:before:z-10 before:group-[.alt]:-right-2.5 group-[.alt]:before:left-[inherit] before:group-[.alt]:skew-x-3"
        >
          <h1 class="leading-none m-0 text-2xl">Mastering the Language</h1>
          <h2 class="text-base font-light uppercase mt-1.5 text-[#a2a2a2]">
            Java is not the same as JavaScript
          </h2>
          <p
            class="relative mt-4 first-of-type:mt-5 before:absolute before:h-1 before:w-9 before:bg-[#5ad67d] before:-top-3 before:rounded"
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eum
            dolorum architecto obcaecati enim dicta praesentium, quam nobis!
            Neque ad aliquam facilis numquam. Veritatis, sit.
          </p>
          <p class="relative mt-4 first-of-type:mt-5 text-right read-more">
            <a
              class="underline decoration-dotted text-[#5ad67d] inline-block relative after:content-['👉'] after:ml-2.5 after:align-middle after:opacity-0 after:transition-[margin,opacity] hover:after:opacity-100 hover:after:ml-1.5"
              href="#"
              >Read More</a
            >
          </p>
        </div>
      </div> -->
    </div>
  </div>
</template>

<script>
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
    };
  },
  async asyncData({ $content, $http }) {
    const companies = await $content("bedrifter").fetch();
    return { companies: companies };
  },
  computed: {
    filteredTemaer() {
      return this.companies.filter((company) =>
        company.name.toLowerCase().includes(this.search.toLowerCase())
      );
    },
  },
};
</script>
