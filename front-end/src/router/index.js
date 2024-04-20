// Importando os Routers do VUE e páginas
import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/Home.vue';
import Login from '../pages/Login.vue';

// Criando as rotas para cada componente
const routes = [
  { path: '/', component: Login },
  { path: '/home', component: Home }
];

// Criando o router
const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;