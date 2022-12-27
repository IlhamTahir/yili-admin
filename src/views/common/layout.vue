<template>
  <div>
    <t-layout class="main-layout">
      <sidebar></sidebar>
      <t-layout>
        <global-header></global-header>
        <t-content class="content-layout">
          <router-view></router-view>
        </t-content>
        <t-footer style="text-align: center"
          >Copyright @ 2021-2022 YiliAdmin.</t-footer
        >
      </t-layout>
    </t-layout>
  </div>
</template>

<script lang="ts" setup>
import GlobalHeader from "./header.vue";
import Sidebar from "@/views/common/sidebar.vue";
</script>

<style lang="less" scoped>
.main-layout {
  min-height: 100vh;

  .content-layout {
    padding: 24px;
  }
}
</style>
