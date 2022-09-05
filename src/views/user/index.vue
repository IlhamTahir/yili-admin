<template>
  <div>
    用户管理
    <t-button v-permission="PermissionEnum.USER_LIST_CREATE">创建用户</t-button>
  </div>
</template>

<script lang="ts" setup>
import { PermissionEnum } from "@/config/permission.config";
</script>

<style scoped></style>
