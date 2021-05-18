export default {
    isAuthenticated: state => {
        return !!state.token
    },
    getUserId(state){
        return state.userId
    }
}