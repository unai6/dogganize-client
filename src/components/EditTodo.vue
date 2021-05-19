<template>
  <div class="edit-todo fade-in">
    <form @submit.prevent="editTodo">
      <base-todo>
        <template #todo-base>
          <base-button type="button" class="close-modal" @click="showModal">
            &times;
          </base-button>
          <div>
            <label for="name">Task Name</label>
            <input
              id="name"
              type="text"
              v-model="todoName"
              placeholder="new Name"
            />
          </div>
          <div>
            <label for="info">Task Info</label>
            <textarea
              id="info"
              type="textarea"
              rows="6"
              v-model="todoInfo"
              placeholder="new Info"
            />
          </div>
          <base-button @click="changeSubmitContent">{{
            successChange
          }}</base-button>
        </template>
      </base-todo>
      <base-error
        open
        v-if="error"
        @close-error="closeError"
        :message="errorMessage"
      ></base-error>
    </form>
  </div>
</template>

<script>
export default {
  props: ['id', 'name', 'info'],
  emits: ['show-modal'],
  data () {
    return {
      todoName: this.name,
      todoInfo: this.info,
      successChange: 'SAVE CHANGES',
      error: false,
      errorMessage: ''
    }
  },

  methods: {
    async editTodo () {
      try {
        if (this.todoName === '' || this.todoInfo === '') {
          this.error = true
          this.errorMessage = 'Please fill all the fields'
          return
        }
        const { userId } = this.$route.params
        await this.$store.dispatch('todos/editTodo', {
          userId,
          todoId: this.id,
          name: this.todoName,
          info: this.todoInfo
        })
      } catch (err) {
        console.log(err)
      }
    },
    showModal () {
      this.$emit('show-modal')
    },
    changeSubmitContent () {
      if (this.todoName === '' || this.todoInfo === '') {
        this.error = true
      } else {
        this.successChange = 'CHANGES SAVED'
        setTimeout(() => {
          this.showModal()
        }, 100)
      }
    },

    closeError () {
      this.error = false
    }
  }
}
</script>

<style scoped>
.edit-todo {
  background: rgba(0, 0, 0, 0.9);
  z-index: 2000;
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
}
.close-modal {
  position: relative;
  left: 14em;
  top: 1em;
}

form {
  background: white;
  width: 30%;
  margin: auto;
  position: absolute;
  left: 50%;
  transform: translate(-50%, 50%);
  border-radius: 10px;
}

div{
  width: 90%;
  margin: auto;
}

/**animations */
.fade-in {
  -webkit-animation: fade-in 0.3s cubic-bezier(0.39, 0.575, 0.565, 1) both;
  animation: fade-in 0.3s cubic-bezier(0.39, 0.575, 0.565, 1) both;
}
@-webkit-keyframes fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
