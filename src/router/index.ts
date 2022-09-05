import type { RouteRecordRaw } from "vue-router";
import LoginView from "@/views/login/index.vue";
import LayoutView from "@/views/common/layout.vue";
import PageLayoutView from "@/views/common/page-layout.vue";
import { createRouter, createWebHashHistory } from "vue-router";
import { useAppStore } from "@/store";
import { PermissionEnum } from "@/config/permission.config";

declare module "vue-router" {
  interface RouteMeta extends Record<string | number | symbol, undefined> {
    permission?: string;
    icon?: string;
    title?: string;
  }
}

export const MENU_ROUTE_NAME = "menuRoot";

export const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: MENU_ROUTE_NAME,
    component: LayoutView,
    redirect: "dashboard",
    children: [
      {
        name: "dashboard",
        path: "dashboard",
        component: () => import("@/views/dashboard/index.vue"),
        meta: {
          permission: PermissionEnum.DASHBOARD,
          title: "控制台",
          icon: "dashboard",
        },
      },
      {
        name: "user",
        path: "user",
        component: PageLayoutView,
        meta: {
          title: "用户",
          icon: "usergroup",
          permission: PermissionEnum.USER,
        },
        redirect: { name: "user-list" },
        children: [
          {
            name: "user-list",
            path: "list",
            component: () => import("@/views/user/index.vue"),
            meta: {
              title: "用户管理",
              icon: "user",
              permission: PermissionEnum.USER_LIST,
            },
          },
        ],
      },
    ],
  },
  { path: "/login", name: "login", component: LoginView },
];

const router = createRouter({
  history: createWebHashHistory(),
  strict: true,
  routes,
  scrollBehavior: () => ({ left: 0, top: 0 }),
});

const whiteList = ["/login"];

router.beforeEach((to, from, next) => {
  const appStore = useAppStore();
  if (!appStore.token) {
    whiteList.indexOf(to.path) !== -1
      ? next()
      : next(`login?redirect=${to.path}`);
  }

  if (appStore.token && to.path === "/login") {
    next({ name: "dashboard" });
  }

  next();
});

export default router;
