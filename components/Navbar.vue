<template>
  <nav
    class="flex flex-row items-center justify-between p-5 h-fit sm:h-20 border-b-2 outline-0"
  >
    <div
      class="flex flex-col items-center text-black text-4xl font-extralight sm:flex-row"
    >
      <nuxt-img
        src="/faviconV2.png"
        preload
        format="webp"
        alt="IMDB Logo"
        width="256px"
        height="256px"
        class="w-16 ml-5"
      />
      <h1 class="pl-5 sm:pl-0 text-black">IMDB</h1>
    </div>
    <div class="flex flex-col sm:flex-row sm:ml-6 border-b-2 border-gray-900">
      <nuxt-link
        v-for="(link, i) in routes"
        :key="i"
        :to="link.route"
        :class="
          // create a regex to exactly match the current route
          // and add the active class if it matches
          new RegExp(`^${link.route}$`, 'i').test($route.path)
            ? 'border-gray-900 text-gray-900'
            : 'border-transparent text-gray-600 hover:text-gray-800'
        "
        class="py-2 px-3 m-1 text-sm font-medium border-t-2 flex flex-row outline-none"
      >
        {{ link.name }}
        <Icon v-if="link.icon" :name="link.icon" class="w-6 h-6 ml-2" />
      </nuxt-link>

      <!-- <nuxt-link
        to="/"
        :class="
          String($nuxt.$route.path) == '/'
            ? 'border-gray-900 text-gray-900'
            : 'border-transparent text-gray-600 hover:text-gray-800'
        "
        class="py-2 px-3 m-1 text-sm font-medium border-t-2 flex flex-row outline-none"
      >
        Him
        <Icon name="home" class="w-6 h-6 ml-1" />
      </nuxt-link>
      <nuxt-link
        to="/about"
        :class="
          String($nuxt.$route.path) == '/about'
            ? 'border-gray-900 text-gray-900'
            : 'border-transparent text-gray-600 hover:text-gray-800'
        "
        class="py-2 px-3 m-1 text-sm font-medium border-t-2 flex flex-row outline-none"
      >
        Ka e IMDB?
        <Icon name="server" class="w-6 h-6 ml-1" />
      </nuxt-link>
      <nuxt-link
        to="/tests"
        :class="
          String($nuxt.$route.path).startsWith('/tests')
            ? 'border-gray-900 text-gray-900'
            : 'border-transparent text-gray-600 hover:text-gray-800'
        "
        class="py-2 px-3 m-1 text-sm font-medium border-t-2 flex flex-row outline-none"
      >
        Prøvar
        <Icon name="folder" class="w-6 h-6 ml-1" />
      </nuxt-link>
      <nuxt-link
        to="/memes"
        :class="
          String($nuxt.$route.path).startsWith('/memes')
            ? 'border-gray-900 text-gray-900'
            : 'border-transparent text-gray-600 hover:text-gray-800'
        "
        class="py-2 px-3 m-1 text-sm font-medium border-t-2 flex flex-row outline-none"
      >
        Memes
        <Icon name="image" class="w-6 h-6 ml-1" />
      </nuxt-link>
      <nuxt-link
        to="/chat"
        :class="
          String($nuxt.$route.path).startsWith('/chat')
            ? 'border-gray-900 text-gray-900'
            : 'border-transparent text-gray-600 hover:text-gray-800'
        "
        class="py-2 px-3 m-1 text-sm font-medium border-t-2 flex flex-row outline-none"
      >
        Chat
        <Icon name="chat" class="w-6 h-6 ml-1" />
      </nuxt-link>
      <nuxt-link
        to="/fordypning"
        :class="
          String($nuxt.$route.path).startsWith('/fordypning')
            ? 'border-gray-900 text-gray-900'
            : 'border-transparent text-gray-600 hover:text-gray-800'
        "
        class="py-2 px-3 m-1 text-sm font-medium border-t-2 flex flex-row outline-none"
      >
        Fordypning
        <Icon name="screen" class="w-6 h-6 ml-1" />
      </nuxt-link>
      <nuxt-link
        to="/bedrift"
        :class="
          String($nuxt.$route.path).startsWith('/bedrift')
            ? 'border-gray-900 text-gray-900'
            : 'border-transparent text-gray-600 hover:text-gray-800'
        "
        class="py-2 px-3 m-1 text-sm font-medium border-t-2 flex flex-row outline-none"
      >
        Bedriftar
        <Icon name="chart" class="w-6 h-6 ml-1" />
      </nuxt-link>
      <nuxt-link
        to="/laererdb"
        :class="
          String($nuxt.$route.path).startsWith('/laererdb')
            ? 'border-gray-900 text-gray-900'
            : 'border-transparent text-gray-600 hover:text-gray-800'
        "
        class="py-2 px-3 m-1 text-sm font-medium border-t-2 flex flex-row outline-none"
      >
        Lærere
        <Icon name="users-group" class="w-6 h-6 ml-1" />
      </nuxt-link> -->
    </div>
  </nav>
</template>

<script>
import Icon from "./Icon.vue";
export default {
  template: "navbar",
  transition: "slide-bottom",
  data() {
    return {
      routes: [
        {
          name: "Him",
          route: "/",
          icon: "home",
        },
        {
          name: "Ka e IMDB?",
          route: "/about",
          icon: "server",
        },
        {
          name: "Prøvar",
          route: "/tests",
          icon: "folder",
        },
        {
          name: "Memes",
          route: "/memes",
          icon: "image",
        },
        {
          name: "Chat",
          route: "/chat",
          icon: "chat",
        },
        {
          name: "Fordypning",
          route: "/fordypning",
          icon: "screen",
        },
        {
          name: "Bedriftar",
          route: "/bedrift",
          icon: "chart",
        },
        {
          name: "Lærere",
          route: "/laererdb",
          icon: "users-group",
        },
      ],
    };
  },
  async asyncData({ params, route }) {
    return {
      params: params,
      route: route,
    };
  },
  components: {
    Icon,
  },
};
</script>
