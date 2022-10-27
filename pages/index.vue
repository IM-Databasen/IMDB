<template>
  <div>
    <p>Velkommen te IMDB, databasen der du får svar på dine problemer!</p>
    <main>
      <div class="slideshow-container fade">
        <div class="Containers" v-for="(item, index) in proover" :key="item.id">
          <div class="MessageInfo">{{ index + 1 }} / {{ proover.length }}</div>
          <img :src="item.image" style="width: 100%" />
          <div class="Info">{{ item.name }}</div>
        </div>

        <!-- Back and forward buttons -->
        <a class="Back" @click="plusSlides(-1)">&#10094;</a>
        <a class="forward" @click="plusSlides(1)">&#10095;</a>
      </div>
      <br />

      <!-- The circles/dots -->
      <div style="text-align: center">
        <span
          v-for="(item, index) in proover"
          :key="item.id"
          class="dots"
          @click="currentSlide(index + 1)"
        >
        </span>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: "Index",
  transition: "slide-bottom",
  components: {},
  data() {
    return {
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
    };
  },
  methods: {
    plusSlides(n) {
      this.SlideShow((this.slidePosition += n));
    },

    //  images controls
    currentSlide(n) {
      this.SlideShow((this.slidePosition = n));
    },

    SlideShow(n) {
      var i;
      var slides = document.getElementsByClassName("Containers");
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
  async mounted() {
    this.SlideShow(this.slidePosition);
  },
  computed: {},
};
</script>
