<template>
  <t-card
    class="info-card"
    size="medium"
    :style="`--info-card-primary-color: ${info.color}`"
    :bordered="false"
  >
    <template #header>
      <div class="header">
        {{ $t(info.title) }}
      </div>
    </template>
    <div class="info">
      <div class="number">
        {{ info.number.toLocaleString()
        }}<span class="unit">{{ $t(info.unit) }}</span>
      </div>
      <icon class="icon" :name="info.icon"></icon>
    </div>
  </t-card>
</template>

<script lang="ts" setup>
import { Icon } from "tdesign-vue-next";

interface Props {
  info: Info;
}

type Info = {
  icon: string;
  title: string;
  color: string;
  number: number;
  unit: string;
};

defineProps<Props>();
</script>

<style lang="less" scoped>
.info-card {
  cursor: pointer;
  transition: 0.3s;

  .header {
    font-size: 16px;
    font-weight: bold;
  }

  .info {
    display: flex;
    justify-content: space-between;
    justify-items: baseline;

    .icon {
      font-size: 45px;
      color: var(--info-card-primary-color);
      transition: 0.3s;
    }

    .number {
      font-size: 40px;

      .unit {
        font-size: 16px;
        margin-left: 8px;
      }
    }
  }

  &:hover {
    background-color: var(--info-card-primary-color);
    color: #fff;

    .icon {
      color: #fff;
      transform: scale(1.3);
    }
  }
}
</style>
