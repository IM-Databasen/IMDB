<template>
  <div class="w-full max-w-lg px-10 py-8 mx-auto bg-white rounded-lg shadow-xl">
    <div class="max-w-md mx-auto space-y-6">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
};
</script>
