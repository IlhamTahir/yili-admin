<template>
  <div class="login-container">
    <div class="content">
      <t-card>
        <h1>{{}}</h1>
        <t-form
          ref="form"
          :data="loginForm"
          :rules="rules"
          class="login-form"
          :colon="true"
          :label-width="0"
          @submit="handleLogin"
        >
          <t-form-item name="username">
            <t-input
              v-model="loginForm.username"
              clearable
              placeholder="请输入用户名"
            >
              <template #prefix-icon>
                <icon name="desktop" />
              </template>
            </t-input>
          </t-form-item>
          <t-form-item name="password">
            <t-input
              v-model="loginForm.password"
              type="password"
              clearable
              placeholder="请输入密码"
            >
              <template #prefix-icon>
                <icon name="lock-on" />
              </template>
            </t-input>
          </t-form-item>
          <t-form-item style="padding-top: 8px">
            <t-button theme="primary" type="submit" block :loading="loading"
              >登录
            </t-button>
          </t-form-item>
        </t-form>
      </t-card>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Icon, MessagePlugin } from "tdesign-vue-next";
import type { SubmitContext } from "tdesign-vue-next";
import { reactive, ref } from "vue";
import type { TokenRequest } from "@/api/types";
import { useAppStore, useUserStore } from "@/store";
import { useRouter } from "vue-router";

const rules = {
  username: [{ required: true, message: "请填写用户名" }],
  password: [{ required: true, message: "请填写密码" }],
};

const loginForm = reactive<TokenRequest>({
  username: "",
  password: "",
});

const appStore = useAppStore();
const userStore = useUserStore();

const loading = ref(false);

const router = useRouter();
const handleLogin = async ({ validateResult }: SubmitContext) => {
  if (validateResult !== true) {
    return;
  }
  loading.value = true;
  try {
    await appStore.login(loginForm);
    await userStore.fetchCurrentUser();
    await MessagePlugin.success("登录成功");
    await router.push({ name: "dashboard" });
  } finally {
    loading.value = false;
  }
};
</script>

<style lang="less" scoped>
.login-container {
  width: 100vw;
  height: 100vh;
  background-color: #f5f5f5;
  display: flex;
  align-items: center;
  justify-content: center;

  .content {
    width: 400px;

    h1 {
      text-align: center;
    }

    .login-form {
      margin: 20px 0;
    }
  }
}
</style>
