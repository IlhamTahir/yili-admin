<template>
  <t-dialog
    ref="dialog"
    width="900px"
    :visible="visible"
    :header="user.id ? '编辑用户' : '创建用户'"
    @close="$emit('close')"
    @confirm="handleConfirm"
  >
    <t-form ref="form" class="dialog-form" :data="user" :rules="rules">
      <t-form-item label="用户名称" name="username">
        <t-input placeholder="请输入用户名称" v-model="user.username" />
      </t-form-item>
      <t-form-item label="用户昵称" name="nickname">
        <t-input placeholder="请输入用户昵称" v-model="user.nickname" />
      </t-form-item>
      <t-form-item label="角色" name="roles">
        <t-select v-model="user.roles" :options="options" clearable multiple>
        </t-select>
      </t-form-item>
    </t-form>
  </t-dialog>
</template>

<script lang="ts" setup>
import { computed, ref, watch } from "vue";
import type { UserType } from "@/api/types";
import type { Ref } from "vue";

interface Props {
  show: boolean;
  data: UserType | null;
}

const props = withDefaults(defineProps<Props>(), {
  show: false,
});

const rules = {
  username: [{ required: true, message: "用户名称不能为空", trigger: "blur" }],
  nickname: [{ required: true, message: "用户昵称不能为空", trigger: "blur" }],
};

const options = computed(() => {
  return [
    { label: "管理员", value: "ROLE_ADMIN" },
    { label: "普通用户", value: "ROLE_USER" },
  ];
});

const defaultData: UserType = {
  id: "",
  username: "",
  nickname: "",
  roles: [],
  permissions: [],
};

const user: Ref<UserType> = ref(props.data || defaultData);

watch(props, (newValue) => {
  user.value = newValue.data || defaultData;
});

const emit = defineEmits(["close", "confirm"]);

const visible = computed(() => props.show);

// todo
const form = ref(null);

const handleConfirm = () => {
  emit("confirm", user.value);
};
</script>

<style scoped></style>
