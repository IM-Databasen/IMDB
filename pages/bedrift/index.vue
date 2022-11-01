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
      <!-- TODO: Lag bedre layout -->
      <div
        class="blog-card flex flex-col m-5 shadow-xl bg-white leading-snug overflow-hidden rounded"
      >
        <div class="meta relative">
          <div
            class="absolute top-0 bottom-0 left-0 right-0 photo"
            style="background-image: url(https://storage.googleapis.com/chydlx/codepen/blog-cards/image-1.jpg);"
          ></div>
          <ul class="m-auto list-style-none absolute top-0 bottom-0 -left-full w-full p-[10px] bg-black bg-opacity-60 text-white details">
            <li class="inline-block author"><a href="#">John Doe</a></li>
            <li class="inline-block date">Aug. 24, 2015</li>
            <li class="inline-block tags">
              <ul class="inline-block">
                <li><a href="#">Learn</a></li>
                <li><a href="#">Code</a></li>
                <li><a href="#">HTML</a></li>
                <li><a href="#">CSS</a></li>
              </ul>
            </li>
          </ul>
        </div>
        <div class="description">
          <h1>Learning to Code</h1>
          <h2>Opening a door to the future</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eum
            dolorum architecto obcaecati enim dicta praesentium, quam nobis!
            Neque ad aliquam facilis numquam. Veritatis, sit.
          </p>
          <p class="read-more">
            <a href="#">Read More</a>
          </p>
        </div>
      </div>
      <div
        class="blog-card flex flex-col m-5 shadow-xl bg-white leading-snug overflow-hidden rounded alt"
      >
        <div class="relative meta">
          <div
            class="absolute top-0 bottom-0 left-0 right-0 photo"
            style="background-image: url(https://storage.googleapis.com/chydlx/codepen/blog-cards/image-2.jpg);"
          ></div>
          <ul class="m-auto list-style-none absolute top-0 bottom-0 -left-full w-full p-[10px] bg-black bg-opacity-60 text-white details">
            <li class="inline-block author"><a href="#">Jane Doe</a></li>
            <li class="inline-block date">July. 15, 2015</li>
            <li class="inline-block tags">
              <ul class="inline-block">
                <li><a href="#">Learn</a></li>
                <li><a href="#">Code</a></li>
                <li><a href="#">JavaScript</a></li>
              </ul>
            </li>
          </ul>
        </div>
        <div class="description">
          <h1>Mastering the Language</h1>
          <h2>Java is not the same as JavaScript</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eum
            dolorum architecto obcaecati enim dicta praesentium, quam nobis!
            Neque ad aliquam facilis numquam. Veritatis, sit.
          </p>
          <p class="read-more">
            <a href="#">Read More</a>
          </p>
        </div>
      </div>
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
<style scoped lang="scss">
$color_white: #fff;
$color_prime: #5ad67d;
$color_grey: #e2e2e2;
$color_grey_dark: #a2a2a2;

.blog-card {
  &:hover {
    .photo {
      transform: scale(1.3) rotate(3deg);
    }
  }
  .meta {
    position: relative;
    height: 200px;
  }
  .photo {
    background-size: cover;
    background-position: center;
    transition: transform 0.2s;
  }

  .details {
    transition: left 0.2s;
    font-size: 0.9rem;
    a {
      text-decoration: dotted underline;
    }
    ul li {
      display: inline-block;
    }
    .author:before {
      font-family: FontAwesome;
      margin-right: 10px;
      content: "\f007";
    }

    .date:before {
      font-family: FontAwesome;
      margin-right: 10px;
      content: "\f133";
    }

    .tags {
      ul:before {
        font-family: FontAwesome;
        content: "\f02b";
        margin-right: 10px;
      }
      li {
        margin-right: 2px;
        &:first-child {
          margin-left: -4px;
        }
      }
    }
  }
  .description {
    padding: 1rem;
    background: $color_white;
    position: relative;
    z-index: 1;
    h1,
    h2 {
      font-family: Poppins, sans-serif;
    }
    h1 {
      line-height: 1;
      margin: 0;
      font-size: 1.7rem;
    }
    h2 {
      font-size: 1rem;
      font-weight: 300;
      text-transform: uppercase;
      color: $color_grey_dark;
      margin-top: 5px;
    }
    .read-more {
      text-align: right;
      a {
        color: $color_prime;
        display: inline-block;
        position: relative;
        &:after {
          content: "\f061";
          font-family: FontAwesome;
          margin-left: -10px;
          opacity: 0;
          vertical-align: middle;
          transition: margin 0.3s, opacity 0.3s;
        }

        &:hover:after {
          margin-left: 5px;
          opacity: 1;
        }
      }
    }
  }
  p {
    position: relative;
    margin: 1rem 0 0;
    &:first-of-type {
      margin-top: 1.25rem;
      &:before {
        content: "";
        position: absolute;
        height: 5px;
        background: $color_prime;
        width: 35px;
        top: -0.75rem;
        border-radius: 3px;
      }
    }
  }
  &:hover {
    .details {
      left: 0%;
    }
  }

  @media (min-width: 640px) {
    flex-direction: row;
    max-width: 700px;
    .meta {
      flex-basis: 40%;
      height: auto;
    }
    .description {
      flex-basis: 60%;
      &:before {
        transform: skewX(-3deg);
        content: "";
        background: #fff;
        width: 30px;
        position: absolute;
        left: -10px;
        top: 0;
        bottom: 0;
        z-index: -1;
      }
    }
    &.alt {
      flex-direction: row-reverse;
      .description {
        &:before {
          left: inherit;
          right: -10px;
          transform: skew(3deg);
        }
      }
      .details {
        padding-left: 25px;
      }
    }
  }
}
</style>
