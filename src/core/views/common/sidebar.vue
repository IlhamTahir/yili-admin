<template>
  <t-aside :width="appStore.menuCollapse ? '64px' : '232px'">
    <t-menu :collapsed="appStore.menuCollapse" :defaultValue="$route.name">
      <sidebar-item
        v-for="item in permissionStore.menuRoutes"
        :key="item.name"
        :item="item"
      ></sidebar-item>
    </t-menu>
  </t-aside>
</template>

<script lang="ts" setup>
import { useAppStore } from "@/core/store";
import SidebarItem from "@/core/components/SidebarItem.vue";
import { usePermissionStore } from "@/core/store/permission";

const appStore = useAppStore();
const permissionStore = usePermissionStore();
</script>

<style scoped></style>
