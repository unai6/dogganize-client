import { axiosInstance } from '../../api/api.js';

export default {
    async fetchTodos(context, payload) {
        const { userId } = payload;
        try {
            const { data } = await axiosInstance.get(`/user/${userId}/todos`)
            context.commit('fetchTodos', data);
        } catch (err) {
            console.log(err.response)
            throw new Error('Something went wrong while fetching todos', err.response)
        }


    },
    async createTodo(context, payload) {
        try {
            const { userId } = payload;
            await axiosInstance.post(`/user/${userId}/create-todo`, payload);
            context.commit('createTodo', payload);
        } catch (err) {
            throw new Error('Something went wrong while creating todo', err.response);
        }
    },

    async editTodo(context, payload) {
        try {
            const { userId, todoId } = payload;
            await axiosInstance.put(`/user/${userId}/${todoId}/edit`, payload);
            context.commit('editTodo', payload);

        } catch (err) {
            throw new Error('Something went wrong while editing todo', err.response);
        }
    },

    async deleteTodo(context, payload) {
        const {userId, todoId} = payload;
        
        await axiosInstance.delete(`/user/${userId}/${todoId}/delete`)
        context.commit('deleteTodo', payload);
    },

    showModal(context, payload) {
        context.commit('showModal', payload)
    }
}