<template>
  <base-todo>
    <template v-slot:todo-base>
      <div
        @click="showInfo"
        :class="{ 'show-data': !showData, 'active-data': showData }"
      >
        {{ index + 1 }} - {{ name }}
        <i v-if="!showData" class="fas fa-sort-up"></i>
        <i v-if="showData" class="fas fa-sort-down"></i>
      </div>
      <div v-if="showData" class="swing-in-top-fwd">
        <span><b>INFO</b> {{ info }}</span>
        <base-button @click="showModal">EDIT <i class="far fa-edit"></i></base-button>
        <base-button @click="deleteTodo">
          DELETE <i class="far fa-trash-alt"></i>
        </base-button>
      </div>
    </template>
    <template #default>
      <edit-todo
        @show-modal="showModal"
        v-if="show"
        :id="id"
        :name="name"
        :info="info"
      >
      </edit-todo>
    </template>
  </base-todo>
</template>

<script>
import EditTodo from '../components/EditTodo'

export default {
  components: {
    EditTodo
  },
  emits: ['delete-todo'],
  props: {
    name: {
      type: String,
      required: true
    },
    info: {
      type: String,
      required: true
    },
    id: {
      type: String,
      required: true
    },
    index: {
      type: Number,
      required: false
    }
  },

  data () {
    return {
      showData: false,
      show: false
    }
  },

  computed: {
    activeTodo () {
      const active = this.$store.getters['todos/getActiveTodo']
      return active
    }
  },
  methods: {
    async deleteTodo () {
      const { userId } = this.$route.params

      await this.$store.dispatch('todos/deleteTodo', {
        userId,
        todoId: this.id
      })
    },
    showModal () {
      this.show = !this.show
      this.$store.dispatch('todos/showModal', {
        id: this.id
      })
    },

    showInfo () {
      this.showData = !this.showData
    }
  }
}
</script>

<style lang="scss" scoped>
span {
  padding: 1rem;
  display: block;
  text-align: center;
}

.show-data {
  background: transparent;
  border: 1px solid rgba(0, 0, 0, 0.7);
  padding: 1em;
  cursor: pointer;
  margin-top: 1em;
  border-radius: 5px;
}

.active-data {
  background: transparent;
  border: 3px solid #4C4C4C;
  padding: 1em;
  cursor: pointer;
  margin-top: 1em;
  border-radius: 5px;
}

</style>
