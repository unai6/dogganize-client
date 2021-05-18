export default {

    signup(state, payload) {
        const { user: { userToken } } = payload;
        state.token = userToken;
    },

    googleSignup(state, payload) {
        const { user: { userToken } } = payload;
        state.token = userToken;
    },

    login(state, payload) {
        const { user: { userToken } } = payload;
        state.token = userToken;

    },

    logout(state) {
        state.token = '';
    }

}