<template>
  <button @click="goBack" class="go-back">
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

<style scoped>
.go-back {
  background: transparent;
  border: 1px solid orange;
  color: darkorange;
  border-radius: 5px;
  margin-bottom: 1rem;
  padding: .5rem;
  cursor: pointer;

}
</style>
