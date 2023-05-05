import { createRouter, createWebHashHistory } from "vue-router";
const index = () => import('/src/pages/index.vue');
const home = () => import('/src/pages/home.vue');
const myIndex = () => import('/src/pages/myIndex.vue');
const lostPage = () => import('/src/pages/404.vue');

const demo = () => import('/src/pages/functionModules/demo.vue');

const routes = [
  {
    path: '/',
    component: index,
    children: [
      { path: 'home', name: 'home', component: home },
      { path: 'myIndex', name: 'myIndex', component: myIndex },
    ],
  },
  {
    path: '/functionModules',
    name: 'functionModules',
    component: index,
    children: [
      { path: 'demo', name: 'demo', component: demo },
    ],
  },
  {
    path: '/404',
    component: lostPage,
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes, // `routes: routes` 的缩写
})


export default router
