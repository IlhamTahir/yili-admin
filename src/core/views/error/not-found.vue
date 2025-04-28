<template>
  <error-page
    :title="$t('errorPage.notFound.title')"
    :description="$t('errorPage.notFound.description')"
  >
    <template #image>
      <img src="@/core/assets/images/not-found.png" />
    </template>
  </error-page>
</template>

<style scoped></style>
<script lang="ts" setup>
import ErrorPage from "@/core/components/ErrorPage.vue";
</script>
