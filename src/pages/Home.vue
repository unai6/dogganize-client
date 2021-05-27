<template>
  <div class="home-container">
    <div class="home-container__registration">
      <h2>DOGGANIZE <i class="fas fa-paw"></i></h2>
      <google-login v-if="!userIsAuthenticated" text="Log in"> </google-login>
      <base-separator v-if="!userIsAuthenticated"></base-separator>
      <router-link to="/auth/login" v-if="!userIsAuthenticated"
        ><base-button>Log in to your account</base-button></router-link
      >
      <router-link to="/auth/signup" v-if="!userIsAuthenticated">
        <span
          >Don't have an account ?
          <span class="registration__signup--link">Sign up</span>
        </span></router-link
      >
      <router-link :to="getUserIdRouterLink" v-if="userIsAuthenticated">
        <base-button>Go to my Dashboard</base-button>
      </router-link>
    </div>
    <img
      class="home-container__img-2"
      src="../assets/backgrund-home-reversed.png "
    />
    <img class="home-container__img-1" src="../assets/dog-2.png" />
    <footer class="home-container__footer"></footer>
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

<style lang="scss" scoped>

.home-container {
  background: $color-primary;
  height: 90vh;

  h2 {
    font-size: 2em;
    color: $text-color-dark;
    text-shadow: 2px 3px 6px rgba(8, 5, 5, 0.5);
  }

  &__registration {
    background: white;
    width: 20em;
    position: absolute;
    right: 50%;
    transform: translate(50%, 50%);
    padding: 2em;
    border-radius: 10px;
    box-shadow: 2px 3px 5px rgb(0 0 0 / 50%);
  }

  &__img-1 {
    z-index: 3 !important;
    position: relative;
    left: 7em;
    top: 1em;
    height: 25em;
  }

  &__img-2 {
    z-index: 3 !important;
    position: relative;
    right: 6em;
    top: 6em;
  }
  span {
    display: inline-block;
    margin: 5px;
    color: $text-color-dark;
  }
  .registration__signup--link {
    text-decoration: underline;
    margin-bottom: 1em;

    &:hover {
      color: $color-primary;
      font-weight: 700;
    }
  }

  &__footer {
    height: 10vh;
    background: $text-color-dark;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    width: 99%;
    display: block;
    margin: auto;
  }
}
</style>
