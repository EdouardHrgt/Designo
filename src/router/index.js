import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/company',
    name: 'company',
    component: () => import('../views/CompanyView.vue'),
  },
  {
    path: '/locations',
    name: 'locations',
    component: () => import('../views/LocationsView.vue'),
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('../views/ContactView.vue'),
  },
  {
    path: '/web-design',
    name: 'Webdesign',
    component: () => import('../views/WebDesignView.vue'),
  },
  {
    path: '/graphic-design',
    name: 'Graphicdesign',
    component: () => import('../views/GraphicDesignView.vue'),
  },
  {
    path: '/App-design',
    name: 'Appdesign',
    component: () => import('../views/AppDesignView.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
