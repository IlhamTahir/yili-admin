<template>
  <error-page
    :title="$t('errorPage.notAllowed.title')"
    :description="$t('errorPage.notAllowed.description')"
  >
    <template #image>
      <img src="@/core/assets/images/not-allowed.png" />
    </template>
  </error-page>
</template>

<script lang="ts" setup>
import ErrorPage from "@/core/components/ErrorPage.vue";
</script>

<style scoped></style>
