import type { RouteRecordRaw } from "vue-router";
import LoginView from '@/views/login/index.vue'
import DashboardView from '@/views/dashboard/index.vue'
import { createRouter, createWebHashHistory } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {path: '/',  name:'dashboard', component: DashboardView,},
  {path: '/login',  name:'login', component: LoginView}
]

const router = createRouter({
  history: createWebHashHistory(),
  strict: true,
  routes,
  scrollBehavior: () => ({left:0, top:0})
})

export default router