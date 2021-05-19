<template>
  <div>
    <base-back-button @click="logout"
      >LOGOUT <i class="fas fa-sign-out-alt"></i
    ></base-back-button>
    <base-button @click="goHome">HOME</base-button>
    <h2><slot name="h2"></slot></h2>
  </div>
</template>

<script>
export default {
  methods: {
    logout () {
      this.$store.dispatch('auth/logout')
      this.$router.push('/home')
    },
    goHome () {
      this.$router.go(-1)
    }
  }
}
</script>

<style scoped>
div {
  display: block;
  width: 50%;
  margin: auto;
}

h2 {
  color: #e57b54;
  border: 1px solid #e57b54;
  padding: 1em;
  border-radius: 8px;
}
</style>
