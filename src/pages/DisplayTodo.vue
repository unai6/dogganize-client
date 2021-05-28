<template>
  <section v-if="userIsAuthenticated" class="dashboard">
    <the-header>
      <template #h2> DOGGANIZE <i class="fas fa-dog"></i> </template>
    </the-header>
    <the-todos-counter :todosLength="getTodosLength"> </the-todos-counter>
    <router-link to="create-todo"
      ><base-button class="dashboard__btn--create-todo">
        ADD DOG/ OWNER TASK <i class="fas fa-plus"></i>
      </base-button>
    </router-link>

    <base-todo v-for="(todo, index) in getTodos" :key="todo._id">
      <template #todo-base>
        <todo
          :index="index"
          :id="todo._id"
          :name="todo.name"
          :info="todo.info"
        ></todo>
      </template>
    </base-todo>

    <img
      class="dashboard__dog"
      src="https://cdn.pixabay.com/photo/2015/04/22/12/24/dog-734689_1280.jpg"
      alt="dogganized"
    />
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
import Todo from '../components/Todo'
import TheHeader from '../components/layouts/TheHeader'
import BaseTodo from '../components/UI/BaseTodo.vue'
import TheTodosCounter from '../components/layouts/TheTodosCounter'

export default {
  components: {
    Todo,
    TheHeader,
    BaseTodo,
    TheTodosCounter
  },

  data () {
    return {
      showMod: false
    }
  },
  computed: {
    ...mapGetters({
      userIsAuth: 'auth/isAuthenticated',
      userId: 'auth/getUserId',
      getUserTodos: 'todos/getTodos'
    }),
    getTodos () {
      return this.getUserTodos
    },

    getTodosLength () {
      return this.getUserTodos.length
    },

    userIsAuthenticated () {
      return this.userIsAuth
    }
  },

  methods: {
    async getUserDashboard () {
      const userId = this.$route.params.userId
      await this.$store.dispatch('todos/fetchTodos', {
        userId
      })
    }
  },

  created () {
    this.getUserDashboard()
  }
}
</script>

<style lang="scss" scoped>
.dashboard {
  &__btn--create-todo {
    padding: 1em;
    display: block;
    margin: auto;
  }

  &__dog {
    position: fixed;
    right: 0;
    width: 34.5em;
    top: 22em;
  }
}
</style>
