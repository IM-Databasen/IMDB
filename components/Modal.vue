<template>
  <div
    v-if="show"
    class="relative z-10"
    aria-labelledby="modal-title"
    role="dialog"
    aria-modal="true"
  >
    <div
      class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
    ></div>

    <div class="fixed inset-0 z-10 overflow-y-auto">
      <div
        class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0"
      >
        <div class="relative inset-x-0 p-4">
          <div class="relative max-w-xl rounded-lg bg-gray-100 p-6 shadow-sm">
            <button
              type="button"
              class="absolute -top-1 -right-1 rounded-full border border-gray-200 bg-white p-1 text-gray-400"
            >
              <span class="sr-only">Close</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-3 w-3"
                viewBox="0 0 20 20"
                role="button"
                fill="currentColor"
                @click="show = false"
              >
                <title @click="show = false">Close</title>
                <path
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>

            <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <img
                v-if="image"
                :alt="header"
                :src="image"
                class="h-full w-full rounded-xl object-cover"
              />

              <div class="">
                <h2 class="text-lg font-medium">
                  {{ header }}
                </h2>

                <p class="mt-4 text-sm text-gray-500">
                  {{ message }}
                </p>

                <div class="absolute bottom-3 right-3 sm:text-right">
                  <a 
                    v-if="link"
                    :href="link"
                    class="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
                  >
                    Find out more
                  </a>
                  <button
                    v-else
                    @click="show = false"
                    class="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
                  >
                    Ok
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      header: "",
      message: "",
      image: "",
      link: "",
    };
  },
  created() {
    this.$store.subscribe((mutation, state) => {
      if (mutation.type === "modal/showModal") {
        this.header = state.modal.header;
        this.message = state.modal.content;
        this.image = state.modal.image;
        this.link = state.modal.link;
        this.show = true;
      }
    });
  },
};
</script>
