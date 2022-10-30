<template>
    <div>
        <p v-for="({ name, id }, index) in users"
            :key="`user-${index}`"
            @click.prevent>p</p>
        <p>{{ user.room }}</p>
        <nuxt />
    </div>
  </template>
  
  <script>
  import { mapState, mapMutations, mapActions } from "vuex";
  
  export default {
    name: "ChatLayout",
    data: () => ({
      drawer: true,
    }),
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
  