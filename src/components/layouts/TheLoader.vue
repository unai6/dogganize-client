<template>
  <div class="loader-container">
    <span :style="styles" class="loader-container__spinner">
      <span class="loader-container__inner"></span>
    </span>
  </div>
</template>

<script>
export default {
  props: {
    size: {
      default: '40px'
    },
    color: {
      default: 'orange'
    }
  },
  computed: {
    styles () {
      return {
        width: this.size,
        height: this.size
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.loader-container {
  display: flex;
  justify-content: center;

  &__spinner {
    border-radius: 6px;
    position: relative;
    border: 4px solid #e57b54;
    animation: loader 2s infinite ease;
    line-height: 0;
    box-sizing: border-box;
  }
  &__inner {
    vertical-align: top;
    display: inline-block;
    width: 100%;
    background-color: #e57b54;
    animation: loader-inner 2s infinite ease-in;
  }
}

</style>
