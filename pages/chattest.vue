<template>
    <div class="row align-items-center">
      <div class="col-md-3">
        <form
          ref="form"
        @submit.prevent="submit"
        >
          <textarea
            v-model="user.name"
            :counter="16"
            :rules="nameRules"
            label="Name"
            required
            
          ></textarea>
          <textarea
            v-model="user.room"
            :counter="16"
            :rules="roomRules"
            label="Enter the room"
            required
          ></textarea>
          <button
            :disabled="!isValid"
            color="primary"
            class="mt-3"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  import { mapActions } from "vuex";
  import messageDict from "@/utils/messageDict";
  export default {
    name: "Login",
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
        if (true) {
          this.createUser(this.user);
          this.$router.push("/chat");
        }
      },
    },
  };
  </script>