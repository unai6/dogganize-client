import { createStore } from 'vuex';
import { todosModule } from './modules/todos/index';
import { authModule } from './modules/auth/index';

import rootMutations from './mutations';
import rootActions from './actions';
import rootGetters from './getters';


export const store = createStore({
    modules: {
        todos: todosModule,
        auth: authModule
    },
    state() {
        return {
        }
    },

    mutations: rootMutations,
    actions: rootActions,
    getters: rootGetters

})
