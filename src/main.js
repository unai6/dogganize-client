import gAuth from 'vue3-google-auth';
import { axiosInstance } from './store/api/api';
import { createApp } from 'vue'
import { store } from './store/index.js';
import { router } from './router.js';
import App from './App.vue'
import GoogleLogin from './pages/GoogleLogin.vue';
import BaseTodo from './components/UI/BaseTodo.vue'
import BaseButton from './components/UI/BaseButton.vue'
import BaseError from './components/UI/BaseError.vue';
import BaseBackButton from './components/UI/BaseBackButton.vue';
import BaseSeparator from './components/UI/BaseSeparator.vue';
import BaseForm from './components/UI/BaseForm.vue';
import TheLoader from './components/layouts/TheLoader.vue';

const app = createApp(App)


const token = localStorage.getItem('userToken');

if (token) {
  axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}


app.component('base-todo', BaseTodo);
app.component('base-error', BaseError);
app.component('base-back-button', BaseBackButton)
app.component('base-button', BaseButton);
app.component('base-separator', BaseSeparator);
app.component('base-form', BaseForm);
app.component('base-loader', TheLoader)
app.component('google-login', GoogleLogin);

const $gAuth = gAuth.createGAuth({
  clientId: '897202844317-ka19i30vblcloq5afu4nopj3pdut8bpu.apps.googleusercontent.com',
  scope: 'profile email',
  prompt: 'select_account',
});

app.use($gAuth);
app.use(router);
app.use(store);

app.mount('#app')
