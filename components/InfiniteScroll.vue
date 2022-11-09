-
<template>
  <div>
    <div class="tag-list">
      <div
        v-for="(tag, i) in rows"
        :key="i"
        class="loop-slider"
        :style="{
          '--duration': `${randomNmb(duration - 5000, duration + 5000)}ms`,
          '--direction': `${i % 2 ? 'reverse' : 'normal'}`,
        }"
      >
        <div class="inner">
          <div
            v-for="(tag, x) in shuffle(tags).slice(0, tags_per_row)"
            :key="x + tag"
            class="tag"
          >
            <span>#</span> {{ tag }}
          </div>
          <div
            v-for="(tag, x) in shuffle(tags).slice(0, tags_per_row)"
            :key="tag + x"
            class="tag"
          >
            <span>#</span> {{ tag }}
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
      tags: ["vue", "nuxt", "javascript", "css", "html", "webdev", "frontend"],
      duration: 15000,
      rows: 1,
      tags_per_row: 5,
      reverse: false,
    };
  },
  methods: {
    randomNmb(min, max) {
      return Math.floor(Math.random() * (max - min)) + min;
    },
    shuffle(arr) {
      return [...arr].sort(() => 0.5 - Math.random());
    },
  },
};
</script>

<style scoped lang="scss">
.tag-list {
  display: flex;
  flex-shrink: 0;
  flex-direction: column;
  gap: 1rem 0;
  position: relative;
  padding: 1.5rem 0;
  overflow: hidden;
}

.loop-slider {
  .inner {
    display: flex;
    width: fit-content;
    animation-name: loop;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    animation-direction: var(--direction);
    animation-duration: var(--duration);
  }
}

.tag {
  display: flex;
  align-items: center;
  gap: 0 0.2rem;
  color: #e2e8f0;
  font-size: 0.9rem;
  background-color: #334155;
  border-radius: 0.4rem;
  padding: 0.7rem 1rem;
  margin-right: 1rem; // Must used margin-right instead of gap for the loop to be smooth
  box-shadow: 0 0.1rem 0.2rem rgb(0 0 0 / 20%), 0 0.1rem 0.5rem rgb(0 0 0 / 30%),
    0 0.2rem 1.5rem rgb(0 0 0 / 40%);

  span {
    font-size: 1.2rem;
    color: #64748b;
  }
}

@keyframes loop {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}
</style>
