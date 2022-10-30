<template>
  <div class="">
    <div class="text-center mt-24">
      <div class="flex items-center justify-center">
        <svg
          fill="none"
          viewBox="0 0 24 24"
          class="w-12 h-12 text-blue-500"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
          />
        </svg>
      </div>
      <h2 class="text-4xl tracking-tight">Enter name And Room</h2>
    </div>
    <div class="flex justify-center my-2 mx-4 md:mx-0">
      <form ref="form" @submit.prevent="submit" class="w-full max-w-xl bg-white rounded-lg shadow-md p-6">
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full md:w-full px-3 mb-6">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="Name"
              >Name</label
            >
            <input
              v-model="user.name"
              class="appearance-none block w-full bg-white text-gray-900 font-medium border border-gray-400 rounded-lg py-3 px-3 leading-tight focus:outline-none"
              type="text"
              required
            />
          </div>
          <div class="w-full md:w-full px-3 mb-6">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="Room"
              >Room</label
            >
            <input
              v-model="user.room"
              class="appearance-none block w-full bg-white text-gray-900 font-medium border border-gray-400 rounded-lg py-3 px-3 leading-tight focus:outline-none"
              type="text"
              required
            />
          </div>
          <div class="w-full md:w-full px-3 mb-6">
            <button
              type="submit"
              class="appearance-none block w-full bg-blue-600 text-gray-100 font-bold border border-gray-200 rounded-lg py-3 px-3 leading-tight hover:bg-blue-500 focus:outline-none focus:bg-white focus:border-gray-500"
            >
              Enter Chat
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import messageDict from "@/lib/messageDict";

export default {
  name: "Home",
  layout: "login",
  data: () => ({
    isValid: true,
    user: {
      name: "",
      room: "",
      typingStatus: false,
    },
    nameRules: [
      (v) => !!v || "Name is required",
      (v) => (v && v.length <= 16) || "Name must be less than 16 characters",
    ],
    roomRules: [
      (v) => !!v || "Enter the room",
      (v) => (v && v.length <= 16) || "Room must be less than 16 characters",
    ],
    snackbar: false,
  }),
  computed: {
    message() {
      const { message } = this.$route.query;
      return messageDict[message] || "";
    },
  },
  mounted() {
    this.snackbar = !!this.message;
  },

  methods: {
    ...mapActions(["createUser"]),
    submit() {
      if (this.user.name != "" && this.user.room != "") {
        this.createUser(this.user);
        this.$router.push("/chat");
      }
    },
  },

  head: {
    title: "nuxt-chat-app",
  },
};
</script>
