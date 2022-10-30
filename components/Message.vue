<template>
  <div class="row">
    <p v-if="isSystemMessage" class="text-center font-italic system">
      {{ message.text }}
    </p>
    <div v-else class="msg-wrapper">
      <div class="msg" :class="{ owner }">
        <div class="col-md-3">
          <span class="font-weight-bold">{{ message.name }}</span>
          <p class="mb-0">
            {{ message.text }}
          </p>
        </div>
        <div class="col-md-3">
          <span class="msg__date ml-3">{{ message.time }}</span>
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
  },
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
