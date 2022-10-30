<template>
    <form
      ref="form"
      @submit.prevent="send"
    >
      <textarea
        v-model="text"
        label="Message..."
        outlined
        :rules="rules"
        append-icon="mdi-send-circle-outline"
        @input="typing"
        @click:append="send"
        @blur="resetValidation"
      ></textarea>
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
        if (this.$refs.form.validate()) {
          this.createMessage(this.text);
          this.text = "";
  
          this.setTypingStatus(false);
          this.resetValidation();
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
  