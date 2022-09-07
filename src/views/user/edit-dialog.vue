<template>
  <t-dialog :visible="visible" @close="$emit('close')"></t-dialog>
</template>

<script lang="ts" setup>
import { computed } from "vue";

const props = defineProps({
  show: {
    type: Boolean,
    required: true,
  },
  data: {
    type: Object,
    value: null,
  },
});

defineEmits(["close"]);

const visible = computed(() => props.show);
</script>

<style scoped></style>
