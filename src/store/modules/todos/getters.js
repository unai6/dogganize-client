export default {

    getTodos(state) {
        return state.todos;
    },

    hasTodos(state) {
        return state.todos && state.todos.length > 0
    },

    getActiveTodo(state){
        return state.activeTodo;
    }
}