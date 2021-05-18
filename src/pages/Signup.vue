<template>
  <div>
    <base-back-button>
      BACK
    </base-back-button>
    <h2>Create your account</h2>
    <google-login text="Sign up"> </google-login>
    <base-separator></base-separator>
    <form @submit.prevent="submitForm">
      <div>
        <input type="text" v-model.trim="userName" placeholder="User Name" />
      </div>
      <div>
        <input type="email" v-model.trim="userEmail" placeholder="Email" />
      </div>
      <div>
        <input type="password" v-model.trim="password" placeholder="Password" />
      </div>
      <base-error
        open
        v-if="error"
        @close-error="closeError"
        :message="errorMessage"
      ></base-error>
      <base-button v-if="!isLoading && !error">SIGNUP</base-button>
      <base-loader v-if="isLoading && !error"></base-loader>
    </form>
  </div>
</template>

<script>
import { axiosInstance } from '../store/api/api'

export default {
  data () {
    return {
      userName: '',
      userEmail: '',
      password: null,
      isLoading: false,
      error: false
    }
  },

  methods: {
    async submitForm () {
      if (
        this.userName === '' ||
        this.userEmail === '' ||
        this.password === ''
      ) {
        this.isLoading = false
        this.error = true
        this.errorMessage = 'Please fill all the gaps'
        return
      }

      this.isLoading = true
      const payload = {
        userName: this.userName,
        userEmail: this.userEmail,
        password: this.password
      }

      try {
        await this.$store.dispatch('auth/signup', payload)

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
        this.errorMessage = err
        throw new Error('wrong signup')
      }
    },
    closeError () {
      this.error = false
    }
  }
}
</script>


