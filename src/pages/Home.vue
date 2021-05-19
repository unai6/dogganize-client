<template>
  <div class="home-container">
    <div class="registration-container">
      <h2>DOGGANIZE <i class="fas fa-paw"></i></h2>
      <google-login v-if="!userIsAuthenticated" text="Log in"> </google-login>
      <base-separator v-if="!userIsAuthenticated"></base-separator>
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
    <img class="img-2" src="../assets/backgrund-home-reversed.png " />
    <img class="img-1" src="../assets/dog-2.png" />
    <footer class="footer"></footer>
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
      console.log(this.userId)
      return `/${this.userId}/todos`
    }
  }
}
</script>

<style scoped>

.home-container {
  background: rgb(229, 123, 84);
  height: 90vh;
}
h2 {
  font-size: 2em;
  text-shadow: 2px 3px 6px rgba(8, 5, 5, 0.5);
}

.registration-container {
  background: white;
  width: 20em;
  position: absolute;
  right: 50%;
  transform: translate(50%, 50%);
  padding: 2em;
  border-radius: 10px;
  box-shadow: 2px 3px 5px rgb(0 0 0 / 50%);
}

.img-1 {
  z-index: 3 !important;
  position: relative;
  left: 7em;
  top: 1em;
  height: 25em;
}
.img-2 {
  z-index: 3 !important;
  position: relative;
  right: 6em;
  top: 6em;
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
  color: #e57b54;
  font-weight: 700;
}

.footer {
  height: 10vh;
  background: #2c3e50;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  width: 99%;
  display: block;
  margin: auto;
}
</style>
