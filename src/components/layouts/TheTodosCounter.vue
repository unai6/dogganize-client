<template>
  <div>
      <span>YOU HAVE <b class='todo-number'>{{todosLength}}</b> TASKS LEFT</span>
  </div>
</template>

<script>
export default {
  props: {
    todosLength: {
      type: Number,
      required: true
    }
  }
}
</script>

<style scoped>

div{
    width: 100vw;
    background: rgba(0,0,0, .7);
    padding:.5em;
    margin-bottom: 1em;
}

div span{
    color: white;
}

.todo-number{
    color: orange;
}
</style>