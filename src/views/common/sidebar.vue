<template>
  <t-aside :width="appStore.menuCollapse ? '64px' : '232px'">
    <t-menu :collapsed="appStore.menuCollapse">
      <t-menu-item value="0">
        <template #icon>
          <icon name="dashboard" />
        </template>
        仪表盘
      </t-menu-item>
    </t-menu>
  </t-aside>
</template>

<script lang="ts" setup>
import { Icon } from "tdesign-vue-next";
import { useAppStore } from "@/store";

const appStore = useAppStore();
</script>

<style scoped></style>
