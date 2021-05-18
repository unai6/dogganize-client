import { axiosInstance } from '../../api/api';


export default {
    async signup(context, payload) {
        try {
            const { data } = await axiosInstance.post('/auth/signup', payload);
            const token = data.user.userToken;
            const userId = data.user.userId;
            localStorage.setItem('userToken', token);
            localStorage.setItem('userId', userId);

            await context.commit('signup', data);

        } catch (err) {
            throw new Error ('The email entered already exists, please provide another one', err.response)
        }
    },
    async googleSignup(context, payload) {
        try {
            const { data } = await axiosInstance.post('/auth/google-signup', payload);
            const token = data.user.userToken;
            const userId = data.user.userId;
            localStorage.setItem('userToken', token);
            localStorage.setItem('userId', userId);
            if (token) {
                await context.commit('googleSignup', data);
            }

        } catch (err) {
            throw new Error ('Error while signing up with google', err.response)
        }
    },

    async login(context, payload) {
        try {
            const { data } = await axiosInstance.post('/auth/login', payload);
            const token = data.user.userToken;
            const userId = data.user.userId;
            localStorage.setItem('userToken', token);
            localStorage.setItem('userId', userId);

            if (token) {
                await context.commit('login', data);
            }
        } catch (err) {
            throw new Error ('Error at login with', err.response)
        }

    },

    logout(context) {
        localStorage.removeItem('userToken');
        localStorage.removeItem('userId');
        context.commit('logout');
    }
}