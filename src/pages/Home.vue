<template>
  <div class="background-div">
    <div class="h2-container">
      <h2>DOGGANIZE <i class="fas fa-paw"></i></h2>
      <google-login v-if="!userIsAuthenticated" text="Log in"> </google-login>
      <base-separator></base-separator>
      <router-link to="/auth/login" v-if="!userIsAuthenticated"
        ><base-button>Log in to your account</base-button></router-link
      >
      <router-link to="/auth/signup" v-if="!userIsAuthenticated">
        <span
          >Don't have an account ? <span class="signup-link">Sign up</span>
        </span></router-link
      >
      <router-link :to="getUserIdRouterLink" v-if="userIsAuthenticated">
        <base-button>Go to my Dashboard</base-button>
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      userIsAuth: 'auth/isAuthenticated',
      userId: 'auth/getUserId'
    }),

    userIsAuthenticated () {
      return this.userIsAuth
    },

    getUserIdRouterLink () {
      return `/${this.userId}/todos`
    }
  }
}
</script>

<style scoped>
h2 {
  font-size: 2em;
  text-shadow: 2px 3px 6px rgba(0, 0, 0, 0.5);
}

.h2-container {
  background: white;
  width: 20em;
  position: relative;
  left: 70%;
  top: 15%;
  padding: 2em;
  border-radius: 10px;
  box-shadow: 2px 3px 5px rgba(0, 0, 0, 0.5);
}

.background-div {
  background: url('https://cdn.pixabay.com/photo/2017/07/03/09/54/dog-2467149_1280.jpg')
    center no-repeat;
  background-size: cover;
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
  left: 0;
}
span {
  display: inline-block;
  margin: 5px;
  color: rgb(33, 49, 60);
}
.signup-link {
  text-decoration: underline;
  margin-bottom: 1em;
}

.signup-link:hover {
  color: darkorange;
}
</style>
