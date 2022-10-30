<template>
    <form
      ref="form"
      @submit.prevent="send"
    >
      <input
        v-model="text"
        label="Message..."
        :rules="rules"
        append-icon="mdi-send-circle-outline"
        @input="typing"
        @click:append="send"
        @blur="resetValidation"
      />
    </form>
  </template>
  
  <script>
  import { mapActions, mapGetters } from "vuex";
  export default {
    data: () => ({
      text: "",
      rules: [v => !!v || "Text is required"],
    }),
    computed: {
      ...mapGetters(["typingStatus"]),
    },
    methods: {
      ...mapActions(["createMessage", "setTypingStatus"]),
      send() {
        if (true) {
          this.createMessage(this.text);
          this.text = "";
          this.setTypingStatus(false);
        }
      },
      resetValidation() {
        this.$refs.form.resetValidation();
      },
      typing() {
        if (!this.typingStatus) {
          this.setTypingStatus(true);
        }
      },
    },
  };
  </script>