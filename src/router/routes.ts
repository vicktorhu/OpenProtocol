import { RouteConfig } from 'vue-router';

const routes: RouteConfig[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Game.vue') },
      { path: 'index', component: () => import('pages/Index.vue') },
      { path: 'setup', component: () => import('pages/Setup.vue') },
      { path: 'game', component: () => import('pages/Game.vue') },
      { path: 'about', component: () => import('pages/About.vue') },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
];

export default routes;
