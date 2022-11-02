<template>
  <div class="transform-gpu">
    <Navbar />
    <Snackbar />
    <Modal />
    <Nuxt class="overflow-hidden py-10 px-5 sm:px-10 lg:px-36 2xl:px-48" />
  </div>
</template>

<script lang="ts">
import Navbar from "~/components/Navbar.vue";
import Snackbar from "~/components/Snackbar.vue";
import Modal from "~/components/Modal.vue";
export default {
  name: "default",
  components: {
    Navbar,
    Snackbar,
    Modal,
  },
}
</script>
