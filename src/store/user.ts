import { defineStore } from "pinia";
import type User from "@/api/model/User";
import userApi from "@/api/user";
import { usePermissionStore } from "@/store/permission";
import { computed, ref } from "vue";

export const useUserStore = defineStore(
  "user",
  () => {
    const currentUser = ref<User | null>();
    const fetchCurrentUser = async () => {
      currentUser.value = await userApi.me();
      usePermissionStore().generateRoutes(
        currentUser.value?.permissions,
        isAdmin.value
      );
    };
    const reset = () => {
      currentUser.value = null;
    };

    const isAdmin = computed(() => {
      return (
        currentUser.value?.roles.findIndex(
          (role) => role.name === "ROLE_ADMIN"
        ) !== -1
      );
    });
    return {
      currentUser,
      isAdmin,
      fetchCurrentUser,
      reset,
    };
  },
  {
    persist: true,
  }
);
