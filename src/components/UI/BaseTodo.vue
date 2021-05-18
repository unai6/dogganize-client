<template>
  <div>
    <slot name="todo-base"></slot>
    <slot name="default">
      <div></div>
    </slot>
  </div>
</template>

<style scoped>
div {
  display: flex;
  flex-direction: column;
  margin: auto;
  line-height: 2em;
  justify-content: space-around;
  padding: 0;
}

div > input {
  line-height: 2em;
  margin: 0.5rem;
}
</style>
