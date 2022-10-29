import { defineStore } from "pinia";
import type { RouteRecordName, RouteRecordRaw } from "vue-router";
import { MENU_ROUTE_NAME } from "@/router";
import { computed, ref } from "vue";

export const usePermissionStore = defineStore(
  "permission",
  () => {
    const routes = ref<RouteRecordRaw[]>([]);
    const menuRoutes = computed<RouteRecordRaw[] | undefined>(() => {
      return routes.value.find(
        (route: RouteRecordRaw) => route.name === MENU_ROUTE_NAME
      )?.children;
    });

    const permissionRouteNamesList = computed<RouteRecordName[]>(() => {
      return routes.value ? buildPermissionRoutesNameList(routes.value) : [];
    });

    const filterRoutes = (
      routes: Array<RouteRecordRaw>,
      permissions: Array<string>
    ) => {
      return routes.filter((route: RouteRecordRaw) => {
        if (route.children) {
          route.children = filterRoutes(route.children, permissions);
        }
        // 1. 没有定义meta的路由 ： !route.meta
        // 2. 没有定义meta里面permission !route.meta.permission
        // 3. permission是否存在与当前permissions 里面
        return (
          !route.meta ||
          (route.meta &&
            (!route.meta.permission ||
              (route.meta.permission &&
                permissions.includes(route.meta.permission))))
        );
      });
    };

    const buildPermissionRoutesNameList = (routes: Array<RouteRecordRaw>) => {
      const nameList: Array<RouteRecordName> = [];
      routes.forEach((route) => {
        if (route.children) {
          nameList.push(...buildPermissionRoutesNameList(route.children));
        }
        if (route.name) {
          nameList.push(route.name);
        }
      });
      return nameList;
    };

    const generateRoutes = (permissions: Array<string>, admin = false) => {
      return admin ? routes : filterRoutes(routes.value, permissions);
    };

    return {
      routes,
      menuRoutes,
      permissionRouteNamesList,
      generateRoutes,
    };
  },
  {
    persist: true,
  }
);
