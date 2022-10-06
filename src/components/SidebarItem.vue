<template>
  <t-menu-item
    v-if="item && !item.children"
    :value="item.name"
    :to="{ name: item.name }"
  >
    <template #icon>
      <icon :name="item.meta.icon" />
    </template>
    {{ item.meta.title }}
  </t-menu-item>
  <t-submenu
    v-if="item && item.children"
    :value="item.name"
    :title="item.meta.title"
  >
    <template #icon>
      <icon :name="item.meta.icon" />
    </template>
    <sidebar-item
      v-for="subItem in item.children"
      :key="subItem.name"
      :item="subItem"
    ></sidebar-item>
  </t-submenu>
</template>

<script lang="ts" setup>
import { Icon } from "tdesign-vue-next";

defineProps({
  item: {
    type: Object,
    default: null,
  },
});
</script>

<style scoped></style>
