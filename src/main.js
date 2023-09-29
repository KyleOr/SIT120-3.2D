import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';

import Home from './components/HomePage.vue';
import Resume from './components/ResumePage.vue';
import AdminLogin from './components/AdminLogin.vue'; 
import AdminRegister from './components/AdminRegister.vue';
import Grocerx from './components/ProjectGrocerx.vue';
import Chatbot from './components/ProjectChatbot.vue';
import Textgame from './components/ProjectTextgame.vue';
import JRPG from './components/ProjectJRPG.vue';


const routes = [
  { path: '/', component: Home },
  { path: '/Resumepage', component: Resume },
  { path: '/admin/login', component: AdminLogin },
  { path: '/admin/register', component: AdminRegister },
  { path: '/project/1', component: Grocerx },
  { path: '/project/2', component: Chatbot },
  { path: '/project/3', component: Textgame },
  { path: '/project/4', component: JRPG },

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App).use(router).mount('#app');
