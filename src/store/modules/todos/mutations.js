export default {


    fetchTodos(state, payload) {
        state.todos = payload.userTodos;
    },

    createTodo(state, payload) {
        const { name, info, userId } = payload;
        const newTodo = {
            userId,
            name: name,
            info: info,
            active: false
        };
        state.todos.unshift(newTodo);

    },

    deleteTodo(state, payload) {
        const {todoId} = payload;
        const todoIndex = state.todos.findIndex(todo => todo._id === todoId);
        state.todos.splice(todoIndex, 1)
    },

    editTodo(state, payload) {
        const { todoId } = payload;
        const todo = state.todos.find(todo => todo._id === todoId);
        if (todo) {
            todo.name = payload.name;
            todo.info = payload.info
        }
        return todo
    },

    showModal(state, payload) {
        const { id } = payload;
        const activeTodo = state.todos.find(todo => todo._id === id);
        state.activeTodo = activeTodo;
    }


}