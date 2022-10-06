<template>
  <error-page title="404无法找到该页面" description="抱歉您访问的页面不存在">
    <template #image>
      <img src="@/assets/images/not-found.png" />
    </template>
  </error-page>
</template>

<style scoped></style>
<script lang="ts" setup>
import ErrorPage from "@/components/ErrorPage.vue";
</script>
