<template>
  <button @click="goBack" class="btn--back">
    <slot> </slot>
  </button>
</template>

<script>
export default {
  methods: {
    goBack () {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="scss" scoped>
.btn--back {
  background: transparent;
  border: 1px solid $color-primary;
  color: $color-primary;
  border-radius: 5px;
  margin-bottom: 1rem;
  padding: .5rem;
  cursor: pointer;
}

</style>
