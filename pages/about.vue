<template>
  <div>
    <div class="py-16 text-black">
      <div class="container m-auto px-6  md:px-12 xl:px-6">
        <div
          class="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12"
        >
          <div class="md:5/12 lg:w-5/12">
            <nuxt-img
              preload
              src="/placeholder650_550.webp"
              alt="placeholder image"
              width="650px"
              height="550px"
            />
          </div>
          <div class="md:7/12 lg:w-6/12">
            <h1 class="text-2xl  font-bold md:text-4xl">
              IMDB - Få svarene te dine prøver
            </h1>
            <p class="mt-6 ">
              Sorry, svar på prøver er ikke tilgjengelig enda.
            </p>
          </div>
        </div>
      </div>
    </div>

    <hr />

    <div id="services" class="section relative pt-20 pb-8 md:pt-16 md:pb-0 text-black  ">
      <div class="container xl:max-w-6xl mx-auto px-4">
        <header class="text-center mx-auto mb-12 lg:px-20">
          <h2 class="text-2xl leading-normal mb-2 font-bold">
            Koffår bruka IMDB?
          </h2>
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 100 60"
            style="margin: 0 auto; height: 35px"
            xml:space="preserve"
          >
            <circle
              cx="50.1"
              cy="30.4"
              r="5"
              class="stroke-primary"
              style="fill: transparent; stroke-width: 2; stroke-miterlimit: 10"
            ></circle>
            <line
              x1="55.1"
              y1="30.4"
              x2="100"
              y2="30.4"
              class="stroke-primary"
              style="stroke-width: 2; stroke-miterlimit: 10"
            ></line>
            <line
              x1="45.1"
              y1="30.4"
              x2="0"
              y2="30.4"
              class="stroke-primary"
              style="stroke-width: 2; stroke-miterlimit: 10"
            ></line>
          </svg>
          <p
            class=" leading-relaxed font-light text-xl mx-auto pb-2"
          >
            Hør aldri "detta konne du gjort bedre" fra Odd Arne igjen med IMDB.
            Me har svarene på du trenge.
          </p>
        </header>
      </div>
    </div>

    <hr />

    <div class="my-12 py-8  text-imdb_gray-900 bg-imdb_olive_500 rounded-xl">
      <div class="container mx-auto px-6 md:px-12 xl:px-32">
        <div class="mb-16 text-center">
          <h1
            class="mb-4 text-center text-xl  font-bold md:text-xl"
          >
            IMDB blir utvikla og vedlikeholdt av:
          </h1>
        </div>
        <div class="grid gap-12 items-center md:grid-cols-2">
          <a
            v-for="(person, index) in people"
            :key="person.name + index"
            class="space-y-4 text-center"
            :href="person.giturl"
            target="_blank"
          >
            <nuxt-img
              loading="lazy"
              class="w-64 h-64 mx-auto object-cover rounded-xl md:w-40 md:h-40 lg:w-64 lg:h-64"
              :src="person.image"
              :alt="person.name"
              preset="avatar"
            />
            <div>
              <p class="text-2xl">
                {{ person.name }}
              </p>
              <span class="block text-sm ">
                {{ person.title }}
              </span>
            </div>
          </a>
        </div>
      </div>
    </div>

    <hr />

    <div class="py-16 text-black text-center">
      <div class="container m-auto px-6 md:px-12 xl:px-6">
        <div
          class="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center content-center justify-items-center place-content-center"
        >
          <div class="self-center md:7/12 lg:w-6/12">
            <h1 class="text-2xl font-bold md:text-4xl">
              Litt om IM
            </h1>
            <p class="mt-6 ">
              Velger du å studere Informasjonsteknologi og Medieproduksjon (IM),
              velger du en utdanning for fremtiden. 
            </p>
            <p class="mt-6">
              IT er ett av fagfeltene som
              er i sterkest vekst, og det trengs mange flere fagarbeidere i
              årene som kommer. IT-bedriftene uttrykker samtidig at de ønsker at
              enda flere jenter søker IT-utdanninger. IM på Haugaland
              videregående skole har tilgang til topp moderne IT-utstyr. Vi er
              hele tiden i dialog med IT-bransjen over hva elevene skal ha av
              IT-kunnskap når de begynner som IT-lærlinger. 
            </p>
            <p class="mt-6">
              Du trenger ikke å
              kunne noe om IT fra før for å begynne på IM. Grunnleggende IT
              lærer du på VG1. IT er et stort fagfelt og hos oss jobber våre
              elever med alt innenfor IT-feltet, slikt som; design,
              programmering, teknisk, servere, nettverk, nettsider, Cyber
              Security, virtualisering, robotisering, for å nevne noe. På IM
              etterligner vi en arbeidshverdag så godt vi kan. Hos oss skal det
              føles som å komme på jobb der en får jobbe med sine interesser.
              Våre elever jobber hele tiden med å sette seg inn i ny teknologi,
              og nysgjerrighet, utforskning og problemløsing er sentralt i
              hverdagen vår.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  head: {
    title: "IMDB - About",
    meta: [
      {
        hid: "description",
        name: "description",
        content: "About section",
      },
    ],
  },
  data() {
    return {
      people: [
        {
          name: "Theo",
          title: "Haugaland Kraft",
          image: "https://avatars.githubusercontent.com/u/89910775?v=4",
          giturl: "https://github.com/IG9TE",
        },
        {
          name: "Lars Erik",
          title: "Haugaland Kraft",
          image: "https://avatars.githubusercontent.com/u/89910638?v=4",
          giturl: "https://github.com/Lartrax",
        },
        {
          name: "Arvid",
          title: "Ølen Betong",
          image: "https://avatars.githubusercontent.com/u/71834553?v=4",
          giturl: "https://github.com/ArvidWedtstein",
        },
        {
          name: "Erling",
          title: "Haugaland VGS - IT",
          image: "https://avatars.githubusercontent.com/u/78083291?v=4",
          giturl: "https://github.com/Ahldroni",
        },
      ],
    };
  },
};
</script>
