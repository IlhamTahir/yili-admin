<template>
  <div
    class="collapse-button"
    :class="{ collapse: !collapse }"
    @click="$emit('update:collapse', !collapse)"
  ></div>
</template>

<script lang="ts" setup>
defineProps({
  collapse: {
    type: Boolean,
    required: true,
  },
});

defineEmits(["update:collapse"]);
</script>

<style lang="less" scoped>
@collapse-button-color: #686870;
.collapse-button {
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: 0.5s;
  position: relative;

  &:before {
    position: absolute;
    width: 70%;
    height: 2px;
    background-color: @collapse-button-color;
    content: "";
    transform: translateY(-7px);
    transition: 0.5s;
  }

  &:after {
    position: absolute;
    width: 70%;
    height: 2px;
    box-shadow: 0 -7px 0 @collapse-button-color;
    background-color: @collapse-button-color;
    content: "";
    transform: translateY(7px);
    transition: 0.5s;
  }

  &.collapse {
    &:before {
      transform: translateY(0px) rotate(45deg);
    }

    &:after {
      transform: translateY(0px) rotate(-45deg);
      box-shadow: 0 0 0 @collapse-button-color;
    }
  }
}
</style>
