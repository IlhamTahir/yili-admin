import { defineStore } from "pinia";
import type { TokenRequest } from "@/api/types";
import tokenApi from "@/api/token";
import { useUserStore } from "@/store/user";
import { ref } from "vue";

export const useAppStore = defineStore(
  "app",
  () => {
    const token = ref("");
    const menuCollapse = ref(false);

    const login = async (loginForm: TokenRequest): Promise<void> => {
      token.value = await tokenApi.createToken(loginForm);
    };

    const logout = async (): Promise<void> => {
      const userStore = useUserStore();
      token.value = "";
      userStore.$reset();
    };

    return {
      token,
      menuCollapse,
      login,
      logout,
    };
  },
  {
    persist: true,
  }
);
