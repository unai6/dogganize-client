<template>
  <div>
    <base-back-button>
      BACK
    </base-back-button>
    <h2>LOGIN</h2>
    <base-form @submit.prevent="submitForm" autocomplete="off">
      <div>
        <label for="email">Email</label>
        <input
          id="email"
          type="email"
          v-model.trim="userEmail"
          placeholder="Email"
        />
      </div>
      <div>
        <label for="password">Password</label>
        <input
          id="password"
          type="password"
          v-model.trim="password"
          placeholder="Password"
        />
      </div>
      <base-error
        open
        v-if="error"
        @close-error="closeError"
        :message="errorMessage"
      ></base-error>
      <base-button v-if="!isLoading && !error">LOGIN</base-button>
      <base-loader v-if="isLoading && !error"></base-loader>
    </base-form>
  </div>
</template>

<script>
import { axiosInstance } from '../store/api/api'

export default {
  data () {
    return {
      userEmail: '',
      password: null,
      isLoading: false,
      error: false,
      errorMessage: ''
    }
  },

  methods: {
    async submitForm () {
      this.isLoading = true
      try {
        if (this.userEmail === '' || this.password === '') {
          this.isLoading = false
          this.error = true
          this.errorMessage = 'Please fill all the gaps'
          return
        }

        const payload = {
          userEmail: this.userEmail,
          password: this.password
        }

        await this.$store.dispatch('auth/login', payload)
        const userId = localStorage.getItem('userId')
        const token = localStorage.getItem('userToken')

        if (token) {
          axiosInstance.defaults.headers.common[
            'Authorization'
          ] = `Bearer ${token}`
          this.isLoading = false

          this.$router.replace(`/${userId}/todos`)
        }
      } catch (err) {
        this.isLoading = false
        this.error = true
        this.errorMessage = 'The email or password provided are not correct'
        throw new Error('Error while loading user data', err.response)
      }
    },

    closeError () {
      this.error = false
    }
  }
}
</script>

<style lang="scss" scoped>
label {
  @include label;
}

input {
  @include formInput;
}
</style>
