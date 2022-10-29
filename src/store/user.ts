import { defineStore } from "pinia";
import type { UserType } from "@/api/types";
import userApi from "@/api/user";
import { usePermissionStore } from "@/store/permission";
import { ref } from "vue";

export const useUserStore = defineStore(
  "user",
  () => {
    const currentUser = ref<UserType | null>();
    const fetchCurrentUser = async () => {
      currentUser.value = await userApi.me();
      // Todo: 超级管理员机制
      usePermissionStore().generateRoutes(currentUser.value.permissions);
    };
    const $reset = () => {
      currentUser.value = null;
    };
    return {
      currentUser,
      fetchCurrentUser,
      $reset,
    };
  },
  {
    persist: true,
  }
);
