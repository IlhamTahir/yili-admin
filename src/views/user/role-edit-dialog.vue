<template>
  <t-dialog
    ref="dialog"
    width="900px"
    :visible="visible"
    :header="
      role.id
        ? $t('role.management.dialog.editTitle')
        : $t('role.management.dialog.createTitle')
    "
    @close="$emit('close')"
    @confirm="handleConfirm"
  >
    <t-form ref="form" class="dialog-form" :data="role" :rules="rules">
      <t-form-item :label="$t('role.management.dialog.name.label')" name="name">
        <t-input v-if="role.id" disabled :value="role.name"></t-input>
        <t-input
          v-if="!role.id"
          :placeholder="$t('role.management.dialog.name.placeholder')"
          v-model="role.name"
        />
      </t-form-item>
      <t-form-item
        :label="$t('role.management.dialog.label.label')"
        name="label"
      >
        <t-input
          :placeholder="$t('role.management.dialog.label.placeholder')"
          v-model="role.label"
        />
      </t-form-item>
      <t-form-item
        :label="$t('role.management.dialog.permissions.label')"
        name="permissions"
      >
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
import { useI18n } from "@/composables/useI18n";

const { t } = useI18n();
interface Props {
  show: boolean;
  data: RoleType | null;
}

const props = withDefaults(defineProps<Props>(), {
  show: false,
});

const rules = computed(() => {
  return {
    name: [
      {
        required: true,
        message: t("role.management.dialog.name.required"),
        trigger: "blur",
      },
    ],
  };
});

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
