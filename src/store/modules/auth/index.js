import mutations from './mutations';
import actions from './actions';
import getters from './getters';

export const authModule = {
    namespaced: true,
    state() {
        return {
            token: localStorage.getItem('userToken'),
            userId: localStorage.getItem('userId')
        }
    },
    mutations,
    actions,
    getters
}