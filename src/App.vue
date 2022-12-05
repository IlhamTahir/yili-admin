<template>
  <t-config-provider :global-config="globalConfig">
    <router-view></router-view>
  </t-config-provider>
</template>

<script lang="ts" setup>
import merge from "lodash/merge";
import enConfig from "tdesign-vue-next/es/locale/zh_CN";

const globalConfig = merge(enConfig, {});
</script>
