<template>
  <t-header class="header">
    <collapse-button v-model:collapse="appStore.menuCollapse"></collapse-button>

    <div class="operation-area">
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
        <t-button variant="text">
          <template #icon>
            <icon name="internet"></icon>
          </template>
        </t-button>
      </t-dropdown>
      <t-dropdown
        :options="[{ content: $t('common.logout'), value: 'logout' }]"
        :min-column-width="112"
        @click="clickHandler"
      >
        <t-button variant="text">
          <template #icon>
            <icon name="user"></icon>
          </template>
          {{ userStore.currentUser && userStore.currentUser.nickname }}
        </t-button>
      </t-dropdown>
    </div>
  </t-header>
</template>

<script lang="ts" setup>
import { Icon } from "tdesign-vue-next";
import { useAppStore, useLocaleStore, useUserStore } from "@/store";
import type { DropdownOption } from "tdesign-vue-next";
import { useRoute, useRouter } from "vue-router";
import CollapseButton from "@/components/CollapseButton.vue";

const userStore = useUserStore();
const appStore = useAppStore();
const router = useRouter();
const route = useRoute();
const clickHandler = async ({ value }: DropdownOption) => {
  switch (value) {
    case "logout":
      await appStore.logout();
      await router.push({
        name: "login",
        params: { redirect: route.fullPath },
      });
      break;
  }
};

const switchLang = (event: { value: string }) => {
  useLocaleStore().switchLocale(event.value);
};
</script>

<style lang="less" scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 16px;
}
</style>
