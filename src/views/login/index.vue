<template>
  <div class="login-container">
    <div class="content">
      <t-card>
        <div class="locale-icon">
          <t-dropdown
            :options="[
              { content: '中文', value: 'zh-CN' },
              { content: 'English', value: 'en-US' },
              { content: 'ئۇيغۇرچە', value: 'ug-CN' },
            ]"
            trigger="click"
            @click="switchLang"
            placement="bottom"
          >
            <Icon name="internet" />
          </t-dropdown>
        </div>

        <h1>
          {{ $t("login.title") }}
        </h1>
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
              :placeholder="$t('login.username.placeholder')"
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
              :placeholder="$t('login.password.placeholder')"
            >
              <template #prefix-icon>
                <icon name="lock-on" />
              </template>
            </t-input>
          </t-form-item>
          <t-form-item style="padding-top: 8px">
            <t-button theme="primary" type="submit" block :loading="loading"
              >{{ $t("login.button") }}
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
import { computed, reactive, ref } from "vue";
import type { TokenRequest } from "@/api/types";
import { useAppStore, useUserStore, useLocaleStore } from "@/store";
import { useRouter } from "vue-router";
import { useI18n } from "vue-i18n";

const { t } = useI18n();
const rules = computed(() => {
  return {
    username: [{ required: true, message: t("login.username.required") }],
    password: [{ required: true, message: t("login.password.required") }],
  };
});

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
    await MessagePlugin.success(t("login.successMessage"));
    await router.push({ name: "dashboard" });
  } finally {
    loading.value = false;
  }
};

const switchLang = (event: { value: string }) => {
  useLocaleStore().switchLocale(event.value);
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
    display: flex;
    flex-direction: column;

    .locale-icon {
      text-align: right;
      font-size: 20px;
      cursor: pointer;
    }

    h1 {
      text-align: center;
    }

    .login-form {
      margin: 20px 0;
    }
  }
}
</style>
