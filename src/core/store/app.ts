import { defineStore } from "pinia";
import type { TokenRequest } from "@/core/api/types";
import tokenApi from "@/core/api/token";
import { useUserStore } from "@/core/store/user";

type AppState = {
  token: string;
  menuCollapse: boolean;
};

export const useAppStore = defineStore("app", {
  state: (): AppState => {
    return {
      token: "",
      menuCollapse: false,
    };
  },
  persist: true,
  actions: {
    async login(loginForm: TokenRequest): Promise<void> {
      this.token = await tokenApi.createToken(loginForm);
    },
    async logout(): Promise<void> {
      const userStore = useUserStore();
      this.token = "";
      userStore.reset();
    },
  },
});
