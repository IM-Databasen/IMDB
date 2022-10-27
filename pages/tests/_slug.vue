<template>
    <div class="test">
      <h1>{{test.name}}</h1>
      <img :src="test.image" :alt="test.name">
      <p>{{test.description}}</p>
      <hr />
      <ul style="list-style: none;">
        <li v-for="(item, index) in test.questions">
          <button type="button" class="collapsible">{{ item.q }}</button>
          <div class="content">
            <p>Svar: {{ item.a }}</p>
          </div>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        currentTest: {},
        test: {}
      }
    },
    watch: {
      '$route.query': '$fetch'
    }, 
    async asyncData({ params }) {
      let proover = [
        {
          name: "Nettverk",
          image: "/images/img1.webp",
          description: "Her komme nettverkssvar",
          questions: [
            { 
              q: "Hva er en IP-adresse?",
              a: 'Idk.'
            }
          ]
        },
        {
          name: "Photoshop",
          image: "/images/img2.webp",
          description: "mer info komme",
          questions: [
            { 
              q: "Spørsmål 1",
              a: 'Idk.'
            },
            { 
              q: "Spørsmål 2",
              a: 'Idk.'
            },
            { 
              q: "Spørsmål 3",
              a: 'Idk.'
            }
          ]
        },
        {
          name: "Oktettshit",
          image: "/images/img3.webp",
          description: "mer info komme",
          questions: [
          { 
              q: "Hva er en Okett?",
              a: 'Idk.'
            }
          ]
        },
      ]
      if (!params || params === '{}' || params.slug == '' || params.slug > proover.length) return
      return {
        test: proover[params.slug] ? proover[params.slug] : proover.find((test) => test.name.toLowerCase() === params.slug.toLowerCase())
      }
    },
    methods: {
      
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
    computed: {

    }
  }
  </script>