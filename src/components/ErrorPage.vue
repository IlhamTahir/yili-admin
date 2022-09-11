<template>
  <div class="main">
    <div class="content">
      <slot name="image"><img src="@/assets/images/not-found.png" /></slot>

      <div class="info">
        <div class="title">{{ title }}</div>
        <div class="description">{{ description }}</div>
        <t-button @click="$router.replace({ path: '/' })">返回首页</t-button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
interface Props {
  title: string;
  description: string;
}

withDefaults(defineProps<Props>(), {
  title: "未知错误",
  description: "暂时无法找到错误原因",
});
</script>

<style lang="less">
.main {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .content {
    display: flex;
    align-items: center;
    height: 320px;

    img {
      height: 90%;
    }

    .info {
      margin-left: 40px;

      .title {
        font-size: 40px;
        font-weight: bold;
        margin-bottom: 20px;
      }

      .description {
        font-size: 19px;
        color: #525151;
        margin-bottom: 50px;
      }
    }
  }
}
</style>
