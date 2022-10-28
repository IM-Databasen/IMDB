<template>
  <div class="test">
    <h1>
      {{test.title}}
    </h1>
    <p>
      {{test.description}}
    </p>
    <hr />
    <ul class="accordion w-full bg-gray-50 rounded-lg shadow-lg p-2 mt-3">
      <li v-for="item in test.questions" :key="item.id" class="cursor-pointer my-2 border-b-2 border-dark-900">
        <span class="font-bold text-xl tracking-tight text-gray-500 flex flex-row justify-between items-center collapsible">
          <p>
            {{ item.question }}
          </p>
          <svg class="text-gray-500 mr-1 bi bi-arrow-down-short" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4z"/>
          </svg>
        </span>
        <div class="text-gray-500 text-md p-2 content">
          Svar: {{ item.answer }}
        </div>
      </li>
    </ul>
  </div>
</template>
  
  <script>
  export default {
    async asyncData({ params, $content }) {
      if (!params || params === '{}' || params.slug == '') return

      const test = await $content(`tests/${params.slug}`).fetch()

      return {
        test
      }
    },
    mounted() {
      var coll = document.getElementsByClassName("collapsible");
      var i;

      for (i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function() {
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
  }
</script>