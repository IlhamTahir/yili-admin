<template>
  <error-page
    title="403无权访问"
    description="您当前无权访问该页面，若有疑问请跟网站管理员联系"
  >
    <template #image>
      <img src="@/assets/images/not-allowed.png" />
    </template>
  </error-page>
</template>

<script lang="ts" setup>
import ErrorPage from "@/components/ErrorPage.vue";
</script>

<style scoped></style>
