<template>
  <div>
    <div class="flex-1 p:2 sm:p-6 justify-between flex flex-col h-screen">
      <div class="flex sm:items-center justify-between py-3 border-b-2 border-gray-200">
        <div class="relative flex items-center space-x-4">
          <div class="flex flex-col leading-tight">
            <div class="text-2xl mt-1 flex items-center">
              <span class="text-gray-700 mr-3">Room {{ user.room }}</span>
            </div>
          </div>
          <button @click="exit">Exit</button>
        </div>
      </div>
      <div
        id="messages"
        class="flex flex-col space-y-4 p-3 overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch"
      >
        <div class="chat-message">
          <div class="flex items-end">
            <div
              class="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start"
            >
              <div>
                <span
                  class="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-gray-300 text-gray-600"
                  >testmsg1</span
                >
              </div>
            </div>
            <img
              src="https://images.unsplash.com/photo-1549078642-b2ba4bda0cdb?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144"
              alt="My profile"
              class="w-6 h-6 rounded-full order-1"
            />
          </div>
        </div>
        <div class="chat-message">
          <div class="flex items-end justify-end">
            <div
              class="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-1 items-end"
            >
              <div>
                <span
                  class="px-4 py-2 rounded-lg inline-block rounded-br-none bg-blue-600 text-white"
                  >own msg test 1</span
                >
              </div>
            </div>
            <img
              src="https://images.unsplash.com/photo-1590031905470-a1a1feacbb0b?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144"
              alt="My profile"
              class="w-6 h-6 rounded-full order-2"
            />
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
