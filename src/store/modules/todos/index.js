import mutations from './mutations';
import actions from './actions';
import getters from './getters';

export const todosModule = {
    namespaced: true,
    state() {
        return {
            todos: [],
            activeTodo: null
        }
    },

    mutations,
    actions,
    getters
}