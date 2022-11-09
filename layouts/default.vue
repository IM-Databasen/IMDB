<template>
  <div class="transform-gpu bg-white">
    <Navbar />
    <Snackbar />
    <Modal />
    <Nuxt
      class="overflow-hidden py-10 px-5 sm:px-10 lg:px-36 2xl:px-48 bg-white"
    />
  </div>
</template>

<script>
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
};
</script>
<style lang="scss">
$c-gray-900: #000000;
$c-gray-800: #1f1f1f;
$c-gray-700: #2e2e2e;
$c-gray-600: #313131;
$c-gray-500: #969593;
$c-gray-400: #a6a6a6;
$c-gray-300: #bdbbb7;
$c-gray-200: #f1f1f1;
$c-gray-100: #ffffff;

$c-green-500: #45ffbc;
$c-olive-500: #e3ffa8;

$c-white: $c-gray-100;

$c-text-primary: $c-gray-100;
$c-text-secondary: $c-gray-200;
$c-text-tertiary: $c-gray-500;
body,
html {
  background-color: #fff;
}
</style>
