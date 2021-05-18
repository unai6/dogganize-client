<template>
  <button>
    <slot> </slot>
  </button>
</template>

<style scoped>

button {
  cursor: pointer;
  padding: 1em;
  border-radius: 5px;
  border: none;
  background: darkorange;
  font-weight: 600;
  display: block;
  margin: auto;
  margin-bottom: 1rem;
}

button:hover {
  transform: scale(1.02);
  color: white;
}

</style>
