<template>
  <div class="chat-message">
    <div class="flex items-end" :class="{'justify-end': owner}">
      <div class="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start" :class="{ 'order-2 items-start': !owner, 'order-1 items-end': owner }">
        <div>
          <span v-if="isSystemMessage" class="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-gray-300 text-gray-600">
            {{ message.text }}
          </span>
          <span v-else class="px-4 py-2 rounded-lg inline-block rounded-bl-none" :class="{ 'bg-blue-600 text-white': owner, 'bg-gray-300 text-gray-600': !owner }">
            {{ message.text }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
  
  <script>
  export default {
    props: {
      message: {
        type: Object,
        default: () => {},
      },
      owner: {
        type: Boolean,
      },
    },
    computed: {
      isSystemMessage() {
        return this.message.name === "admin";
      },
    }
  };
  </script>
  
  <style lang="scss" scoped>
  .system {
    margin-bottom: 1rem;
    color: #fff;
  
    p {
      margin-bottom: 1rem;
    }
  }
  
  .msg-wrapper {
    display: flex;
    flex-direction: column;
  }
  
  .msg {
    padding: 1rem;
    width: 60%;
    margin: 0 1rem;
    box-shadow: 0 1px 0 0 rgba(50, 50, 50, 0.3);
    border-radius: 4px;
    background: #1976d2;
    color: #fff;
    position: relative;
    word-break: break-all;
    margin-bottom: 1rem;
  
    &__date {
      text-decoration: underline;
    }
  }
  
  .owner {
    background: #fff;
    color: #000;
    align-self: flex-end;
  }
  
  @media (max-width: 400px) {
    .msg {
      width: 90%;
    }
  }
  </style>
  