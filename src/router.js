import { createRouter, createWebHistory } from 'vue-router';
import { store } from './store/index';
import Home from './pages/Home.vue';
import Signup from './pages/Signup.vue'
import Login from './pages/Login.vue'
import CreateTodo from './components/CreateTodo.vue';
import DisplayTodos from './pages/DisplayTodo.vue';
import NotFound from './pages/NotFound.vue'



const isAuthenticated = (_, _2, next) => {
    if (store.getters['auth/isAuthenticated']) {
        next();
        return;
    } else {
        next('/auth/login')
    }
};

const isNotAuthenticated = (_, _2, next) => {
    if (!store.getters['auth/isAuthenticated']) {
        next();
        return;
    } else {
        next('/')
    }
};

export const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            redirect: '/home',
        },
        {
            path: '/home',
            component: Home
        },

        {
            path: '/auth/signup',
            component: Signup,
            beforeEnter: isNotAuthenticated
        },
        {
            path: '/auth/login',
            component: Login,
            props: true,
            beforeEnter: isNotAuthenticated
        },
        {
            path: '/:userId/create-todo',
            component: CreateTodo,
            name: 'create-todo',
            props:true,
            beforeEnter: isAuthenticated
        },
        {
            path: '/:userId/todos',
            component: DisplayTodos,
            name: 'todos',
            props: true,
            beforeEnter: isAuthenticated
        },
        {
            path: '/:notFound(.*)',
            component: NotFound,
            name: 'not-found'
        },
    ],
    scrollBehavior() {
        return { x: 0, y: 0 }
    }
})