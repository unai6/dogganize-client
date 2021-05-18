<template>
  <dialog>
    <slot>
      <div>
        <span class="error-text">{{ message }}</span>
      </div>
      <menu>
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

<style>
dialog {
  display: flex;
  flex-direction: column;
  justify-content: center;
  top: 25%;
  height: 25%;
  width: 50%;
}

menu {
  margin: 0;
  padding: 0;
}

menu > button {
  cursor: pointer;
  background: orange;
  width: 50%;
  margin: auto;
  display: block;
  text-align: center;
  color: white;
}

.error-text {
  color: red;
  font-weight: 600;
}
</style>
