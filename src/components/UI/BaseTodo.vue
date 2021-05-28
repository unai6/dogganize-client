<template>
  <div>
    <slot name="todo-base"></slot>
    <slot name="default">
      <div></div>
    </slot>
  </div>
</template>

<style lang="scss" scoped>
div {
  @include flexLayout;
}

div > input {
  line-height: 2em;
  margin: 0.5rem;
}
</style>
