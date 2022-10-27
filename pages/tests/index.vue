<template>
  <div>
    <main>
      <div class="slideshow-container fade">
        <div class="Containers" v-for="(item, index) in proover" :key="item.name + index">
          <div class="MessageInfo">{{ index + 1 }} / {{ proover.length }}</div>
          <img :src="item.image" :alt="item.name" style="width: 100%" />
          <nuxt-link class="Info" :to="'/tests/' + item.name">{{ item.name }}</nuxt-link>
        </div>

        <!-- Back and forward buttons -->
        <button class="Back" @click="plusSlides(-1)">&#10094;</button>
        <button class="forward" @click="plusSlides(1)">&#10095;</button>
      </div>
      <br />

      <!-- The circles/dots -->
      <div style="text-align: center">
          <span
            v-for="(item, index) in proover"
            :key="index"
            class="dots"
            @click="currentSlide(index + 1)"
          >
          </span>
      </div>
    </main>
  </div>
</template>
  
  <script lang="ts">
  export default {
    data() {
      return {
        test: 's',
        slidePosition: 1,
        proover: [
          {
            name: "Nettverk",
            image: "/images/img1.webp",
            description: "Her komme nettverkssvar",
          },
          {
            name: "Photoshop",
            image: "/images/img2.webp",
            description: "mer info komme",
          },
          {
            name: "Oktettshit",
            image: "/images/img3.webp",
            description: "mer info komme",
          },
        ],
      }
    },
    async asyncData({ params }: any) {
      console.log(params)
    },
    methods: {
      plusSlides(n: number) {
        this.SlideShow((this.slidePosition += n));
      },

      //  images controls
      currentSlide(n: number) {
        this.SlideShow((this.slidePosition = n));
      },

      SlideShow(n: number) {
        var i;
        var slides: any = document.getElementsByClassName("Containers");
        var circles = document.getElementsByClassName("dots");
        if (n > slides.length) {
          this.slidePosition = 1;
        }
        if (n < 1) {
          this.slidePosition = slides.length;
        }
        for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";
        }
        for (i = 0; i < circles.length; i++) {
          circles[i].className = circles[i].className.replace(" enable", "");
        }
        slides[this.slidePosition - 1].style.display = "block";
        circles[this.slidePosition - 1].className += " enable";
      },
    },
    mounted() {
      this.SlideShow(this.slidePosition);
    },
    computed: {

    }
  }
  </script>