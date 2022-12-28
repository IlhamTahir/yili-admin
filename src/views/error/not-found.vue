<template>
  <error-page
    :title="$t('errorPage.notFound.title')"
    :description="$t('errorPage.notFound.description')"
  >
    <template #image>
      <img src="@/assets/images/not-found.png" />
    </template>
  </error-page>
</template>

<style scoped></style>
<script lang="ts" setup>
import ErrorPage from "@/components/ErrorPage.vue";
</script>
