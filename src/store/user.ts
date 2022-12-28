import { defineStore } from "pinia";
import type { User } from "@/model/User";
import userApi from "@/api/user";
import { usePermissionStore } from "@/store/permission";
import { computed, ref } from "vue";
import type { Ref } from "vue";
import type Role from "@/model/Role";
export const useUserStore = defineStore(
  "user",
  () => {
    const currentUser = <Ref<User | null>>ref(null);
    const fetchCurrentUser = async () => {
      currentUser.value = await userApi.me();
      usePermissionStore().generateRoutes(
        currentUser.value?.permissions,
        checkAdmin(currentUser.value?.roles)
      );
    };
    const reset = () => {
      currentUser.value = null;
    };

    const isAdmin = computed(() => {
      const roles = currentUser.value?.roles;
      return roles && checkAdmin(roles);
    });

    const checkAdmin = (roles: Role[]): boolean => {
      return roles.findIndex((role) => role.name === "ROLE_ADMIN") !== -1;
    };
    return {
      currentUser,
      fetchCurrentUser,
      reset,
      isAdmin,
    };
  },
  {
    persist: true,
  }
);
