<template>
  <t-dialog
    ref="dialog"
    width="900px"
    :visible="visible"
    :header="role.id ? '编辑角色' : '创建角色'"
    @close="$emit('close')"
    @confirm="handleConfirm"
  >
    <t-form ref="form" class="dialog-form" :data="role" :rules="rules">
      <t-form-item label="角色名称" name="name">
        <t-input v-if="role.id" disabled :value="role.name"></t-input>
        <t-input
          v-if="!role.id"
          placeholder="请输入角色名称"
          v-model="role.name"
        />
      </t-form-item>
      <t-form-item label="角色标识" name="label">
        <t-input placeholder="请输入用户标识" v-model="role.label" />
      </t-form-item>
      <t-form-item label="权限集" name="permissions">
        <t-tree
          :data="permissionsTree"
          hover
          expand-all
          :checkable="true"
          value-mode="all"
          v-model="role.permissions"
        />
      </t-form-item>
    </t-form>
  </t-dialog>
</template>

<script lang="ts" setup>
import { computed, ref, watch } from "vue";
import type { RoleType } from "@/api/types";
import type { Ref } from "vue";
import { permissionsTree } from "@/config/permission.config";

interface Props {
  show: boolean;
  data: RoleType | null;
}

const props = withDefaults(defineProps<Props>(), {
  show: false,
});

const rules = {
  name: [{ required: true, message: "角色名称不能为空", trigger: "blur" }],
};

const defaultData: RoleType = {
  id: "",
  name: "",
  label: "",
  permissions: [],
};

const role: Ref<RoleType> = ref(props.data || defaultData);

watch(props, (newValue) => {
  role.value = newValue.data || defaultData;
});

const emit = defineEmits(["close", "confirm"]);

const visible = computed(() => props.show);

// todo
const form = ref(null);

const handleConfirm = () => {
  emit("confirm", role.value);
};
</script>

<style scoped></style>
