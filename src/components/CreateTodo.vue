<template>
  <div class="create-todo-container">
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
            placeholder="Type task title*"
          />
          <textarea
            type="textarea"
            rows="10"
            v-model="todoInfo"
            placeholder="Type task info*"
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

.create-todo-container{
  width: 50%;
  margin: auto;
}

label {
  display: block;
  text-align: start;
  font-weight: 600;
}

input {
  border-radius: 8px;
  border: 1px solid #ff8a67;
  width: 100%;
  box-sizing: border-box;
  font-size: 1rem;
  padding: 0.5rem;
  color: #282828;
  background-color: #fff;
  margin-bottom: 1em;
}
textarea {
  border-radius: 8px;
  border: 1px solid #ff8a67;
  width: 100%;
  box-sizing: border-box;
  font-size: 1rem;
  padding: 0.5rem;
  margin-bottom: 1em;
  color: #282828;
  background-color: #fff;
}
</style>
