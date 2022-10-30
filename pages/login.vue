<template>
    <div style="display: flex; flex-direction: row; background: #000;">
      <div style="display: flex; flex-direction: column;" cols="auto">
        <div>
  
          <div>
            <h2>Login</h2>
          </div>
          <div>
            <form
              ref="form"
              lazy-validation
              @submit.prevent="submit"
              class="bg-gray-900"
            >
              <input
                v-model="user.name"
                required
              />
              <input
                v-model="user.room"
                :counter="16"
                required
              />
              <button
                color="primary"
                class="mt-3"
                type="submit"
              >
                Submit
          </button>
            </form>
          </div>
        </div>
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
        v => !!v || "Name is required",
        v => (v && v.length <= 16) || "Name must be less than 16 characters",
      ],
      roomRules: [
        v => !!v || "Enter the room",
        v => (v && v.length <= 16) || "Room must be less than 16 characters",
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
  