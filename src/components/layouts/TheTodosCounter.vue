<template>
  <div class="counter">
    <span class="counter__span"
      >YOU HAVE
      <b class="counter__number">{{ todosLength }}</b> TASKS
      LEFT</span
    >
  </div>
</template>

<script>
export default {
  props: {
    todosLength: {
      type: Number,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.counter {
  width: 100vw;
  background: rgba(0, 0, 0, 0.7);
  padding: 0.5em;
  margin-bottom: 1em;

  &__span {
    color: $color-white;
  }

  &__number {
    color: $color-primary;
  }
}
</style>
