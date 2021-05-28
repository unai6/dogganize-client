<template>
  <form>
    <slot></slot>
  </form>
</template>



<style lang="scss" scoped>
form {
  border-radius: 8px;
  width: 100%;
  max-width: 25em;
  background-color: $color-white;
  box-sizing: border-box;
  padding: 2rem;
  border: 1px solid $color-primary;
  margin: 2rem;
  margin-top: 1rem;
  margin: auto;
}

</style>
