<template>
    <div v-if="company" class="container mx-auto text-center"> <!-- TODO: Lag bedre layout -->
      <h1 class="text-xl font-bold">
        {{company}}
      </h1>
      <p class="font-light">
        {{company.description}}
      </p>
    </div>
  </template>
    
    <script>
    export default {
      async asyncData({ params, $content }) {
        if (!params || params === '{}' || params.slug == '') return
  
        const company = await $content(`bedrifter`).fetch()

        return {
          company: company.companies.filter((item) => item.name.includes(params.slug))[0],
        }
      },
      mounted() {
        var coll = document.getElementsByClassName("collapsible");
  
        for (let i = 0; i < coll.length; i++) {
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