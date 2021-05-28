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

<style lang="scss" scoped>
.create-todo-container {
  width: 50%;
  margin: auto;
}

label {
  @include label;
}

input {
  @include formInput;
}
textarea {
  @include formTextArea;
}
</style>
