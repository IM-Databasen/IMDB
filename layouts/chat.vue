<template>
  <div>
    <Navbar />
    <div class="flex-1 p:2 sm:p-6 flex justify-between flex-col h-screen">
      <div class="flex sm:items-center justify-between py-3 border-b-2 border-gray-200">
        <div class="relative flex items-center space-x-4">
          <div class="flex flex-col leading-tight">
              <div class="text-2xl mt-1 flex items-center">
                <span class="text-gray-700 mr-3">Room: {{ user.room }}</span>
              </div>
          </div>
        </div>
      </div>

      <Nuxt />    
    </div>
  </div>
</template>
  
  <script>
  import { mapState, mapMutations, mapActions } from "vuex";
  export default {
    name: "ChatLayout",
    computed: {
      ...mapState(["user", "users"]),
    },
    middleware: "auth",
    created() {
      this.joinRoom(this.user);
    },
    methods: {
      ...mapActions(["joinRoom", "leftRoom"]),
      exit() {
        this.leftRoom();
        this.$router.push("/?message=leftChat");
      },
    },
  };
  </script>
  