<template>
  <button>
    <slot> </slot>
  </button>
</template>

<style lang="scss" scoped>

button {
  cursor: pointer;
  padding: 1em;
  border-radius: 5px;
  border: none;
  background: $color-primary;
  font-weight: 600;
  display: block;
  margin: auto;
  margin-bottom: 1rem;
  color: $color-white;

  &:hover {
    transform: scale(1.02);
    color: #424242;
  }
}
</style>
