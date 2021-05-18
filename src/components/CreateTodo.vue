<template>
  <div>
    <base-back-button>
      BACK
    </base-back-button>
    <h1>CREATE TODO</h1>
    <form @keydown.enter="createTodo">
      <base-todo>
        <template v-slot:todo-base>
          <input
            type="text"
            v-model="todoName"
            placeholder="TYPE YOUR TITLE*"
          />
          <textarea
            type="textarea"
            rows="10"
            v-model="todoInfo"
            placeholder="TYPE YOUR INFO*"
          />
          <base-error
            open
            v-if="error"
            @close-error="closeError"
            :message="errorMessage"
          ></base-error>
          <base-button @click.prevent="createTodo">CREATE</base-button>
        </template>
      </base-todo>
    </form>
  </div>
</template>

<script>
import BaseError from './UI/BaseError.vue'
export default {
  components: { BaseError },
  data () {
    return {
      todoName: '',
      todoInfo: '',
      error: false,
      errorMessage: ''
    }
  },

  methods: {
    async createTodo () {
      try {
        if (this.todoName === '' || this.todoInfo === '') {
          this.error = true
          this.errorMessage = 'Please fill all the fields'
          return
        }
        const { userId } = this.$route.params

        await this.$store.dispatch('todos/createTodo', {
          userId,
          name: this.todoName,
          info: this.todoInfo
        })
        this.$router.replace(`/${userId}/todos`)
      } catch (err) {
        console.log(err)
      }
    },
    closeError () {
      this.error = false
    }
  }
}
</script>

<style>
a,
a:hover {
  text-decoration: none;
}
input {
  width: 25%;
  display: block;
  margin: auto;
  margin-bottom: 1em;
  height: 2em;
  border-radius: 5px;
}
textarea {
  width: 25%;
  display: block;
  margin: auto;
  margin-bottom: 1em;
  height: 8em;
  border-radius: 5px;
}
</style>
