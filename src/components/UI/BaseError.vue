<template>
  <dialog class="dialog-container">
    <slot>
      <div>
        <span class="error-text">{{ message }}</span>
      </div>
      <menu class="dialog-container__menu">
        <base-button @click="this.$emit('close-error')">
          Okay
        </base-button>
      </menu>
    </slot>
  </dialog>
</template>

<script>
export default {
  props: {
    message: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss">
.dialog-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  top: 10%;
  height: 25%;
  width: 25%;
  border: 1px solid $text-color-dark;
  border-radius: 8px;

  &__menu {
    margin: 0;
    padding: 0;

    button {
      width: 50%;
    }
  }

  .error-text {
    display: inline-block;
    color: $text-color-dark;
    font-weight: 600;
    margin-bottom: 1rem;
  }
}
</style>
